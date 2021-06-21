
//===============================================
//== BALLES =====================================
//===============================================

class classPoint
{
    x;
    y;
    isIn;

    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.isIn = false;

    }
}

class classBalle
{
    name;
    id;
    isMoving;
    element;
    fixed;
    xs;
    ys;
    i;
    constructor(id)
    {
        this.name       = "balle";  
        this.id         = id ;

        this.isMoving   = false ;

        this.fixed      = true ;
        
        this.x          = 250;
        this.y          = 445;

        this.xs         = 1 ;
        this.ys         = 2 ;
    }

    createElement()
    {
       // console.log("jeu.arene.balles["+this.id+"].createElement()");

        let balle = document.createElement("div");
        balle.id = "balle" + this.id;
        balle.className = "balle";
        balle.style.position = "absolute";
        balle.style.left = this.x + "px";
        balle.style.top = this.y + "px";
        document.getElementById("arene").appendChild(balle);
    }

    move()
    {

        if(this.isMoving == false)
        {
            this.isMoving = true;



              //== COLLISIONS AVEC LES BRIQUES ========================================================
            
             let dx = this.x + this.xs
             let dy = this.y + this.ys

             jeu.arene.mur.briques.forEach(brique => 
            {
                if(brique.c!= "_" )     
                { 
                let collision = false;
                let points = new Array(8)
                

                points[0] = new classPoint(dx     ,dy -7);
                points[1] = new classPoint(dx +5  ,dy -5);
                points[2] = new classPoint(dx +7  ,dy   );
                points[3] = new classPoint(dx +5  ,dy +5);
                points[4] = new classPoint(dx     ,dy +7);
                points[5] = new classPoint(dx  -5 ,dy +5);
                points[6] = new classPoint(dx  -7 ,dy   );
                points[7] = new classPoint(dx  -5 ,dy -5);



                    for( let i = 0 ; i < 8; i++)
                    {
                    if((points[i].x > brique.x1 && points[i].x < brique.x2) && (points[i].y > brique.y1 && points[i].y < brique.y2))
                    {
                        
                        points[i].isIn = true

                       // console.log("collision");
                    }

                    }


                     // collision vertical

                    if(
                        (points[0].isIn && !points[4].isIn) ||
                        (points[4].isIn && !points[0].isIn)
                    )
                    {

                        this.ys = this.ys * -1;

                        collision = true;
                    }

                    // collision horizontal

                    if(
                        (points[6].isIn && !points[2].isIn) ||
                        (points[2].isIn && !points[6].isIn)
                    )
                    {

                        this.xs = this.xs * -1;
                        collision = true;
                    }

                    // collision diagonale

                    if(
                        (points[1].isIn && !points[5].isIn) ||
                        (points[5].isIn && !points[1].isIn) ||
                        (points[7].isIn && !points[3].isIn) ||
                        (points[3].isIn && !points[7].isIn)
                    )
                    {
                        this.xs = this.xs * -1;
                        this.ys = this.ys * -1;
                        collision = true;
                    }

                     if(collision)
                    {
                        let el= document.getElementById("brique" + brique.id);
                        el.parentNode.removeChild(el);
                        brique.c = '_';


                        jeu.arene.mur.total--;
                        if(jeu.arene.mur.total == 0)
                        {
                            jeu.arene.mur.niveau++;
                            jeu.arene.mur.loadLevel();
                            jeu.arene.mur.createWall();
                        }
                   }
                }


           
            });

            // == COLLISION BORDS + BATTE =======

            // bords gauche et droit

            if(dx < 7 || dx > 513)
            {
                this.xs = this.xs * -1;
                this.x  = (dx < 7) ? 7 : 513;
            }
            else
            {
                this.x = dx;
            }

            // bord haut
            if(dy < 0)
            {
                this.ys = this.ys * -1;
                this.y  = (dy < 7) ? 7 : dy;
            }
            else
            {
                if(dy > 513)
                {
                    console.log("game over : " +dy);
                    this.stop();
                    this.moveTo((batte.x + (batte.w / 2)), (batte.y - 7));
                    this.setOnClickEvent();

                    this.ys = this.ys * -1;
                }
                else
                {
                      // collision avec la batte

                      if((    dy > (jeu.arene.batte.y - 7)
                      &&  dy < (jeu.arene.batte.y + 10))
                      && (dx >= jeu.arene.batte.x1 && dx <= jeu.arene.batte.x2))
                      {
                        this.ys = this.ys * -1;
                        this.y  = jeu.arene.batte.y - 7;
                      }
                      else
                      {
                          this.y = dy;
                      }
                }
            }
             this.moveTo(this.x,this.y);


             /*if(this.x < 7 || this.x > 513)
             {
                 this.xs = this.xs * -1;
             }
                 this.x = this.x + this.xs;

             if(this.y < 7 || this.y > 513)
             {
                 this.ys = this.ys * -1;
             }
                this.y = this.y + this.ys; 


                this.moveTo(this.x, this.y);

        


         if(this.y > 450 && this.x > jeu.arene.batte.x1 && this.x < jeu.arene.batte.x1 + 80)
         {
             this.ys = this.ys * - 1 ;
         }*/
             this.isMoving = false;


            
        }
    }

    moveTo(x,y)
    {
        document.getElementById("balle"+this.id).style.left = (this.x - 7) + "px";
        document.getElementById("balle"+this.id).style.top  = (this.y - 7) + "px";
    }

    setOnClickEvent()
    {

    }

    onClickAction(id)
    {

    }

    reset()
    {

    }

    go()
    {
        this.run=setInterval("jeu.arene.balles[0].move();",10);    
    } 

    stop()
    {

    }

}