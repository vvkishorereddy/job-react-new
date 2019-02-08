import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Faq from "./components/faq";
import Jobs from "./components/jobs";
import Blog from "./components/blog";
import blogDetails from "./components/blog/Details";
import jobDetails from "./components/jobs/Details";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/jobs" exact component={Jobs} />
      <Route path="/faq" exact component={Faq} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/:id" exact component={blogDetails} />
      <Route path="/jobs/:id" component={jobDetails} />
      <Route path="/categories/:category" exact component={Jobs} />
      <Route path="/job-types/:name" exact component={Jobs} />
    </Switch>
  );
}
