var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")
var delta = document.getElementById("deltavalue")
var x1 = document.getElementById("x1value")
var x2 = document.getElementById("x2value")
var start = document.getElementById("sub")


document.getElementById("start").addEventListener("click", function() {
    a = prompt("Insira o valor de A")
    b = prompt("Insira o valor de B")
    c = prompt("Insira o valor de C")

    console.log(a)
    console.log(b)
    console.log(c)

    delta = ((b * b) - (4 * a * c))

    x1 = ((-1 * b) + Math.sqrt(delta))
    x1 = x1 / (2 * a)

    x2 = ((-1 * b) - Math.sqrt(delta))
    x2 = x2 / (2 * a)

    console.log(delta)
    console.log(x1)
    console.log(x2)

    x1value.textContent = x1;
    x2value.textContent = x2;
    deltavalue.textContent = delta;

    document.getElementById("detail").disabled = false;

    return a, b, c, x1, x2, delta;
})

function toggling() { 
    var togdtl = document.getElementById("dtl")
    if (togdtl.style.display === "none") {
        togdtl.style.display = "flex";
    } else {
        togdtl.style.display = "none";
    }
}

document.getElementById("detail").addEventListener("click", function() {
    d1.textContent = b + "² = " + (b * b)  
    d2.textContent = "4 * " + a + " * " + c + " = " + (4 * a * c) 
    d3.textContent = (b * b) + " - " + (4 * a * c) + " = " + delta

    x11.textContent = "( - " + b + " + √" + delta + ") / 2*" + a
    x12.textContent = (-1 * b) + " + " + Math.sqrt(delta) + " / " + (2*a)
    x13.textContent = "x' = " + x1

    x21.textContent = "( - " + b + " - √" + delta + ") / 2*" + a
    x22.textContent = (-1 * b) + " - " + Math.sqrt(delta) + " / " + (2*a)
    x23.textContent = "x'' = " + x2
})
