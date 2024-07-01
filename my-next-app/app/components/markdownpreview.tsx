// MarkdownPreview.tsx
import React from 'react';
import { useReadMeContext } from '../../context/ReadmeContextProvider';
import { useSkills } from '../../context/Skillcontext'; // Adjust the import path as per your project structure
import Image from 'next/image';
const MarkdownPreview: React.FC = () => {
    const { sections } = useReadMeContext();
    const { skillsAdded, removeSkill } = useSkills(); // Destructure skillsAdded from useSkills
    const handleRemoveSkill = (skillId: string) => {
        removeSkill(skillId);
    };
    return (
        <div className="col-span-3 bg-white shadow-md rounded-lg p-4 overflow-auto">
            <h2 className="text-lg font-semibold mb-4">Markdown Preview</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold">🔭 I am currently working on</h3>
                    <p>{sections.currentWork}</p>
                </div>
                <div>
                    <h3 className="font-semibold">🌱 I am currently learning</h3>
                    <p>{sections.currentLearning}</p>
                </div>
                <div>
                    <h3 className="font-semibold">⚡ Fun facts</h3>
                    <p>{sections.funFacts}</p>
                </div>
                <div>
                    <h3 className="font-semibold ">Skills</h3>
                    <div className="flex flex-wrap absolute">
                        {skillsAdded.map((skill) => (
                            <div key={skill.id} className="flex items-center space-x-2 m-2">
                                <Image src={skill.iconUrl} alt={skill.label} width={30} height={30} />
                                <div>{skill.label}</div>
                                <button className='bg-blue-400 rounded-lg' onClick={() => handleRemoveSkill(skill.id)}> － </button>
                            </div>
                           
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarkdownPreview;
