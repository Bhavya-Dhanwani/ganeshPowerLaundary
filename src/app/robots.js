export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/login"],
    },
    sitemap: "https://ganeshpowerlaundary.example/sitemap.xml",
  };
}
