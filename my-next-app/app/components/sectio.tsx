import React from 'react';
import { useReadMeContext } from '../../context/ReadmeContextProvider';
import Image from 'next/image';
import skills from '@/data/skills';
import { useSkills } from '../../context/Skillcontext';
import { Skill } from '@/data/types';

const Section: React.FC = () => {
    const { sections, updateSection } = useReadMeContext();
    const { skillsAdded, addSkill } = useSkills();

    const handleAddSkill = (skill: Skill) => {
        if(skillsAdded.find((s) => s.id === skill.id)) {
            return 
        }else{
            addSkill(skill);
        }
        
       
        console.log("Skill Added:", skill);
        console.log("Skills List:", skillsAdded);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateSection(name, value);
    };

    return (
        <div className="col-span-3 bg-white shadow-md rounded-lg p-4 overflow-auto">
            <h2 className="text-lg font-semibold mb-4">Input Forms</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    name="currentWork"
                    value={sections.currentWork}
                    onChange={handleInputChange}
                    placeholder="🔭 I am currently working on"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="currentLearning"
                    value={sections.currentLearning}
                    onChange={handleInputChange}
                    placeholder="🌱 I am currently learning"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="funFacts"
                    value={sections.funFacts}
                    onChange={handleInputChange}
                    placeholder="⚡ Fun facts"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
            </div>
            <div>
                <div className="col-span-3 bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-4">Skills</h2>
                    <div className='absolute bg-grey-300 rounded-r-lg '>
                    {skills.map((skill) => (
                        
                        <div key={skill.id} className="  flex items-center space-x-2">
                            <Image src={skill.iconUrl} alt={skill.label} width={50} height={50} />
                            <div>{skill.label}</div>
                            <button 
                                onClick={() => handleAddSkill(skill)} 
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                            >
                             +
                            </button>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
