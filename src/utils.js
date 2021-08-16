const min = 1;
const max = 123;

const random = () => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const createImageNode = (baseURL) => {
  const source = `${baseURL}/${random()}.jpg`;

  const container = document.createElement("div");
  container.className = "p-4";

  const image = document.createElement("img");
  image.classList = "mx-auto";
  image.width = 100;
  image.alt = "Imagen de un zorro";
  image.src = "/_dist_/images/loader.gif";
  image.dataset.src = source;

  container.appendChild(image);

  return container;
};
