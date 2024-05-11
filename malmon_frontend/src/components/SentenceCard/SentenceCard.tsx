import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import s from './SentenceCard.module.scss';

export default function SentenceCard(
  {value}: {value: String}
  ) {

  
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  
  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 },
  // };

  const slideInFromEdge = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={slideInFromEdge}
      transition={{ duration: 0.5 }}
      className={s.card}
    >
      <div className={s.card__cardContent}>
        <p>{value}</p>
      </div>
    </motion.div>
  )
}