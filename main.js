function preload()
{

}

function setup()
{
    canvas = createCanvas(700, 500);
    canvas.position(390, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    background(500);
    image(video, 170, 125, 350, 250);
    fill(12, 143, 1, 0);
    stroke(12, 143, 1);
    strokeWeight(30);
    rect(50, 50, 600, 400,);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(60, 60, 65);
    circle(640, 60, 65);
    circle(640, 440, 65);
    circle(60, 440, 65);
}


function take_snapshot()
{
    save("Selfie.png");
}