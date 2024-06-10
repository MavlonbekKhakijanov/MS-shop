import { getData } from "./request.js";
const API = "https://dummyjson.com/products";
const aboutTemp = document.querySelector("#about-template");
const infoList = document.querySelector("#info-list");

const queryString = window.location.search;
const query = new URLSearchParams(queryString);
const id = query.get("productID");

const upDateUi = (product) => {
  console.log(product);
  const infoClon = aboutTemp.content.cloneNode(true);
  console.log(infoClon);
  const infoTitle = infoClon.querySelector("#info-title");
  const oldPrice = infoClon.querySelector(".old-price");
  const sale = infoClon.querySelector(".sale");
  const price = infoClon.querySelector(".price");
  const aboutImg = infoClon.querySelectorAll(".about-img");
  const smallImg = infoClon.querySelectorAll(".small-img");
  let counter = 0;
  const images = product.images;
  console.log(images);

  aboutImg.forEach((item) => {
    item.src = product.images[counter];
    counter++;
  });
  infoTitle.textContent = product.title;

  oldPrice.textContent = `${product.price}$`;
  sale.textContent = `${Math.floor(product.discountPercentage)}%`;
  price.textContent = `${(
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2)}$`;

  smallImg.forEach((item, i) => {
    item.src = images[i];

    item.addEventListener("click", () => {
      smallImg.forEach((item) => {
        item.parentElement.classList.remove("border-primary");
      });
      item.parentElement.classList.add("border-primary");
      aboutImg.forEach((img) => {
        img.src = item.src;
      });
    });
  });
  infoList.appendChild(infoClon);
};

getData(API + `/${id}`).then((data) => {
  upDateUi(data);
});
