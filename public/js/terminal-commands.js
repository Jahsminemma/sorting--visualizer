function guideFunctions(query)
{
    const status = document.createElement('div');
    status.setAttribute('class', 'terminal-message');

    if(query == "HELP") {
        help(status);
    }
    else if(query == "OPTION") {
        option(status);
    }
    else if(query == "ABOUT") {
        about(status);
    }
    else {
        const message = "No Command Found. For guidance type 'help'.";
        status.innerHTML = message;
    }
    terminal.appendChild(status);
    newPrompt();
}

function help(status)
{
    const message = "Hi user!!, type 'option' for terminal commands or click the button on top left of screen.";
    status.innerHTML = message;
}

function option(status)
{
    const types = ["bubble sort", "insertion sort", "selection sort", "merge sort", "linear search", "binary search", "quick sort", "about"];
    for(const type of types) {
        status.innerHTML += `<div> ${type} </div>`;
        status.innerHTML += '\n'
    }
    const message = "Type cd [Command] and [Press Enter].";
    const example = "Like 'cd bubble sort' and [Press Enter].";
    status.innerHTML += `<br> <div> ${message} </div> <br> <div> ${example} </div>`;
}

function about(status)
{
    const message = "This is a web app built to visualize classic sorting algorithms such as \
    bubble, insertion, selection, merge, quick sort and search algorithms such as linear and \
    binary search. The entire app is built with HTML, CSS and JavaScript. To know more about \
    the creator of this web app :";
    status.innerHTML += message + "<br> <br>";
    const creator = "<div> Run 'cd creator' </div>";
    status.innerHTML += creator;
}