import React, { useState } from "react"
import Layout from "../components/layout"
import CaseStudyTile from "../components/CaseStudyTile"
import image2 from '/src/images/about/image.jpg';
import image3 from '/src/images/about/aero.png';
import ListSection from '../components/ListSection';

import id from "../images/playground/id.png";
import weather from "../images/playground/weather.gif";
import tactileUI from "../images/playground/table.gif";
import wefthero from "../images/weft/gridhero.png";
import terrahero from "../images/terra/demo.gif";
import animhero from "../images/playground/takingflight.gif";

import quicktoolshero from "../images/quicktools/quicktoolstile.gif"
import dandelion from "../images/dandelion/hero.png"
import corohero from "../images/coro/newhero.gif"
import GridComponent from "../components/GridComponent";


const interactiveWords = [
  {
    text: "designer",
    note: "More specifically, a multidisciplinary designer!",
  },
  {
    text: "researcher",
    note: "I'm equally obsessed with great research questions and the tools to unpack them.",
  },
  {
    text: "dog whisperer",
    note: "I'd like to say I'm an interspecies communicator, but usually I'm just whispering to my dog :) ",
  },
];

const IndexPage = () => {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <Layout>
      <div className="base-page-home" id="home" onMouseMove={handleMouseMove}>
        {hoveredWord && (
          <div
            className="tooltip fade"
            style={{
              top: mousePos.y + 20,
              left: mousePos.x + 20,
            }}
          >
            {hoveredWord.note}
          </div>
        )}

        <div>
          <h1>
            Vishaka is a{" "}
            {interactiveWords.map((word, index) => (
              <React.Fragment key={index}>
                <span
                  className="interactive-word"
                  onMouseEnter={() => setHoveredWord(word)}
                  onMouseLeave={() => setHoveredWord(null)}
                >
                  {word.text}
                </span>
                {index === 0 ? " and " : index === 1 ? ". She's also a part-time " : ". "}
              </React.Fragment>
            ))}
          </h1>
        </div>
      </div>
      <div className="section-header">
        <h3>
          <a href="/#mywork">
            Learn more about my work ↓
          </a>
        </h3>    
      </div>
      <div className="archive" id="mywork">
        <div className="intro-lists">
          <ListSection
            title="My foundation"
            items={[
              { label: "HCDE @ Univ. of Washington" },
              { label: "Design Engineering @ Brown / RISD" },
            ]}
          />
          <ListSection
            title="Hats I wear"
            items={[
              { label: "Research" },
              { label: "Digital design" },
              { label: "Spatial experience" },
              { label: "Physical computing" },
            ]}
          />
          <ListSection
            title="Past clients"
            items={[
              { label: "Lucid Software" },
              { label: "Dandelion Chocolate" },
              { label: "Microsoft Dynamics 365" },
            ]}
          />
        </div>
        </div>
      <div className="section-header">
        <h3>
            Some work I'm proud of:
        </h3>    
      </div>
      {/* PROJECT TILE SECTION */} 
        <div className="projects" id="projects">
          <CaseStudyTile 
            to="/coro"
            image={corohero}
            description="Bridging communication gaps in group fitness using haptic devices"
            tags={["Wearable devices", "Haptics"]}
            descriptionColor="#3854F5"
            year="Brown/RISD, 2025"
          />
          <CaseStudyTile 
            to="/dandelion"
            image={dandelion}
            description="Envisioning futures for retail chocolate tastings"
            tags={["Retail experience design", "Client proposal"]}
            descriptionColor="#8A5A2F"
            year="Dandelion Chocolate, 2025"
          />
          <CaseStudyTile 
            to="/quicktoolsintro"
            image={quicktoolshero}
            description="Creating the new canvas widgets for virtual collaboration"
            tags={["Digital experience design", "Design strategy"]}
            descriptionColor="#3C41C2"
            year="Lucid Software, 2024"
          />
        </div>
        <div className="archive"  id="archive">
            <ListSection
              title="Archived projects"
              items={[
                {
                  label: "Lucid's Visual Activities ↗",
                  sub: "Designed and launched Lucid’s new canvas survey feature, called Visual Activities. I led work across strategy, user research, and interaction design. Rolled out in 2023 to all Lucid users, the new feature is now used over 170,000 times a month. After the launch, I co-led a customer webinar introducing the feature to over 1,000 attendees.",
                  link: "https://lucid.co/resources/webinars/use-cases-for-visual-activities-jan-2024"
                },
                {
                  label: "Lucidspark's Facilitation Toolkit ↗",
                  sub: "From scratch, I researched and designed a set of facilitator tools for Lucid's virtual whiteboard, Lucidspark. Some of the tools include a laser pointer, a way to broadcast messages, and extra locking/hiding capabilities. This toolkit launched in 2022 to all Lucid users.",
                  link: "https://lucid.co/lucidspark/solutions/facilitation-tools"
                },
                {
                  label: "Microsoft's Field Service App ↗",
                  sub: "For my 2021 HCDE capstone, I worked with Microsoft to rethink the Field Service App. My team and I interviewed technicians, co-led a design jam with Microsoft’s team, and proposed new mobile AR workflows. Our concept was presented to Microsoft and showcased at our HCDE capstone.",
                  link: "https://www.hcde.washington.edu/capstone/2021/bs#:~:text=Designing%20Mobile%20Mixed%20Reality%20Solutions%20for%20Field%20Service%20Technicians"
                },
                {
                  label: "& some more endeavors:",
                },
              ]}
            />
        </div>
        <GridComponent
              projects={[
                {
                  id: 1,
                  imageUrl: tactileUI,
                  description: "Designed an interactive drawing tabletop utilizing object tracking, computer vision, and projection mapping.",
                },
                {
                  id: 2,
                  imageUrl: id,
                  description: "Designed and prototyped a dual-sided measuring tape for easy midpoint measurements.",
                },
                {
                  id: 3,
                  imageUrl: animhero,
                  description: "A clip I animated from the short film, Taking Flight. I worked on character animation, modeling, lighting, and effects.",
                },
                {
                  id: 4,
                  imageUrl: wefthero,
                  description: "Developed a sustainability prototype, adding interactivity to recycled materials to increase product lifespans. (Team: Sarah Fletcher, Eunjin Hong, Bennett Graff)",
                },
                {
                  id: 5,
                  imageUrl: terrahero,
                  description: "Created an AI-powered gaming device that provides a sense of tactile interaction and is endlessly replayable. (Team: Kayla Blalack) ",
                },
                {
                  id: 6,
                  imageUrl: weather,
                  description: "Built an ambient weather module using API data and physical computing",
                },
              ]}
            />
        <div className="archive"  id="about">
          <ListSection
                title="About me & my values"
                items={[
                  {
                    label: "Designing means learning",
                    sub: "I recently completed my Master’s in Design Engineering at Brown/RISD, where I explored the edges of emerging tech and interaction design. Before that, I studied Human-Centered Design & Engineering at the University of Washington. But outside of these avenues, I’m always picking up new skills and tools. My recent ventures have been learning about medical device design and crocheting!",
                  },
                  {
                    label: "Collaboration leads to great outcomes",
                    sub: "I spent 4 years at Lucid Software designing tools that power remote teamwork, including everything from strategy workflows to new ways of gathering input on a shared canvas. I care deeply about how teams think, build, and communicate together, which bleeds into my own design practice.",
                  },
                  {
                    label: "'Keep moving forward!'",
                    sub: "My favorite movie is Meet the Robinsons, and this phrase has always stuck with me. I’m drawn to nebulous, complex problems, and I love the process of pushing through uncertainty to find clarity.",
                  },
                ]}
              />
        </div>
          <GridComponent
              projects={[
                {
                  id: 1,
                  imageUrl: image2,
                  description: "This is me and my dog Olive! She joins me for walks and virtual meetings, but prefers the walks!",
                },
                {
                  id: 2,
                  imageUrl: image3,
                  description: "Younger me was pretty sure I'd end up as a pilot. Or a firefighter. Or an international pop star.",
                },
              ]}
            />
        <div className="archive">
          <ListSection
                title="In other news..."
                items={[
                  {
                    label: "Weft Furniture at ACM's TEI Conference ↗",
                    sub: "In March 2025, my team and I presented our published work at the ACM TEI conference in Bordeaux, France, where we won the Innovative Vision of Sustainability award.",
                    link: "https://dl.acm.org/doi/10.1145/3689050.3707700"
                  },
                  {
                    label: "MADE program highlights ↗",
                    sub: "A recent project about an AI-powered gaming device, was featured in RISD's recent article about the joint degree Design Engineering program.",
                    link:"https://www.risd.edu/news/stories/brown-risd-master-of-arts-in-design-engineering-bridges-disciplines"
                  },
                  {
                    label: "Activity based research ↗",
                    sub: "At Lucid, I worked closely with our UX researchers, one of which wrote this article featuring my approach to activity-based user interviews.",
                    link: "https://medium.com/lucid-software-design/run-activity-based-interviews-to-maximize-your-time-with-users-3c233f379084"
                  },
                  {
                    label: "HCDE Awards of Excellence ↗",
                    sub: "I was awarded the undergraduate leadership award in 2021, for my work with the HCDE student association.",
                    link: "https://www.hcde.washington.edu/news/2021-awards#:~:text=Vishaka%20Nirmal%0AUndergraduate%20Award%20for%20Leadership%20and%20Engagement"
                  },
                  {
                    label: "The pandemic intern experience ↗",
                    sub: "My first internship experience was at the peak of the pandemic, and my experience was documented by my manager!",
                    link: "https://medium.com/lucid-software-design/the-lucid-ux-intern-experience-pandemic-edition-5693a1704bd0"
                  },
                ]}
              />
        </div>
    </Layout>
  );
};

export default IndexPage;
