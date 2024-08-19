---
slug: "/fieldserviceapp"
date: "2024-08-15"
title: "Field Service Application"
passwordProtected: true
password: "olive"
---

![Hero image of field service app](../src/images/fieldservice/hero.png)

## Context
I participated in a student capstone partnered with Microsoft Dynamics 365. This project redesigned the Field Service Application for enhanced information management.
## Problem space
Partnered with Microsoft Dynamics 365, we were tasked with redesigning the Field Service Application. Field service technicians represent any traveling repair technician working on a variety of devices. Microsoft was interested in enhancing how technicians document and managed their notes through their existing application. 

This led to our defining question:

How might we design a tool for technicians to effectively create, manage, and find resources for their jobs?

## My role
I worked on a student team of 4. We collaborated often with a Design manager and designer from the Microsoft Dynamics team.

Although I worked on all parts of the process, most of my design impact can be seen through:

- The information architecture
- The final note-taking flows
- The final documentation flows

## The existing application
In the existing application, technicians could keep track of upcoming work through a calendar interface. Within each task, they could attach only text or images as resources. When looking for prior resources, they would need to dig through previous task documentation, or reach out to the previous technician. 

## Competitive + market analysis
Beginning our research, we looked for current competitor solutions in the field. We gathered screenshots of products, noted down any functionality, and kept an eye out for specific novel solutions.

This screenshot is an example of another tool, which allowed technicians to add notes on top of images they took with their mobile phones.

## User interviews
We ran semi-structured moderated interviews with 5 active field service technicians. We used the UserTesting platform to recruit based on our criteria, running 1-hour interviews with each technician.

💡 User interviews insight

At a job site, the devices they work to repair always vary. Technicians learn from paper notes, previous images, or even by messaging another technician. When at a job site, it's important to quickly be able to create these notes for future use. 

## User journey mapping
As part of the synthesis process after user interviews, I helped map out the user journey for field service technicians as they go through a work order (a specific job they’re assigned to).

This journey map outlines the day-to-day life of a sample field service technician, highlighting key pain points throughout.

## Design jam
With a foundation of the field service workflow and specific pain points, we wanted to then broaden our design space and start with a design jam.

I prepared lightning talks about research and prompted ideation questions. This session included both our student team and the Microsoft design team.

Here you can see some of the design prompts we used to spark new ideas, and some of my initial sketches from this session.

## Information architecture mapping
We sorted out all our ideas, mapping them back to our original pain points from the user journey map. With this process, we realized we’d need to refine where each new feature was housed inside the Field Service application. We mapped out a new information architecture system, seen here.

## Usability testing
Once we mocked up our new concepts, we utilized Maze to walk 3 active field service technicians throughout our early prototyped designs.

We had 3 tasks to test whether our redesign provided the right tools and resources.

1. Are users able to find and edit current work orders?
2. Can they successfully find and attach documentation to a current work order?
3. Are they able to submit their final work order?

💡 Usability insight

We found minor usability concerns while testing, seeing users unable to know which pages to navigate to, based on a lack of labeling for our app's navigation.

## Final designs
The home page and work orders:

For the landing page, we knew the importance of updated, relevant information for technicians. 

From here, technicians can view upcoming work, as well as unscheduled work orders. Within each work order, all information on location, background, and relevant documentation is consolidated.

Note-taking

As the central navigation button in the Field Service Application, I designed the create menu to allow technicians to quickly create documentation while working.

As they complete work orders, they can easily create a note, asset, or AR annotation that connects to the current specified work order.

Watch the flow here to see how an augmented reality annotation can be easily created. 

Below, the second video showcases how technicians can search through a physical location to find AR annotations using their device. I designed the interface hints to lay atop surfaces detected by the camera. As a technician moves towards or away from a hint, they'll see the target change in size. 

The variety of text, image, and AR notes allows technicians to easily and quickly keep track of their thoughts. Based on location tracking, each added note will be automatically added to the in-progress work order. 

We heard that technicians are often met with new devices at each job site. To bring them more context on previous work and repairs done, augmented reality could anchor this context at each job site. The variety of note styles encourages technicians to easily create quick notes while working.

Search page

I designed the search experience for technicians to easily find and attach relevant resources to their work order. When a resource is starred, it is automatically added to the current work order for easy record-keeping. 

The documents on this page can include any resource, including manuals, quick notes, or images from past work orders. 

In our interviews, we learned that technicians collect a variety of notes, diagrams, and resources. Our solution needed to easily provide access to any format of a note, and allow them to efficiently connect to the work order.

## Handoff
Our final product for this project was a future vision video. We handed off the full concept to Microsoft, along with our annotated Figma file. 

The final solution outlined here allows technicians to easily create, search for, and manage information throughout their work. 

## Reflections
Mixed reality learnings
Our team was excited to incorporate augmented reality into this future vision. Before this project, I had minimal knowledge of how augmented reality could work with a mobile device. To effectively create a prototype of what this could look like, we used a combination of Snap Lens and Adobe After Effects. 

Since this was a sort of hacky prototype, we weren't able to test out the augmented reality ideas with active technicians. I'd be interested in learning how effective this mobile-based interface is for technicians at a job site. Would this assist with their workflows? Would it be easy to find each anchoring data point?

In the future, I'd love to dive into creating full mixed-reality prototypes that are fully testable with users. 

Parting thoughts
This project was a culmination of my university experience at UW. I appreciated the industry connection with Microsoft, and the 6 months on this project included a lot of collaboration with my peers. We spent a lot of time on Zoom, collaborating over Figma chat, and it was a great end to my college career. 

