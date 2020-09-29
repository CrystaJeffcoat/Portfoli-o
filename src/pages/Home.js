import React from 'react';
import HomeTitle from '../components/Home';
import Wrapper from '../components/Wrapper';
import Nav from "../components/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <Wrapper>

        <HomeTitle />

      </Wrapper>
    </div>
  )
};

export default Home;