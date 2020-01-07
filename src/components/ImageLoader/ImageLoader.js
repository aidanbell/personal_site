const drinksImages = [{
    id: 1,
    src: '/images/lets-grab-drinks/1.png',
    title: 'lets-grab-drinks',
    description: '1'
  },
  {
    id: 2,
    src: '/images/lets-grab-drinks/2.png',
    title: 'lets-grab-drinks',
    description: '2'
  },
  {
    id: 3,
    src: '/images/lets-grab-drinks/3.png',
    title: 'lets-grab-drinks',
    description: '3'
  },
  {
    id: 4,
    src: '/images/lets-grab-drinks/4.png',
    title: 'lets-grab-drinks',
    description: '4'
  },
  {
    id: 5,
    src: '/images/lets-grab-drinks/5.png',
    title: 'lets-grab-drinks',
    description: '5'
  }
];

const cageImages = [{
    id: 1,
    src: '/images/the-cage-page/1.png',
    title: 'the-cage-page',
    description: '1'
  },
  {
    id: 2,
    src: '/images/the-cage-page/2.png',
    title: 'the-cage-page',
    description: '2'
  },
  {
    id: 3,
    src: '/images/the-cage-page/3.png',
    title: 'the-cage-page',
    description: '3'
  },
];

const tattooImages = [{
    id: 1,
    src: '/images/tattoo-shop/1.png',
    title: 'tattoo-shop',
    description: 'Landing Page'
  },
  {
    id: 2,
    src: '/images/tattoo-shop/2.png',
    title: 'tattoo-shop',
    description: 'Artist Page'
  },
  {
    id: 3,
    src: '/images/tattoo-shop/3.png',
    title: 'tattoo-shop',
    description: 'Home Page - Artist'
  },
  {
    id: 4,
    src: '/images/tattoo-shop/4.png',
    title: 'tattoo-shop',
    description: 'Appointment Page - Artist'
  },
  {
    id: 5,
    src: '/images/tattoo-shop/5.png',
    title: 'tattoo-shop',
    description: 'Home Page - Customer'
  },
  {
    id: 6,
    src: '/images/tattoo-shop/5.png',
    title: 'tattoo-shop',
    description: 'Appointment Page - Customer'
  }
];

function ImageLoader() {
  return [drinksImages, cageImages, tattooImages];
}

export default ImageLoader;