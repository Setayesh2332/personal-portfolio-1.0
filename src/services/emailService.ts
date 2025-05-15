import emailjs from "@emailjs/browser";
const SERVICE_ID  = "service_mvj0hz8";
const TEMPLATE_ID = "template_qk7uk6s";
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
