const max_n = 100;
const list = document.querySelector(".list");
const container = document.querySelector("container");
//stampa in console numeri da 1 a 100
for( let i = 1; i <= max_n; i++ ) {
    const element = document.createElement("li");
    element.classList.add("item");
    list.append(element);

    if ((i % 5) === 0 && (i % 3) == 0) {
        element.classList.add("item-fizzbuzz-active");
        element.innerHTML += "fizzbuzz";
        console.log("fizzbuzz");
    }
    else if ((i % 3) === 0) {
        element.classList.add("item-fizz-active");
        element.innerHTML += "fizz";
        console.log("fizz");
    }
    else if ((i % 5) === 0) {
        element.classList.add("item-buzz-active");
        element.innerHTML += "buzz";
        console.log("buzz");
    }
    else {
        console.log(i)
        element.innerText = i;
    }
}

