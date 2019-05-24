import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";

// Select DOM elements

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const drawerElement = document.querySelector('.mdc-drawer');
const mainContentEl = document.querySelector('main');

// Initialize top app bar

const topAppBar = new MDCTopAppBar(topAppBarElement);

// Initialize drawer

const initModalDrawer = () => {
  drawerElement.classList.add("mdc-drawer--modal");
  const drawer = MDCDrawer.attachTo(drawerElement);
  drawer.open = false;
  topAppBar.setScrollTarget(mainContentEl);
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });

  listEl.addEventListener('click', (event) => {
    drawer.open = false;
  });
}

initModalDrawer();