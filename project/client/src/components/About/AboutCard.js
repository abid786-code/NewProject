import AnimatedElement from '@/components/Common/Animation/AnimatedElement'
import React from 'react'

export default function AboutCard() {
    return (
        <>
            <AnimatedElement>
                <h1 className="m-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| ABOUT</span> AGC:</h1>
            </AnimatedElement>

            <AnimatedElement>
                <section className="text-gray-600 body-font ">
                    <div className="mx-auto flex py-6 md:px-5 md:flex-row justify-center flex-col items-center">
                        <div className="md:max-w-sm lg:max-w-md md:h-full w-full h-48 overflow-hidden flex justify-center items-center mb-4 md:mb-0">
                            {/* <img className="w-full md:rounded-lg" alt="hero" src="/images/collegepic(1).jpg" /> */}
                            <video className="w-full md:rounded-lg" alt="hero" src='/Video/video1.mp4' autoPlay muted loop />
                        </div>
                        <div className="md:w-1/2  md:pl-8 flex flex-col md:items-start md:text-left items-center">
                            {/* <h1 className="title-font lg:text-3xl text-2xl mb-4 font-bold text-gray-900">
                                “Aspires to be a pre-eminent deemed university of national standing in education and innovation”.
                            </h1> */}
                            <p className="mb-8 leading-relaxed font-medium text-sm sm:text-lg p-2">Alia Girls College was established on January 1, 2022, with a vision to provide quality education and empower young women with knowledge and skills for a brighter future. <span className='font-bold'>The college is committed to academic excellence, holistic development, and fostering a progressive learning environment.</span></p>
                        </div>
                    </div>
                </section>
            </AnimatedElement>


            <AnimatedElement>
                <section className="text-gray-600 body-font ">
                    <div className="mx-auto flex py-10 md:px-5 md:flex-row-reverse justify-center flex-col items-center">
                        <div className="md:max-w-sm lg:max-w-md md:h-full w-full h-48 overflow-hidden flex justify-center items-center mb-4 md:mb-0">
                            <img className="w-full md:rounded-lg" alt="hero" src="/images/images1.jpg" />
                        </div>
                        <div className="md:w-1/2 md:pr-8 flex flex-col md:items-start md:text-left items-center">
                            {/* <h1 className="title-font lg:text-3xl text-2xl mb-4 font-bold text-gray-900">“Aspires to be a pre-eminent deemed university of national standing in education and innovation”.
                            </h1> */}
                            <p className="mb-8 leading-relaxed font-medium text-sm sm:text-lg p-2">Alia Girls College offers a variety of undergraduate and diploma programs in Arts, Science, and Commerce streams. The curriculum is designed to meet industry standards and prepare students for future challenges.</p>
                        </div>
                    </div>
                </section>
            </AnimatedElement>
        </>
    )
}
