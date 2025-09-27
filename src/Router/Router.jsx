import React from 'react';
import Navber from '../Component/Navber/Navber';
import Hero from '../Pages/Hero/Hero';

const Router = () => {
    return (
        <div>
            <Navber></Navber>
            <section id="home" name="home" ><Hero></Hero></section>
            {/* <section id="home" name="home" ><AboutMe></AboutMe></section> */}
            {/* <ContactMe></ContactMe>
            <SkillsSection></SkillsSection> */}
            {/* <section id="education" name="education" ><EducationSection></EducationSection></section>
            <section id="about" name="about" ><ContactSection></ContactSection></section>
            <section id="blog" name="blog" ><BlogSection></BlogSection></section>
            <section id="resume" name="resume" ><ResumeSection></ResumeSection></section>
            <section id="dev" name="dev" >  <DeveloperContactSection></DeveloperContactSection></section> */}

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Router;