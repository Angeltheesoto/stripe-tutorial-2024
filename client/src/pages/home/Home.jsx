/* eslint-disable no-undef */
import React, { useContext } from "react";
import "./home.styles.scss";
import Layout from "../../components/shared/layout";
import Container from "react-bootstrap/esm/Container";
import Card from "../../components/card/card";
import { dataContext } from "../../context/dataContext";
import { Helmet } from "react-helmet";

const Home = () => {
  const { data } = useContext(dataContext);
  // console.log(`Home component: ${data}`);
  return (
    <Layout>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="This is the landing page where users go to when they first enter the website."
        />
      </Helmet>
      <Container>
        <h1 id="products">PRODUCTS</h1>
        <Card products={data} />
      </Container>
    </Layout>
  );
};

export default Home;
