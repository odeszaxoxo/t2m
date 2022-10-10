import { useEffect } from 'react';

export default function ExampleEffect() {
  useEffect(() => {
    console.log('atom effect');
  }, []);

  return null;
}
