import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import { responsiveNabar } from './navbar.js';

responsiveNabar();


import './restourant-list.js'
const restourantList = document.createElement('ourResto-list');
document.getElementById('restouran').appendChild(restourantList);

import { restaurantData } from './api.js';

restaurantData();
