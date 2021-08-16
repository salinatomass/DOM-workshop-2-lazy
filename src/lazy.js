export const state = {
  allImages: 0,
  loadedImages: 0,
  reset: () => {
    state.allImages = 0;
    state.loadedImages = 0;
  },
};

const isIntersecting = (entry) => {
  return entry.isIntersecting; // true dentro de la pantalla
};

const action = (entry) => {
  const container = entry.target;
  const image = container.querySelector("img");

  image.src = image.dataset.src;
  image.onload = () => {
    image.width = 320;
    state.loadedImages += 1;
    logState();
  };

  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(action);
});

export const registerImage = (image) => {
  observer.observe(image);
  state.allImages += 1;
  logState();
};

const logState = () => {
  console.clear();
  console.log(`🟣 Total de imagenes: ${state.allImages}`);
  console.log(`⚪ Imágenes cargadas: ${state.loadedImages}`);
  console.log("------------------------");
};
