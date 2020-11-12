"use strict";

const start = async () => {
    let algoValue = Number(document.querySelector(".algo-menu").value);
    let speedValue = Number(document.querySelector(".speed-menu").value);

    if(speedValue === 0) {
        speedValue = 1;
    }
    if(algoValue === 0) {
        alert("No Algorithm Selected");
        return;
    }

    const algorithm = new Algorithms(speedValue);

    if(algoValue === 1) {
        await algorithm._BubbleSort();
    }
    if(algoValue === 2) {
        await algorithm._SelectionSort();
    }
    if(algoValue === 3) {
        await algorithm._InsertionSort();
    }
    if(algoValue === 4) {
        await algorithm._MergeSort();
    }
    if(algoValue === 5) {
        await algorithm._QuickSort();
    }
    if(algoValue === 6) {
        await algorithm._HeapSort();
    }
};

const Render = async () => {
    let sizeValue = Number(document.querySelector(".size-menu").value);

    if(sizeValue === 0) {
        sizeValue = 30;
    }
    await clearScreen();
    
    let list = await randomList(sizeValue);
    const arrayNode = document.querySelector(".array");
    for(const element of list)
    {
        const node = document.createElement("div");
        node.className = "cell";
        node.setAttribute("value", String(element));
        node.style.height = `${4*element}px`;
        arrayNode.appendChild(node);
    }
};

const randomList = async (Length) => {
    let list = new Array();
    let lowerBound = 1;
    let upperBound = 100;

    for (let counter = 0; counter < Length ; ++counter) {
        let randomNumber = Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound);
        list.push(parseInt(randomNumber));
    }
    return list;
}

const clearScreen = async () => {
    document.querySelector(".array").innerHTML = "";
}

const response = () => {
    let Navbar = document.querySelector(".navbar");
    if(Navbar.className === "navbar") {
        Navbar.className += " responsive";
    }
    else {
        Navbar.className = "navbar";
    }
};

document.querySelector(".icon").addEventListener("click", response);

document.querySelector(".start").addEventListener("click", start);

document.querySelector(".size-menu").addEventListener("change", Render);

window.onload = Render;