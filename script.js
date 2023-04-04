function setup(){
    createCanvas(1300,650);
}

function draw(){
    
    drawEllipse();
    drawSun();
    drawPlanets();
}


function drawSun(){
   fill('yellow')
   circle(650,325, 80)
   triangle(650, 275, 675, 285, 675, 250)  
   triangle(690, 295, 700, 315, 725, 290)
   triangle(700, 330, 695, 350, 730, 350)
   triangle(685, 364, 665, 380, 695, 400)
   triangle(645, 375, 620, 365, 625, 405)
   triangle(605, 350, 600, 320, 570, 340)
   triangle(605, 295, 625, 280, 600, 260)   
   
   
}

function drawEllipse(){
    ellipse(650, 325, 1200, 450)
    ellipse(620, 325, 1000, 420)
    ellipse(620, 325, 860, 380)
    ellipse(635, 325, 700, 340)
    ellipse(650, 315, 550, 310)
    
}

function drawPlanets(){
    fill('rgb(99, 228, 242)')
    circle(480,193, 15)
    fill('rgb(214, 159, 190)');
    circle(340, 235, 25)
    fill('purple')
    circle(260, 225, 30)
    fill('rgb(168, 168, 168)')
    circle(1000, 190, 40)
    fill('rgb(95, 194, 111)')
    circle(1180, 420, 80)
    fill('white');
}