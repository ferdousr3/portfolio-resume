import React from 'react';
import Hero from '../components/Hero/Hero';
import MySkills from '../components/MySkills/MySkills';
import Projects from '../components/Projects/Projects'
import Education from '../components/Education/Education';
import HomeContact from '../components/HomeContact/HomeContact';
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
       <HomeContact />
      </section>
    </>
  );
};

export default Home;