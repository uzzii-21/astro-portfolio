const createLogo = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export { createLogo };
