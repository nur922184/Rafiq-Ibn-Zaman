import React from 'react';
import Navber from '../Component/Navber/Navber';
import Hero from '../Pages/Hero/Hero';
import Contact from '../Pages/Contact/Contact';
import AboutMe from '../Pages/About/AboutMe';
import Skills from '../Component/Skills/Skills';
import Blog from '../Pages/Blog/Blog';
import SocialMedia from '../Pages/Contact/SocialMedia';
import Footer from '../Component/Footer/Footer';
import Education from '../Pages/Education/Education';

const Router = () => {
    return (
        <div>
            <Navber></Navber>
            <section id="home" name="home" ><Hero></Hero></section>
            <section id="home" name="home" ><AboutMe></AboutMe></section>
            <Skills></Skills>
            {/* <ContactMe></ContactMe>
            <SkillsSection></SkillsSection> */}
            <section id="education" name="education" ><Education></Education></section>
            <SocialMedia></SocialMedia>
            <section id="about" name="about" ><Contact></Contact></section>
            <section id="blog" name="blog" ><Blog></Blog></section>
            {/* <section id="resume" name="resume" ><ResumeSection></ResumeSection></section> */}
            {/* <section id="dev" name="dev" >  <DeveloperContactSection></DeveloperContactSection></section>  */}

            <Footer></Footer>
        </div>
    );
};

export default Router;