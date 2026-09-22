import { MdDevices, MdSpeed, MdCode, MdLayers } from "react-icons/md";

export const servicesData = [
  {
    id: 1,
    icon: <MdDevices size={26} />,
    title: "Responsive Web Design",
    description: "Building modern, fluid websites that look and perform exceptionally well across all devices, from mobile phones to large desktop screens.",
    tag: "UI / UX",
    colSpan: "col-span-1 md:col-span-2", // كارت عريض كرييتف
  },
  {
    id: 2,
    icon: <MdCode size={26} />,
    title: "Frontend Development",
    description: "Turning UI/UX designs into clean, scalable, and high-performance web applications using React, Vite, and Tailwind CSS.",
    tag: "Development",
    colSpan: "col-span-1",
  },
  {
    id: 3,
    icon: <MdSpeed size={26} />,
    title: "Performance Optimization",
    description: "Speeding up web interfaces, optimizing assets, and ensuring lightning-fast load times for a seamless user experience.",
    tag: "Speed",
    colSpan: "col-span-1",
  },
  {
    id: 4,
    icon: <MdLayers size={26} />,
    title: "Component Architecture",
    description: "Creating reusable, maintainable component structures and transforming complex ideas into intuitive, user-friendly digital products.",
    tag: "Architecture",
    colSpan: "col-span-1 md:col-span-2", // كارت عريض كرييتف
  },
];