import { restaurantData } from "./api.js";

export class restaurantList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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
          <img src="${restaurant.pictureId}" alt="${restaurant.name}">
          <h2>${restaurant.name}</h2>
          <p>${restaurant.description}</p>
          <p>Rating: ${restaurant.rating}</p>
          <p>City: ${restaurant.city}</p>
        `;
        restoItem.appendChild(restoList);
      });

      const restoList = document.createElement("div");
      restoList.classList.add("restoList");
      restoList.appendChild(restoItem);
      this.shadowRoot.appendChild(restoList);

    } catch (error) {
      console.error(error);
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Failed to load restaurant data";
      this.shadowRoot.appendChild(errorMessage);
    }
  }
}

customElements.define("restaurant-list", restaurantList);
