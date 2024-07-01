// Skillcontext.tsx
'use client'
import React, { createContext, useContext, useState } from 'react';
import { Skill } from '@/data/types'; // Adjust the import path as per your project structure

interface SkillsContextProps {
  skillsAdded: Skill[];
  addSkill: (skill: Skill) => void;
  removeSkill: (skillId: string) => void; // Function to remove a skill by its id
  clearSkills: () => void; // Function to clear all skills
}

const SkillsContext = createContext<SkillsContextProps | undefined>(undefined);

export const SkillsProvider: React.FC = ({ children }) => {
  const [skillsAdded, setSkillsAdded] = useState<Skill[]>([]);

  const addSkill = (skill: Skill) => {
    setSkillsAdded((prevSkills) => [...prevSkills, skill]);
  };

  const removeSkill = (skillId: string) => {
    setSkillsAdded((prevSkills) => prevSkills.filter((skill) => skill.id !== skillId));
  };

  const clearSkills = () => {
    setSkillsAdded([]);
  };

  return (
    <SkillsContext.Provider value={{ skillsAdded, addSkill, removeSkill, clearSkills }}>
      {children}
    </SkillsContext.Provider>
  );
};

export const useSkills = () => {
  const context = useContext(SkillsContext);
  if (!context) {
    throw new Error('useSkills must be used within a SkillsProvider');
  }
  return context;
};
