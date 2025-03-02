
// Theme Color Change
document.getElementById('theme-clr').addEventListener('click', function () {
    //document.body.style.backgroundColor = "#b2bec3";

    const colors = ["#2ed573","#273c75", "#e84118"];
    const clrIndex = parseInt(Math.random()*colors.length)
    document.body.style.backgroundColor = colors[clrIndex]

})
// Goto blog section
document.getElementById('goBlog').addEventListener('click', function () {
    window.location.href = 'blog.html'
})
// Clear activity when clik
document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('activityBox').classList.add('hidden');
    //const activityBox = document.getElementById("activityBox");
    //activityBox.remove()
     // Element go to activty 
     

     

})
// Show date in Calender
let getDateDay = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekday[getDateDay.getDay()];
let date = getDateDay.toLocaleDateString();
let totalDate = day + ", " + date;
document.getElementById("showDate").innerHTML = totalDate;

// Complete btn work
const cardBtn = document.querySelectorAll('.doneBtn');
for (let cardBtns of cardBtn) {

    cardBtns.addEventListener('click', function (event) {
        // change bg color
        cardBtns.style.backgroundColor = '#b2bec3';
        const taskNumber = parseInt(document.getElementById('taskNumber').innerText);
        const taskCount = parseInt(document.getElementById('taskCount').innerText);
        // Change number when click complete button;
        alert("Board Updated Successfully")
        document.getElementById('taskNumber').innerText = taskNumber - 1;
        document.getElementById('taskCount').innerText = taskCount + 1;
        if( taskNumber === 1){
            alert("Congrates!! You have completed all the current task")
        }
        


        // Element go to activty 
        let getDate = new Date();

        let box = document.createElement("div");
        box.classList.add("p-3", "m-3", "bg-bg-color", "rounded-xl");
        box.innerHTML = `
        
            <h1>You have Complete The Task ${"not set"} at ${getDate.toLocaleString()}</h1>
        
        `;
        const activityBox = document.getElementById("activityBox");

        activityBox.appendChild(box);

        //get titles
        const titles = document.querySelectorAll('.cardTitle');
        for (let title of titles) {

        }












    })

}

document.getElementById('card').addEventListener('click',function(event){

    
    let btn = event.target.closest(".cardTitle");
    console.log(btn);
        if (btn) {
            let card = btn.closest("#card");
            if (card) {
                card.remove(); // Removes the entire card
            }
        }
    
})