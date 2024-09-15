// Circle
function circle(x, y, r, type) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);

  if (type == "fill") {
    ctx.fill();
  } else if (type == "stroke") {
    ctx.stroke();
  }
}

// Rectangle (fill)
function rectangleFill(color, x, y, w, h) {
  ctx.beginPath();
  ctx.fillStyle = `${color}`;
  ctx.fillRect(x, y, w, h);
}

// Triangle
function triangle(x1, y1, x2, y2, x3, y3, x1, y1, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x1, y1);

  if (type == "fill") {
    ctx.fill();
  } else if (type == "stroke") {
    ctx.stroke();
  }
}

// Line
function line(lineWidth, color, x1, y1, x2, y2) {
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// quadrangle
function quadrangle(
  fillColor,
  strokeColor,
  x1,
  y1,
  x2,
  y2,
  x3,
  y3,
  x4,
  y4,
  x1,
  y1
) {
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = strokeColor;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.lineTo(x1, y1);

  ctx.fill();
  ctx.stroke();
}
