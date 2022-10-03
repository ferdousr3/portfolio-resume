import React from 'react';
import Hero from '../components/Hero/Hero';
import MySkills from '../components/MySkills/MySkills';
import Projects from '../components/Projects/Projects'
import Education from '../components/Education/Education';
import HomeContact from '../components/HomeContact/HomeContact';
import OthersProject from '../components/OthersProject/OthersProject';
// import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation'

const Home = () => {
  return (
    <>
      <section>
        <Hero />
        {/* <BgAnimation /> */}
      </section>
      <section className="pb-24  ">
        <MySkills />
      </section>
      <section className="pb-24  ">
        <Education />
      </section>
      <section className="pb-24">
        <Projects />
      </section>
      <section className="pb-24">
        <OthersProject />
      </section>
      <section className="pb-24">
       <HomeContact />
      </section>
    </>
  );
};

export default Home;


// https://i.ibb.co/qJmLDpk/autoVio.png
// https://i.ibb.co/gPG9Cc7/delta-Times.png
// https://i.ibb.co/f0zYLjC/thechIt.png
// https://i.ibb.co/5kZHDgL/xFit.png