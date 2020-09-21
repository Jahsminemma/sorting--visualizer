const line = 'user@mad-shell:~$ ';
const terminal = document.querySelector('.terminal');
let tag;
let newLine;

function welcome()
{
    const msg = document.createElement('div');
    msg.setAttribute('class', 'welcome-msg');
    msg.innerHTML += '<div> SEARCHING AND SORTING VISUALIZER </div>';
    document.querySelector('body').append(msg);
    terminal.appendChild(msg);
    
    const help = document.createElement('div');
    help.setAttribute('class', 'help-msg');
    help.innerHTML += "Hi user!!, type 'option' for terminal commands or click the button on top left of screen.";
    terminal.appendChild(help);
}

function newPrompt()
{
    if(document.querySelector('.prompt'))
    {
        tag.setAttribute('class', 'prev-prompt');
        newLine.disabled = true;
        newLine.setAttribute('class', 'prev-cmdline');
    }
    tag = document.createElement('label');
    newLine = document.createElement('input');

    // ASSIGNING ATTRIBUTES
    tag.innerText = line;
    tag.setAttribute('class', 'prompt');

    newLine.setAttribute('class', 'cmdline');
    newLine.setAttribute('maxlength', 40);

    terminal.appendChild(tag);
    terminal.appendChild(newLine);

    focusChecker();
    document.querySelector('.cmdline').onkeypress = updateWidth;
}

function updateWidth(event)
{
    if(newLine.value.length <= 10) {
        newLine.style.width = newLine.value.length + '9px';
    }
    else {
        newLine.style.width = newLine.value.length + '0px';
    }

    let keyPressed = String(event.key).toUpperCase();
    if(keyPressed === "ENTER") 
    {
        const query = filterString(newLine.value);
        updateEvents(query);
    }
}

function updateEvents(query)
{
    const routes = {
        "LINEAR SEARCH": "https://anandman03.github.io/sorting-and-searching-visualizer/views/linear-search.html",
        "BINARY SEARCH": "https://anandman03.github.io/sorting-and-searching-visualizer/views/binary-search.html",
        "BUBBLE SORT": "https://anandman03.github.io/sorting-and-searching-visualizer/views/bubble-sort.html",
        "INSERTION SORT": "https://anandman03.github.io/sorting-and-searching-visualizer/views/insertion-sort.html",
        "SELECTION SORT": "https://anandman03.github.io/sorting-and-searching-visualizer/views/selection-sort.html",
        "MERGE SORT": "https://anandman03.github.io/sorting-and-searching-visualizer/views/merge-sort.html",
    };
    
    let flag = false;
    for(const key of Object.keys(routes)) {
        if(query.reduced == key) flag = true;
    }

    if(flag) {
        window.location = routes[String(query.reduced)];
    }
    else {
        guideFunctions(query.original);
    }
}

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

function filterString(check)
{
    let newString = String(check).trim().toUpperCase().substr(3);
    let fullString = String(check).trim().toUpperCase();
    const query = {
        reduced: newString,
        original: fullString,
    }
    return query;
}

function focusChecker(event) 
{
    setTimeout(function() {
        newLine.focus();
    }, 10);
}

welcome();
newPrompt();

document.querySelector('.cmdline').onkeypress = updateWidth;
document.querySelector('.cmdline').onblur = focusChecker;
window.onload = focusChecker;