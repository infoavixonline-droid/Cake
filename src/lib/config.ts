export const WHATSAPP_NUMBER = "94771234567";

export function formatCurrency(amount: number): string {
  return "Rs. " + amount.toLocaleString("en-US");
}
