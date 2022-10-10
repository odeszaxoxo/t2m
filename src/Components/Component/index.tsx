import React from 'react';

interface test {
  align: 'center' | 'right';
}

export default function Component({ align }: test) {
  return <div className={align}>hello, im component</div>;
}
