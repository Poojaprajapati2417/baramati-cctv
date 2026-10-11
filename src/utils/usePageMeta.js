import { useEffect } from "react";

const FAVICON_HREF = "/favicon.jpeg";

// Chrome often reloads the tab icon when document.title is rewritten.
// Only change the title when it is actually different, then put the favicon back.
function keepFavicon() {
  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "icon");
    link.setAttribute("type", "image/jpeg");
    document.head.appendChild(link);
  }

  if (link.getAttribute("href") !== FAVICON_HREF) {
    link.setAttribute("type", "image/jpeg");
    link.setAttribute("href", FAVICON_HREF);
  }
}

export default function usePageMeta(title, description) {
  useEffect(() => {
    if (document.title !== title) {
      document.title = title;
      keepFavicon();
    }

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }

    if (tag.getAttribute("content") !== description) {
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
