// Escapes text before it's interpolated into an HTML email body, so a
// submitted name/message can't inject markup or scripts into the notification.
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Neutralizes spreadsheet formula injection (CSV/Excel injection): a value
// starting with =, +, -, @, or a tab/CR can be interpreted as a formula by
// Google Sheets or Excel. Prefixing with an apostrophe forces plain text.
export function sanitizeForSheets(value: string): string {
  if (/^[=+\-@\t\r]/.test(value)) {
    return `'${value}`;
  }
  return value;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value);
}

// Loose phone check: 7-15 digits, optionally with +, spaces, or dashes.
const PHONE_PATTERN = /^\+?[\d\s-]{7,15}$/;

export function isValidPhone(value: string): boolean {
  return PHONE_PATTERN.test(value);
}

// Caps field length so a scripted flood can't stuff huge payloads into the
// sheet or blow up the notification email.
export function capLength(value: string, max: number): string {
  return value.slice(0, max);
}
