// document.querySelector("button").addEventListener("click", handleclick);

// function handleclick() {
//     alert("I got clicked");
// }
// var numberofdrum = document.querySelectorAll(".drum").length;
// var i=0;
// for(i=0;i<numberofdrum;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
 
//     function handleclick() {
//         alert("I got clicked");}
// }
// var numberofdrum = document.querySelectorAll(".drum").length;
// var i=0;

// for(i=0;i<numberofdrum;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
 
//     function handleclick()
//      {
//         var audio= new Audio("sounds/tom-1.mp3");
//         audio.play();
//         console.log(this.innerHTML);
//         // alert("I got clicked");
//     }
// }


// Detecting button Press 
var numberofdrum = document.querySelectorAll(".drum").length;
var i=0;
for(i=0;i<numberofdrum;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
 
    function handleclick()
     {    var buttonsound= this.innerHTML;
          makesound(buttonsound);
          buttonAnimation(buttonsound);
          
        
           } 
        }
           
         //  Detecting kEybroard Press 
        document.addEventListener("keypress",function(event){
            makesound(event.key);
            buttonAnimation(event.key);
           });
          
           function makesound(key) 
         {
   
            switch (key) {
               case "w":
                       var tom1= new Audio("sounds/tom-1.mp3");
                        tom1.play();
                break;
                case "a":
                       var tom2= new Audio("sounds/tom-2.mp3");
                        tom2.play();
                break;
                case "s":
                       var tom3= new Audio("sounds/tom-3.mp3");
                        tom3.play();
                break;
                case "d":
                       var tom4= new Audio("sounds/tom-4.mp3");
                        tom4.play();
                break;
                case "j":
                       var snare= new Audio("sounds/snare.mp3");
                        snare.play();
                break;
                case "k":
                       var crash= new Audio("sounds/crash.mp3");
                        crash.play();
                break;
                case "l":
                       var kickbass= new Audio("sounds/kick-bass.mp3");
                        kickbass.play();
                break;
            
               default: console.log(buttonsound);
                   break;
            }
        }
            function buttonAnimation(currentkey)
            {
                var activebutton= document.querySelector("." + currentkey);
                activebutton.classList.add("pressed");
                setTimeout(function(){
                        activebutton.classList.remove("pressed");
                },100);
            }   
         
        
