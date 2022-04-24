
var startingNum = 1;

function incrementNum() {
    startingNum ++;
    console.log(startingNum);
    if(startingNum === 100)
        {
           clearInterval(incrementNum);
           startingNum = 1;
        }

    document.getElementById('counter').innerHTML = startingNum;
    console.log(startingNum);
}
window.setInterval(incrementNum, 1000);
