const likeCount = document.querySelector('#add-like');
const likeBtn = document.querySelector('#like-btn').addEventListener('click', function(){
    var counter = 12;
    counter++;
    likeCount.textContent = counter;
});
