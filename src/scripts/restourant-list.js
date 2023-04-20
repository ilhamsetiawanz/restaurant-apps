import { restaurantData } from "./api.js";

export class restaurantList extends HTMLElement {
  constructor() {
    super();
    this.appendChild(document.createElement('article'));
  }

  async connectedCallback() {
    try {
      const restaurants = await restaurantData();
      const restoItem = document.createElement("div");
      restoItem.classList.add("restoItem");

      restaurants.forEach((restaurant) => {
        const restoList = document.createElement("div");
        restoList.classList.add("resto");
        restoList.innerHTML = `
          <img class="img-resto" src="${restaurant.pictureId}" alt="${restaurant.name}">
          <div class="resto-container">
            <h2>${restaurant.name}</h2>
            <p class="resto-desc">${restaurant.description}</p>
            <p class="resto-info">Rating: ${restaurant.rating}</p>
            <p class="resto-info">Kota: ${restaurant.city}</p>
          </div>
        `;
        restoItem.appendChild(restoList);
      });

      const restoList = document.createElement("div");
      restoList.classList.add("restoList");
      restoList.appendChild(restoItem);
      this.appendChild(restoList);

    } catch (error) {
      console.error(error);
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Failed to load restaurant data";
      this.appendChild(errorMessage);
    }
  }
}

customElements.define("restaurant-list", restaurantList);
