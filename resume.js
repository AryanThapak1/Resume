function resume() {

    const resumeData = JSON.parse(localStorage.getItem("resumeData"));

    document.getElementById('fullName').textContent = resumeData[0].name;
    document.getElementById('email').textContent = resumeData[0].email;
    document.getElementById('mob_no').textContent = resumeData[0].mob_no;

    document.getElementById('skill1').textContent = resumeData[1].skill1;
    document.getElementById('skill2').textContent = resumeData[1].skill2;
    document.getElementById('skill3').textContent = resumeData[1].skill3;
    document.getElementById('skill4').textContent = resumeData[1].skill4;

    document.getElementById('rskill1').textContent = resumeData[2].skill1;
    document.getElementById('rskill2').textContent = resumeData[2].skill2;
    document.getElementById('rskill3').textContent = resumeData[2].skill3;
    document.getElementById('rskill4').textContent = resumeData[2].skill4;

    document.getElementById('cname').textContent = resumeData[3].cname;
    document.getElementById('sname').textContent = resumeData[3].sname;
    document.getElementById('crname').textContent = resumeData[3].crname;

    document.getElementById('role').textContent = resumeData[4].role;
    document.getElementById('desc').textContent = resumeData[4].desc;
}

setTimeout(resume, 0);

document.getElementById('printButton').addEventListener('click',()=>{
    window.print();
})