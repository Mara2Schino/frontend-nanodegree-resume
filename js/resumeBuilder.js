/* Replacing variables from helper.js with myData*/


var bio = { //Object
	"name" : "Cherry Withers",
	"role"  : "Front-End Avatar",
	"contacts": {
		"mobile" : "(800) 555-5555",
		"email": "maraschino.w@gmail.com", 
		"github": "Mara2Schino",
		"twitter": "@janedoe",
		"location": "San Jose, CA"
	},
	"welcomeMessage" : "Aloha!", 
	"skills" : ["awesomeness ", "programming ", "teaching ", "Python "],
	"bioPic" : "images/fry.jpg"
};

//Appending Bio information on website
// 1) Header Items
var myName = bio.name;
var formattedName = HTMLheaderName.replace("%data%", myName);

var myRole = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", myRole);

var myPic = bio.bioPic;
var formattedPic = HTMLbioPic.replace("%data%",myPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);

// 2) topContacts Items
var myMobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", myMobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var myEmail = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", myEmail);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var myGithub = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", myGithub);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var myTwitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", myTwitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);

var myLocation = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", myLocation);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill])
		$("#skills").append(formattedSkill);
	}
}


var work = 
{
	"jobs" : 
	[
		{
			"employer" : "Fammatre Elementary School",
			"title" : "After School Computer Programming Instructor",
			"location" : "San Jose, CA",
			"dates" : "2009-2013",
			"description" : "Taught computer programming and robotics to 3rd-5th graders after school. Developed curriculum and materials, taught students basic programming in Scratch and Etoys."
		},
			
		{
			"employer" : "EKindling, Inc.",
			"title" : "Curriculum and Program Developer, Co-founder",
			"location" : "Philippines",
			"dates" : "2010-2012",
			"description" : "Fundraised over $30K for a pilot OLPC (One Laptop Per Child) in the Philippines. Trained teachers on the use of the Sugar OS and provided guidance on integrating the use of technology and developing their own curriculum."
		},

		{
			"employer" : "Silicon Graphics, Inc.",
			"title" : "Hardware Engineer",
			"location" : "Mountain View, CA ",
			"dates" : "1999-2003",
			"description" : "Designed touch screen hardware interface for Origin 3000/300 servers.Design verification of the debug module for servers with the emphasis on usability and servicibility of machines."
		} 
	],

	"memberships" :
	[
		{
			"organization" : "Squeakland Organization" ,
			"title" : "Board Member/Curriculum Developer Member",
			"dates" : "2009-2012",
			"description" : "Wrote membership grant applications, helped plan yearly Squeakfest - a gathering of educators, students, enthusiasts. Co-wrote Etoys Programming manual and other programming literature. Conducted training for educators." 
		},

		{
			"organization" : "Fammatre Elementary School",
			"title" : "Board Treasurer",
			"dates" : "2009-2010",
			"description" :"Handled the $100K yearly budget for the Home and School Club. Bookeeping and record keeping of all income and expenses. Created the monthly budget report. Planned incoming year's budget." 
		}
	]  
}

// Appending work in Website

function displayWork(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart); 

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);  
		$(".work-entry:last").append(formattedLocation);
	}
	// Appending work.memberships in Website will use HTMLWork variables for now

	for (job in work.memberships){
		$("#workMemberships").append(HTMLworkStart);

		var formattedOrganization = HTMLworkEmployer.replace("%data%", work.memberships[job].organization);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.memberships[job].title);
		var formattedOrgTitle = formattedOrganization + formattedTitle;
		$(".work-entry:last").append(formattedOrgTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.memberships[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.memberships[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
	
}

displayWork(); //Call to function to display Work Information

var projects = {
	"projects" : [
		{
			"title" : "Sample Projects",
			"dates" : "2014",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.",
			"images" :[ "http://raps.org/uploadedImages/Site_Setup/Regulatory_Focus/News/2014/08/Regulatory-Intelligence.jpg", "http://caje-miami.org/images/internalPlaceholder.jpg",
						"http://www.knoitall.com/knoitall/data/attachments2/13936/1393615153_1.jpg"
					]
		}		
	]
}

projects.display = function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjTitle);

		var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjDates);

		var formattedProjDescrip = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjDescrip);

		//var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		//$(".project-entry:last").append(formattedProjImage);
		if (projects.projects[project].images.length>0){
			for (image in projects.projects[project].images){
				var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjImage);
			}
		}

	}
}


projects.display();

var education = 
{
	"schools": 
	[
		{
			"name" : "California Polytechnic University",
			"location" : "San Luis Obispo",
			"degree": "BS",
			"major": "Electrical Engineering"
		},
		{
			"name" : "De La Salle",
			"location" : "Lipa City, Philippines",
			"degree": "High School",
			"major" : "NA"	
		}
	],
	"onlineCourses":
	[
		{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"dates": 2013,
			"url": "https://www.udacity.com/course/nd001" 
		},
		{
			"title": "Introduction to Interactive Programming in Python",
			"school": "Coursera: Rice University",
			"dates": 2013,
			"url": "https://www.coursera.org/course/interactivepython"
		}
	]
}

education.display = function(){
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		
		var formattedSchoolName	= HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}

	for (site in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolSite = HTMLschoolName.replace("%data%", education.onlineCourses[site].school);
		$(".education-entry:last").append(formattedSchoolSite);

		var formattedClassTitle = HTMLschoolMajor.replace("%data%", education.onlineCourses[site].title);
		$(".education-entry:last").append(formattedClassTitle);

	}
}

education.display();

// function to store x and y values of screen clicks and display them on the console
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


// code to internationalize two string names
function inName() { 
	var name = bio.name.trim().split(" ");
	console.log(name);

	var lastname = name[1].toUpperCase();
	var firstname= name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	var outName = firstname + " " + lastname;
	return outName;
}

// appending internationlized button on resume page
$("#main").append(internationalizeButton);

// appending map 
$("#mapDiv").append(googleMap);

