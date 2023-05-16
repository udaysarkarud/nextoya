import { prisma } from "../../../lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
      },
    });
    return new Response("Ok");
  } catch (error) {
    console.log("failure");
  }
}
