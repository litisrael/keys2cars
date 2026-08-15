import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { isValidIsraeliMobile, formatIsraeliPhone, formatToWhatsappNumber } from '@/lib/israel-phone';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const DESTINATION_EMAIL = process.env.CONTACT_DESTINATION_EMAIL || 'isreollit@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Keys2Cars Leads <onboarding@resend.dev>';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      brand,
      model,
      service,
      description,
      city,
      lang = 'he',
      source = 'direct',
      campaign = 'organic',
      pageUrl = '',
    } = body;

    // 1. Validación de campos obligatorios
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'El nombre es obligatorio / Name is required' },
        { status: 400 }
      );
    }

    // 2. Validación estricta del formato de teléfono israelí (05X-XXXXXXX o +9725XXXXXXXX)
    if (!phone || !isValidIsraeliMobile(phone)) {
      return NextResponse.json(
        { error: 'Número de teléfono de Israel no válido (ej: 05X-XXXXXXX)' },
        { status: 400 }
      );
    }

    const formattedPhone = formatIsraeliPhone(phone);
    const whatsappNum = formatToWhatsappNumber(phone);
    const dateFormatted = new Date().toLocaleString('es-ES', { timeZone: 'Asia/Jerusalem' });

    const vehicleInfo = [brand, model].filter(Boolean).join(' ') || 'No especificado / General';
    const clientProblem = description && description.trim() ? description.trim() : 'Sin descripción adicional';

    // 3. Plantilla HTML estilizada para el correo
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
          .header { background: linear-gradient(135deg, #0f172a 0%, #0369a1 100%); color: #ffffff; padding: 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
          .header p { margin: 6px 0 0 0; font-size: 13px; color: #bae6fd; }
          .content { padding: 24px; }
          .badge { display: inline-block; background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 11px; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px; margin-bottom: 16px; }
          .field-group { margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
          .field-group:last-child { border-bottom: none; }
          .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px; }
          .field-value { font-size: 16px; font-weight: 600; color: #0f172a; }
          .field-value.highlight { color: #0284c7; }
          .description-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; font-size: 14px; line-height: 1.5; color: #334155; margin-top: 6px; }
          .actions { margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; }
          .button { display: inline-block; padding: 12px 24px; background: #10b981; color: #ffffff !important; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 14px; margin: 0 6px 8px 6px; }
          .button.call { background: #ef4444; }
          .footer { background: #f8fafc; padding: 16px 24px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚗 Keys2Cars - Nueva Solicitud de Presupuesto</h1>
            <p>Recibido el ${dateFormatted} (Hora de Israel)</p>
          </div>

          <div class="content">
            <span class="badge">Lead Web / Google Ads</span>

            <div class="field-group">
              <div class="field-label">Nombre del Cliente</div>
              <div class="field-value">${name}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Teléfono (Israel)</div>
              <div class="field-value highlight" dir="ltr">${formattedPhone}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Vehículo (Marca / Modelo)</div>
              <div class="field-value">${vehicleInfo}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Servicio Solicitado</div>
              <div class="field-value">${service || 'Cerrajería Automotriz General'}</div>
            </div>

            ${city ? `
            <div class="field-group">
              <div class="field-label">Ciudad / Ubicación</div>
              <div class="field-value">${city}</div>
            </div>` : ''}

            <div class="field-group">
              <div class="field-label">Descripción del Problema / Consulta</div>
              <div class="description-box">${clientProblem}</div>
            </div>

            <div class="actions">
              <a href="tel:${formattedPhone}" class="button call">📞 Llamar al Cliente</a>
              <a href="https://wa.me/${whatsappNum}?text=Hola%20${encodeURIComponent(name)}%2C%20te%20escribo%20de%20Keys2Cars%20Israel%20respecto%20a%20tu%20consulta%20de%20cerrajer%C3%ADa." class="button">💬 Abrir WhatsApp</a>
            </div>
          </div>

          <div class="footer">
            Idioma de navegación: <strong>${lang.toUpperCase()}</strong> | Origen: <strong>${source}</strong> | Campaña: <strong>${campaign}</strong><br>
            Página de origen: ${pageUrl || 'https://keys2cars.com'}
          </div>
        </div>
      </body>
      </html>
    `;

    // 4. Envío de correo mediante Resend
    if (resend) {
      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [DESTINATION_EMAIL],
        replyTo: `${name} <${DESTINATION_EMAIL}>`,
        subject: `🔑 [Keys2Cars Lead] ${name} - ${vehicleInfo} (${formattedPhone})`,
        html: emailHtml,
      });

      if (error) {
        console.error('Error enviando con Resend:', error);
        return NextResponse.json(
          { error: 'Error al enviar el correo a través de Resend' },
          { status: 500 }
        );
      }

      console.log('Correo enviado exitosamente a', DESTINATION_EMAIL, 'ID:', data?.id);
    } else {
      // Modo desarrollo / fallback cuando aún no se configura la API KEY
      console.warn('⚠️ RESEND_API_KEY no configurada. Mostrando solicitud en consola:');
      console.log({
        to: DESTINATION_EMAIL,
        name,
        phone: formattedPhone,
        vehicleInfo,
        service,
        description: clientProblem,
        city,
        timestamp: dateFormatted,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Presupuesto recibido correctamente. Te contactaremos a la brevedad.',
    });
  } catch (err) {
    console.error('Error inesperado en /api/lead:', err);
    return NextResponse.json(
      { error: 'Ocurrió un error inesperado al procesar la solicitud' },
      { status: 500 }
    );
  }
}
