// Product and service groups. Each card can later take an image.
// To show a photo:
// 1. Put the file in src/assets/images/products or src/assets/images/cctv
// 2. Import it at the top of this file
// 3. Set image to that import and write a real alt sentence

export const productSections = [
  {
    id: "cctv",
    eyebrow: "Security",
    title: "CCTV & Security",
    intro:
      "Cameras, recorders and accessories, plus installation, repair and a full CCTV setup. Ask which option fits the place you want to cover.",
    tone: "soft",
    items: [
      {
        id: "cctv-cameras",
        icon: "camera",
        title: "CCTV Cameras",
        description:
          "Indoor and outdoor cameras for homes, shops and offices. Ask which type suits the area you want to see.",
        image: null,
        alt: "CCTV camera product photo",
      },
      {
        id: "dvr-nvr",
        icon: "camera",
        title: "DVR / NVR",
        description:
          "Recorders that store footage from your cameras. We can help match a recorder to the cameras you choose.",
        image: null,
        alt: "DVR or NVR recorder photo",
      },
      {
        id: "hd-cameras",
        icon: "camera",
        title: "HD Cameras",
        description:
          "HD cameras for a clearer picture. Ask what is in stock and what cable or recorder they need.",
        image: null,
        alt: "HD CCTV camera photo",
      },
      {
        id: "ip-cameras",
        icon: "camera",
        title: "IP Cameras",
        description:
          "Network cameras for a setup that runs over your internet connection. Ask us about a suitable recorder.",
        image: null,
        alt: "IP camera photo",
      },
      {
        id: "wifi-cameras",
        icon: "camera",
        title: "Wi-Fi Cameras",
        description:
          "Cameras that connect over Wi-Fi. Useful when you want fewer cables. Ask about range and power.",
        image: null,
        alt: "Wi-Fi camera photo",
      },
      {
        id: "cctv-accessories",
        icon: "box",
        title: "CCTV Accessories",
        description:
          "Cables, power supplies, connectors, boxes and other parts used with a CCTV system.",
        image: null,
        alt: "CCTV accessories photo",
      },
      {
        id: "cctv-installation",
        icon: "wrench",
        title: "CCTV Installation",
        description:
          "Fitting cameras and recorders at a home, shop, office or other premises.",
        image: null,
        alt: "CCTV installation photo",
      },
      {
        id: "cctv-repair",
        icon: "tools",
        title: "CCTV Repair & Maintenance",
        description:
          "Repair and upkeep for cameras, recorders and other parts of an existing CCTV system.",
        image: null,
        alt: "CCTV repair work photo",
      },
      {
        id: "complete-setup",
        icon: "camera",
        title: "Complete CCTV Setup",
        description:
          "Cameras, recorder, storage and fitting planned together as one CCTV setup.",
        image: null,
        alt: "Complete CCTV setup photo",
      },
    ],
  },
  {
    id: "computers",
    eyebrow: "Computers",
    title: "Computers & Laptops",
    intro:
      "New and refurbished machines are marked on the card. Ask what is in stock before you visit or order.",
    tone: "white",
    items: [
      {
        id: "new-laptops",
        icon: "laptop",
        title: "New Laptops",
        badge: "New",
        description:
          "New laptops for home, study and work. Tell us the screen size and the kind of work you do.",
        image: null,
        alt: "New laptop photo",
      },
      {
        id: "refurbished-laptops",
        icon: "laptop",
        title: "Refurbished Laptops",
        badge: "Refurbished",
        description:
          "Refurbished laptops. These are not sold as new. Ask about the condition before you buy.",
        image: null,
        alt: "Refurbished laptop photo",
      },
      {
        id: "desktops",
        icon: "desktop",
        title: "Desktops",
        description:
          "Desktop computers for shop counters, offices and home use. Ask if you need the full set.",
        image: null,
        alt: "Desktop computer photo",
      },
      {
        id: "cpus",
        icon: "desktop",
        title: "CPUs",
        description:
          "CPU towers if you already have a screen, keyboard and mouse, or want to buy those separately.",
        image: null,
        alt: "Computer CPU tower photo",
      },
      {
        id: "computer-accessories",
        icon: "box",
        title: "Computer Accessories",
        description:
          "Keyboards, mice, screens, cables, storage and other computer accessories. Ask what is available.",
        image: null,
        alt: "Computer accessories photo",
      },
      {
        id: "upgrades-repairs",
        icon: "wrench",
        title: "Upgrades & Repairs",
        description:
          "Upgrades and repairs for laptops and desktops. Tell us the problem or the part you want changed.",
        image: null,
        alt: "Computer repair photo",
      },
    ],
  },
  {
    id: "printers",
    eyebrow: "Printing",
    title: "Printers",
    intro:
      "New printers and refurbished printers are labeled differently. Repair and accessories are listed on their own.",
    tone: "soft",
    items: [
      {
        id: "new-printers",
        icon: "printer",
        title: "New Printers",
        badge: "New",
        description:
          "New printers for home, shop and office use. Ask about ink, toner and the paper size you need.",
        image: null,
        alt: "New printer photo",
      },
      {
        id: "refurbished-printers",
        icon: "printer",
        title: "Refurbished Printers",
        badge: "Refurbished",
        description:
          "Refurbished printers, sold separately from new stock. Ask about the condition and what is included.",
        image: null,
        alt: "Refurbished printer photo",
      },
      {
        id: "printer-accessories",
        icon: "box",
        title: "Printer Accessories",
        description:
          "Ink, toner, drums, cables and other printer accessories. Bring the printer model if you have it.",
        image: null,
        alt: "Printer accessories photo",
      },
      {
        id: "printer-repair",
        icon: "tools",
        title: "Printer Repair & Maintenance",
        description:
          "Repair and maintenance for printers. Describe the fault, such as paper jam, print quality or power.",
        image: null,
        alt: "Printer repair photo",
      },
    ],
  },
  {
    id: "wholesale",
    eyebrow: "Bulk supply",
    title: "Wholesale",
    intro:
      "For shop owners, dealers and anyone buying more than one piece. Tell us the product and the quantity.",
    tone: "dark",
    items: [
      {
        id: "cctv-wholesale",
        icon: "camera",
        title: "CCTV Wholesale",
        description:
          "Cameras, recorders and CCTV accessories in quantity. Share the models and the number of pieces.",
        image: null,
        alt: "CCTV wholesale stock photo",
      },
      {
        id: "computer-wholesale",
        icon: "laptop",
        title: "Laptop / Computer Wholesale",
        description:
          "Laptops, desktops and computer stock for resale or a larger office order.",
        image: null,
        alt: "Laptop and computer wholesale photo",
      },
      {
        id: "printer-wholesale",
        icon: "printer",
        title: "Printer Wholesale",
        description:
          "Printers and printer supplies in bulk. Ask which models can be supplied together.",
        image: null,
        alt: "Printer wholesale photo",
      },
      {
        id: "bulk-orders",
        icon: "box",
        title: "Bulk Orders",
        description:
          "A mixed or large order across CCTV, computers and printers. Send the list and we will respond.",
        image: null,
        alt: "Bulk order photo",
      },
      {
        id: "dealer-enquiries",
        icon: "box",
        title: "Dealer / Reseller Enquiries",
        description:
          "For dealers and resellers who want to stock CCTV, computers or printers. Tell us about your shop.",
        image: null,
        alt: "Dealer enquiry photo",
      },
    ],
  },
];

export const requirementOptions = [
  "CCTV",
  "Laptop",
  "Desktop",
  "Printer",
  "Wholesale",
  "Installation",
  "Repair",
  "Other",
];
