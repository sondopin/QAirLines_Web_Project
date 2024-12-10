export const PATH = {
  home: "/",
  login: "/login",
  register: "/register",
  search: "/search",
  blog_details: "/blog-details/:id",
  admin: {
    manage: "/manage",
    view_flight: "/view-flight",
    upload_news: "/manage-news",
    view_news: "/view-news",
    add_flight: "/add-flight",
  },
  user: {
    booking: "/booking",
    mybooking: "/mybooking",
    cancel_booking: "/cancel-booking",
  },
} as const;
