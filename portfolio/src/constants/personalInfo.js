// Personal Information - Update these values as your career progresses
// This makes the portfolio futureproof and easy to maintain

export const PERSONAL_INFO = {
  // Education - Update when you graduate
  education: {
    degree: "MS in Computer Science",
    university: "Indiana University",
    location: "Indianapolis, USA",
    status: "completed", // Change to "completed" when you graduate, or remove this field
    graduationDate: "May 2026", // Add graduation date when completed, e.g., "May 2026"
    previousEducation: {
      program: "Full Stack Developer",
      school: "Masai School",
      location: "Bangalore, IN",
      completed: "March 2023"
    }
  },
  
  // Professional tagline - Update as your role evolves
  tagline: "Passionate Software Developer with expertise in full-stack web development and cloud technologies",
  
  // Current role - Update when you change jobs
  currentRole: {
    title: "Software Developer",
    company: null, // Set to null if not currently employed, or add company name
    location: "Indianapolis, USA"
  }
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

// Helper function to get intro text
export const getIntroText = () => {
  const { education, currentRole } = PERSONAL_INFO;
  
  if (currentRole.company) {
    return `${currentRole.title} at ${currentRole.company}`;
  } else if (education.status === "completed") {
    return `${education.degree} graduate from ${education.university}`;
  } else {
    return `Currently pursuing ${education.degree} at ${education.university}`;
  }
};

