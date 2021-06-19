
	canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    rover_width = 150;
    rover_height = 90;
    car_width = 150;
    car_height = 90;
    
    
    background_image = "racing12.jpg";
    
    rover_image = "car1.png";
    car_image = "download.jpg";
    
    rover_x = 0;
    rover_y = 90;
    car_x = 0;
    car_y = 180;
    
    function add() {
        background_imgTag = new Image(); //defining a variable with a new image
        background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
        background_imgTag.src = background_image;   // load image
    
        rover_imgTag = new Image(); //defining a variable with a new image
        rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
        rover_imgTag.src = rover_image;
        
        
        // load image  // load image
        background_imgTag = new Image(); //defining a variable with a new image
        background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
        background_imgTag.src = background_image;   // load image
    
        car_imgTag = new Image(); //defining a variable with a new image
        car_imgTag.onload = uploadrover1; // setting a function, onloading this variable
        car_imgTag.src = car_image;   // load image  // load image
    }
    
    
    function uploadBackground() {
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    }
    
    
    function uploadrover() {
        ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
    }
    function uploadrover1() {
        ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
    }
    
    
    window.addEventListener("keydown", my_keydown);
    
    function my_keydown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed);
            if(keyPressed == '38')
            {
                up();
                console.log("up");
                check();
            }
            if(keyPressed == '40')
            {
                down();
                console.log("down");
                check();
            }
            if(keyPressed == '37')
            {
                left();
                console.log("left");
                check();
            }
            if(keyPressed == '39')
            {
                right();
                console.log("right");
                check();
            }




            if(keyPressed == '87')
            {
                up1();
                console.log("up");
                check();
            }
            if(keyPressed == '83')
            {
                down1();
                console.log("down");
                check();
            }
            if(keyPressed == '65')
            {
                left1();
                console.log("left");
                check();
            }
            if(keyPressed == '68')
            {
                right1();
                console.log("right");
                check();
            }
    }
    
    function up()
    {
        if(rover_y >=0)
        {
            rover_y = rover_y - 10;
            console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
             uploadBackground();
             uploadrover();
             uploadrover1();
        }
    }
    function down()
    {
        if(rover_y <=850)
        {
            rover_y =rover_y+ 10;
            console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
            uploadBackground();
             uploadrover();
             uploadrover1();
        }
    }
    function left()
    {
        if(rover_x >= 0)
        {
            rover_x =rover_x - 10;
            console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
            uploadBackground();
             uploadrover();
             uploadrover1();
        }
    }
    function right()
    {
        if(rover_x <= 1000)
        {
            rover_x =rover_x + 10;
            console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
            uploadBackground();
            uploadrover();
            uploadrover1();
       }
    }


    function up1()
    {
        if(car_y >=0)
        {
            car_y = car_y - 10;
            console.log("When up arrow is pressed car,  x = " + car_x + " | y = " + car_y);
             uploadBackground();
             uploadrover1();
             uploadrover();
        }
    }
    function down1()
    {
        if(car_y <=900)
        {
            car_y =car_y+ 10;
            console.log("When down arrow is pressed,  x = " + car_x + " | y = " + car_y);
            uploadBackground();
             uploadrover1();
             uploadrover();
        }
    }
    function left1()
    {
        if(car_x >= 0)
        {
            car_x =car_x - 10;
            console.log("When left arrow is pressed,  x = " + car_x + " | y = " +car_y);
            uploadBackground();
             uploadrover1();
             uploadrover();
        }
    }
    function right1()
    {
        if(car_x <= 1000)
        {
            car_x =car_x + 10;
            console.log("When right arrow is pressed,  x = " + car_x + " | y = " +car_y);
            uploadBackground();
            uploadrover1();
            uploadrover();
       }
    }
    var a = 2;
    
    function check(){
        
        if(rover_x > 900 && a == 2){
            console.log("White Car Won");
            document.getElementById("result").innerHTML = "White Car won";
            a = a - 1;
        }
        if( car_x > 900 && a == 2){
            console.log("Blue Car Won");
            document.getElementById("result").innerHTML = "Blue Car won";
            a = a-1;
        }
    } 