/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
     "name" : "Marek Gacek",
     "role" : "Designer",
     "contacts" : {
         "mobile":"(+48) 722224777",
         "email":"gacekmarek92@gmail.com",
         "github":"https://github.com/marekgacek",
         "location":"Jelenia Góra, Poland",
         "linkedin":"www.linkedin.com/in/marek-gacek"
     },
     "welcomemsg": "Ambitious and well trained engineer looking for new opportunities",
     "skills" : ["HTML", "CSS", "JavaScript", "jQuery", "ES6"],
     "biopic" : "images/foto_gacek.jpg"
 };

 function displayBio() {

   // header info - name, title, image
   $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
   $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
   $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

   //'for' loop for skills to iterate through all of them and append them:
   $("#header").append(HTMLskillsStart);
   for (var i = 0; i < bio.skills.length; i++) {
       $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));

   }
   //TopContacts
   $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
   $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
   $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
   $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

   $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomemsg));

   //FooterContacts
   $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
   $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
   $("#footerContacts").append(HTMLblog.replace("%data%", bio.contacts.linkedin));

}
displayBio();

var work = {
  "jobs" : [
    {
      "employer" : "Draexlmaier",
      "title" : "Harness Designer",
      "location" : "Jelenia Góra, Poland",
      "dates" : "02.01.2017 - 31.05.2018",
      "description" : "Develop and maintain electrical wiring diagrams and harness architecture. "+
      "Write Technical Specifications. "+"Create BOM list."
    }, {
      "employer" : "Whirlpool",
      "title" : "R&D Lab Technician",
      "location" : "Wrocław, Poland",
      "dates" : "09.2015 - 12.2018",
      "description": "Tests performance, " + "equipment calibration, "+"reports creation."
    },
    {
      "employer" : "Protherm",
      "title" : "R&D Practice",
      "location" : "Skalica, Slovakia",
      "dates" : "07.2014 - 08.2014",
      "description": "Various pomp tests, " + "gathering data and assisting with creation of reports."
    },
  ]
};

function displayWork(){
  for (var i = 0; i < work.jobs.length; i++) {
      // created new div for work experience
      $("workExperience").append(HTMLworkStart);
      //concat employer and title
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
  }
};
displayWork();

 var education = {
   "schools" :   [
       {
         "name": "Wroclaw University of Technology",
         "location":"Wrocław, Poland",
         "degree" :"Master degree",
         "majors" :["Electronics"," Engineering"],
         "dates" : "2015 - 20-09-2016"
       },
       {
         "name" : "Wroclaw University of Technology",
         "location":"Wrocław, Poland",
         "degree" :"Bachelor Degree",
         "majors" : "Biomedical Engineering",
         "dates" : "2011 - 24-06-2015"
       }
   ],
   "onlineCourses" : [
       {
         "degree" : "Front-End Web Developer nanodegree",
         "name" : "Udacity",
         "Dates" :"2017/2018",
         "URL" :"https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001"
       }
   ]
 };

function displayEducation() {
  for (var i = 0; i < education.schools.length; i++) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      $(".education-entry:last").append(formattedName + formattedDegree);

      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));

}
$("#education").append(HTMLonlineClasses);
for (var k = 0; k < education.onlineCourses.length; k++) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].degree);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].name);
    $(".education-entry:last").append(formattedTitle + formattedSchool);

    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[k].Dates));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[k].URL));
}

};
displayEducation();
var projects = {
    "projects": [{
        "title": "Memory Game",
        "description": "A complete browser-based card matching game (also known as Concentration) "  +
            "Technologies used: HTML, CSS, JS",
        "dates": "April, 2018",
        "images": ["images/memorygame.png"]
    },{
        "title": "Arcade Game",
        "description": "Arcade Game clone " +
            "Technologies used: Object Oriented JavaScript ,HTML, CSS, HTML5 Canvas.",
        "dates": "May, 2018",
        "images": ["images/arcadegame.png"]
    }]

  };
function displayProjects() {
  for (var i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);

      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
      // $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));

      for (var j = 0; j < projects.projects[i].images.length; j++) {
          $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
      }
  }
}
displayProjects();

//map
$("#mapDiv").append(googleMap);
