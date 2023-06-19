const data = {
  users: [
    {
      id: "u1",
      picture: "/images/pictures/users/user2.png",
    },
    {
      id: "u2",
      picture: "/images/pictures/users/user3.png",
    },
    {
      id: "u3",
      picture: "/images/pictures/users/user4.png",
    },
    {
      id: "u4",
      picture: "/images/pictures/users/user4.png",
    },
    {
      id: "u5",
      picture: "/images/pictures/users/user5.png",
    },
    {
      id: "u6",
      picture: "/images/pictures/users/user6.png",
    }
  ],
  todo: [
    {
      id: 1,
      name: "Brainstroming",
      content: "Brainstorming brings team members' diverse experience into play. ",
      contentType: "text",
      status: "Low",
      viewers: ["u1", "u2","u5"],
      comments:12 ,
      files:0
    },
    {
      id: 2,
      name: "Research",
      content: "User research helps you to create an optimal product for users.",
      contentType: "text",
      status: "High",
      viewers: ["u3","u6"],
      comments: 10,
      files:3
    },
    {
      id: 3,
      name: "Wireframes",
      content: "Low fidelity wireframes include the most basic content and visuals.",
      contentType: "text",
      status: "Low",
      viewers: ["u1", "u3","u6"],
      comments: 12,
      files:0
    },
    {
      id: 4,
      name: "Onboarding Illustrations",
      content: "/images/pictures/contents/pic1.png",
      contentType: "image",
      status: "Low",
      viewers: ["u5", "u2","u1"],
      comments: 14,
      files:15
    },
    {
      id: 5,
      name: "Moodboard",
      content: ["/images/pictures/contents/pic2.png","/images/pictures/contents/pic3.png"],
      contentType: "images",
      status: "Low",
      viewers: ["u5"],
      comments: 9,
      files: 10
    },
    {
      id: 6,
      name: "Mobile App Design",
      content: "/images/pictures/contents/pic4.png",
      contentType: "image",
      status: "completed",
      viewers: ["u6", "u2"],
      comments: 12,
      files: 15
    },
    {
      id: 7,
      name: "Design System",
      content: "It just needs to adapt the UI from what you did before ",
      contentType: "text",
      status: "Low",
      viewers: ["u1","u5","u2"],
      comments: 12,
      files: 15
    },
  ],
  todoList: {
    col1: {
      id: "col1",
      name: "To Do",
      color: "#5030E5",
      todo: [1, 2,3],
      add:true
    },
    col2: {
      id: "col2",
      name: "On Progress",
      color: "#FFA500",
      todo: [ 4,5],
    },
    col3: {
      id: "col3",
      name: "Done",
      color: "#8BC48A",
      todo: [6,7],
    },
  },
  todoListPosition: ["col1", "col2", "col3"],
};

module.exports = data;
