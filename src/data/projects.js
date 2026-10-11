// Gallery content. Empty image fields show a labeled frame until you add a photo.
//
// To use your own photo:
// 1. Save it under src/assets/images/projects or src/assets/images/cctv
// 2. Import it here, for example:
//    import shopPhoto from "../assets/images/projects/shop-1.jpg";
// 3. Set image: shopPhoto and rewrite alt with what the photo actually shows.
//
// To use your own video, see the comment on projectVideos below.

import sampleShopInstall from "../assets/images/projects/sample-shop-install.svg";

export const installationGroups = [
  {
    id: "shop",
    title: "Shop installations",
    intro: "CCTV fitted in shops. Replace the sample graphic with a photo from your own work.",
    items: [
      {
        id: "shop-1",
        title: "Shop CCTV setup",
        category: "Shop",
        image: sampleShopInstall,
        alt: "Sample illustration of a shop CCTV camera. Replace this with a real installation photo.",
        kind: "camera",
      },
      {
        id: "shop-2",
        title: "Shop camera position",
        category: "Shop",
        image: null,
        alt: "Photo of a CCTV camera installed in a shop",
        kind: "camera",
      },
    ],
  },
  {
    id: "office",
    title: "Office installations",
    intro: "CCTV fitted in offices. Add photos when you have them.",
    items: [
      {
        id: "office-1",
        title: "Office entrance cameras",
        category: "Office",
        image: null,
        alt: "Photo of CCTV cameras at an office entrance",
        kind: "camera",
      },
      {
        id: "office-2",
        title: "Office recorder setup",
        category: "Office",
        image: null,
        alt: "Photo of a CCTV recorder installed in an office",
        kind: "desktop",
      },
    ],
  },
  {
    id: "home",
    title: "Home installations",
    intro: "CCTV fitted at homes. Add photos when you have them.",
    items: [
      {
        id: "home-1",
        title: "Home outdoor camera",
        category: "Home",
        image: null,
        alt: "Photo of an outdoor CCTV camera at a home",
        kind: "camera",
      },
      {
        id: "home-2",
        title: "Home indoor camera",
        category: "Home",
        image: null,
        alt: "Photo of an indoor CCTV camera at a home",
        kind: "camera",
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial installations",
    intro: "CCTV for larger or commercial premises. Add photos when you have them.",
    items: [
      {
        id: "commercial-1",
        title: "Commercial premises",
        category: "Commercial",
        image: null,
        alt: "Photo of a commercial CCTV installation",
        kind: "camera",
      },
      {
        id: "commercial-2",
        title: "Multi-camera setup",
        category: "Commercial",
        image: null,
        alt: "Photo of several CCTV cameras at a commercial site",
        kind: "camera",
      },
    ],
  },
];

// To show a real project video:
// 1. Put the mp4 in src/assets/videos
// 2. Import it: import shopVideo from "../assets/videos/shop-install.mp4";
// 3. Set src: shopVideo
export const projectVideos = [
  {
    id: "video-shop",
    title: "Shop installation video",
    src: "",
    note: "Add an mp4 in src/assets/videos, then set src in this file.",
  },
  {
    id: "video-office",
    title: "Office installation video",
    src: "",
    note: "Add an mp4 in src/assets/videos, then set src in this file.",
  },
  {
    id: "video-home",
    title: "Home installation video",
    src: "",
    note: "Add an mp4 in src/assets/videos, then set src in this file.",
  },
];

// before and after can be image imports, the same way as gallery photos.
export const beforeAfterProjects = [
  {
    id: "before-after-1",
    title: "Sample installation comparison",
    note: "Add a before photo and an after photo when you have a finished job to show.",
    before: null,
    beforeAlt: "Photo of the site before CCTV installation",
    after: null,
    afterAlt: "Photo of the site after CCTV installation",
  },
  {
    id: "before-after-2",
    title: "Another before and after",
    note: "Use this second frame for a different job.",
    before: null,
    beforeAlt: "Second photo of a site before CCTV installation",
    after: null,
    afterAlt: "Second photo of a site after CCTV installation",
  },
];
