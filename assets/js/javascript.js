window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function hideFunction() {
  document.getElementById("hide").style.display = "none";
  document.getElementById("arrow-right").style.display = "block";
}

function showFunction() {
  document.getElementById("hide").style.display = "block";
  document.getElementById("arrow-right").style.display = "none";
}

$('.carousel').carousel({
  interval: 2000
})
