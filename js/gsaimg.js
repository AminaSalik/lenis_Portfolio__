import { preloadImages } from './utils.js';
import { Grid } from './grid.js';

// Initialize the grid
new Grid(document.querySelector('.grid--large'));

// Preload images then remove loader (loading class) from body
preloadImages('.grid__cell-img-inner, .slide-nav__img').then(() => document.body.classList.remove('loading'));