// data.js
// const projectsData = [
//    {
//       "id": 1,
//       "title": "Online Store",
//       "photo": "https://ritztogel.com/wp-content/uploads/2024/01/b-88.jpg",
//       "link": "https://github.com/sirishkoirala/DigitalStore",
//       "discription": "Created a React online store with categorized data, enabling users to view pictures, prices, and select items for their cart. Users can add multiple items to the cart and later modify it too."
//    },
//    {
//       "id": 2,
//       "title": "Real Estate",
//       "link": "https://github.com/sirishkoirala/Ghar-Nagar",
//       "photo": "https://imageio.forbes.com/specials-images/imageserve/657b29edf09ae8354c4debba/Real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is/960x0.jpg?height=474&width=711&fit=bounds",
//       "discription": "Managed real estate business providing buying, selling, and rental services, ensuring client satisfaction through professional management."
//    },
//    {
//       "id": 3,
//       "title": "Personal Portfolio",
//       "link": "https://github.com/sirishkoirala/portfolio---Light-Theme",
//       "photo": "https://freshdesignweb.com/wp-content/uploads/Imroz-One-Page-Portfolio-Template-700x475.jpg",
//       "discription": "Developed responsive personal website with clean design and comprehensive content for user satisfaction. This very website you are seeing."
//    },
//    {
//       "id": 4,
//       "title": "News Portal",
//       "link": "https://github.com/sirishkoirala/NewsPortal",
//       "photo": "https://vedantasoftware.com/uploads/2021-03/6053bef08b00b.jpg",
//       "discription": "Developed website with API integration, custom search, dynamic data, and personalized interactions for enhanced user experience and tailored content display."
//    },
//    {
//       "id": 5,
//       "title": "Task Manager",
//       "link": "https://github.com/sirishkoirala/Todo-App",
//       "photo": "https://www.kanbanchi.com/wp-content/uploads/2016/06/Productive-700x475.jpg",
//       "discription": "React todo app for task management: add, edit, remove tasks, optimizing productivity and user experience"
//    }
// ]

const projectsData = [
   {
      "id": 1,
      "title": "College ERP System",
      "photo": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='475' viewBox='0 0 700 475'%3E%3Crect width='700' height='475' fill='%23646ee3'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3ECollege ERP System%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='Arial, sans-serif' font-size='16' fill='white' text-anchor='middle' dy='.3em'%3EConfidential Project - Image Not Available%3C/text%3E%3C/svg%3E",
      "link": "https://github.com/sirishkoirala",
      "discription": "Full-featured ERP for colleges with student management, attendance, fee tracking, and reporting modules. Built with Next.js frontend and NestJS backend.",
      "tech": ["Next.js", "NestJS", "PostgreSQL", "Redis", "JWT Auth"],
      "status": "confidential"
   },
   {
      "id": 2,
      "title": "Factory Management System",
      "photo": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&h=475&fit=crop&auto=format",
      "link": "https://github.com/sirishkoirala",
      "discription": "Comprehensive factory management system with inventory control, production tracking, supply chain management, and real-time analytics dashboard.",
      "tech": ["NestJS", "React", "PostgreSQL", "WebSockets", "Chart.js"]
   },
   {
      "id": 3,
      "title": "Astrology Platform",
      "photo": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='475' viewBox='0 0 700 475'%3E%3Crect width='700' height='475' fill='%239f7aea'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3EAstrology Platform%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='Arial, sans-serif' font-size='16' fill='white' text-anchor='middle' dy='.3em'%3EProprietary Project - Image Not Available%3C/text%3E%3C/svg%3E",
      "link": "https://github.com/sirishkoirala",
      "discription": "Advanced astrology platform with birth chart generation, predictions, and consultation booking. Features real-time calculations and user management.",
      "tech": ["Next.js", "Node.js", "PostgreSQL", "JWT Auth", "PDF Generation"],
      "status": "proprietary"
   },
   {
      "id": 4,
      "title": "Organisation CRM",
      "photo": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=475&fit=crop&auto=format",
      "link": "https://github.com/sirishkoirala/organization-crm",
      "discription": "Custom CRM solution for organizations with lead management, client tracking, task automation, and reporting features.",
      "tech": ["React", "Express", "PostgreSQL", "Sequelize", "Email Integration"]
   },
   {
      "id": 5,
      "title": "School Portal",
      "photo": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='475' viewBox='0 0 700 475'%3E%3Crect width='700' height='475' fill='%23f59e0b'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3ESchool Portal%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='Arial, sans-serif' font-size='16' fill='white' text-anchor='middle' dy='.3em'%3EConfidential Project - Image Not Available%3C/text%3E%3C/svg%3E",
      "link": "https://github.com/sirishkoirala",
      "discription": "Complete school management portal with parent-teacher communication, grade management, timetable, and announcement systems.",
      "tech": ["Next.js", "NestJS", "PostgreSQL", "Real-time Chat", "File Upload"],
      "status": "confidential"
   },
   {
      "id": 6,
      "title": "E-commerce Platform",
      "photo": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=475&fit=crop&auto=format",
      "link": "https://github.com/sirishkoirala",
      "discription": "Scalable e-commerce platform with admin dashboard, payment integration, order management, and inventory tracking.",
      "tech": ["Next.js", "NestJS", "PostgreSQL", "Stripe API", "Redis Cache"]
   }
];



const projectsSet = document.querySelector(".projectSet");



projectsData.forEach(project => {
   const projectDiv = document.createElement("div");
   projectDiv.classList.add("projectDivSize");

   const projectLink = document.createElement("a");
   projectLink.href = project.link;
   projectLink.classList.add("project-link")
   projectLink.target = "_blank";

   projectLink.innerHTML = `
      <img class="projectImg" src="${project.photo}" alt="" />
      <h3 class="projectTitle">${project.title}</h3>
      <p class="projectPara">${project.discription}</p>
   `;

   projectDiv.appendChild(projectLink);
   projectsSet.appendChild(projectDiv);
});
