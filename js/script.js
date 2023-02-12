// Dark/Light Mode
var darkMode = localStorage.getItem('dark');
var lightMode = localStorage.getItem('light');
$('.myCheckbox').prop('checked', true);


if (darkMode == "true") {
    $("#mainContent").addClass("dark-mode");
    $( "#mainContent" ).removeClass( "light-mode" );
    $('#modeChange').prop('checked', true);
    $(".label").css("background-color","#111");
}
if (lightMode == "true") {
    $("#mainContent").addClass("light-mode");
    $( "#mainContent" ).removeClass( "dark-mode" );
    $('#modeChange').prop('checked', false);
    $(".label").css("background-color","#ff9800");
}

$( "#modeChange" ).on("click", function() {
    var image = $( "#modeImage" )
    if( $( "#mainContent" ).hasClass( "light-mode" )) {
        $( "#mainContent" ).removeClass( "light-mode" );
        $( "#mainContent" ).addClass( "dark-mode" );
        $(image). attr('src', 'images/sun.png');
        localStorage.setItem('dark', true);
        localStorage.setItem('light', false);
        $('#modeChange').prop('checked', true);
        $(".label").css("background-color","#ff9800");
        $(".label").css("background-color","#111");
    } else {
        $( "#mainContent" ).addClass( "light-mode" );
        $( "#mainContent" ).removeClass( "dark-mode" );
        $(image). attr('src', 'images/moon.png');
        localStorage.setItem('dark', false);
        localStorage.setItem('light', true);
        $('#modeChange').prop('checked', false);
        $(".label").css("background-color","#ff9800");
    }
});


$(window).on("load", function () {
	$(".preload-section").fadeOut(100);
});


// back to top button
var btn = $('#scrollButton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




// Navbar

$(function () {
     var navbar = $('.my-navbar');
     $(window).scroll(function () {
         if ($(window).scrollTop() <= 80) {
             navbar.removeClass('navbar-scroll');
         } else {
             navbar.addClass('navbar-scroll');
         }
     });
 });



//  Slider 3
 let myItem = document.querySelectorAll('#slider3 .carousel .carousel-item')

 myItem.forEach((el) => {
 const minPerSlide = 4
 let next = el.nextElementSibling
 for (var i=1; i<minPerSlide; i++) {
      if (!next) {
           // wrap carousel by using first child
           next = myItem[0]
           }
      let cloneChild = next.cloneNode(true)
      el.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
 }
 });




// Light Box
//getting all required elements
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");
window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    } 
}

// Project
function changeView()
{
    if($('#selectView').val() == 'list-view') {
        $('#grid-view').hide(500); 
        $('#list-view').show(900); 
    } else {
        $('#list-view').hide(500); 
        $('#grid-view').show(900); 
    } 
}








 