import { z } from "zod";

/**
 * Single source of truth for contact-form validation. Used by both the
 * client (react-hook-form + zodResolver) and the /api/contact route handler
 * so the rules can never drift.
 *
 * `contactInputSchema` is the wire shape the form submits. Optional fields
 * are typed as `string | undefined` so react-hook-form's `register()` and
 * `zodResolver` line up. The API route normalises empty strings away.
 */
export const contactInputSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters)")
    .max(120, "Name is too long"),
  email: z.string().trim().toLowerCase().email("Please enter a valid email address"),
  phone: z.string().trim().max(20, "Phone is too long").optional(),
  company: z.string().trim().max(120, "Company name is too long").optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a bit more (at least 10 characters)")
    .max(4000, "Message is too long (4000 character max)"),
  hcaptcha: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactInputSchema>;

// API-output schema strips empty optional strings down to undefined so they
// never reach the email template as "Phone: " (empty).
export const contactSchema = contactInputSchema.transform((v) => ({
  ...v,
  phone: v.phone?.trim() ? v.phone.trim() : undefined,
  company: v.company?.trim() ? v.company.trim() : undefined,
}));

export type ContactPayload = z.output<typeof contactSchema>;

/**
 * Normalise form-submitted values into the payload shape the email sender
 * expects. Used by /api/contact after validation succeeds.
 */
export function toContactPayload(values: ContactInput): ContactPayload {
  return {
    ...values,
    phone: values.phone?.trim() ? values.phone.trim() : undefined,
    company: values.company?.trim() ? values.company.trim() : undefined,
  };
}
