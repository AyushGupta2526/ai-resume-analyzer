import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants/index";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { use, useEffect, useState } from "react";
import resume from "./resume";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
    const { auth, fs } = usePuterStore();
    const navigate = useNavigate();
    const [resumeUrl, setResumeUrl] = useState('');

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated]);

    useEffect(() => {
      const loadResume = async () => {
        const blob = await fs.read(resume.imagePath);
        if(!blob) return;
        let url = URL.createObjectURL(blob);
        setResumeUrl(url);
      }

      loadResume
    }, [resume.imagePath]);

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>
    
    
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </section>
  </main>
}
