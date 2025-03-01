
// Theme Color Change
document.getElementById('theme-clr').addEventListener('click', function () {
    document.body.style.backgroundColor = "#b2bec3";

    /* const colors = ["#ff7675","#fdcb6e", "#e84393"];
    for(let i = 0; i <colors.length; i ++){
        
        document.body.style.backgroundColor = colors[i];
        
    } */
 

})
// Goto blog section
document.getElementById('goBlog').addEventListener('click', function () {
    window.location.href = 'blog.html'
})
// Clear activity when clik
document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('activityBox').classList.add('hidden');
})
// Show date in Calender
let date = new Date().toLocaleDateString();
document.getElementById('showDate').innerHTML = date;

// Complete btn work
const cardBtn = document.querySelectorAll('.doneBtn');
for (let cardBtns of cardBtn) {

    cardBtns.addEventListener('click', function (event) {
        // change bg color
        cardBtns.style.backgroundColor = '#b2bec3';
        const taskNumber = parseInt(document.getElementById('taskNumber').innerText);
        const taskCount = parseInt(document.getElementById('taskCount').innerText);
        // Change number when click complete button;
        document.getElementById('taskNumber').innerText = taskNumber - 1;
        document.getElementById('taskCount').innerText = taskCount + 1;

        //get titles
        /* const titles = document.querySelectorAll('.cardTitle');
        for (let title of titles) {
            console.log(title.innerText);
        } */


    })

}

