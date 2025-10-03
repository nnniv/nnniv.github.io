// Fade-in on load, fade-out on internal navigations
const PAGE_TRANSITION_MS = 300;

function getRoot() {
  return document.getElementById("app-root");
}

function fadeIn() {
  const root = getRoot();
  if (!root) return;
  // Next frame to ensure transition runs
  requestAnimationFrame(() => root.classList.remove("blur-md"));
}

function fadeOutThenNavigate(url) {
  const root = getRoot();
  if (!root) {
    window.location.href = url;
    return;
  }
  root.classList.add("blur-md");
  setTimeout(() => {
    window.location.href = url;
  }, PAGE_TRANSITION_MS);
}

// Expose for other scripts (e.g. keyboard navigation)
window.navigateWithFade = fadeOutThenNavigate;

document.addEventListener("DOMContentLoaded", fadeIn);
// Support back/forward cache restoring
window.addEventListener("pageshow", (e) => {
  if (e.persisted) fadeIn();
});

// Intercept internal link clicks
document.addEventListener("click", (e) => {
  const anchor = e.target.closest("a");
  if (!anchor) return;

  // Ignore new tabs, downloads, hash links, or external origins
  if (
    e.defaultPrevented ||
    anchor.target === "_blank" ||
    anchor.hasAttribute("download") ||
    (anchor.getAttribute("href") || "").startsWith("#")
  ) {
    return;
  }

  const href = anchor.href;
  const sameOrigin =
    new URL(href, window.location.href).origin === window.location.origin;
  if (!sameOrigin) return;

  e.preventDefault();
  fadeOutThenNavigate(href);
});
