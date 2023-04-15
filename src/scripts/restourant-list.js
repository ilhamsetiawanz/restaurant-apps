import { restaurantData } from "./api";

export class RestaurantList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
      <div class="restoList">
        <div class="restoItem">
        </div>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback() {
    try {
      const restaurants = await restaurantData();
      const restoItem = this.shadowRoot.querySelector(".restoItem");

      restaurants.forEach((restaurants) => {
        const restoList = document.createElement("div");
        restoList.classList.add("resto");
        restoList.innerHTML = `
          <img src="${restaurants.pictureId}" alt="${restaurants.name}">
          <h2>${restaurants.name}</h2>
          <p>${restaurants.description}</p>
          <p>Rating: ${restaurants.rating}</p>
          <p>City: ${restaurants.city}</p>
        `;
        restoItem.appendChild(restoList);
      });
    } catch (error) {
      console.error(error);
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Failed to load restaurant data";
      this.shadowRoot.appendChild(errorMessage);
    }
  }
}
customElements.define("restaurant-list", RestaurantList);
