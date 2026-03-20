import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

export const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  aboutRoute,
  faqRoute,
  contactRoute,
]);
