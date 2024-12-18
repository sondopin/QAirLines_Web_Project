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
    bar_chart: "/bar-chart",
    add_airplane: "/add-airplane",
  },
  user: {
    booking: "/booking",
    mybooking: "/mybooking",
    cancel_booking: "/cancel-booking",
    userProfile: "/user-profile",
  },
} as const;
