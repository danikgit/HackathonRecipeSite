num1 += num1 + 5;
document.write(num1);

function sayHello(name, age) {
    if (name == "" || age == "")
    return;
    document.write(name + " is " + age + " years old.");
}

function MouseOver() {
    document.images[img1].src = "jsimg1.jpg"
}

function MouseOut() {
    document.images[img1].src = "jsimgpink.png"
}

function Load() {
    document.images[img1].src = "jsimgpink.png"
}