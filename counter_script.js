
var startingNum = 1;
var el = document.getElementById('counter');

function incrementNum() {
    startingNum ++;

    if(startingNum === 99)
        {
           return startingNum = 1;
        }

    document.getElementById('counter').innerHTML = startingNum;
    window.setInterval(incrementNum, 1000);

}
