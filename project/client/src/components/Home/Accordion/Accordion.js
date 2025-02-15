"use client"
// ======================== Imports ========================
import 'flowbite';
import React from 'react'
import AccordionCard from './AccordionCard';
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';

export default function Accordion() {
    const AccordionData = [
        {
            "title": "What type of school is Alia Girls College?",
            "description": "Alia Girls College is an all-girls school providing education from Nursery to Class 10 with a focus on academic excellence and overall development."
        },
        {
            "title": "Where is the school located?",
            "description": "The school is located at  Bhudakudhahaan Mod, in front of Guraini Petrol Pump, Jaunpur."
        },
        {
            "title": " Which board is the school affiliated with?",
            "description": "The school is affiliated with CBSE / ICSE / UP Board."
        },
        {
            "title": "What is the medium of instruction?",
            "description": "The school follows an English-medium curriculum, but Hindi and regional languages are also taught as per the board guidelines"
        },
        {
            "title": "What is the school’s timing?",
            "description": "School timings are 10am  to 3pm , but they may vary for different grades."
        },
        {
            "title": "What documents are required for admission?",
            "description": "The required documents include: Birth Certificate Aadhaar Card (if available) Passport-size photographs"
        },
        {
            "title": "Does the school offer computer education?",
            "description": "Yes, Computer Science is a part of the curriculum from Class 1 onwards."
        },
        {
            "title": "Are parent-teacher meetings (PTMs) conducted?",
            "description": "Are parent-teacher meetings (PTMs) conducted"
        },
        {
            "title": " Does the school conduct exams?",
            "description": "Yes, the school follows a semester-wise examination system as per the affiliated board’s guidelines"
        }
    ]

    return (
        <div className='mb-10'>
            <AnimatedElement>
                <h1 className="m-4 mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| FAQ</span> :</h1>
            </AnimatedElement>
            {AccordionData.map((data, index) => (
                <AccordionCard key={index} title={data.title} description={data.description} />
            ))}
        </div>

    )
}
