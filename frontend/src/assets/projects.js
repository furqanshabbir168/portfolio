import Quickone from '../assets/quick-1.png'
import Quicktwo from '../assets/quick-2.png'
import Quickthree from '../assets/quick-3.png'
import Quickfour from '../assets/quick-4.png'
import Quickfive from '../assets/quick-5.png'
import Quicksix from '../assets/quick-6.png'
import Quickseven from '../assets/quick-7.png'
import Quickeight from '../assets/quick-8.png'

import Cravezone from '../assets/cravez-1.png';
import Craveztwo from '../assets/cravez-2.png'
import Cravezthree from '../assets/cravez-3.png'
import Cravezfour from '../assets/cravez-4.png'
import Cravezfive from '../assets/cravez-5.png'
import Cravezsix from '../assets/cravez-6.png'
import Cravezseven from '../assets/cravez-7.png'
import Cravezeight from '../assets/cravez-8.png'

import Zoneone from '../assets/flyzone-1.png'
import Zonetwo from '../assets/flyzone-2.png'
import Zonethree from '../assets/flyzone-3.png'
import Zonefour from '../assets/flyzone-4.png'
import Zonefive from '../assets/flyzone-5.png'
import Zonesix from '../assets/flyzone-6.png'
import Zoneseven from '../assets/flyzone-7.png'
import Zoneeight from '../assets/flyzone-8.png'

const projects = [
    // cravez
    {
    name: "Cravez – Online Food Ordering & Table Reservation Platform",
    thumbnail: Cravezone,
    images: [
      Craveztwo,
      Cravezthree,
      Cravezfour,
      Cravezfive,
      Cravezsix,
      Cravezseven,
      Cravezeight
    ],
    description: [
  "Cravez is a next-generation food ordering and table reservation platform designed to provide a seamless dining experience for users and restaurant managers alike.",
  "The platform allows users to browse dishes, place online orders, and book tables in real-time — all with secure JWT-based authentication and smooth user flows.",
  "Background jobs like email verification and order confirmations are handled using Inngest, ensuring reliable communication and automation without delays.",
  "With a stunning, modern UI built using Tailwind CSS and smooth Framer Motion animations, Cravez delivers a responsive, mobile-first experience that feels intuitive and polished across all devices.",
],
    liveLink: "https://cravez.vercel.app",
    github : "https://github.com/furqanshabbir168/Craverz"
  },
  // flyzone
  {
    name: "FlyZone – Flight Booking Platform",
    thumbnail: Zoneone,
    images: [
      Zonetwo,
      Zonethree,
      Zonefour,
      Zonefive,
      Zonesix,
      Zoneseven,
      Zoneeight,
    ],
    description: [
  "FlyZone is a full-featured flight booking web application built to simulate real-world airline functionality with precision, interactivity, and modern user experience.",
  "It enables users to search, filter, and book flights based on preferred travel dates, times, and seat availability — all in real time with seamless seat selection and instant updates.",
  "With secure authentication powered by Clerk and payments handled via Stripe, users enjoy a smooth and trustworthy booking experience. Inngest manages background workflows like email notifications, booking confirmations, and seat release logic after timeouts.",
  "Admins have complete control via a powerful dashboard to manage flights, monitor user bookings, and track system activity. The app’s clean UI, responsive layout, and robust backend make it a scalable solution that mirrors the core functions of real airline platforms.",
],
    liveLink: "https://flyzone.vercel.app",
    github : "https://github.com/furqanshabbir168/FlyZone"
  },
  // quick bite
  {
    name: "Quick Bite – Food Ordering Platform",
    thumbnail: Quickone,
    images: [
      Quicktwo,
      Quickthree,
      Quickfour,
      Quickfive,
      Quicksix,
      Quickseven,
      Quickeight,
    ],
    description: [
      "Quick Bite is a feature-rich food ordering platform built to offer a seamless experience for both users and admins. It allows users to explore categorized food items, apply filters, view detailed descriptions, and manage their cart with ease.",
      "The checkout process is powered by secure Stripe integration, and user authentication is handled via JWT tokens — ensuring secure access to personal orders and cart data.",
      "Admins get a powerful dashboard where they can add or delete food items, monitor all orders, and update order statuses such as processing, shipped, or delivered in real-time.",
      "Built with scalability and performance in mind, Quick Bite combines a clean interface with a responsive layout, making it perfect for restaurants and food brands looking to build a strong digital presence."
    ],
    liveLink: "https://link-unavailable.vercel.app",
    github : "https://github.com/furqanshabbir168/QUICK-BITE"
  }
];
export default projects;
