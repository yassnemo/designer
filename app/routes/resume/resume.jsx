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
    description: 'My academic achievements, data science projects, and technical skills.',
  });
};

export default function Resume() {
  const skillsRef = useRef();
  const workExpRef = useRef();
  const educationRef = useRef();
  const projectsRef = useRef();
  
  const areSkillsVisible = useInViewport(skillsRef);
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
        />
        <ProjectHeader
          title={<DecoderText text="Resume" />}
          description="My academic achievements, data science projects, and technical skills."
        />
        <div className={styles.buttonBackground}>
          <Button 
            className={styles.downloadButton}
            href="/data-science-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Button>
        </div>
        
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
                  Data Science Intern
                </Heading>
                <Text size="m">QuantumTech Analytics</Text>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      Developed machine learning models to predict customer churn, improving retention strategies by 25%
                    </ListItem>
                    <ListItem>
                      Performed exploratory data analysis on large datasets using Python (Pandas, NumPy) and visualized insights with Matplotlib and Seaborn
                    </ListItem>
                    <ListItem>
                      Collaborated with cross-functional teams to implement data-driven solutions for business challenges
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
                  Research Assistant
                </Heading>
                <Text size="m">University Data Science Lab</Text>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      Assisted in research projects focusing on natural language processing and sentiment analysis
                    </ListItem>
                    <ListItem>
                      Implemented deep learning models using TensorFlow and PyTorch for text classification tasks
                    </ListItem>
                    <ListItem>
                      Co-authored a research paper on efficient text preprocessing techniques for low-resource languages
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
                  Data Analysis Volunteer
                </Heading>
                <Text size="m">HealthTech NGO</Text>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      Analyzed public health datasets to identify trends and insights for community health initiatives
                    </ListItem>
                    <ListItem>
                      Created interactive dashboards using Tableau to communicate findings to non-technical stakeholders
                    </ListItem>
                    <ListItem>
                      Developed automated data cleaning scripts that reduced processing time by 40%
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
                  Master of Science in Data Science
                </Heading>
                <Text size="m">University of Advanced Analytics</Text>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      GPA: 3.9/4.0
                    </ListItem>
                    <ListItem>
                      Relevant coursework: Machine Learning, Statistical Methods, Deep Learning, Big Data Analytics, Natural Language Processing
                    </ListItem>
                    <ListItem>
                      Thesis: "Predictive Modeling of Consumer Behavior Using Multi-modal Data"
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
                  Bachelor of Science in Statistics with Computer Science Minor
                </Heading>
                <Text size="m">State University</Text>
                <div className={styles.resumeDetails}>
                  <List>
                    <ListItem>
                      GPA: 3.7/4.0
                    </ListItem>
                    <ListItem>
                      Relevant coursework: Probability Theory, Statistical Inference, Data Structures, Database Systems, Linear Algebra
                    </ListItem>
                    <ListItem>
                      Senior Project: "Exploratory Data Analysis of Urban Mobility Patterns"
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
                    <Icon icon="python" />
                  </div>
                  <span className={styles.skillName}>Python</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="database" />
                  </div>
                  <span className={styles.skillName}>SQL</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="chart" />
                  </div>
                  <span className={styles.skillName}>Data Visualization</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="tensorflow" />
                  </div>
                  <span className={styles.skillName}>TensorFlow</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="pytorch" />
                  </div>
                  <span className={styles.skillName}>PyTorch</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="r" />
                  </div>
                  <span className={styles.skillName}>R</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="jupyter" />
                  </div>
                  <span className={styles.skillName}>Jupyter</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="pandas" />
                  </div>
                  <span className={styles.skillName}>Pandas</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="numpy" />
                  </div>
                  <span className={styles.skillName}>NumPy</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="scikit" />
                  </div>
                  <span className={styles.skillName}>Scikit-Learn</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="tableau" />
                  </div>
                  <span className={styles.skillName}>Tableau</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="statistics" />
                  </div>
                  <span className={styles.skillName}>Statistics</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="spark" />
                  </div>
                  <span className={styles.skillName}>Spark</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="aws" />
                  </div>
                  <span className={styles.skillName}>AWS</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="git" />
                  </div>
                  <span className={styles.skillName}>Git</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <Icon icon="docker" />
                  </div>
                  <span className={styles.skillName}>Docker</span>
                </div>
              </div>
            </div>
            
            <Divider className={styles.divider} />
            
            {/* Projects Section */}
            <div className={styles.section} ref={projectsRef} data-visible={isProjectsVisible}>
              <div className={styles.sectionHeading}>
                <Heading as="h2" level={4}>
                  Projects
                </Heading>
                <div className={styles.sectionLine} />
              </div>
              
              {/* Project 1 */}
              <div className={styles.projectCard}>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Customer Segmentation Analysis
                </Heading>
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">2024</Text>
                </div>
                <div className={styles.resumeDetails}>
                  <Text size="m">
                    A comprehensive customer segmentation project using K-means clustering and PCA.
                  </Text>
                  <List>
                    <ListItem>
                      Performed feature engineering and dimensionality reduction on customer purchase data
                    </ListItem>
                    <ListItem>
                      Identified 5 distinct customer segments with unique purchasing behaviors
                    </ListItem>
                    <ListItem>
                      Created interactive visualizations using Plotly and Dash to communicate findings
                    </ListItem>
                  </List>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className={styles.projectCard}>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Sentiment Analysis of Product Reviews
                </Heading>
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">2023</Text>
                </div>
                <div className={styles.resumeDetails}>
                  <Text size="m">
                    An NLP project to analyze sentiment in e-commerce product reviews.
                  </Text>
                  <List>
                    <ListItem>
                      Built a sentiment analysis model using BERT with 92% accuracy
                    </ListItem>
                    <ListItem>
                      Extracted key topics from reviews using topic modeling (LDA)
                    </ListItem>
                    <ListItem>
                      Developed a Flask API to integrate the model with a product dashboard
                    </ListItem>
                  </List>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className={styles.projectCard}>
                <Heading as="h3" level={5} className={styles.resumeRole}>
                  Time Series Forecasting for Energy Consumption
                </Heading>
                <div className={styles.timePeriod}>
                  <Icon icon="time" className={styles.timeIcon} />
                  <Text size="s">2023</Text>
                </div>
                <div className={styles.resumeDetails}>
                  <Text size="m">
                    A forecasting project to predict household energy consumption.
                  </Text>
                  <List>
                    <ListItem>
                      Implemented ARIMA, SARIMA, and Prophet models for time series prediction
                    </ListItem>
                    <ListItem>
                      Achieved 15% lower RMSE than baseline models by incorporating weather data
                    </ListItem>
                    <ListItem>
                      Created an interactive dashboard for real-time monitoring and predictions
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
                Interested in data science collaborations or discussing my research and projects?
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