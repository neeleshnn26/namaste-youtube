# (React.StrictMode)

<React.StrictMode> is a wrapper component in React that helps you identify potential problems in your application. It doesn't render any visible UI but activates additional checks and warnings for its child components during development.

Here's what it does:

- Identifies Unsafe Lifecycles: It helps catch unsafe lifecycle methods like componentWillMount, componentWillUpdate, and componentWillReceiveProps.

- Warnings for Legacy API Usage: It gives warnings if you're using outdated React APIs.

- Detects Side Effects: It runs certain functions (like useEffect) twice to help detect unexpected side effects.

- Checks for Deprecated Methods: It warns you about deprecated methods that might be removed in future versions of React.

- Strict Mode in Development Only: Note that <React.StrictMode> only affects development mode and doesn't impact the production build of your app.

So, using <React.StrictMode> is a good practice while developing a React application to ensure code quality and future-proofing your code.

# reportWebVitals

 reportWebVitals is a function used in React applications to measure and report the performance of your app by tracking key web vitals. Web vitals are metrics that measure various aspects of the user experience, such as loading time, interactivity, and visual stability.

What are Web Vitals?
Web vitals are a set of metrics that provide insights into the real-world user experience of your web application. The most important ones are:

- Largest Contentful Paint (LCP): Measures loading performance. Ideally, it should occur within 2.5 seconds of when the page starts loading.

- First Input Delay (FID): Measures interactivity. It should be less than 100 milliseconds.

- Cumulative Layout Shift (CLS): Measures visual stability. Your pages should maintain a CLS of less than 0.1.

These metrics help developers understand and optimize the performance of their web applications, which can directly impact user satisfaction and search engine rankings.

- Why Use reportWebVitals?
  - Performance Monitoring: It allows you to keep track of your app's performance over time.
  - User Experience: By understanding these metrics, you can make data-driven decisions to improve the user experience.
  - SEO: Search engines like Google use some of these metrics (like LCP and CLS) as ranking factors, so improving them can also benefit your site's SEO.


# Debouncing

- 
