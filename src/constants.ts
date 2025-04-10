import { Dribbble, Facebook, Instagram, Youtube } from "lucide-react";

export const navLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Shop", path: "/search" },
  {
    id: 3,
    title: "Pages",
    dropdown: [
      { id: 4, title: "About us", path: "/about-us" },
      { id: 5, title: "Contact us", path: "/contact-us" },
      { id: 6, title: "Blog", path: "/blog" },
      { id: 7, title: "Privacy Policy", path: "/privacy-policy" },
    ],
  },
  { id: 4, title: "About", path: "/about-us" },
];

export const heroReviews = [
  {
    id: 1,
    title: "Fashion-forward pieces that blend comfort and style effortlessly. Every detail feels thoughtfully designed.",
    author: "Larry Lawson"
  },
  {
    id: 2,
    title: "A seamless shopping experience with high-quality clothing that fits beautifully and lasts for seasons.",
    author: "Frances Guerrero"
  },
  {
    id: 3,
    title: "Timeless yet trendy designs that elevate any wardrobe. Each piece is crafted with precision and care.",
    author: "Samuel Bishop"
  },
  {
    id: 4,
    title: "Innovative and stylish clothing that stands out. The quality and attention to detail are unmatched.",
    author: "Jessica Turner"
  },
  {
    id: 5,
    title: "Exceptional craftsmanship and unique designs. These pieces are a perfect blend of modern and classic.",
    author: "Michael Anderson"
  },
]

export const collections = [
  {
    id: 1,
    title: "All",
    path: "/search",
  },
  {
    id: 2,
    title: "Men",
    path: "/search/men",
  },
  {
    id: 3,
    title: "Women",
    path: "/search/women",
  },
  {
    id: 4,
    title: "Pants",
    path: "/search/pants",
  },
  {
    id: 5,
    title: "Tops",
    path: "/search/tops",
  },
  {
    id: 6,
    title: "Dresses",
    path: "/search/dresses",
  },
];

export const insta = [
  { id: 1, href: "/insta/insta-image-1.jpg" },
  { id: 2, href: null },
  { id: 3, href: "/insta/insta-image-2.jpg" },
  { id: 4, href: "/insta/insta-image-3.jpg" },
  { id: 5, href: null },
  { id: 6, href: "/insta/insta-image-4.jpg" },
  { id: 7, href: null },
  { id: 8, href: "/insta/insta-image-5.jpg" },
  { id: 9, href: null },
  { id: 10, href: null },
  { id: 11, href: "/insta/insta-image-6.jpg" },
  { id: 12, href: null },
  { id: 13, href: "/insta/insta-image-7.jpg" },
  { id: 14, href: null },
  { id: 15, href: null },
  { id: 16, href: "/insta/insta-image-8.jpg" },
  { id: 17, href: null },
  { id: 18, href: "/insta/insta-image-9.jpg" },
];

export const footerLinks = [
  {
    id: 1,
    title: "Pages",
    links: [
      {
        id: 1,
        title: "Home",
        path: "/"
      },
      {
        id: 2,
        title: "Shop",
        path: "/search"
      },
      {
        id: 3,
        title: "About us",
        path: "/about-us"
      },
      {
        id: 4,
        title: "Blog",
        path: "/blog"
      },
      {
        id: 5,
        title: "FAQS",
        path: "/faq"
      },
      {
        id: 6,
        title: "Contact us",
        path: "/contact-us"
      }
    ]
  },
  {
    id: 2,
    title: "Utility",
    links: [
      {
        id: 1,
        title: "Privacy Policy",
        path: "/"
      },
      {
        id: 2,
        title: "Style guide",
        path: "/"
      },
      {
        id: 3,
        title: "Instructions",
        path: "/"
      },
      {
        id: 4,
        title: "Error 404",
        path: "/"
      },
      {
        id: 5,
        title: "FAQS",
        path: "/"
      },
      {
        id: 6,
        title: "Contact us",
        path: "/"
      }
    ]
  }
];

export const socialMedia = [
  {
    id: 1,
    icon: Facebook,
    href: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: Instagram,
    href: "https://www.instagram.com",
  },
  {
    id: 3,
    icon: Dribbble,
    href: "https://www.dribbble.com",
  },
  {
    id: 4,
    icon: Youtube,
    href: "https://www.youtube.com",
  },
]