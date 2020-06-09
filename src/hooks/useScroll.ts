import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useScroll = () => {
  const effect = `data-aos="fade-up"`;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return [effect];
};

export default useScroll;
