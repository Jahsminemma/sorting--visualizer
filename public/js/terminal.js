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
    newLine.style.width = (newLine.value.length + 1) + "ch";

    let keyPressed = String(event.key).toUpperCase();
    if(keyPressed === "ENTER") 
    {
        const query = filterString(newLine.value);
        updateEvents(query);
    }
}

function updateEvents(query)
{
    if(!checkRoute(query)) {
        guideFunctions(query.original);
    }
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

window.onload = function() {
    welcome();
    newPrompt();
    focusChecker();
    document.querySelector('.cmdline').onblur = focusChecker;
}