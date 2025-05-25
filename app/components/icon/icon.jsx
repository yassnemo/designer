import { classes } from '~/utils/style';
import styles from './icon.module.css';
import { forwardRef } from 'react';
import sprites from './icons.svg';
import { AWSIcon, DockerIcon } from './inline-icons';

// Import individual SVG files for tech stack (fallback for icons not yet converted to inline)
import pythonIcon from '~/assets/icons/python.svg';
import sparkIcon from '~/assets/icons/apache-spark-svgrepo-com.svg';
import airflowIcon from '~/assets/icons/apache-airflow-svgrepo-com.svg';
import kafkaIcon from '~/assets/icons/data-accesskafka-cluster-svgrepo-com.svg';
import snowflakeIcon from '~/assets/icons/snowflake-svgrepo-com.svg';
import gcpIcon from '~/assets/icons/gcp-svgrepo-com.svg';
import kubernetesIcon from '~/assets/icons/kubernetes-svgrepo-com.svg';
import postgresqlIcon from '~/assets/icons/postgresql-svgrepo-com.svg';
import terraformIcon from '~/assets/icons/terraform-svgrepo-com.svg';
import dbtIcon from '~/assets/icons/dbt-svgrepo-com.svg';
import powerbiIcon from '~/assets/icons/powerbi-svgrepo-com.svg';
import javaIcon from '~/assets/icons/java-svgrepo-com.svg';
import githubActionsIcon from '~/assets/icons/github-actions.svg';
import rLanguageIcon from '~/assets/icons/r-language.svg';

// Inline SVG components for better theming
const inlineIcons = {
  aws: AWSIcon,
  docker: DockerIcon,
};

// Mapping for individual SVG files (fallback)
const individualIcons = {
  python: pythonIcon,
  spark: sparkIcon,
  airflow: airflowIcon,
  kafka: kafkaIcon,
  snowflake: snowflakeIcon,
  gcp: gcpIcon,
  kubernetes: kubernetesIcon,
  postgresql: postgresqlIcon,
  terraform: terraformIcon,
  dbt: dbtIcon,
  powerbi: powerbiIcon,
  java: javaIcon,
  'github-actions': githubActionsIcon,
  'r-language': rLanguageIcon,
};

export const Icon = forwardRef(({ icon, className, size, ...rest }, ref) => {
  // Check if this icon has an inline SVG component (preferred for theming)
  if (inlineIcons[icon]) {
    const InlineIcon = inlineIcons[icon];
    return (
      <InlineIcon
        ref={ref}
        size={size || 24}
        className={classes(styles.icon, className)}
        {...rest}
      />
    );
  }

  // Check if this icon has an individual SVG file
  if (individualIcons[icon]) {
    return (
      <img
        ref={ref}
        src={individualIcons[icon]}
        alt={icon}
        className={classes(styles.icon, className)}
        width={size || 24}
        height={size || 24}
        {...rest}
      />
    );
  }

  // Fall back to sprite system for other icons
  return (
    <svg
      aria-hidden
      ref={ref}
      className={classes(styles.icon, className)}
      width={size || 24}
      height={size || 24}
      {...rest}
    >
      <use href={`${sprites}#${icon}`} />
    </svg>
  );
});
