const projectsData = [
   {
      "id": 1,
      "title": "Online Store",
      "photo": "https://management.org/wp-content/uploads/2022/02/How-to-start-an-onlline-store.jpg",
      "link": "https://github.com/sirishkoirala/DigitalStore",
      "discription": "Created a React online store with categorized data, enabling users to view pictures, prices, and select items for their cart. Users can add multiple items to the cart and later modify it too."
   },
   {
      "id": 2,
      "title": "Real Estate",
      "link": "https://github.com/sirishkoirala/Ghar-Nagar",
      "photo": "https://imageio.forbes.com/specials-images/imageserve/657b29edf09ae8354c4debba/Real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is/960x0.jpg?height=474&width=711&fit=bounds",
      "discription": "Managed real estate business providing buying, selling, and rental services, ensuring client satisfaction through professional management."
   },
   {
      "id": 3,
      "title": "Personal Portfolio",
      "link": "https://github.com/sirishkoirala/portfolio---Light-Theme",
      "photo": "https://freshdesignweb.com/wp-content/uploads/Imroz-One-Page-Portfolio-Template-700x475.jpg",
      "discription": "Developed responsive personal website with clean design and comprehensive content for user satisfaction. This very website you are seeing."
   },
   {
      "id": 4,
      "title": "News Portal",
      "link": "https://github.com/sirishkoirala/NewsPortal",
      "photo": "https://kyoutofschoolalliance.org/wp-content/uploads/2022/04/news-wp-featured-image-700x475.png",
      "discription": "Developed website with API integration, custom search, dynamic data, and personalized interactions for enhanced user experience and tailored content display."
   },
   {
      "id": 5,
      "title": "Task Manager",
      "link": "https://github.com/sirishkoirala/Todo-App",
      "photo": "https://www.kanbanchi.com/wp-content/uploads/2016/06/Productive-700x475.jpg",
      "discription": "React todo app for task management: add, edit, remove tasks, optimizing productivity and user experience"
   }
]

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
