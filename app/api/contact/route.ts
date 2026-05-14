import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_INQUIRY_TYPES = [
  'SME Financing',
  'Asset Financing',
  'Digital Lending',
  'Treasury Services',
  'General Inquiry',
];

// Trim and strip control characters from a string field
function sanitise(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value
    .trim()
    // eslint-disable-next-line no-control-regex
    .replace(/[\x00-\x1F\x7F]/g, '')
    .slice(0, maxLength);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const firstName   = sanitise(body.firstName,   100);
    const lastName    = sanitise(body.lastName,    100);
    const email       = sanitise(body.email,       254); // RFC 5321 max
    const phone       = sanitise(body.phone,        30);
    const inquiryType = sanitise(body.inquiryType, 100);
    const message     = sanitise(body.message,    2000);

    // Required field validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Phone: digits, spaces, +, -, () only
    if (phone && !/^[\d\s\+\-\(\)]{7,20}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    // Inquiry type must be one of the allowed values
    const resolvedInquiryType = ALLOWED_INQUIRY_TYPES.includes(inquiryType)
      ? inquiryType
      : 'General Inquiry';

    // Log the submission (replace with email/DB logic as needed)
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      inquiryType: resolvedInquiryType,
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
