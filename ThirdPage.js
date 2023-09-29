// for the full screen navigation
function toggleNav() {
    var nav = document.getElementById("myNav");
    if (nav.style.width === "100%") {
        nav.style.width = "0%";
    } else {
        nav.style.width = "100%";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const stations = document.querySelectorAll(".station");
    const experienceDetails = document.getElementById("experience-details");

    stations.forEach(function (station) {
        station.addEventListener("click", function () {
            // Clear existing details
            experienceDetails.innerHTML = "";

            // Get the experience details for the clicked station (you can replace this with your own content)
            const stationId = station.getAttribute("id");
            const experienceContent = getExperienceContent(stationId);

            // Display the experience details
            experienceDetails.innerHTML = experienceContent;
        });
    });

    // Function to fetch experience content (replace with your own data)
    function getExperienceContent(stationId) {
        switch (stationId) {
            case "station1":
                return `
                    <h2>IT Infrastructure Consultant for Mindanao Business IT Solutions (MinBITS) Corporation  </h2>
                    <p> 1. Led and facilitated a team of four members. </p>
                    <p> 2. Conducted an interview with the co-founder and Chief Executive Officer to identify potential problems and opportunities for their business entity.</p>
                    <p> 3. Diagnosed the headquarters in relation to IT Infrastructure including IT Personnel, IT Asset Management, Data Management and User Access, and Risk Management. </p>
                    <p> 4. Documented and consolidated all information in an IT Infrastructure Assessment Report.</p>
                `;
            case "station2":
                return `
                    <h2>Systems Architect and Prototype Designer for the Ahm’s Chicken Haus’ Order Management System</h2>
                    <p>1. Supervised a team of four members, effectively delegating tasks, providing guidance and support throughout the reporting process, and working closely with a co-leader to ensure the successful completion of the final document.</p>
                    <p>2. Monitored project progress & conducted interviews with the Restaurant Supervisor to identify potential problems, client requirements, and opportunities for their business entity as part of Requirements Elicitation and Requirements Analysis.</p> 
                    <p>3. Prepared, Planned, and Created the SRS Document and Prototype using Requirements Engineering Methodology with the application of Agile Methodology. </p>
                    <p>4. Conducted a SUS-Usability Testing with possible users of the system to ensure satisfaction.</p>
                `;
            case "station3":
                return `
                    <h2>Associate Project Manager</h2>
                    <p>1. Performed as a project manager to senior students in BS Computer Science at MSU-Iligan Institute of Technology in their Undergraduate Thesis.</p>
                    <p>2. Created Project Team Description, Project Charter, Project Scope Management Plan, Project Cost Management Plan, and Project Time Management Plan.</p>
                `;
            case "station4":
                return `
                    <h2>Business Process Analyst at Ivory Printing and Publishing House</h2>
                    <p>1. Engaged in effective teamwork with a group of three individuals.</p>
                    <p>2. Conducted an interview with the Headquarters' Operation Manager for identifying potential problems and issues in their business process.</p>
                    <p>3. Applied the BPMN tools and business process management methods including process identification, process discovery, process analysis, and process redesign to provide potential and significant solutions to Ivory Printing and Publishing House.</p>
                `;
            case "station5":
                return `
                    <h2>Web-based System Full-Stack Developer of a Recommendation-Catalogue System for Botica Ycsobel</h2>
                    <p>1. Engaged in effective teamwork with a group of four individuals.</p>
                    <p>2. Conducted an interview with a pharmacy clerk for potential problems, identifying opportunities, and possible data gathering for the team’s proposed solution.</p>
                    <p>3. Applied Requirements Engineering Methodology.</p>
                    <p>4. Designed the front-end and back-end of the web-based system with my co-developers. </p>
                `;
            default:
                return "<p>No details available.</p>";
        }
    }
});
