import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Header from "../../components/Header";
import Contacts from "../Contacts";
import Profile from "../Profile";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <main>
      <Header />

      <Container>
        <Switch>
          <Route exact path={path} component={Contacts} />
          <Route path={`${path}/profile`} component={Profile} />
        </Switch>
      </Container>
    </main>
  );
};

export default Dashboard;
