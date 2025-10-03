document.addEventListener("keydown", function (e) {
  if (e.key >= "0" && e.key <= "9") {
    switch (e.key) {
      case "0":
        window.location.href = "/";
        break;

      case "1":
        window.location.href = "/projects";
        break;

      case "2":
        window.location.href = "/blog";
        break;

      case "3":
        window.location.href = "/resume/NIVED_S_MOHAN_RESUME.pdf";
        break;
    }
  }
});
