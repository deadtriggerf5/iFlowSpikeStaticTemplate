/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../../components/Footer';
import Form from '../Form';
import ControlPanel from '../ControlPanel';
import EditView from '../EditView/Loadable';
import HomePage from '../HomePage/Loadable';

import NotFoundPage from '../NotFoundPage/Loadable';

import GridView from '../GridView/Loadable';
import Menu from '../Menu/Loadable';
import Header from '../Header';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import GlobalStyle from '../../global-styles';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Routes = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px;
`;

export default () => (
  <Container>
    <Form />
    <Header />
    <Content>
      <Menu />
      <Routes>
        <ControlPanel />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/grid/:gridType" component={GridView} />
          <Route path="/edit/:gridType" component={EditView} />
          <Route component={NotFoundPage} />
        </Switch>
      </Routes>
    </Content>
    <Footer />
    <GlobalStyle />
  </Container>
)