import { Image } from '~/components/image';
import { useTheme } from '~/components/theme-provider';

export const ThemeImage = ({ 
  srcLight, 
  srcDark,
  srcSetLight,
  srcSetDark,
  placeholderLight,
  placeholderDark,
  ...props 
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Image
      src={isDark ? srcDark : srcLight}
      srcSet={isDark ? srcSetDark : srcSetLight}
      placeholder={isDark ? placeholderDark : placeholderLight}
      {...props}
    />
  );
};