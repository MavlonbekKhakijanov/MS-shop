import { getData } from "./request.js";
const API = "https://dummyjson.com/products/?limit=194";
const productList = document.querySelector("#product-list");
const mostPopular = document.querySelector("#most-popular");
const saleTemp = document.querySelector("#sale-popular");
const discountList = document.querySelector("#discount-list");

const upDateUi = (data) => {
  // productList.innerHTML = "";

  data
    .sort((a, b) => {
      return b.rating - a.rating;
    })
    .slice(0, 4)
    .forEach((product) => {
      const mostPopularTemplate = mostPopular.content.cloneNode(true);
      const productTitle = mostPopularTemplate.querySelector(".product-title");
      const productImg = mostPopularTemplate.querySelector(".product-img");
      const myLink = mostPopularTemplate.querySelector(".my-link");
      const sale = mostPopularTemplate.querySelector(".skidka");
      const reyting = mostPopularTemplate.querySelector(".reyting");
      const oldPrice = mostPopularTemplate.querySelector(".old-price");
      const link = mostPopularTemplate.querySelector("#link");
      const price = mostPopularTemplate.querySelector(".price");
      const productDescription = mostPopularTemplate.querySelector(
        ".product-description"
      );

      oldPrice.textContent = `${product.price}$`;

      sale.textContent = `${Math.floor(product.discountPercentage)}%`;

      price.textContent = `${(
        product.price -
        (product.price * product.discountPercentage) / 100
      ).toFixed(2)}$`;
      productTitle.textContent = product.title;
      productDescription.textContent = product.category;

      productImg.src = product.thumbnail;
      productList.appendChild(mostPopularTemplate);
      link.href = `/pages/about.html?productID=${product.id}`;
    });

  data
    .sort((a, b) => {
      return b.discountPercentage - a.discountPercentage;
    })
    .slice(0, 4)
    .forEach((product) => {
      const mostPopularTemplate = mostPopular.content.cloneNode(true);
      const productTitle = mostPopularTemplate.querySelector(".product-title");
      const productImg = mostPopularTemplate.querySelector(".product-img");
      const myLink = mostPopularTemplate.querySelector(".my-link");
      const sale = mostPopularTemplate.querySelector(".skidka");
      const reyting = mostPopularTemplate.querySelector(".reyting");
      const oldPrice = mostPopularTemplate.querySelector(".old-price");
      const link = mostPopularTemplate.querySelector("#link");
      const price = mostPopularTemplate.querySelector(".price");
      const productDescription = mostPopularTemplate.querySelector(
        ".product-description"
      );

      oldPrice.textContent = `${product.price}$`;

      sale.textContent = `${Math.floor(product.discountPercentage)}%`;

      price.textContent = `${(
        product.price -
        (product.price * product.discountPercentage) / 100
      ).toFixed(2)}$`;
      productTitle.textContent = product.title;
      productDescription.textContent = product.category;

      productImg.src = product.thumbnail;
      discountList.appendChild(mostPopularTemplate);
      link.href = `/pages/about.html?productID=${product.id}`;
    });
};
getData(API).then((data) => {
  upDateUi(data.products);
});
