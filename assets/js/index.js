// This Javascript file includes "dark and light mode" and text Animation.

//dark and light mode
function closemoon() {
    if (document.querySelector(" .moon").classList.value == 'moon fa-regular fa-moon') {
        document.querySelector(" .moon").classList.remove("fa-moon");
        document.querySelector(" .moon").classList.add("fa-sun");
        document.querySelector(" .moon").classList.remove("fa-regular");
        document.querySelector(" .moon").classList.add("fa-solid");
        document.querySelector("body").style.backgroundColor = "#1a1a1a";/*#332d2c*/
        document.querySelector("body").style.color = "#fff";
        form("#1a1a1a","#fff");
    } else if (document.querySelector(" .moon").classList.value == 'moon fa-sun fa-solid') {
        document.querySelector(" .moon").classList.add("fa-regular");
        document.querySelector(" .moon").classList.remove("fa-solid");
        document.querySelector(" .moon").classList.remove("fa-sun");
        document.querySelector(" .moon").classList.add("fa-moon");
        document.querySelector("body").style.backgroundColor = "#fff";
        document.querySelector("body").style.color = "#000";
        form("#fff","#1a1a1a");
    }
}
//dark and light mode in form
function form(mode,col){
    document.querySelector(".fname label").style.backgroundColor = mode;
    document.querySelector(".lname label").style.backgroundColor = mode;
    document.querySelector(".email label").style.backgroundColor = mode;
    document.querySelector(".sub label").style.backgroundColor = mode;
    document.querySelector(".message label").style.backgroundColor = mode;

    document.querySelector(".fname input").style.color = col;
    document.querySelector(".lname input").style.color = col;
    document.querySelector(".email input").style.color = col;
    document.querySelector(".sub input").style.color = col;
    document.querySelector(".message textarea").style.color = col;
}
//text animation
function con() {
    document.querySelector("input").style.borderColor = "skyblue";
}
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typed');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-typed-items');
        var period = 2000;
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typed > .wrap { border-right: solid #000000}";
    document.body.appendChild(css);
};
var x = window.matchMedia("(max-width: 868px)");
//on smaller screen.
if(x.matches){
    document.querySelector(".moon").innerHTML = "Mode";
}
//scroll reveal..
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  /*Filtering data list in portfolio */
  function list(a){
    document.querySelector("#portfolio-filters .filter-active").classList.remove("filter-active");
    document.querySelectorAll("#portfolio-filters li")[a].classList.add("filter-active");
    var b = document.querySelector("#portfolio-filters .filter-active").dataset.filter;
    var n = document.querySelectorAll(".portfolio-item").length;
    if(b === "*"){
        for(i=0;i<n;i++){
            document.querySelectorAll(".portfolio-item")[i].style.display = "flex";
        }
    }else{
        for(i=0;i<n;i++){
            if(document.querySelectorAll(".portfolio-item")[i].dataset.filter != b){
                document.querySelectorAll(".portfolio-item")[i].style.display = "none";
            }
            else{
                document.querySelectorAll(".portfolio-item")[i].style.display = "flex";
            }
        }
    }
  }
  