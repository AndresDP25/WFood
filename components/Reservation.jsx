'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import ReservationForm from './ReservationForm'

const Reservation = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      className='xl:my-16 xl:h-[750px] xl:bg-reservation xl:bg-no-repeat 
      xl:flex xl:flex-col xl:justify-end xl:items-end' id='reservation'
    >
      <motion.div 
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='bg-black w-full xl:max-w-[651px] min-h-[388px] p-6 md:p-11 xl:p-12 xl:mb-16 h-screen md:h-auto'
      >
          <h2 className='text-white mb-7 capitalize'>Book a table</h2>
          <ReservationForm />
      </motion.div>
    </motion.section>
  )
}

export default Reservation