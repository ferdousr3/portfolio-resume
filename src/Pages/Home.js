import React from 'react';
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import MySkills from '../components/MySkills/MySkills';
// import Read from '../components/Read/Read';
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className='pb-24 '>
        <About/>
      </section>
      {/* <section className='pb-24 pt-8 '>
        <Read/>
      </section> */}
      <section className='pb-24  '>
        <MySkills/>
      </section>
      <section className='pb-24'>
        <Projects />
      </section>
      <section className='pb-24'>
        <Contact/>
      </section>
    </>
  );
};

export default Home;