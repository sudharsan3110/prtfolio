
import React from 'react'
import FetchGitHubData from '../components/githubfetch'
import ReadMePage from '../components/inputform'
import { SkillsProvider } from '@/context/Skillcontext'
const Home: React.FC = () => {
    return (
        <SkillsProvider>
        <div>
            <FetchGitHubData />
            <ReadMePage />
        </div>
        </SkillsProvider>
    ) 
}
  export default Home;

