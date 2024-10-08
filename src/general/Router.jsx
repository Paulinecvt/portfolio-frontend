import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../home/Home.jsx";
import { LLM } from "../llm/llm.jsx";
import { Projects } from "../projects/Projects.jsx";
import { Contact } from "../contact/Contact.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.LLM}
      element={
        <Layout>
          <LLM />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.PROJECTS}
      element={
        <Layout>
          <Projects />
        </Layout>
      }
    />

    <Route
      path={RoutePaths.CONTACT}
      element={
        <Layout>
          <Contact />
        </Layout>
      }
    />

    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
