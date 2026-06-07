// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A collection of my professional and personal projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download my CV by clicking the CV icon on the right or read through a more detailed version below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-msc-adams-car-project",
          title: 'MSC ADAMS Car Project',
          description: "Adams Car Suspension and Full Vehicle Analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-design-of-an-fsae-rear-wing-a-systematic-approach",
          title: 'Design of an FSAE Rear Wing - A Systematic Approach',
          description: "Systematic aerodynamic redesign of a Formula Student rear wing assembly — from requirements through CFD, FEA, and detailed tolerancing for the ACAD course final exam at MUNER.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-ride-comfort-of-a-vehicle-7-dof-vibrational-analysis",
          title: 'Ride Comfort of a Vehicle — 7-DOF Vibrational Analysis',
          description: "Vibrational analysis of a 7 degrees-of-freedom vehicle model across three road profiles, implemented in MATLAB with modal analysis and direct numerical integration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-f1-telemetry-amp-race-analysis-tool",
          title: 'F1 Telemetry &amp;amp; Race Analysis Tool',
          description: "A config-driven Python notebook for visualising Formula 1 session data — telemetry traces, tyre strategy, lap distributions, weather overlays and more — built on FastF1 and matplotlib",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-nba-play-by-play-scheme-amp-coaching-analysis",
          title: 'NBA Play-by-Play Scheme &amp;amp; Coaching Analysis',
          description: "A Python notebook for dissecting NBA game data from play-by-play feeds — shot profiles, scoring runs, foul patterns, substitution timing, and turnover breakdown, all pointing at the coaching decisions underneath",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-bachelor-thesis-aerodynamic-evaluation-of-an-fsae-car",
          title: 'Bachelor Thesis - Aerodynamic Evaluation of an FSAE Car',
          description: "Full aerodynamics package design, CFD analysis, and carbon fibre manufacturing for the 2023 Orion Racing India FSAE car",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_May_2026.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%69%64%61%6E%69%73%68%34%35%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/siddharth-anish-56663b1ab/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
