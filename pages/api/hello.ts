// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'prisma/index';
import { User } from '@prisma/client'      


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  const users: User[] = await prisma.user.findMany({});
  res.status(200).json(users);
}
