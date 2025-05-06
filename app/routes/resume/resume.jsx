import { useRef } from 'react';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Icon } from '~/components/icon';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Text } from '~/components/text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { ThemeImage } from '~/components/theme-image';
import { useInViewport } from '~/hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './resume.module.css';
import backgroundSpr from '~/assets/spr-background.jpg';
import backgroundPlaceholder from '~/assets/spr-background-placeholder.jpg';
// Import placeholder images for data visualization
import vizLightImage from '~/assets/spr-design-system-light-placeholder.png';
import vizDarkImage from '~/assets/spr-design-system-light-placeholder.png';
import vizLightPlaceholder from '~/assets/spr-design-system-light-placeholder.png';
import vizDarkPlaceholder from '~/assets/spr-design-system-light-placeholder.png';

export const meta = () => {
  return baseMeta({
    title: 'Resume',
    description: 'My professional experience, skills, and qualifications.',
  });
};

export default function Resume() {
  const skillsRef = useRef();
  const areSkillsVisible = useInViewport(skillsRef);
  
  return (
    <>
      <ProjectContainer className={styles.resume}>
        <ProjectBackground
          src={backgroundSpr}
          placeholder={backgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title={<DecoderText text="Resume" />}
          description="My professional experience, skills, and qualifications."
        />
        
        {/* Work Experience Section */}
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.section}>
              <div className={styles.sectionHeading}>
                <Heading as="h2" level={4}>
                  Work Experience
                </Heading>
                <div className={styles.sectionLine} />
              </div>
              
              {/* Experience Item 1 */}
              <div className={styles.resumeRow}>
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">Jan 2023 — Present</Text>
                </div>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Senior Frontend Developer
                </Heading>
                <Text size="m">TechCorp Solutions</Text>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      Led the development of a responsive web application using React, increasing user engagement by 40%
                    </ListItem>
                    <ListItem>
                      Improved application performance by optimizing rendering and implementing code splitting, reducing load time by 60%
                    </ListItem>
                    <ListItem>
                      Mentored junior developers and established best practices for code quality and testing
                    </ListItem>
                  </List>
                </div>
              </div>
              
              {/* Experience Item 2 */}
              <div className={styles.resumeRow}>
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">Mar 2020 — Dec 2022</Text>
                </div>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Frontend Developer
                </Heading>
                <Text size="m">WebSolutions Inc.</Text>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      Developed and maintained multiple client-facing web applications using React and Next.js
                    </ListItem>
                    <ListItem>
                      Collaborated with designers to implement pixel-perfect UI/UX designs
                    </ListItem>
                    <ListItem>
                      Implemented state management using Redux and Context API for complex application flows
                    </ListItem>
                  </List>
                </div>
              </div>
              
              {/* Experience Item 3 */}
              <div className={styles.resumeRow}>
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">Jun 2018 — Feb 2020</Text>
                </div>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Web Developer
                </Heading>
                <Text size="m">Digital Creations</Text>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      Built responsive websites for clients across various industries
                    </ListItem>
                    <ListItem>
                      Integrated third-party APIs and services to extend website functionality
                    </ListItem>
                    <ListItem>
                      Optimized websites for SEO and accessibility compliance
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
            
            <Divider className={styles.divider} />
            
            {/* Education Section */}
            <div className={styles.section}>
              <div className={styles.sectionHeading}>
                <Heading as="h2" level={4}>
                  Education
                </Heading>
                <div className={styles.sectionLine} />
              </div>
              
              {/* Education Item 1 */}
              <div className={styles.resumeRow}>
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">2014 — 2018</Text>
                </div>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Bachelor of Science in Computer Science
                </Heading>
                <Text size="m">University of Technology</Text>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      GPA: 3.8/4.0
                    </ListItem>
                    <ListItem>
                      Relevant coursework: Web Development, Data Structures, Algorithms, Database Systems
                    </ListItem>
                    <ListItem>
                      Senior Project: Interactive Learning Platform with React & Node.js
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
            
            <Divider className={styles.divider} />
            
            {/* Skills Section */}
            <div className={styles.section} ref={skillsRef}>
              <div className={styles.sectionHeading}>
                <Heading as="h2" level={4}>
                  Skills
                </Heading>
                <div className={styles.sectionLine} />
              </div>
              
              <div className={styles.skillsContainer} data-visible={areSkillsVisible}>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="react" />
                  </div>
                  <span className={styles.skillName}>React</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="javascript" />
                  </div>
                  <span className={styles.skillName}>JavaScript</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="typescript" />
                  </div>
                  <span className={styles.skillName}>TypeScript</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="html" />
                  </div>
                  <span className={styles.skillName}>HTML</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="css" />
                  </div>
                  <span className={styles.skillName}>CSS</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="node" />
                  </div>
                  <span className={styles.skillName}>Node.js</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="git" />
                  </div>
                  <span className={styles.skillName}>Git</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="figma" />
                  </div>
                  <span className={styles.skillName}>Figma</span>
                </div>
              </div>
            </div>
            
            <Divider className={styles.divider} />
            
            {/* Projects Section */}
            <div className={styles.section}>
              <div className={styles.sectionHeading}>
                <Heading as="h2" level={4}>
                  Projects
                </Heading>
                <div className={styles.sectionLine} />
              </div>
              
              {/* Project 1 */}
              <div className={styles.projectCard}>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  E-commerce Platform
                </Heading>
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">2022</Text>
                </div>
                <div className={styles.resumeDetails}>
                  <Text size="m">
                    A full-featured e-commerce platform built with React, Node.js, and MongoDB.
                  </Text>
                  <List>
                    <ListItem>
                      Implemented user authentication, product catalog, shopping cart, and checkout process
                    </ListItem>
                    <ListItem>
                      Integrated payment gateway for secure online transactions
                    </ListItem>
                    <ListItem>
                      Applied responsive design principles for optimal viewing on all device sizes
                    </ListItem>
                  </List>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className={styles.projectCard}>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Task Management Application
                </Heading>
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">2021</Text>
                </div>
                <div className={styles.resumeDetails}>
                  <Text size="m">
                    A drag-and-drop task management application inspired by Trello.
                  </Text>
                  <List>
                    <ListItem>
                      Built with React, TypeScript, and Firebase for real-time updates
                    </ListItem>
                    <ListItem>
                      Implemented drag-and-drop functionality for intuitive task management
                    </ListItem>
                    <ListItem>
                      Added features like task filtering, sorting, and user collaboration
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className={styles.contactSection}>
              <Heading as="h2" level={4}>
                Let's Connect
              </Heading>
              <Text size="l" align="center">
                Interested in working together or have questions about my experience?
              </Text>
              <div className={styles.contactButtons}>
                <Button href="mailto:example@email.com" icon="send">
                  Email Me
                </Button>
                <Button
                  secondary
                  icon="github"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
                <Button
                  secondary
                  icon="linkedin"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
}