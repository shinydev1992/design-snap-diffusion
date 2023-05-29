import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import prisma from "../../lib/prismadb";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export default async function handler(req: NextApiRequest,
  res: NextApiResponse<any>)
  {
    let priceID = '';
    const session = await getServerSession(req, res, authOptions);
    if (!session || !session.user) {
      return res.status(500).json("Login to upload.");
    }
  
    // Get user from DB
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email!,
      },
      select: {
        credits: true,
        _count: {
          select: {
            purchases: true,
          },
        },
      },
    });

    switch (req.body.type) {
      case '1':
        priceID = 'price_1ND7UWJGPdLJRKnTf2FHNxL0';
        break;
      case '2':
        priceID = 'price_1ND7UWJGPdLJRKnTrZ0TtUlO';
        break;
      case '3':
        priceID = 'price_1ND7UWJGPdLJRKnTfUeLTDtL';
        break;
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: 'https://localhost:3000/dream',
      line_items: [
        { price: priceID, quantity: 1 },
      ],
      mode: 'subscription',
    });

    if (!checkoutSession.url) {
      return res.status(400).send('');
    } else {
      return res.status(200).json({data:checkoutSession.url})
    }
  }