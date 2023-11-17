var resumeButton = document.getElementById("btn2");
let arr = [];

function sendDetails(event) {
    event.preventDefault();

    // Validation function to check if a field is empty
    function validateField(field, fieldName) {
        if (field.trim() === "") {
            alert(`${fieldName} is required.`);
            return false;
        }
        return true;
    }

    // Personal Details
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let mobileNumber = document.getElementById("mob_no").value;

    if (!validateField(firstName, "First Name") ||
        !validateField(lastName, "Last Name") ||
        !validateField(email, "Email") ||
        !validateField(mobileNumber, "Mobile Number")) {
        return;
    }

    let personalDetails = {
        name: firstName + " " + lastName,
        email: email,
        mob_no: mobileNumber,
    };

    // Professional Skills
    let skill1 = document.getElementById("skill1").value;
    let skill2 = document.getElementById("skill2").value;
    let skill3 = document.getElementById("skill3").value;
    let skill4 = document.getElementById("skill4").value;

    // Validation for at least one professional skill
    if (!validateField(skill1, "Professional Skill 1") &&
        !validateField(skill2, "Professional Skill 2") &&
        !validateField(skill3, "Professional Skill 3") &&
        !validateField(skill4, "Professional Skill 4")) {
        return;
    }

    let professionalSkills = {
        skill1: skill1,
        skill2: skill2,
        skill3: skill3,
        skill4: skill4,
    };

    // Relevant Skills
    let rskill1 = document.getElementById("rskill1").value;
    let rskill2 = document.getElementById("rskill2").value;
    let rskill3 = document.getElementById("rskill3").value;
    let rskill4 = document.getElementById("rskill4").value;

    // Validation for at least one relevant skill
    if (!validateField(rskill1, "Relevant Skill 1") &&
        !validateField(rskill2, "Relevant Skill 2") &&
        !validateField(rskill3, "Relevant Skill 3") &&
        !validateField(rskill4, "Relevant Skill 4")) {
        return;
    }

    let relevantSkills = {
        skill1: rskill1,
        skill2: rskill2,
        skill3: rskill3,
        skill4: rskill4,
    };

    // Education Details
    let schoolName = document.getElementById("sname").value;
    let collegeName = document.getElementById("cname").value;
    let courseName = document.getElementById("crname").value;

    if (!validateField(schoolName, "School Name") ||
        !validateField(collegeName, "College Name") ||
        !validateField(courseName, "Course Name")) {
        return;
    }

    let educationDetails = {
        cname: collegeName,
        sname: schoolName,
        crname: courseName,
    };

    // Work Experience
    let role = document.getElementById("role").value;
    let description = document.getElementById("desc").value;

    if (!validateField(role, "Role") || !validateField(description, "Description")) {
        return;
    }

    let workDetails = {
        role: role,
        desc: description,
    };

    arr = [
        personalDetails,
        professionalSkills,
        relevantSkills,
        educationDetails,
        workDetails,
    ];

    localStorage.setItem("resumeData", JSON.stringify(arr));

    // Redirect to resume.html
    window.location.href = "/resume.html";
}

resumeButton.addEventListener("click", sendDetails);
