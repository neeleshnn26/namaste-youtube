const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);//Cumulative Layout Shift (CLS): Measures visual stability. Your pages should maintain a CLS of less than 0.1.
      getFID(onPerfEntry);//First Input Delay (FID): Measures interactivity. It should be less than 100 milliseconds.
      getFCP(onPerfEntry);
      getLCP(onPerfEntry); //Largest Contentful Paint (LCP): Measures loading performance. Ideally, it should occur within 2.5 seconds of when the page starts loading.
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
