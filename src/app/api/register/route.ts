import { PrismaClient } from "@prisma/client";

type User = {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
};

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { phoneNumber, firstName, lastName, password } =
    (await req.json()) as User;

  console.log(phoneNumber, firstName, lastName, password);

  const user = await prisma.user.create({
    data: {
      phoneNumber: phoneNumber,
      firstName: firstName,
      lastName: lastName,
      password: password,
    },
  });
  return Response.json({ user });
}

export async function GET() {
  const users = await prisma.user.findMany();

  return Response.json({ users });
}
