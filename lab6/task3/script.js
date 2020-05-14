$(document).ready(function () {
    $('#startBut').on('click', function() {
        startTimer(1);
      });
    $('#resetBut').on('clic', function(){
        resetTimer();
    })
});
// startTimer()
var timeOut;
let index = 0;
// var my_timer = document.getElementById("my_timer");
    // var time = my_timer.innerHTML;
    // var arr = time.split(":");
    var arr = $('#my_timer').html().split(":")
    var m = arr[0];
    var s = arr[1];
    let reset = false;
function resetTimer() {
    reset = true;
    m = 10; s = 0;
    if(m<10) m='0'+m;
    if(s<10) s='0'+s;
    $("#my_timer").html(m+":"+s);
    // document.getElementById("my_timer").innerHTML = m+":"+s;
    clearTimeout(timeOut)
    bool = true;

}
let bool = true;
function startTimer (rere){
    if(rere && !bool){
        clearTimeout(timeOut)
        bool = true;
    }else{
        if(s == 0){
            if(m==0){
                alert("Время вышло");
                    window.location.reload();
                    return;
            }m--;
            if(m<10) m = '0' + m;
            s = 59;
        }else {
            s--;
        }
        if(s<10) s = '0' + s;
        $('#my_timer').html(m+":"+s);
        // document.getElementById("my_timer").innerHTML = m+":"+s;
        timeOut = setTimeout(startTimer, 1000);
        bool = false;
    }
}
