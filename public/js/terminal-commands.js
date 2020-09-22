function guideFunctions(query)
{
    const status = document.createElement('div');
    status.setAttribute('class', 'terminal-message');

    if(query == "HELP") 
    {
        const message = "Hi user!!, type 'option' for terminal commands or click the button on top left of screen.";
        status.innerHTML = message;
    }
    else if(query == "OPTION") 
    {
        const types = ["bubble sort", "insertion sort", "selection sort", "merge sort", "linear search", "binary search", "quick sort"];
        for(const type of types) {
            status.innerHTML += `<div> ${type} </div>`;
            status.innerHTML += '\n'
        }
        const message = "Type cd [Algorithm] and [Press Enter].";
        const example = "Like 'cd bubble sort' and [Press Enter].";
        status.innerHTML += `<br> <div> ${message} </div> <br> <div> ${example} </div>`;
    }
    else
    {
        const message = "No Command Found. For guidance type 'help'.";
        status.innerHTML = message;
    }
    terminal.appendChild(status);
    newPrompt();
}