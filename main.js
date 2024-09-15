// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Ears

rectangleFill("rgb(100, 100, 100)", 80, 260, 460, 80);

// Filled Triangle for Hair

ctx.fillStyle = "rgb(100, 100, 100)";
triangle(180, 80, 140, 100, 220, 100, 180, 80, "fill");

// Filled Triangle for Hair
ctx.fillStyle = "rgb(100, 100, 100)";
triangle(340, 80, 300, 100, 380, 100, 340, 80, "fill");

// Outlined Triangle for Hair
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(100, 100, 100)";
triangle(260, 80, 220, 100, 300, 100, 260, 80, "stroke");

// Outlined Triangle for Hair
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(100, 100, 100)";
triangle(420, 80, 380, 100, 460, 100, 420, 80, "stroke");

// Filled Triangle for Neck
ctx.strokeStyle = "rgb(180, 180, 180)";
triangle(300, 200, 220, 600, 380, 600, 300, 200, "fill");

// Rectangle Head
rectangleFill("rgb(180, 180, 180)", 100, 100, 400, 400);

// Filled Circle for Right Eye Socket
ctx.fillStyle = "#D7D7D7";
circle(400, 250, 50, "fill");

// Rectangle for Mouth
rectangleFill("#D7D7D7", 200, 350, 200, 60);

// Horizontal Line for Teeth
line(2, "rgb(180, 180, 180)", 200, 380, 400, 380);

// First Vertical Line for Teeth
line(2, "rgb(180, 180, 180)", 250, 350, 250, 410);

// Second Vertical Line for Teeth
line(2, "rgb(180, 180, 180)", 300, 350, 300, 410);

// Third Vertical Line for Teeth
line(2, "rgb(180, 180, 180)", 350, 350, 350, 410);

// First flower petal
ctx.lineWidth = 1;
ctx.fillStyle = "white";
circle(430, 250, 20, "fill");

ctx.strokeStyle = "black";
circle(430, 250, 20, "stroke");

// Second flower petal
ctx.fillStyle = "white";
circle(370, 250, 20, "fill");

ctx.strokeStyle = "black";
circle(370, 250, 20, "stroke");

// Third flower petal
ctx.fillStyle = "white";
circle(400, 220, 20, "fill");

ctx.strokeStyle = "black";
circle(400, 220, 20, "stroke");

// Fourth flower petal
ctx.fillStyle = "white";
circle(400, 280, 20, "fill");

ctx.strokeStyle = "black";
circle(400, 280, 20, "stroke");

// Leaf

quadrangle(
  "green",
  "#009900",
  400,
  250,
  420,
  260,
  420,
  295,
  395,
  272,
  400,
  250
);

// Filled Circle for Right Eye (Center of flower)
ctx.fillStyle = "orange";
circle(400, 250, 10, "fill");

// Line for Balloon
line(2, "#FF8000", 200, 300, 200, 350);

// Triangle for Balloon
ctx.strokeStyle = "red";
triangle(200, 290, 210, 310, 190, 310, 200, 290, "stroke");

ctx.fillStyle = "#FF00FF";
triangle(200, 290, 210, 310, 190, 310, 200, 290, "fill");

// Outlined Circle for Left Eye Socket
ctx.lineWidth = 1;
ctx.fillStyle = "#FF00FF";
circle(200, 250, 50, "fill");

ctx.strokeStyle = "red";
circle(200, 250, 50, "stroke");

// Outlined Circle for Right Eye Socket
ctx.strokeStyle = "grey";
circle(400, 250, 50, "stroke");

// Line for Left Eyebrow
line(2, "grey", 150, 180, 250, 180);

// Left Eyebrow (triangles)
// First Triangle
ctx.fillStyle = "white";
triangle(150, 180, 160, 160, 170, 180, 150, 180, "fill");

// Second Triangle
ctx.fillStyle = "blue";
triangle(170, 180, 180, 150, 190, 180, 170, 180, "fill");

// Third Triangle
ctx.fillStyle = "purple";
triangle(190, 180, 200, 190, 210, 180, 190, 180, "fill");

// Fourth Triangle
ctx.fillStyle = "red";
triangle(210, 180, 215, 160, 220, 180, 210, 180, "fill");

// Fives Triangle
ctx.fillStyle = "yellow";
triangle(220, 180, 235, 145, 250, 180, 220, 180, "fill");

// Line for Right Eyebrow
line(2, "grey", 350, 160, 450, 180);

// Outlined (first) Triangle for Nose
ctx.strokeStyle = "#00994C";
triangle(278, 280, 324, 280, 301, 240, 278, 280, "stroke");

// Outlined (second) Triangle for Nose
ctx.strokeStyle = "#00994C";
triangle(300, 280, 320, 320, 280, 320, 300, 280, "stroke");

// Fill Triangle for Nose
ctx.fillStyle = "green";
triangle(278, 300, 324, 300, 301, 260, 278, 300, "fill");

// Rect for Christmas tree
rectangleFill("#663300", 293, 320, 15, 25);

// Hat (first element)
quadrangle("#4C0099", "#FF8000", 69, 200, 240, 70, 224, 48, 54, 175, 69, 200);

// Hat (second element)
ctx.fillStyle = "#4C0099";
triangle(75, 160, 200, 65, 105, 60, 75, 160, "fill");

ctx.strokeStyle = "#FF8000";
triangle(75, 160, 200, 65, 105, 60, 75, 160, "stroke");
