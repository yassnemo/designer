import { useRef } from 'react';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
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
import backgroundSpr from '~/assets/resume-background-large.jpg';
import backgroundPlaceholder from '~/assets/resume-background-placeholder.jpg';
// Import placeholder images for data visualization
import vizLightImage from '~/assets/real-time-data-pipeline-light.jpg';
import vizDarkImage from '~/assets/real-time-data-pipeline-dark.jpg';
import vizLightPlaceholder from '~/assets/real-time-data-pipeline-light-placeholder.jpg';
import vizDarkPlaceholder from '~/assets/real-time-data-pipeline-dark-placeholder.jpg';

export const meta = () => {
  return baseMeta({
    title: 'Resume',
    description: 'My academic achievements, data engineering projects, and analytical expertise.',
  });
};

export default function Resume() {  const workExpRef = useRef();
  const educationRef = useRef();
  const projectsRef = useRef();
  
  const isWorkExpVisible = useInViewport(workExpRef);
  const isEducationVisible = useInViewport(educationRef);
  const isProjectsVisible = useInViewport(projectsRef);
  
  return (
    <>
      <ProjectContainer className={styles.resume}>
        <ProjectBackground
          src={backgroundSpr}
          placeholder={backgroundPlaceholder}
          opacity={0.7}
        />        <ProjectHeader
          title={<DecoderText text="Resume" />}
          description="This page captures my journey — blending academic 
                       growth with hands-on data engineering projects. 
                       It’s where ideas meet action, and curiosity creates solutions. Explore 
                       the skills I’ve honed, challenges I’ve overcome, and lessons 
                       I’ve learned.Want to know more? Download my resume below!">
          <div className={styles.downloadContainer}>
            <Button 
              secondary
              iconHoverShift
              iconEnd="arrow-right"
              href="/data-engineering-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Button>
          </div>
        </ProjectHeader>
        
        {/* Work Experience Section */}
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.section} ref={workExpRef} data-visible={isWorkExpVisible}>
              <div className={styles.sectionHeading}>
                <Heading as="h2" level={4}>
                  Work Experience
                </Heading>
                <div className={styles.sectionLine} />
              </div>                {/* Experience Item 1 */}              <div className={styles.resumeRow}>
                <div className={styles.resumeHeader}>
                  <div className={styles.resumeHeaderLeft}>
                    <Heading as="h3" level={5} className={styles.resumeRole}>
                      Data Engineering Intern
                    </Heading>
                    <Text size="m" className={styles.companyName}>DataFlow Technologies</Text>
                  </div>
                  <div className={styles.timePeriod}>
                    <Icon icon="time" className={styles.timeIcon} />
                    <Text size="s">Jun 2024 — Present</Text>
                  </div>
                </div>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      Optimized SQL queries and database performance, reducing processing time by 20% on PostgreSQL and Snowflake
                    </ListItem>
                    <ListItem>
                      Implemented real-time data streaming solutions using Apache Kafka and Spark Streaming
                    </ListItem>
                    <ListItem>
                      Designed and deployed data quality monitoring systems with automated alerting using Great Expectations
                    </ListItem>
                  </List>
                </div>
              </div>
                {/* Experience Item 2 */}
              <div className={styles.resumeRow}>
                <div className={styles.resumeHeader}>
                  <div className={styles.resumeHeaderLeft}>
                    <Heading as="h3" level={5} className={styles.resumeRole}>
                      Junior Data Analyst
                    </Heading>
                    <Text size="m" className={styles.companyName}>University Analytics Department</Text>
                  </div>
                  <div className={styles.timePeriod}>
                    <Icon icon="time" className={styles.timeIcon} />
                    <Text size="s">Sep 2023 — May 2024</Text>
                  </div>
                </div>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      Analyzed student performance data to identify patterns and trends affecting graduation rates
                    </ListItem>
                    <ListItem>
                      Created automated reporting dashboards using Power BI and Tableau, serving 500+ faculty members
                    </ListItem>
                    <ListItem>
                      Collaborated with IT team to migrate legacy reporting systems to cloud-based solutions on AWS
                    </ListItem>
                  </List>
                </div>
              </div>
                {/* Experience Item 3 */}
              <div className={styles.resumeRow}>
                <div className={styles.resumeHeader}>
                  <div className={styles.resumeHeaderLeft}>
                    <Heading as="h3" level={5} className={styles.resumeRole}>
                      Junior Data Engineer
                    </Heading>
                    <Text size="m" className={styles.companyName}>TechStart Solutions</Text>
                  </div>
                  <div className={styles.timePeriod}>
                    <Icon icon="time" className={styles.timeIcon} />
                    <Text size="s">May 2023 — Aug 2023</Text>
                  </div>
                </div>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      Designed and implemented data warehouse architecture using dimensional modeling principles
                    </ListItem>
                    <ListItem>
                      Built automated data pipelines using Apache Airflow to ingest data from multiple sources (APIs, databases, files)
                    </ListItem>
                    <ListItem>
                      Containerized applications using Docker and deployed on Kubernetes for scalable data processing
                    </ListItem>                  </List>
                </div>
              </div>
            </div>
            
            {/* Education Section */}
            <div className={styles.section} ref={educationRef} data-visible={isEducationVisible}>
              <div className={styles.sectionHeading}>
                <Heading as="h2" level={4}>
                  Education
                </Heading>
                <div className={styles.sectionLine} />
              </div>                {/* Education Item 1 - Masters */}
              <div className={styles.resumeRow}>
                <div className={styles.resumeHeader}>
                  <div className={styles.resumeHeaderLeft}>
                    <Heading as="h3" level={5} className={styles.resumeRole}>
                      Data Science Certificate
                    </Heading>
                    <Text size="m" className={styles.companyName}>Alx Morocco</Text>
                  </div>
                  <div className={styles.timePeriod}>
                    <Icon icon="time" className={styles.timeIcon} />
                    <Text size="s">2025 — 2026</Text>
                  </div>
                </div>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      GPA: 3.9/4.0
                    </ListItem>
                    <ListItem>
                      Relevant coursework: Big Data Systems, Data Warehousing, Stream Processing, Cloud Computing, Database Design, Distributed Systems
                    </ListItem>
                    <ListItem>
                      Thesis: "Optimizing Real-time Data Processing Pipelines for IoT Sensor Networks"
                    </ListItem>
                    <ListItem>
                      Teaching Assistant for "Introduction to Data Engineering" course
                    </ListItem>
                  </List>
                </div>
              </div>
                {/* Education Item 2 - Bachelors */}
              <div className={styles.resumeRow}>
                <div className={styles.resumeHeader}>
                  <div className={styles.resumeHeaderLeft}>
                    <Heading as="h3" level={5} className={styles.resumeRole}>
                      Bachelor of Data Science
                    </Heading>
                    <Text size="m" className={styles.companyName}>University of Applied Science Ibn Zohr</Text>
                  </div>
                  <div className={styles.timePeriod}>
                    <Icon icon="time" className={styles.timeIcon} />
                    <Text size="s">2021 — 2025</Text>
                  </div>
                </div>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      GPA: 3.7/4.0 • Magna Cum Laude
                    </ListItem>
                    <ListItem>
                      Relevant coursework: Data Structures & Algorithms, Database Systems, Statistics, Linear Algebra, Software Engineering, Data Mining
                    </ListItem>
                    <ListItem>
                      Senior Capstone: "Building a Scalable Data Pipeline for Real-time Analytics"
                    </ListItem>
                    <ListItem>
                      President of Data Science Club • Member of Computer Science Honor Society
                    </ListItem>
                  </List>
                </div>              </div>            </div>
              {/* Projects Section */}
            <div className={styles.section} ref={projectsRef} data-visible={isProjectsVisible}>
              <div className={styles.sectionHeading}>
                <Heading as="h2" level={4}>
                  Some Things I've Built
                </Heading>
                <div className={styles.sectionLine} />
              </div>
              
              <div className={styles.projectsWrapper}>
                <div className={styles.projectsContainer}>{/* Project 1 */}
                <div className={styles.projectCard}>
                  <div className={styles.projectContent}>
                    <div className={styles.projectLabelAligned}>
                      <Text>Featured Project</Text>
                    </div>
                    <Heading as="h3" level={4} className={styles.projectTitleAligned}>
                      Real-time Data Pipeline for E-commerce Analytics
                    </Heading>
                    <div className={styles.projectDescriptionCompact}>
                      <Text size="s">
                        Scalable data engineering pipeline processing 100k+ e-commerce events/minute 
                        using Kafka, Spark Streaming, and Airflow with automated quality checks.
                      </Text>
                    </div>
                    <div className={styles.projectTechStackAligned}>
                      <Text size="s">Apache Kafka</Text>
                      <Text size="s">Spark Streaming</Text>
                      <Text size="s">Airflow</Text>
                      <Text size="s">AWS EKS</Text>
                      <Text size="s">Grafana</Text>
                      <Text size="s">Tableau</Text>
                    </div>
                    <div className={styles.projectLinksAligned}>
                      <Button
                        secondary
                        icon="github"
                        href="https://github.com/your-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        GitHub
                      </Button>
                      <Button
                        secondary
                        icon="external"
                        href="https://your-demo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        Live Demo
                      </Button>
                    </div>
                  </div>
                  <div className={styles.projectImageShifted}>
                    <ThemeImage
                      src={vizLightImage}
                      srcSet={`${vizLightImage} 800w, ${vizLightImage} 1920w`}
                      placeholder={vizLightPlaceholder}
                      alt="Real-time data pipeline dashboard"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>                {/* Project 2 */}
                <div className={styles.projectCard}>
                  <div className={styles.projectContent}>
                    <div className={styles.projectLabelAligned}>
                      <Text>Featured Project</Text>
                    </div>
                    <Heading as="h3" level={4} className={styles.projectTitleAligned}>
                      Customer Data Warehouse & Analytics Platform
                    </Heading>
                    <div className={styles.projectDescriptionCompact}>
                      <Text size="s">
                        Comprehensive data warehouse in Snowflake handling 50M+ customer records 
                        with CDC pipelines using Debezium and Kafka for real-time synchronization.
                      </Text>
                    </div>
                    <div className={styles.projectTechStackAligned}>
                      <Text size="s">Snowflake</Text>
                      <Text size="s">Debezium</Text>
                      <Text size="s">Kafka</Text>
                      <Text size="s">dbt</Text>
                      <Text size="s">Power BI</Text>
                      <Text size="s">Python</Text>
                    </div>
                    <div className={styles.projectLinksAligned}>
                      <Button
                        secondary
                        icon="github"
                        href="https://github.com/your-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        GitHub
                      </Button>
                      <Button
                        secondary
                        icon="external"
                        href="https://your-demo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        Live Demo
                      </Button>
                    </div>
                  </div>
                  <div className={styles.projectImageShifted}>
                    <ThemeImage
                      src={vizDarkImage}
                      srcSet={`${vizDarkImage} 800w, ${vizDarkImage} 1920w`}
                      placeholder={vizDarkPlaceholder}
                      alt="Data warehouse analytics platform"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>{/* Project 3 */}                <div className={styles.projectCard}>
                  <div className={styles.projectContent}>
                    <div className={styles.projectLabelAligned}>
                      <Text>Featured Project</Text>
                    </div>
                    <Heading as="h3" level={4} className={styles.projectTitleAligned}>
                      IoT Data & Anomaly Detection
                    </Heading>                    <div className={styles.projectDescriptionCompact}>
                      <Text size="s">
                        ML system for real-time anomaly detection on 10,000+ IoT sensors 
                        using Kafka and Spark; 95% failure detection accuracy.
                      </Text>
                    </div>                    <div className={styles.projectTechStackAligned}>
                      <Text size="s">Apache Kafka</Text>
                      <Text size="s">Spark Streaming</Text>
                      <Text size="s">Docker</Text>
                      <Text size="s">TensorFlow</Text>
                    </div>
                    <div className={styles.projectLinksAligned}>
                      <Button
                        secondary
                        icon="github"
                        href="https://github.com/your-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        GitHub
                      </Button>
                      <Button
                        secondary
                        icon="external"
                        href="https://your-demo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        Live Demo
                      </Button>                    </div>
                  </div>
                  <div className={styles.projectImageShifted}>
                    <ThemeImage
                      src={vizLightImage}
                      srcSet={`${vizLightImage} 800w, ${vizLightImage} 1920w`}
                      placeholder={vizLightPlaceholder}
                      alt="IoT sensor data processing system"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />                  </div>
                </div>
              </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className={styles.contactSection}>
              <Heading as="h2" level={4}>
                Let's Connect
              </Heading>              <Text size="l" align="center">
                Interested in data engineering collaborations or discussing data analytics projects?
              </Text>
              <div className={styles.contactButtons}>
                <Button
                  secondary
                  icon="linkedin"
                  href="https://linkedin.com/yassine-erradouani"
                  target="Yassine-Erradouani"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Button>                <Button
                  secondary
                  icon="email"
                  href="mailto:yassine.erradouani@protonmail.com"
                  target="Yassine-Erradouani"
                  rel="noopener noreferrer"
                >
                  Email
                </Button>
                <Button
                  secondary
                  icon="github"
                  href="https://github.com/yassnemo"
                  target="yassnemo"
                  rel="noopener noreferrer"
                >
                  GitHub
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