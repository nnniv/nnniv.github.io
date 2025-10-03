document.addEventListener("keydown", function (e) {
  if (e.key >= "0" && e.key <= "9") {
    const go = (url) =>
      typeof window.navigateWithFade === "function"
        ? window.navigateWithFade(url)
        : (window.location.href = url);

    switch (e.key) {
      case "0":
        go("/");
        break;

      case "1":
        go("/projects");
        break;

      case "2":
        go("/blog");
        break;

      case "3":
        go("/resume/NIVED_S_MOHAN_RESUME.pdf");
        break;
    }
  }
});
