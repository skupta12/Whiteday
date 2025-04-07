import { cn } from '@/lib/utils';

export const Prose = ({ html, className }: { html: string; className?: string }) => {
  return (
    <div
      className={cn(
        'mx-auto max-w-6xl text-base leading-7 text-black',
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;