canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown)
var mouseevent="" 
function my_mousedown(e)
{
    mouseevent="mousedown"
}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e)
{
    mouseevent="mouseup"
}

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e)
{
    mouseevent="mouseleave"
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft
    current_position_of_y = e.clientY - canvas.offsetTop

    if (mouseevent == "mousedown"){
        ctx.beginPath()
        ctx.strokeStyle = "black"
        ctx.lineWidth = 2
        ctx.moveTo(last_position_of_x, last_position_of_y)
        ctx.lineTo(current_position_of_x,current_position_of_y)
        ctx.stroke()
          
    }
    last_position_of_x=current_position_of_x
    last_position_of_y=current_position_of_y
}

