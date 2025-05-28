import { classes } from '~/utils/style';
import styles from './image-credit.module.css';

export const ImageCredit = ({ credit, className, ...rest }) => {
  if (!credit) return null;
  
  return (
    <div 
      className={classes(styles.credit, className)} 
      dangerouslySetInnerHTML={{ __html: credit }}
      {...rest}
    />
  );
};
