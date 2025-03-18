import React from 'react';
import Layout from '../components/layout';
import '../styles/global.css';
import image2 from '/src/images/about/image.jpg';
import image3 from '/src/images/about/aero.png';
import image4 from '/src/images/about/lucid.png';
import image5 from '/src/images/about/olive.jpeg';
import Card from '../components/Card';
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <div className="base-page">
          <div className="aboutinfo">
            <Card
              title="Hi, I'm Vishaka!"
              text="Currently, I’m a masters student at Brown and RISD, focused on designing interactions that weave digital technology into the tangible world."
              color="#E62A9E"
              image={image2}
            />

            <Card
              title="The origin story~"
              text="I'm a product of dinner table conversations filled with medical and aerospace terminology, so making sense of complex ideas has always been second nature. Now, as a designer, I get to translate technical problems into simple, elegant solutions."
              color="#FF7D19"
              image={image3}
            />
              <Card
                title="Previously..."
                text="I spent almost 4 years working at Lucid Software, designing tools for virtual collaboration. But I've also worked on client projects for Dandelion Chocolate, Microsoft, and King County Metro."
                color="#3300FF"
                image={image4}
              />
              <Card
                title="Things not found on my resume:"
                text="I'm a tea enthusiast and a pandemic self-taught snowboarder. My favorite movie is Meet the Robinsons, and I've seen it countless times. Also, my favorite hobby is to take silly pictures of my dog, Olive. "
                color="#F6EF23"
                image={image5}
              />
          <h2>
          In other news, my work is featured in:
          </h2>
          <Link to="https://dl.acm.org/doi/10.1145/3689050.3707700">[Mar 2025] Weft Furniture @ ACM TEI ↗</Link>
          <Link to="https://www.risd.edu/news/stories/brown-risd-master-of-arts-in-design-engineering-bridges-disciplines">[Jan 2025] MADE program highlights @ RISD ↗</Link>
          <Link to="https://lucid.co/resources/webinars/use-cases-for-visual-activities-jan-2024">[Feb 2024] Aligning teams with Visual Activities ↗</Link>
          <Link to="https://medium.com/lucid-software-design/run-activity-based-interviews-to-maximize-your-time-with-users-3c233f379084">[Oct 2022] Running activity-based collaborative user interviews ↗</Link>
          <Link to="https://medium.com/lucid-software-design/run-activity-based-interviews-to-maximize-your-time-with-users-3c233f379084">[June 2021] HCDE awards of excellence @ UW ↗</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;
