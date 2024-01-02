let reviewCard = document.querySelectorAll(".reviewCard");

let count = 0;

reviewCard.forEach(function(card, index){
    card.style.left = `${index * 100}%`
})

function cardSlide(){
    reviewCard.forEach(function(curCard){
        curCard.style.transform=`translateX(-${count * 100}%)`
    })
}
setInterval(function(){
    count++;
    if(count == reviewCard.length ){
        count=0;
    }
    cardSlide();
}, 3000)



