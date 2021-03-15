const btnTapped = document.querySelector('#btn').addEventListener('click', addProgress);
const progressBar = document.querySelector('#progress-bar');
const progressLabel = document.querySelector('#progress-label');
const intervalProgress = document.querySelector('#animated-progress');
var count = 0;

// progress on btn press
function addProgress() {
count++;
progressBar.style.width = count + "%";
progressLabel.textContent = count + "%";
}

// automatic progress
var  progressCounter = 0;

setInterval(function(){
    progressCounter++;
    // console.log(progressCounter)
    intervalProgress.style.width = progressCounter + "%";
}, 600);

