//================================================
//== Arene =================================
//================================================

class classArene
{
        constructor()
      {

        this.name   = "arene";

        this.w      = 0      ;
        this.h      = 0      ;

        this.mur    = new classMur();


        this.batte  = new classBatte();
        //this.balle  = new classBalle();

        this.balles    = new Array(3);
        this.balles[0] = new classBalle();
       // this.balles[1] = new classBalle();
        //this.balles[2] = new classBalle();

      }

    createElement()
    {
      console.log(this.name + ".createElement();");

      let div = document.createElement("div");
      div.id  = "arene";

      div.style.width = this.w;
      div.style.height = this.h;
      div.onclick = jeu.arene.batte.startListenMouse();

      document.getElementById("logo").after(div);
     console.log(document.getElementById("arene"));
      

    }

    open()
    {
      document.getElementById("arene").style.display = "block";
      

      setTimeout('document.getElementById("arene").style.width = "520px";',1000);
      setTimeout('document.getElementById("arene").style.height = "520px";',3000);
      setTimeout('document.getElementById("logo").style.top = "-300px";',3000);
      setTimeout('document.getElementById("arene").style.top = "50px";',3000);

      setTimeout("btnStart.enable();",5000);
      setTimeout("btnQuit.enable();",5000);

      setTimeout('document.getElementById("btnStart").innerHTML = "New Game";',4500);

      btnStart.set("New Game",function(){jeu.newGame();});
      btnQuit.set("Home", function() {jeu.arene.close();});

      btnStart.disable();
      btnQuit.disable();





    }

    close()
    {
      console.log("jeu.arene.close()");

      btnStart.disable();
      btnQuit.disable();

      btnQuit.set("Home", function() {jeu.arene.close();});
      btnStart.set("Start",function(){jeu.start();});


      setTimeout('document.getElementById("arene").style.height = "0px";',1000);
 
      
      setTimeout('document.getElementById("logo").style.top = "0px";',1000);
      setTimeout('document.getElementById("arene").style.top = "240px";',1000);
      setTimeout('document.getElementById("arene").style.width = "0px";',3000);
      setTimeout('document.getElementById("arene").style.display = "none";',4500);


      setTimeout("btnStart.enable();",5000);
      setTimeout("btnQuit.enable();",5000);

      //setTimeout('document.getElementById("btnStart").innerHTML = "Start";',4500);

    }
}