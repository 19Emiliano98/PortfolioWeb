import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LinkBar from './components/appBar/LinkBar.tsx';
import HomeSection from './components/home/HomeSection.tsx';
import TechSection from "./components/technologies/TechSection.tsx";
import ExperienceSection from "./components/experience/ExperienceSection.tsx";
import ProjectsSection from './components/projects/ProjectsSection.tsx';
import Contact from './components/contact/Contact.tsx';

import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ backgroundColor: '#171624', minHeight: '100vh', m: -1}}>
      <LinkBar />
      <BrowserRouter>
				<Routes>
					<Route path="/aboutme" element={<HomeSection />}/>
          <Route path="/technologies" element={<TechSection />}/>
          <Route path="/experience" element={<ExperienceSection />}/>
          <Route path="/projects" element={<ProjectsSection />}/>
					<Route path="*" element={<Navigate to='/aboutme' />}/>
				</Routes>
			</BrowserRouter>
      <Box sx={{ position: 'fixed', top: '44%', left: '2%' }}>
        <Contact />
      </Box>
    </Box>
  )
}

export default App;
