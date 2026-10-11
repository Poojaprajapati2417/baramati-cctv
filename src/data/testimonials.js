// Replace every placeholder with a real customer when you have permission to publish it.
// Do not leave sample labels up if a real person has not said these words.
//
// Photos: import a file from src/assets/images/customers and set photo or image.
// Videos: import an mp4 from src/assets/videos and set src.

export const testimonials = [
  {
    id: "customer-1",
    name: "Customer name",
    business: "Business or home",
    location: "Area",
    rating: null,
    quote: "A short comment from this customer will be added here.",
    photo: null,
    photoAlt: "Photo of the customer",
    projectPhoto: null,
    projectAlt: "Photo of the customer's CCTV, computer or printer project",
  },
  {
    id: "customer-2",
    name: "Customer name",
    business: "Business or home",
    location: "Area",
    rating: null,
    quote: "A short comment from this customer will be added here.",
    photo: null,
    photoAlt: "Photo of the customer",
    projectPhoto: null,
    projectAlt: "Photo of the customer's project",
  },
  {
    id: "customer-3",
    name: "Customer name",
    business: "Business or home",
    location: "Area",
    rating: null,
    quote: "A short comment from this customer will be added here.",
    photo: null,
    photoAlt: "Photo of the customer",
    projectPhoto: null,
    projectAlt: "Photo of the customer's project",
  },
];

export const customerPhotos = [
  {
    id: "photo-1",
    label: "Customer photo",
    image: null,
    alt: "Photo of a customer",
    kind: "user",
  },
  {
    id: "photo-2",
    label: "Shop visit",
    image: null,
    alt: "Photo of a customer at the shop",
    kind: "user",
  },
  {
    id: "photo-3",
    label: "Finished CCTV job",
    image: null,
    alt: "Photo of a finished CCTV job for a customer",
    kind: "camera",
  },
  {
    id: "photo-4",
    label: "Computer handover",
    image: null,
    alt: "Photo of a laptop or computer handed to a customer",
    kind: "laptop",
  },
  {
    id: "photo-5",
    label: "Printer setup",
    image: null,
    alt: "Photo of a printer set up for a customer",
    kind: "printer",
  },
  {
    id: "photo-6",
    label: "Project photo",
    image: null,
    alt: "Photo of a customer project",
    kind: "camera",
  },
];

export const customerVideos = [
  {
    id: "customer-video-1",
    title: "Customer video",
    src: "",
    note: "Add a customer video mp4 in src/assets/videos, then set src here.",
  },
  {
    id: "customer-video-2",
    title: "Another customer video",
    src: "",
    note: "Add another mp4 only if the customer is happy for it to be shown.",
  },
];
