//=====================================================================
//==JEU================================================================
//=====================================================================

class classJeu
{
   constructor()
   {
       this.name       ="jeu";

       this.niveau     = 0;
       this.temps      = 0;
       this.score      = 0;
       this.vie        = 3;
       this.difficulte = 0;

       this.demoMode   = true;
   }
   start()
   {
    console.log(this.name+".start();");
    

    this.arene = new classArene();
    this.arene.parent = this;
    this.arene.createElement();
    this.arene.open();

    this.arene.mur.loadLevel(this.niveau);
    this.arene.mur.createWall();

    this.arene.batte.createElement();
    this.arene.balles[0].createElement(0);
    //this.arene.balles[1].createElement();
   // this.arene.balles[2].createElement();
    this.demoStart();

    
   }

   quit()
   {
       document.location.href = "http://www.google.fr/";

   }

   newGame()
   {

       this.demoMode = false;

       clearInterval(jeu.arene.balles[0].run);

       document.getElementById("balle" + this.id).style.left = 250 + "px"; 
       document.getElementById("balle" + this.id).style.top = 445  + "px";



       clearInterval(jeu.arene.batte.run);
       

       document.getElementById("batte").style.left = 220 + "px"; 
       document.getElementById("batte").style.top = 460 + "px"; 
       
       jeu.arene.batte.startListenMouse();
       


      /* setTimeout("jeu.arene.balles[0].go()",0*1000);
       setTimeout("jeu.arene.balles[1].go()",0*2000);
       setTimeout("jeu.arene.balles[2].go()",0*3000);*/

   }

   demoStart()
   {
       jeu.arene.batte.go();
       jeu.arene.balles[0].go();
       //jeu.arene.balles[1].go();
       //jeu.arene.balles[2].go();
   }

   countDown()
   {

   }
}