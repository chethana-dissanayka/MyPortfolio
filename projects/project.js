const Projects = [
    {
        name : "MERN Stack Technicians  Management System ",
        about : "Technicians Management System is a application for managing technicians details and helping users to find technicians, with CRUD operations, user authentication, search and filter operations, and a userfriendly interface.",
        img : "images/mern.png",
        gitrepo : "https://github.com/chethana-dissanayka/MERN_Project",
        tech_stack : " JAVASCRIPT | React |  MongoDB | Express | Nodejs",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/react-native.png"/>`,
            `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/express.png"/>`
        ],
        project_link : "https://drive.google.com/file/d/1Sc7Jvq1Yxhto4cn5ShSQFt_0qhxSiobH/view?usp=sharing",
        project_type : "Individual Project"
    },
    {
        name : "Sentiment Catcher Machine Learning Project",
        about : "Developed a Sentiment Catcher machine learning application using logistic regression and decision trees for accurate sentiment classification in textual feedback, enhancing understanding of user sentiments. ",
        img : "images/ml.png",
        gitrepo : "https://github.com/chethana-dissanayka/Sentiment-Analysis-Project-ML",
        tech_stack : "Python | Logistic Regression | Decision Trees ",
        tech_stackicons : [
        `<img src="images/python.png" width="48px" height="48px"/>`,
        ],
        project_link : "https://drive.google.com/file/d/1N3SiIQZyuQw91GvECIn2lirVVena8Z4X/view?usp=sharing",
        project_type : "Team Project"
    },


    {
        name : "Online Cosmetics Shop Mobile Application  - User App",
        about : "Developed a Dart and Flutter-based mobile app using Firebase, providing a user-friendly platform for seamless exploration and ordering of beauty products. ",
        img : "images/user.jpeg",
        gitrepo : "https://github.com/chethana-dissanayka/User_App_Ecommerce_MobileApplication-master",
        tech_stack : "flutter | dart | Firebase | Android studio",
        tech_stackicons : [
            `<img src="images/flutter.png " width="48px" height="48px"/>`,
            `<img src="images/firebase.png" width="48px" height="48px"/>`,
            `<img src="images/dart.png" width="48px" height="48px"/>`,
            `<img src="images/AndroidStudio.png" width="48px" height="48px"/>`,
            
        ],
        project_link : "https://drive.google.com/file/d/1W_C6tcR3GMrv5AFQ7VsLZ1ZKJFbhZfAc/view?usp=sharing",
        project_type : "Team Project"

    },

    {
        name : "Online Cosmetics Shop Mobile Application - Admin App ",
        about : "Developed a mobile application including essential CRUD operations for admin’s of Cosmetics shop. It provdes effortlessly overseeing and enhancing operational efficiency within the cosmetic shop's administrative functions. ",
        img : "images/admin.jpeg",
        gitrepo : "https://github.com/chethana-dissanayka/Mobile-App-Admin-CRUD",
        tech_stack : "flutter | dart | Firebase | Android studio",
        tech_stackicons : [
            `<img src="images/flutter.png" width="48px" height="48px"/>`,
            `<img src="images/firebase.png" width="48px" height="48px"/>`,
            `<img src="images/dart.png" width="48px" height="48px"/>`,
            `<img src="images/AndroidStudio.png" width="48px" height="48px"/>`,     
        ],
        project_link : "https://drive.google.com/file/d/1gT_-8nNSd5Md5H316efZpIAr4z1NDwh4/view?usp=sharing",
        project_type : "Team Project"
    },

    {
        name : " Student Management System  ",
        about : " Streamlined student data(records) management with CRUD operations, built using WPF and C#. ",
        img : "images/sms.png",
        gitrepo : "https://github.com/chethana-dissanayka/Student_Management_System",
        tech_stack : "C#| ",
        tech_stackicons : [
            `<img src="images/CC.png" width="48px" height="48px"/>`,
        ],
        project_link : "https://drive.google.com/file/d/1yW3GFADrEI8ww0gk3OH6lz2x74doJbOp/view?usp=sharing",
        project_type : "Individual Project"
    },

    {
        name : " Patient Registration Systam ",
        about : " Empowering healthcare management with WPF/MVVM Patient Registration System. Utilizes SQLite, xUnit for robustness. Admins handle users, patients, bill calculations. Normal users manage patient operations seamlessly. ",
        img : "images/prs.png",
        gitrepo : "https://github.com/chethana-dissanayka/GUI_Patient_Registration_System",
        tech_stack : "C# | ",
        tech_stackicons : [
            `<img src="images/CC.png" width="48px" height="48px"/>`,
           
        ],
        project_link : "https://drive.google.com/file/d/1Oq4T6Y4TXDW-XKIJ_Rz9Znd8U5bM4AOr/view?usp=sharing",
        project_type : "IndividualProject"
    }


]


let projects__container = document.getElementById("projects--container")

Projects.forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <a href=${pro.project_link} target="_blank" class="see-project">Video💻</a>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : '' }
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
      </span>
      
    </div>
  </div>
    `
    projects__container.append(main)

})
