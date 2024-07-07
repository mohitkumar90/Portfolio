import React, { useRef } from 'react'
import {motion,  useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div 
            initial={{y:50}}
            whileInView={{y: 0}}
            transition={{duration: 0.5, type: 'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'
                >{position}&nbsp; <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>{work}</p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{scaleY: scrollYProgress}}  className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
                    <Details
                        position='Lead Frontend Development' company='Oodles Technologies'
                        companyLink='https://www.oodlestechnologies.com/'
                        time='Oct 2022 - March 2024' address='Gurgaon, Haryana'
                        work='Worked on the MyHelpa project using reactjs for web and react- native for android and IOS app. MyHelpa is
an web and mobile application designed to support home care professionals with delivering outstanding care at
home. Deployement of mobile app on Google play store and App store. As lead engineer handled project end-to-end translating client requirements into effective sprints, engineering
requirements and managing a team of 5 members while also leading architectural decisions and
development efforts.'
                    />
                     <Details
                        position='Sr. Associate Consultant- Frontend Development' company='Oodles Technologies'
                        companyLink='https://www.oodlestechnologies.com/'
                        time='Jan 2022 - Sept 2022' address='Gurgaon, Haryana'
                        work='Worked on Unikaksha project using react and node js. Unikaksha is an web page designed for online classes and
different courses for Teachers and students. Achieved 30% growth by building out key features like 2 way sync bw tools like Jira, Real-time editor, showcasing
strong leadership and strategic planning abilities.'
                    />
                     <Details
                        position='Associate Consultant - Frontend Developer' company='Oodles Technologies'
                        companyLink='https://www.oodlestechnologies.com/'
                        time='Sept 2020 - Dec 2021' address='Gurgaon, Haryana'
                        work='Successfully built and delivered 3+ products with high-quality code and user-friendly interfaces using React,
Typescript. Ensured 100% uptime for projects, handling deployment and releases.'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience