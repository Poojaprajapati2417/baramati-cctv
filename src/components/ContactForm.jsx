import { useState } from "react";
import { requirementOptions } from "../data/products";
import { handleEnquirySubmit } from "../utils/contactActions";
import CTAButton from "./CTAButton";
import { IconWhatsApp } from "./Icons";

const fieldClass =
  "w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-red-dark focus:ring-2 focus:ring-brand-red/20";

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-brand-black">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-brand-red-dark">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirementType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [prepared, setPrepared] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (form.phone.replace(/\D/g, "").length < 6) {
      nextErrors.phone = "Please enter your phone number.";
    }
    if (!form.requirementType) nextErrors.requirementType = "Please choose a requirement.";
    if (!form.message.trim()) nextErrors.message = "Please tell us what you need.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setPrepared(null);
      return;
    }

    const enquiry = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      requirementType: form.requirementType,
      message: form.message.trim(),
    };

    // This hands the object to the placeholder. The WhatsApp TODO is in that function.
    const ready = handleEnquirySubmit(enquiry);
    setPrepared(ready);
  }

  return (
    <form id="enquiry" onSubmit={handleSubmit} noValidate className="scroll-mt-28 rounded-2xl border border-brand-line bg-white p-5 shadow-sm sm:p-7">
      <h2 className="text-2xl font-bold text-brand-black">Send an enquiry</h2>
      <p className="mt-2 text-brand-muted">
        Fill this in and the site will prepare your details. WhatsApp sending is left for you to add.
      </p>

      <div className="mt-6 grid gap-4">
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
          />
        </Field>

        <Field id="phone" label="Phone number" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass}
          />
        </Field>

        <Field id="requirementType" label="Requirement type" error={errors.requirementType}>
          <select
            id="requirementType"
            name="requirementType"
            value={form.requirementType}
            onChange={handleChange}
            aria-invalid={Boolean(errors.requirementType)}
            aria-describedby={errors.requirementType ? "requirementType-error" : undefined}
            className={fieldClass}
          >
            <option value="">Select a requirement</option>
            {requirementOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="message" label="Message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={fieldClass}
          />
        </Field>
      </div>

      <CTAButton type="submit" className="mt-6 w-full sm:w-auto">
        <IconWhatsApp className="h-5 w-5" />
        Send Enquiry on WhatsApp
      </CTAButton>

      {prepared ? (
        <div className="mt-5 rounded-xl bg-brand-soft p-4" role="status">
          <p className="font-bold text-brand-black">Enquiry data is ready</p>
          <p className="mt-1 text-sm text-brand-muted">
            WhatsApp is not connected yet. Use this object inside handleEnquirySubmit in
            src/utils/contactActions.js.
          </p>
          <dl className="mt-3 grid gap-2 text-sm">
            <div className="grid grid-cols-[7rem_1fr] gap-2">
              <dt className="font-semibold">Name</dt>
              <dd className="break-words">{prepared.name}</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-2">
              <dt className="font-semibold">Phone</dt>
              <dd className="break-words">{prepared.phone}</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-2">
              <dt className="font-semibold">Requirement</dt>
              <dd>{prepared.requirementType}</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-2">
              <dt className="font-semibold">Message</dt>
              <dd className="break-words">{prepared.message}</dd>
            </div>
          </dl>
        </div>
      ) : null}
    </form>
  );
}
