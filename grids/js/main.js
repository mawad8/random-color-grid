
setInterval(function(){
   
    for(var i =0; i < 17; i++)
    {
      
      var newDiv = document.getElementById("d"+i);
     
      var New = newDiv.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) +", " +Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) +")";
    }
    
    
     }, 250);


 
  


   

