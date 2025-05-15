// src/services/emailService.ts
import emailjs from "@emailjs/browser";

// These IDs should match what you see in your EmailJS dashboard
const SERVICE_ID  = "service_mvj0hz8";
const TEMPLATE_ID = "template_qk7uk6s";
// We're reading your public key from Vite’s env
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_KEY as string;

/**
 * Sends the contact form via EmailJS.
 * @param form - the HTMLFormElement containing name, email, message, etc.
 * @returns a Promise that resolves when the email is sent
 */
export function sendContactForm(form: HTMLFormElement) {
  return emailjs.sendForm(
    SERVICE_ID,
    TEMPLATE_ID,
    form,
    PUBLIC_KEY
  );
}
