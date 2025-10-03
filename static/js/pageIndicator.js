document.addEventListener("DOMContentLoaded", function () {
  const pageList = [
    { selector: 'a[href="/"]', match: (path) => path === "/" },
    {
      selector: 'a[href*="projects"]',
      match: (path) => path.startsWith("/projects"),
    },
    {
      selector: 'a[href*="blog"]',
      match: (path) => path.startsWith("/blog"),
    },
    {
      selector: 'a[href*="resume"]',
      match: (path) => path.includes("/resume/"),
    },
  ];

  const currentPath = window.location.pathname;

  pageList.forEach((item) => {
    if (item.match(currentPath)) {
      const page = document.querySelector(item.selector);
      if (page) {
        if (!page.textContent.endsWith("*")) {
          const lastChild = page.childNodes[page.childNodes.length - 1];

          if (lastChild.nodeType === Node.TEXT_NODE) {
            lastChild.textContent = lastChild.textContent + "*";
          } else {
            page.appendChild(document.createTextNode("*"));
          }
        }
      }
    }
  });
});
