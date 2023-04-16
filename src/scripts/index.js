import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import { responsiveNabar } from './navbar.js';

responsiveNabar();

import { restaurantList } from './restourant-list.js';

const restaurantSection = document.getElementById("restouran");

const restaurantListElement = new restaurantList();
restaurantSection.appendChild(restaurantListElement);
