import { prisma } from "../../../lib/prisma";

export async function GET() {
  const allUsers = await prisma.user.findMany();
  return new Response(JSON.stringify(allUsers));
}
