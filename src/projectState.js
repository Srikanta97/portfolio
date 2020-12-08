import jobPortal from './img/jobPortal.png';
import music from './img/music.png';
import portfolio from './img/portfolio.png';
import music2 from './img/music2.png';
import portfolio2 from './img/portfolio2.png';

export const ProjectState = () => {
  return [
    {
      title: "Job Portal",
      mainImg: jobPortal,
      secondaryImg: jobPortal,
      url: "/work/job-portal",
      features: [
        {
          title: "Dynamic Search Bar",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Add/Remove companies",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Increment/Decrement vacancies",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Music Player",
      mainImg: music,
      url: "/work/music-player",
      secondaryImg: music2,
      features: [
        {
          title: "Toggle Music Library",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Next/Previous Song",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Slider to drag Playtime",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Portfolio",
      mainImg: portfolio,
      url: "/work/portfolio",
      secondaryImg: portfolio2,
      features: [
        {
          title: "Navigation Support",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Pleasing Animations",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Let me think lol",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};