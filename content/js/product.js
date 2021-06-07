// #region products array of data
const productsArr = [
  {
    id: 01,
    name: "sivacon",
    description:
      "Following features are offered to improve personal and machine safety",
    img: "../content/img/products/IMG_8463-1024x531.jpg",
  },
  {
    id: 02,
    name: "DCS Local SwitchBoard",
    description:
      "In our field, we can add our expert in local switchboard, Transformers MDBs, Pillars and cofrees for low voltage side as electrical holding company specs",
    img: "../content/img/products/IMG_8478-1024x683.jpg",
  },
  {
    id: 03,
    name: "AIR RMU",
    description:
      "Compact AIR- RMU is complete manufacturing according to EEA requirements, up to 24KV, 25KA",
    img: "../content/img/products/IMG_8481-1024x683.jpg",
  },
  {
    id: 04,
    name: "Kiosk Station",
    description:
      "A prefabricated kiosk which consist of Medium Voltage RMU, Oil type Transformer up to 2MVA and Low Voltage distribution. Design follow IEC61330. Easy and fast to connect, outdoor type",
    img: "../content/img/products/IMG_8506-1-1024x683.jpg",
  },
  {
    id: 05,
    name: "sivacon",
    description:
      "Following features are offered to improve personal and machine safety",
    img: "../content/img/products/IMG_8463-1024x531.jpg",
  },
  {
    id: 06,
    name: "DCS Local SwitchBoard",
    description:
      "In our field, we can add our expert in local switchboard, Transformers MDBs, Pillars and cofrees for low voltage side as electrical holding company specs",
    img: "../content/img/products/IMG_8478-1024x683.jpg",
  },
  {
    id: 07,
    name: "AIR RMU",
    description:
      "Compact AIR- RMU is complete manufacturing according to EEA requirements, up to 24KV, 25KA",
    img: "../content/img/products/IMG_8481-1024x683.jpg",
  },
  {
    id: 08,
    name: "Kiosk Station",
    description:
      "A prefabricated kiosk which consist of Medium Voltage RMU, Oil type Transformer up to 2MVA and Low Voltage distribution. Design follow IEC61330. Easy and fast to connect, outdoor type",
    img: "../content/img/products/IMG_8506-1-1024x683.jpg",
  },
  {
    id: 09,
    name: "sivacon",
    description:
      "Following features are offered to improve personal and machine safety",
    img: "../content/img/products/IMG_8463-1024x531.jpg",
  },
  {
    id: 10,
    name: "DCS Local SwitchBoard",
    description:
      "In our field, we can add our expert in local switchboard, Transformers MDBs, Pillars and cofrees for low voltage side as electrical holding company specs",
    img: "../content/img/products/IMG_8478-1024x683.jpg",
  },
  {
    id: 11,
    name: "AIR RMU",
    description:
      "Compact AIR- RMU is complete manufacturing according to EEA requirements, up to 24KV, 25KA",
    img: "../content/img/products/IMG_8481-1024x683.jpg",
  },
  {
    id: 12,
    name: "Kiosk Station",
    description:
      "A prefabricated kiosk which consist of Medium Voltage RMU, Oil type Transformer up to 2MVA and Low Voltage distribution. Design follow IEC61330. Easy and fast to connect, outdoor type",
    img: "../content/img/products/IMG_8506-1-1024x683.jpg",
  },
];
// #endregion

// #region Variables
const products = document.getElementById("products");
let productsContainer = "";
let productShow = document.querySelector("#product");

// #endregion

// #region add products in products page
productsArr.forEach((product) => {
  productsContainer += `<div class="section--service__circle__item">
            <div class="section--service__circle__item__header">
              <h3>
                ${product.name}
              </h3>
              <p>${product.description}</p>
            </div>

            <a class="productLink section--service__circle__item__text" href="./product.html?id:${product.id}">
              <img src="${product.img}" alt="${product.name}" />
            </a>
          </div>`;
});
if (products) {
  products.innerHTML = productsContainer;
}

// #endregion

// #region get product data by id
document.addEventListener("DOMContentLoaded", function () {
  if (productShow) {
    productsArr.forEach((product) => {
      if (product.id == location.search.substring(4)) {
        productShow.innerHTML = `<div class="col-md-6">
          <div class="product-section__img">
              <img src="${product.img}" alt="${product.name}">
          </div>
      </div>
      <div class="col-md-6">
          <div class="product-section__content">
              <h2>${product.name}</h2>
              <p>${product.description}
                  <br>
                  
              </p>
              <button class="link-btn link-btn--rounded link-btn--width">
                  <a href="./contact.html" class="link-btn__text">order now</a>
              </button>
          </div>
      </div>`;
      }
    });
  }
});

// #endregion
