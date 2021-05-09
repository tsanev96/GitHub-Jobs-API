export const toggleThemes = (theme: "dark" | "light") => {
  const body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
  } else if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
  } else {
    body.classList.add(theme);
  }
};
