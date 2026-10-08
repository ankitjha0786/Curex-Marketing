'use client';

import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const width = maxHeight > 0 ? (scrollTop / maxHeight) * 100 : 0;
      document.getElementById('pg').style.width = `${width}%`;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return <div id="pg" />;
}
