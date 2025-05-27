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
import backgroundSpr from '~/assets/resume-background-large.jpg';
import backgroundPlaceholder from '~/assets/resume-background-placeholder.jpg';
// Import placeholder images for data visualization
import vizLightImage from '~/assets/spr-design-system-light-placeholder.png';
import vizDarkImage from '~/assets/spr-design-system-light-placeholder.png';
import vizLightPlaceholder from '~/assets/spr-design-system-light-placeholder.png';
import vizDarkPlaceholder from '~/assets/spr-design-system-light-placeholder.png';

export const meta = () => {
  return baseMeta({
    title: 'Resume',
    description: 'My academic achievements, data engineering projects, and analytical expertise.',
  });
};

export default function Resume() {
  const workExpRef = useRef();
  const educationRef = useRef();
  const techStackRef = useRef();
  const projectsRef = useRef();
  
  const isWorkExpVisible = useInViewport(workExpRef);
  const isEducationVisible = useInViewport(educationRef);
  const isTechStackVisible = useInViewport(techStackRef);
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
          description="My academic achievements, data engineering projects, and analytical expertise."
        >
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
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
            
            <Divider className={styles.divider} />
            
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
                      Master of Science in Data Engineering
                    </Heading>
                    <Text size="m" className={styles.companyName}>University of Technology</Text>
                  </div>
                  <div className={styles.timePeriod}>
                    <Icon icon="time" className={styles.timeIcon} />
                    <Text size="s">2023 — 2025</Text>
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
                      Bachelor of Science in Computer Science with Data Analytics Minor
                    </Heading>
                    <Text size="m" className={styles.companyName}>State University</Text>
                  </div>
                  <div className={styles.timePeriod}>
                    <Icon icon="time" className={styles.timeIcon} />
                    <Text size="s">2019 — 2023</Text>
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
                </div>
              </div>            </div>
            
            <Divider className={styles.divider} />
              {/* Tech Stack Section */}
            <div className={styles.section} ref={techStackRef} data-visible={isTechStackVisible}>
              <div className={styles.sectionHeading}>
                <Heading as="h2" level={4}>
                  Tech Stack
                </Heading>
                <div className={styles.sectionLine} />
              </div>
              
              <div className={styles.techStackContainer} data-visible={isTechStackVisible}>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="python" />
                  </div>
                  <span className={styles.techStackName}>Python</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="database" />
                  </div>
                  <span className={styles.techStackName}>SQL</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="spark" />
                  </div>
                  <span className={styles.techStackName}>Apache Spark</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="airflow" />
                  </div>
                  <span className={styles.techStackName}>Apache Airflow</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="kafka" />
                  </div>
                  <span className={styles.techStackName}>Apache Kafka</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="snowflake" />
                  </div>
                  <span className={styles.techStackName}>Snowflake</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="aws" />
                  </div>
                  <span className={styles.techStackName}>AWS</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="gcp" />
                  </div>
                  <span className={styles.techStackName}>Google Cloud</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="docker" />
                  </div>
                  <span className={styles.techStackName}>Docker</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="kubernetes" />
                  </div>
                  <span className={styles.techStackName}>Kubernetes</span>
                </div>                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="postgresql" />
                  </div>
                  <span className={styles.techStackName}>PostgreSQL</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="powerbi" />
                  </div>
                  <span className={styles.techStackName}>Power BI</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="git" />
                  </div>
                  <span className={styles.techStackName}>Git</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="terraform" />
                  </div>
                  <span className={styles.techStackName}>Terraform</span>
                </div>                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="dbt" />
                  </div>
                  <span className={styles.techStackName}>dbt</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="java" />
                  </div>
                  <span className={styles.techStackName}>Java</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="github-actions" />
                  </div>
                  <span className={styles.techStackName}>GitHub Actions</span>
                </div>
                <div className={styles.techStackItem}>
                  <div className={styles.techStackIcon}>
                    <Icon icon="r-language" />
                  </div>
                  <span className={styles.techStackName}>R</span>
                </div>
              </div>            </div>
            
            <Divider className={styles.divider} />
              {/* Projects Section */}
            <div className={styles.section} ref={projectsRef} data-visible={isProjectsVisible}>
              <div className={styles.sectionHeading}>
                <Heading as="h2" level={4}>
                  Some Things I've Built
                </Heading>
                <div className={styles.sectionLine} />
              </div>
              
              <div className={styles.projectsContainer}>                {/* Project 1 */}
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
                    />
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