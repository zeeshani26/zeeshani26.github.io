// Personal Information - Update these values as your career progresses
// This makes the portfolio futureproof and easy to maintain

export const PERSONAL_INFO = {
  name: "Zeeshan Ilahi",

  education: {
    degree: "MS in Computer Science",
    university: "Indiana University",
    location: "Indianapolis, USA",
    status: "completed",
    graduationDate: "May 2026",
    previousEducation: {
      program: "Full Stack Developer",
      school: "Masai School",
      location: "Bangalore, IN",
      completed: "March 2023",
    },
  },

  tagline:
    "Full-stack software engineer specializing in microservices, cloud systems, and AI-assisted applications",

  headline:
    "I build scalable web platforms and distributed backends, from MERN products to Java/Spring microservices with explainable AI.",

  openToWork: true,
  availability: "Open to Software Engineer & Full-Stack roles, Remote or Indianapolis",

  heroTitles: [
    "Full Stack Software Engineer.",
    "Microservices & Cloud Developer.",
    "AI-Assisted Systems Builder.",
    "Backend & Distributed Systems Engineer.",
  ],

  currentRole: {
    title: "Software Engineer",
    company: null,
    location: "Indianapolis, USA",
  },
};

// Helper function to get education text
export const getEducationText = () => {
  const { education } = PERSONAL_INFO;
  
  if (education.status === "completed" && education.graduationDate) {
    return `MS in Computer Science from ${education.university} (${education.graduationDate})`;
  } else {
    return `MS in Computer Science at ${education.university}`;
  }
};

export const getIntroText = () => {
  const { education, currentRole } = PERSONAL_INFO;

  if (currentRole.company) {
    return `${currentRole.title} at ${currentRole.company}`;
  }
  if (education.status === "completed") {
    return `${education.degree} graduate · ${education.university} · Building production-ready full-stack & microservices systems`;
  }
  return `Currently pursuing ${education.degree} at ${education.university}`;
};

