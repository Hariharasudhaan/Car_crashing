
window.onload=function(){
    this.myMove1();
    this.myMove2();
    this.myMove3();
    }
function myMove1() {
    var elem = document.getElementById("myAnimation1");   
    lane1Pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (lane1Pos == 1100) {
        lane1Pos=0
        frame()
      } else {
        lane1Pos++;
        console.log(lane1Pos)
        elem.style.top = lane1Pos + 'px'; 
        elem.style.bottom = lane1Pos + 'px'; 
      }
    }
  }

  function myMove2() {
    var elem = document.getElementById("myAnimation2");   
    var pos = 0;
    var id = setInterval(frame, 18);
    function frame() {
      if (pos == 1100) {
        pos=0
        frame()
      } else {
        pos++;
        elem.style.top = pos + 'px'; 
        elem.style.bottom = pos + 'px';
      }
    }
  }
  function myMove3() {
    var elem = document.getElementById("myAnimation3");   
    var pos = 0;
    var id = setInterval(frame, 15);
    function frame() {
      if (pos == 1100) {
        pos=0
        frame()
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.bottom = pos + 'px'; 
      }
    }
  }
var lane1 = () =>{
    console.log("Lane 1 clicked");
    var disp=document.querySelector('.lane1');
        if(disp.classList.contains('d-none')){
            disp.classList.remove('d-none');
        }
    myCreateMove1()
}
var lane2 = () =>{
    console.log("Lane 2 clicked");
    var disp=document.querySelector('.lane2');
        if(disp.classList.contains('d-none')){
            disp.classList.remove('d-none');
        }
        myCreateMove2()
}
var lane3 = () =>{
    console.log("Lane 3 clicked");
    var disp=document.querySelector('.lane3');
        if(disp.classList.contains('d-none')){
            disp.classList.remove('d-none');
        }
        myCreateMove3()
}
function myCreateMove1() {
    var elem = document.getElementById("myCreate1");   
    var pos = 600;
    var id = setInterval(frame, 10);
    function frame() {
        var x = document.getElementById("myAnimation1").style.top;
        var y = document.getElementById("myCreate1").style.top;
      if (x == y ) {
        clearInterval;
        alert("Crashed");
      }else {
        pos--;
        elem.style.top = pos + 'px'; 
        elem.style.bottom = pos + 'px'; 
      }
    }
  }
  function myCreateMove2() {
    var elem = document.getElementById("myCreate2");   
    var pos = 600;
    var id = setInterval(frame, 10);
    function frame() {
      var x = document.getElementById("myAnimation1").style.top;
        var y = document.getElementById("myCreate1").style.top;
      if (x == y) {
        clearInterval;
        alert("Crashed");
      } else {
        pos--; 
        elem.style.top = pos + 'px'; 
        elem.style.bottom = pos + 'px'; 
      }
    }
  }
  function myCreateMove3() {
    var elem = document.getElementById("myCreate3");   
    var pos = 600;
    var id = setInterval(frame, 10);
    function frame() {
      var x = document.getElementById("myAnimation1").style.top;
        var y = document.getElementById("myCreate1").style.top;
      if (x == y) {
        clearInterval;
        alert("Crashed");
      } else {
        pos--; 
        elem.style.top = pos + 'px'; 
        elem.style.bottom = pos + 'px'; 
      }
    }
  }