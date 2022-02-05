import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: 'home',
    title: 'Home',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/admin/progressbar',
    title: 'Progressbar',
    icon: 'mdi mdi-poll',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/admin/rating',
    title: 'Ratings',
    icon: 'mdi mdi-bandcamp',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/admin/list',
    title: 'Influenceurs',
    icon: 'mdi mdi-sort-variant',
    class: '',
    extralink: false,
    submenu: []
  },
];
