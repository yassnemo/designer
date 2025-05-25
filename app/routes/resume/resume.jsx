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
    description: 'My academic achievements, data engineering projects, and analytical expertise.',
  });
};

export default function Resume() {
  const skillsRef = useRef();
  const workExpRef = useRef();
  const educationRef = useRef();
  const techStackRef = useRef();
  const projectsRef = useRef();
  
  const areSkillsVisible = useInViewport(skillsRef);
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
              </div>
                {/* Experience Item 1 */}
              <div className={styles.resumeRow}>
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">Jun 2024 — Present</Text>
                </div>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Data Engineering Intern
                </Heading>
                <Text size="m">DataFlow Technologies</Text>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      Built and maintained ETL pipelines processing 2TB+ of daily data using Apache Airflow and Python
                    </ListItem>
                    <ListItem>
                      Optimized SQL queries and database performance, reducing processing time by 40% on PostgreSQL and Snowflake
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
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">Sep 2023 — May 2024</Text>
                </div>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Data Analyst
                </Heading>
                <Text size="m">University Analytics Department</Text>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      Analyzed student performance data to identify patterns and trends affecting graduation rates
                    </ListItem>
                    <ListItem>
                      Created automated reporting dashboards using Power BI and Tableau, serving 500+ faculty members
                    </ListItem>
                    <ListItem>
                      Developed predictive models to forecast enrollment trends with 95% accuracy using Python and scikit-learn
                    </ListItem>
                    <ListItem>
                      Collaborated with IT team to migrate legacy reporting systems to cloud-based solutions on AWS
                    </ListItem>
                  </List>
                </div>
              </div>
              
              {/* Experience Item 3 */}
              <div className={styles.resumeRow}>
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">May 2023 — Aug 2023</Text>
                </div>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Junior Data Engineer
                </Heading>
                <Text size="m">TechStart Solutions</Text>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      Designed and implemented data warehouse architecture using dimensional modeling principles
                    </ListItem>
                    <ListItem>
                      Built automated data pipelines using Apache Airflow to ingest data from multiple sources (APIs, databases, files)
                    </ListItem>
                    <ListItem>
                      Implemented data validation and testing frameworks, reducing data quality issues by 60%
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
              </div>
                {/* Education Item 1 - Masters */}
              <div className={styles.resumeRow}>
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">2023 — 2025</Text>
                </div>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Master of Science in Data Engineering
                </Heading>
                <Text size="m">University of Technology</Text>
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
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">2019 — 2023</Text>
                </div>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Bachelor of Science in Computer Science with Data Analytics Minor
                </Heading>
                <Text size="m">State University</Text>
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
                    <Icon icon="python" />
                  </div>
                  <span className={styles.skillName}>Python</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="database" />
                  </div>
                  <span className={styles.skillName}>SQL</span>
                </div>                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="chart" />
                  </div>
                  <span className={styles.skillName}>Data Visualization</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="spark" />
                  </div>
                  <span className={styles.skillName}>Apache Spark</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="airflow" />
                  </div>
                  <span className={styles.skillName}>Apache Airflow</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="kafka" />
                  </div>
                  <span className={styles.skillName}>Apache Kafka</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="snowflake" />
                  </div>
                  <span className={styles.skillName}>Snowflake</span>
                </div>                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="gcp" />
                  </div>
                  <span className={styles.skillName}>Google Cloud</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="docker" />
                  </div>
                  <span className={styles.skillName}>Docker</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="kubernetes" />
                  </div>
                  <span className={styles.skillName}>Kubernetes</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="postgresql" />
                  </div>
                  <span className={styles.skillName}>PostgreSQL</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="mongodb" />
                  </div>
                  <span className={styles.skillName}>MongoDB</span>
                </div>                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="pandas" />
                  </div>
                  <span className={styles.skillName}>Pandas</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="tableau" />
                  </div>
                  <span className={styles.skillName}>Tableau</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="powerbi" />
                  </div>
                  <span className={styles.skillName}>Power BI</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="git" />
                  </div>
                  <span className={styles.skillName}>Git</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="terraform" />
                  </div>
                  <span className={styles.skillName}>Terraform</span>
                </div>                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="dbt" />
                  </div>
                  <span className={styles.skillName}>dbt</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="java" />
                  </div>
                  <span className={styles.skillName}>Java</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="github-actions" />
                  </div>
                  <span className={styles.skillName}>GitHub Actions</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="r-language" />
                  </div>
                  <span className={styles.skillName}>R</span>
                </div>
              </div>
            </div>
            
            <Divider className={styles.divider} />
              {/* Projects Section */}
            <div className={styles.section} ref={projectsRef} data-visible={isProjectsVisible}>
              <div className={styles.sectionHeading}>
                <Heading as="h2" level={4}>
                  Some Things I've Built
                </Heading>
                <div className={styles.sectionLine} />
              </div>
              
              <div className={styles.projectsContainer}>
                {/* Project 1 */}
                <div className={styles.projectCard}>
                  <div className={styles.projectContent}>
                    <div className={styles.projectLabel}>
                      <Text size="s">Featured Project</Text>
                    </div>
                    <Heading as="h3" level={4} className={styles.projectTitle}>
                      Real-time Data Pipeline for E-commerce Analytics
                    </Heading>
                    <div className={styles.projectDescription}>
                      <Text>
                        A scalable data engineering project processing real-time e-commerce transactions. 
                        Built end-to-end data pipeline using Apache Kafka, Spark Streaming, and Airflow processing 100k+ events/minute. 
                        Implemented data quality checks and monitoring with Great Expectations and Grafana.
                      </Text>
                    </div>
                    <div className={styles.projectTechStack}>
                      <Text size="s">Apache Kafka</Text>
                      <Text size="s">Spark Streaming</Text>
                      <Text size="s">Airflow</Text>
                      <Text size="s">AWS EKS</Text>
                      <Text size="s">Grafana</Text>
                      <Text size="s">Tableau</Text>
                    </div>
                    <div className={styles.projectLinks}>
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
                  <div className={styles.projectImage}>
                    <ThemeImage
                      src={vizLightImage}
                      srcSet={`${vizLightImage} 800w, ${vizLightImage} 1920w`}
                      placeholder={vizLightPlaceholder}
                      alt="Real-time data pipeline dashboard"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Project 2 */}
                <div className={styles.projectCard} data-reverse="true">
                  <div className={styles.projectContent}>
                    <div className={styles.projectLabel}>
                      <Text size="s">Featured Project</Text>
                    </div>
                    <Heading as="h3" level={4} className={styles.projectTitle}>
                      Customer Data Warehouse & Analytics Platform
                    </Heading>
                    <div className={styles.projectDescription}>
                      <Text>
                        A comprehensive data warehouse solution for customer analytics and reporting. 
                        Designed star schema data warehouse in Snowflake handling 50M+ customer records with 
                        CDC pipelines using Debezium and Kafka for real-time data synchronization.
                      </Text>
                    </div>
                    <div className={styles.projectTechStack}>
                      <Text size="s">Snowflake</Text>
                      <Text size="s">Debezium</Text>
                      <Text size="s">Kafka</Text>
                      <Text size="s">dbt</Text>
                      <Text size="s">Power BI</Text>
                      <Text size="s">Python</Text>
                    </div>
                    <div className={styles.projectLinks}>
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
                  <div className={styles.projectImage}>
                    <ThemeImage
                      src={vizDarkImage}
                      srcSet={`${vizDarkImage} 800w, ${vizDarkImage} 1920w`}
                      placeholder={vizDarkPlaceholder}
                      alt="Data warehouse analytics platform"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Project 3 */}
                <div className={styles.projectCard}>
                  <div className={styles.projectContent}>
                    <div className={styles.projectLabel}>
                      <Text size="s">Featured Project</Text>
                    </div>
                    <Heading as="h3" level={4} className={styles.projectTitle}>
                      IoT Sensor Data Processing & Anomaly Detection
                    </Heading>
                    <div className={styles.projectDescription}>
                      <Text>
                        A machine learning-powered system for processing IoT sensor data and detecting anomalies. 
                        Processed streaming data from 10,000+ IoT sensors using Apache Kafka and Spark Streaming with 
                        95% accuracy in identifying equipment failures.
                      </Text>
                    </div>
                    <div className={styles.projectTechStack}>
                      <Text size="s">Apache Kafka</Text>
                      <Text size="s">Spark Streaming</Text>
                      <Text size="s">Kubernetes</Text>
                      <Text size="s">Docker</Text>
                      <Text size="s">Python</Text>
                      <Text size="s">TensorFlow</Text>
                    </div>
                    <div className={styles.projectLinks}>
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
                  <div className={styles.projectImage}>
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