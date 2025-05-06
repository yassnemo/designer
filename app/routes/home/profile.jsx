import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Icon } from '~/components/icon';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Hamish, currently I live in Sydney working as a senior product designer at{' '}
      <Link href="https://www.qwilr.com">Qwilr</Link>. My projects include UX design, UI
      animations, and icon illustration. Being comfortable with code allows me to rapidly
      prototype and validate experiences. If you’re interested in the tools and software I
      use check out my <Link href="/uses">uses page</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time I like to practice Brazilian Jiu Jitsu, play video games, and{' '}
      <Link href="/projects/volkihar-knight">make mods</Link>. I’m always down for hearing
      about new projects, so feel free to drop me a line.
    </Text>
    
    {/* START: Education Section - Remove entire section if not needed */}
    <Heading className={styles.sectionTitle} data-visible={visible} level={4}>
      <DecoderText text="Education" start={visible} delay={600} />
    </Heading>
    <div className={styles.education} data-visible={visible}>
      <div className={styles.educationItem}>
        <Text className={styles.educationDegree} size="m" as="h5">
          Bachelor of Mathematics and Computer Science
        </Text>
        <Text className={styles.educationDetails} size="s" as="div">
          University of Ibn Zohr • 2021-2024
        </Text>
      </div>
      <div className={styles.educationItem}>
        <Text className={styles.educationDegree} size="m" as="h5">
          Data Science Certification
        </Text>
        <Text className={styles.educationDetails} size="s" as="div">
          Alx • 2025-Present
        </Text>
      </div>
    </div>
    {/* END: Education Section */}
    
    {/* START: Tech Stack Section - Remove entire section if not needed */}
    <Heading className={styles.sectionTitle} data-visible={visible} level={4}>
      <DecoderText text="Tech Stack" start={visible} delay={700} />
    </Heading>
    <div className={styles.techStack} data-visible={visible}>
      <div className={styles.techCategory}>
        <Text className={styles.techTitle} size="s" as="h5">
          Languages
        </Text>
        <div className={styles.techIcons}>
          <Icon icon="javascript" className={styles.techIcon} size={36} aria-label="JavaScript" />
          <Icon icon="typescript" className={styles.techIcon} size={36} aria-label="TypeScript" />
          <Icon icon="html" className={styles.techIcon} size={36} aria-label="HTML" />
          <Icon icon="css" className={styles.techIcon} size={36} aria-label="CSS" />
          <Icon icon="python" className={styles.techIcon} size={36} aria-label="Python" />
        </div>
      </div>
      <div className={styles.techCategory}>
        <Text className={styles.techTitle} size="s" as="h5">
          Frameworks & Libraries
        </Text>
        <div className={styles.techIcons}>
          <Icon icon="react" className={styles.techIcon} size={36} aria-label="React" />
          <Icon icon="nextjs" className={styles.techIcon} size={36} aria-label="Next.js" />
          <Icon icon="node" className={styles.techIcon} size={36} aria-label="Node.js" />
          <Icon icon="express" className={styles.techIcon} size={36} aria-label="Express" />
          <Icon icon="remix" className={styles.techIcon} size={36} aria-label="Remix" />
          <Icon icon="vue" className={styles.techIcon} size={36} aria-label="Vue.js" />
          <Icon icon="tailwind" className={styles.techIcon} size={36} aria-label="Tailwind CSS" />
        </div>
      </div>
      <div className={styles.techCategory}>
        <Text className={styles.techTitle} size="s" as="h5">
          Tools & Platforms
        </Text>
        <div className={styles.techIcons}>
          <Icon icon="git" className={styles.techIcon} size={36} aria-label="Git" />
          <Icon icon="docker" className={styles.techIcon} size={36} aria-label="Docker" />
          <Icon icon="aws" className={styles.techIcon} size={36} aria-label="AWS" />
          <Icon icon="figma" className={styles.techIcon} size={36} aria-label="Figma" />
          <Icon icon="adobe" className={styles.techIcon} size={36} aria-label="Adobe" />
        </div>
      </div>
    </div>
    {/* END: Tech Stack Section */}
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
