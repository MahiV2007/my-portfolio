export const GA_MEASUREMENT_ID = "G-YHPYXPCRS4"; // Replace with your actual ID

export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
