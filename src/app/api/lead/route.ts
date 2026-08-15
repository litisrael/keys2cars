import { NextResponse } from 'next/server';
import { isValidIsraeliMobile } from '@/lib/israel-phone';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, brand, model, service, city, lang, source, campaign } = body;

    // Validación estricta de teléfono en el servidor
    if (!phone || !isValidIsraeliMobile(phone)) {
      return NextResponse.json(
        { error: 'Invalid Israeli mobile phone format' },
        { status: 400 }
      );
    }

    // Aquí se puede enviar a Telegram, WhatsApp API, Resend Email o CRM
    console.log('--- NEW LEAD RECEIVED (KEYS2CARS) ---');
    console.log({
      name,
      phone,
      brand,
      model,
      service,
      city,
      lang,
      source,
      campaign,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
    });
  } catch (err) {
    console.error('Error processing lead:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
