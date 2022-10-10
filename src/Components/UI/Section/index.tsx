import cn from 'classnames';
import React, { forwardRef, useRef } from 'react';

const baseClassName = 'section';

interface ISection {
  className?: string;
  children?: React.ReactNode;
}

const Section = (
  { children, className }: ISection,
  ref?: React.Ref<HTMLDivElement>
) => {
  const localRef = useRef(null);
  const containerRef = ref || localRef;
  const sectionClassName = cn(baseClassName, className);

  return (
    <section className={sectionClassName} ref={containerRef}>
      {children}
    </section>
  );
};

export default forwardRef(Section);
