import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Choose Your Best One</Title>
        <Desc>
          We are here to assist you best tool as you need in economical budget.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All Tools</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All Tools</ToggleButton>
          }
          <Divider />
          {toggle === 'smm' ?
            <ToggleButton active value="smm" onClick={() => setToggle('smm')}>Social Media Marketing</ToggleButton>
            :
            <ToggleButton value="smm" onClick={() => setToggle('smm')}>Social Media Marketing</ToggleButton>
          }
          <Divider />
          {toggle === 'seo' ?
            <ToggleButton active value="seo" onClick={() => setToggle('seo')}>SEO</ToggleButton>
            :
            <ToggleButton value="seo" onClick={() => setToggle('seo')}>SEO</ToggleButton>
          }
          <Divider />
          {toggle === 'ds' ?
            <ToggleButton active value="ds" onClick={() => setToggle('ds')}>Data Scrapping</ToggleButton>
            :
            <ToggleButton value="ds" onClick={() => setToggle('ds')}>Data Scrapping</ToggleButton>
          }
          <Divider />
          {toggle === 'wm' ?
            <ToggleButton active value="wm" onClick={() => setToggle('wm')}>WhatsApp Marketing</ToggleButton>
            :
            <ToggleButton value="wm" onClick={() => setToggle('wm')}>WhatsApp Marketing</ToggleButton>
          }
          <Divider />
          {toggle === 'em' ?
            <ToggleButton active value="em" onClick={() => setToggle('em')}>Email Marketing</ToggleButton>
            :
            <ToggleButton value="em" onClick={() => setToggle('em')}>Email Marketing</ToggleButton>
          }
          <Divider />
          {toggle === 've' ?
            <ToggleButton active value="ve" onClick={() => setToggle('ve')}>Video Editing</ToggleButton>
            :
            <ToggleButton value="ve" onClick={() => setToggle('ve')}>Video Editing</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {/* { projects
            .map((project,index) => (
              <ProjectCard project={project} idx={index} />
            ))} */}
            {toggle === 'all' && projects
            .map((project,index) => (
              <ProjectCard project={project} idx={index} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project,index) => (
              <ProjectCard project={project} idx={index} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects