import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(3).max(100),
  message: z.string().min(10).max(1000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // TODO: integrate email delivery (Resend, Nodemailer, etc.)
    // For now we acknowledge receipt.
    console.log("New contact message:", data);

    return NextResponse.json(
      { success: true, message: "Message received. I'll get back to you soon!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid form data.", errors: error.flatten() },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
