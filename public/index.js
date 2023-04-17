
$(document).ready(function(){
    $("#navbar").show();

    $("#home").click(function(){        
        $("#container").load("index.html #hom1");
      });

    $("#food").click(function(){
        $("#container").load("asset/portfolio.html");
      });

    $("#soup").click(function(){
       $("#container").load("asset/soup.html");
    });
    $("#desserts").click(function(){
        $("#container").load("asset/desserts.html");
     });
     $("#soda").click(function(){
        $("#container").load("asset/soda.html");
     });  

     $("#container").show(); 
});
