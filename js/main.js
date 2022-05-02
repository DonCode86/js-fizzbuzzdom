const list = document.querySelector(".list");
var element = document.getElementsByClassName("container");
//stampa in console numeri da 1 a 100
for( let i = 1; i <= 100; i++ ) {
    const element = document.createElement("li");
    element.classList.add("item");
    element.innerText = i;
    list.append(element);

    if ((i % 5) == 0 && (i % 3) == 0) {
        element.classList.add("item-fizzbuzz-active");
        console.log("fizzbuzz");
    }
    else if ((i % 3) == 0) {
        element.classList.add("item-fizz-active");
        console.log("fizz");
    }
    else if ((i % 5) == 0) {
        element.classList.add("item-buzz-active");
        console.log("buzz");
    }
    else console.log(i)
}

