/**
 * Sanitization and validation for user input (e.g. book-demo form).
 */

/** Escape HTML so user content is safe in email HTML (prevents XSS in email client). */
export function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Simple email format check (RFC 5322 simplified). */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim()) && value.length <= 254;
}

export const LIMITS = {
  name: 200,
  email: 254,
  phone: 50,
  company: 200,
  message: 5000,
} as const;

export function trimToLimit(value: string | undefined, max: number): string {
  if (value == null) return '';
  return String(value).trim().slice(0, max);
}
