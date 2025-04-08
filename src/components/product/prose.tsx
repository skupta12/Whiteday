import styles from '@/styles';

export const Prose = ({ html }: { html: string; className?: string }) => {
  return (
    <div
      className={styles.paragraph}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;