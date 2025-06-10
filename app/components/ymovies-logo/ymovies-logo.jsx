import { forwardRef } from 'react';
import { classes } from '~/utils/style';
import styles from './ymovies-logo.module.css';
import YMoviesLogoSVG from '~/assets/ymovies-logo.svg';

export const YMoviesLogo = forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={classes(styles.logoContainer, className)} ref={ref} {...props}>
      <img
        src={YMoviesLogoSVG}
        alt="YMovies"
        className={styles.logo}
      />
      <span className={styles.text}>YMovies</span>
    </div>
  );
});

YMoviesLogo.displayName = 'YMoviesLogo';
