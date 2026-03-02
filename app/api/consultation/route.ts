import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

type LeadPayload = {
  propertyType: string;
  location: string;
  budgetRange: string;
  timeline: string;
  phone: string;
};

type StoredLead = LeadPayload & {
  createdAt: string;
};

const leadsDirectory = path.join(process.cwd(), "data");
const leadsFilePath = path.join(leadsDirectory, "consultation-leads.json");

function isValidPayload(payload: unknown): payload is LeadPayload {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  const candidate = payload as Record<string, unknown>;
  const phoneRegex = /^\+?[0-9]{10,14}$/;

  return (
    typeof candidate.propertyType === "string" &&
    typeof candidate.location === "string" &&
    candidate.location.trim().length > 0 &&
    typeof candidate.budgetRange === "string" &&
    typeof candidate.timeline === "string" &&
    typeof candidate.phone === "string" &&
    phoneRegex.test(candidate.phone.replace(/\s+/g, ""))
  );
}

async function readLeads(): Promise<StoredLead[]> {
  try {
    const content = await fs.readFile(leadsFilePath, "utf8");
    const parsed = JSON.parse(content) as StoredLead[];

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;

    if (!isValidPayload(body)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const nextLead: StoredLead = {
      ...body,
      createdAt: new Date().toISOString(),
    };

    const existingLeads = await readLeads();
    const updatedLeads = [nextLead, ...existingLeads].slice(0, 500);

    await fs.mkdir(leadsDirectory, { recursive: true });
    await fs.writeFile(leadsFilePath, JSON.stringify(updatedLeads, null, 2), "utf8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
