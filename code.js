function chgCountdownTimer() { 
    console.log("chgCountdownTimer() started"); 
    var currTime = 50; 
    var ogCurrTime = currTime; 
    for(var i = 0; i < 11; i++) { 
        seTimeout(function () { 
            //what we each iteration  
            console.log(currTime); 
            if(currTime == 0){ 
                //less than 1/2 left 
                 docement.getElementById("countDis").innerHTML = "Blastoff!!!"; 
            } else if (currTime < 0.5 * ogCurrTime){ 
                //when we finishing counting down  
                document.getElementById("countDis").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime + "seconds"; 

            } else { 
                //at the beginning  
                document.getElementById("countDis").innerHTML = currTime + "seconds"; 

            } 

            currTime = currTime - 5; 

        }, i * 5000) 

    } 

} 

 
 

function startFun(){ 
    console.log("startedFun() started"); 
    //disable start button  
    document.getElementById("startButton").disabled = true; 
    document.getElementById("dataTable").rows["seconds"].innerHTML = "reading data";
 
    index = 0; 
    timer = setInterval(updateDisplay, time_interval);

    //enable (disable!) stop button 

    document.getElementById("stopButton").disabled = false; 

   
} 
function stopFun(){ 
   console.log("stopFun() started" ); 
   //disable stop button 
   document.getElementById("stopButton").disabled = true; 


   //enable (disable!) start button 
   document.getElementById("startButton").disabled = false; 
   //run updateDisplay()
   
   clearInterval(timer);
}


 
 
//enable Playstation Function
function Playstation(){ 
    console.log("Playstation() started"); 
    mySound= new sound("us-lab-background.mp3"); 
    mySound.play(); //play audio 
} 

 
 
//Input Sound File
function sound(srcFile){ 
    this.sound = document.createElement("audio"); 
    this.sound.src = srcFile; 
    this.sound.setAttribute("preload","audio"); //preload audio program
    this.sound.setAttribute("controls","none"); 
    this.sound.style.display = "none";   //no controls 
    document.body.appendChild(this.sound);  //locks enable 
    this.play = function(){ 
        this.sound.play();   //play button enabled 
    } 
     this.stop = function(){ //audio disabled 
        this.sound.pause(); 

    } 

} 