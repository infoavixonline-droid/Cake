import { WHATSAPP_NUMBER, formatCurrency } from "./config";
import { CartItem } from "../types";

/**
 * Generates a WhatsApp order link for a single cake.
 */
export function getSingleCakeWhatsAppLink(
  name: string,
  weight: string,
  quantity: number,
  price: number
): string {
  const total = price * quantity;
  const message = `Hi! I'd love to order this cake 🎂

- ${name} (${weight}) x${quantity} - ${formatCurrency(price)}

Total: ${formatCurrency(total)}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a WhatsApp order link for all items in the cart.
 */
export function getCartWhatsAppLink(items: CartItem[], grandTotal: number): string {
  let message = `Hi! I'd love to place this order 🎉\n\n`;
  
  items.forEach((item) => {
    const itemSubtotal = item.price * item.quantity;
    message += `- ${item.name} (${item.weightOption}) x${item.quantity} - ${formatCurrency(itemSubtotal)}\n`;
  });
  
  message += `\nTotal: ${formatCurrency(grandTotal)}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
