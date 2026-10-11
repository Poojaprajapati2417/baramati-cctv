import { business } from "../data/business";

// Default text used when a WhatsApp button does not pass its own message.
export const defaultWhatsAppMessage =
  "Hello, I would like to know more about your CCTV, computer, laptop and printer products.";

// Called by every WhatsApp button, including the navbar and the floating button.
export function handleWhatsAppClick(prefilledMessage = defaultWhatsAppMessage) {
  const whatsappPayload = {
    whatsappNumber: business.whatsapp,
    message: prefilledMessage,
  };

  // TODO: Implement WhatsApp redirect with a pre-filled message here.
  // The number lives in src/data/business.js as business.whatsapp.
  // It should be country code + number, digits only, for example 91XXXXXXXXXX.
  //
  // When you are ready, open WhatsApp with that number and whatsappPayload.message.
  // One common approach is a wa.me link. You add that code yourself in this function.
  // Do not hide it in another file.

  console.log(
    "WhatsApp placeholder. Add the redirect in handleWhatsAppClick.",
    whatsappPayload,
  );

  return whatsappPayload;
}

// Called by every Call Now button.
export function handleCallClick() {
  const callPayload = {
    phoneNumber: business.phone,
  };

  // TODO: Implement tel: call functionality here.
  // The number lives in src/data/business.js as business.phone.
  // When you are ready, start the call from this function.

  console.log("Call placeholder. Add the tel: link in handleCallClick.", callPayload);

  return callPayload;
}

// Called by the enquiry form after the fields have been checked.
// enquiry is a plain object: { name, phone, requirementType, message }
export function handleEnquirySubmit(enquiry) {
  // TODO: Implement WhatsApp redirect with a pre-filled message here.
  // Turn `enquiry` into text, then open WhatsApp with business.whatsapp.
  //
  // A clear message shape you can build yourself:
  // Name: enquiry.name
  // Phone: enquiry.phone
  // Requirement: enquiry.requirementType
  // Message: enquiry.message

  console.log(
    "Enquiry placeholder. Add the WhatsApp message in handleEnquirySubmit.",
    enquiry,
  );

  return enquiry;
}

// Called by the Get Directions button.
export function handleDirectionsClick() {
  // TODO: Open Google Maps directions when your shop address is ready.
  // You can also paste a map embed URL into business.mapEmbedUrl.

  console.log("Directions placeholder.", {
    address: business.address,
    mapEmbedUrl: business.mapEmbedUrl,
  });
}
