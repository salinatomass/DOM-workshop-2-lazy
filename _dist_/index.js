import { registerImage, state } from "./lazy.js";
import { createImageNode } from "./utils.js";

const baseURL = "https://randomfox.ca/images";

const $imagesContainer = document.getElementById("images");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");

const addImage = () => {
  const newImage = createImageNode(baseURL);
  registerImage(newImage);

  $imagesContainer.appendChild(newImage);

  removeButton.addEventListener("click", deleteImage);
};

const deleteImage = () => {
  $imagesContainer.innerHTML = "";
  state.reset();
  removeButton.removeEventListener("click", deleteImage);
};

addButton.addEventListener("click", addImage);
