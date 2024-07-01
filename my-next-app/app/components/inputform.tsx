'use client'
import { useState } from 'react';
import { ReadMeContextProvider } from '../../context/ReadmeContextProvider';
import MarkdownPreview from './markdownpreview'; // Adjust filename if needed
import Section from './sectio'; // Adjust filename if needed
import DynamicInputBox from './onebox'; // Adjust filename if needed
import Image from 'next/image';


import skills from '../../data/skills'
const ReadMePage = () => {
    // Define Skill interface
   
    // Function to handle downloading Markdown content
    const handleDownloadMarkdown = (): void => {
        const markdownContent = document.getElementById('markdown-content') as HTMLElement;

        if (markdownContent) {
            const tempElement = document.createElement('a');
            tempElement.setAttribute(
                'href',
                `data:text/markdown;charset=utf-8,${encodeURIComponent(markdownContent.innerText)}`,
            );
            tempElement.setAttribute('download', 'README.md');
            tempElement.style.display = 'none';
            document.body.appendChild(tempElement);
            tempElement.click();
            document.body.removeChild(tempElement);
        } else {
            console.error('Markdown content element not found');
        }
    };

    return (
        <ReadMeContextProvider>
            <DynamicInputBox />

            <div className="container mx-auto p-4 h-screen">
                <div className="grid grid-cols-12 gap-4 h-full">
                    {/* Section 1: Input Forms */}
                    <Section />

                    {/* Section 2: Skills Display */}
                   

                    {/* Section 3: Display MD File */}
                    <div className="col-span-6 bg-white shadow-md rounded-lg p-4 overflow-auto">
                        <h2 className="text-lg font-semibold mb-4">Markdown Preview</h2>
                        <div className="w-full text-sm text-gray-900 shadow-xl mt-2 p-4 bg-gray-100 border-2 border-solid border-gray-800" id="markdown-box">
                            <MarkdownPreview />
                        </div>
                        <div className="flex justify-end m-10">
                            <button
                                onClick={handleDownloadMarkdown}
                                className="w-auto bg-green-500 text-white py-2 px-4 rounded hover:bg-green-300 transition duration-200">
                                Generate ReadMe
                            </button>
                        </div>
                    </div>

                    {/* Section 4: Select Templates */}
                    {/* Add your template selection section here */}
                </div>
            </div>
        </ReadMeContextProvider>
    );
};

export default ReadMePage;
