import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
// Import the Moroccan mint tea image from static files
import moroccanMintTeaImage from '/static/moroccan-mint-tea.jpg';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={moroccanMintTeaImage} 
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="Here's a quick rundown of the tools, apps, and gear I use as a Data Science student to work with data, build projects, and keep my workflow smooth. <br />And yeah, that's Moroccan tea in the background, my dad swears it's the ultimate headache fix!"
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Data Science & Visualization</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://jupyter.org/">Jupyter Notebook</Link> My go-to 
                    for coding up Python and R scripts, especially for data analysis 
                    and machine learning projects like my <Link href="https://github.com/yassnemo/real-time-sentiment-twitter-analysis">
                    Twitter Sentiment Analysis</Link>. It’s perfect for mixing code, 
                    visuals, and notes.{' '}
                    
                  </ListItem>
                  <ListItem>
                    <Link href="https://app.powerbi.com/">Power BI</Link> is what I use to 
                    create dashboards that turn raw data into clear, stakeholder-friendly 
                    stories. It's quite literally my secret ingridiant for making numbers 
                    pop.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.knime.com/">KNIME</Link> is a lifesaver for quick 
                    sentiment and keyword analysis with drag-and-drop workflows. Great if you 
                    want to prototype without diving too deep into code.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.dask.org/">Dask</Link> is the my go to when 
                    datasets get too big for Pandas. It’s quite literally like Pandas on 
                    steroids, allowing me to push massive CSV files or run distributed ML 
                    models without crashing my humble laptop. 
                  </ListItem>
                  <ListItem>
                    <Link href="https://mlflow.org/">MLflow</Link> a pro favorite for 
                    managing the machine learning lifecycle. I use it to track experiments, 
                    log model parameters, and deploy models. 
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://vscodium.com/">VS Code</Link> as my
                    main code editor, rocking the <Link href="https://vscodium.com/">
                    Night Owl</Link> theme with Fira Code font for that clean, 
                    readable vibe. 
                  </ListItem>
                  <ListItem>
                   Chrome is my main browser. DevTools is a game-changer for real-time 
                   tweaks.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.docker.com/">Docker</Link>  I lean on this for 
                    setting up environments, like my FHIR server for a Google Summer 
                    of Code project. Keeps things tidy and reproducible.
                  </ListItem>
                  <ListItem>
                    Git & GitHub is where I stash my projects. Git for version control 
                    is my safety net.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Creative Tools</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://vscodium.com/">Canva</Link> for 
                    pressentations and other graphics. It’s super user-friendly 
                    and has a ton of templates.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.napkin.ai/">Napkin</Link> is a neat tool 
                    for sketching out ideas and wireframes for my projects. I mainly 
                    use it in turning rough concepts into clear visuals fast.
                  </ListItem>
                  <ListItem>
                    FL Studio is my go-to for producing 
                    <Link href="https://soundcloud.com/yassine-erradouani"> Quran 
                    recitations</Link>. It's quite simple to use and has a ton of 
                    features for mixing and mastering.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Productivity</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I like using <Link href="https://www.notion.com/">Notion</Link> to 
                    Keep my project ideas, study notes, and blog drafts organized. It’s 
                    like my brain’s external hard drive.
                  </ListItem>
                  <ListItem>
                    <Link href="https://colab.research.google.com/">Google Colab </Link>  
                    is what I use for running heavy machine learning models when my laptop 
                    needs a break. Cloud power for the win.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Windows 10 Pro & Kali Linux</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Chrome & Tor</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Redragon K617</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>E-YOOSO X-31 </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>HP EliteBook 840 G7</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
