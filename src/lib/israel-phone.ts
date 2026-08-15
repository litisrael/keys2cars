/**
 * Formatos válidos de celular en Israel:
 * 0501234567, 050-1234567, 052-7654321, +972501234567, +972-50-1234567, 972501234567
 */
export function isValidIsraeliMobile(phone: string): boolean {
  if (!phone) return false;
  const clean = phone.replace(/[\s\-\(\)\.]/g, '');
  return /^((\+972|972|0)?5[0-9]{8})$/.test(clean);
}

export function formatIsraeliPhone(phone: string): string {
  const clean = phone.replace(/[\s\-\(\)\.]/g, '');
  if (/^05[0-9]{8}$/.test(clean)) {
    return `${clean.slice(0, 3)}-${clean.slice(3)}`;
  }
  return phone;
}

export function formatToWhatsappNumber(phone: string): string {
  const clean = phone.replace(/\D/g, '');
  if (clean.startsWith('05')) {
    return `972${clean.substring(1)}`;
  }
  if (clean.startsWith('9725')) {
    return clean;
  }
  return clean;
}
