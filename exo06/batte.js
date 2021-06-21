//===================================================
//== Batte ==========================================
//===================================================

class classBatte
{
    name;
    isMoving;
    w;
    y;
    x1;
    x2;
    ox;
    run;

    constructor()
    {
        this.name ="batte";

        this.isMoving = false;

        this.w = 80;
        this.y = 460;

        this.x1 = 0;
        this.x2 = this.x1 + this.w;
        this.ox = this.x1;

    }

    createElement()
    {
       // console.log("batte.create");

        let batte = document.createElement("div");
        batte.id = "batte";
        batte.className = "batte";
        batte.style.position = "absolute";
        batte.style.top = this.y + "px";
        batte.style.left = this.x1 + "px"
        document.getElementById("arene").appendChild(batte);


    }
    startListenMouse()
    {

        document.onmousemove = function (e) { 
            let bcr = parseInt(document.getElementById("arene").getBoundingClientRect().left);
            jeu.arene.batte.x1 = e.clientX- bcr - 40;
            jeu.arene.batte.move();  

        }
       


    }

    move()
    {
        //console.log("batte.move");

        if(jeu.demoMode == true)
        {
           this.x1 = jeu.arene.balles[0].x-40;

        }
        {
            if(this.x1 < 0)
            {
                this.x1 = 0;
            }
            
            if(this.x1 > 520-this.w)
            {
                this.x1 = 520 - this.w;
            }
        }
           this.x2 = this.x1 + this.w;
            document.getElementById("batte").style.left = this.x1 + "px"; 
            //console.log("x:" + e.clientX + "/" + e.clientY);

        
    }

    go()
    {
        console.log("batte.go");
        this.run = setInterval("jeu.arene.batte.move();",30);

    }

}