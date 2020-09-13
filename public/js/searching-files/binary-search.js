let LOCK = false;

function renderArray()
{
    if(LOCK) 
    {
        return;
    }
    document.querySelector('.array').innerHTML = '';
    document.querySelector('.indexes').innerHTML = '';

    const arrayLength = document.querySelector('.generator > input').value;
    const myArray = randomize(arrayLength);
    myArray.sort(function(a, b) { return a - b })
    
    // Base Case
    if(arrayLength > 200)
    {
        alert(`Length of array must be less than 200`);
        return;
    }

    const arrayNode = document.querySelector('.array');
    for(const element of myArray)
    {
        const node = document.createElement('div');
        node.className = 'cell';
        node.innerText = element;
        arrayNode.appendChild(node);
    }
}

async function startAlgorithm()
{
    if(LOCK) 
    {
        return;
    }
    const slider = document.querySelector('.slider');
    const intervalTime = slider.value;
    slider.disabled = LOCK = true;

    const cells = document.querySelectorAll('.cell');
    const queryValue = document.querySelector('.find-element > input').value;

    const arrayLength = cells.length;
    let startIndex = 0, endIndex = arrayLength - 1;

    while(startIndex <= endIndex)
    {
        let midIndex = startIndex + Math.floor((endIndex - startIndex)/2);
        if(Number(cells[midIndex].innerText) == queryValue)
        {
            cells[midIndex].setAttribute('class', `cell done`)
            printIndexes(midIndex);
            break;
        }
        if(Number(cells[midIndex].innerText) > queryValue)
        {
            await updateCells(cells, midIndex, endIndex, midIndex, intervalTime);
            endIndex = midIndex - 1;
        }
        else
        {
            await updateCells(cells, startIndex, midIndex, midIndex, intervalTime);
            startIndex = midIndex + 1;
        }
    }

    slider.disabled = LOCK = false;
}

function updateCells(cells, startIndex, endIndex, midIndex, intervalTime)
{
    return new Promise(function(resolve)
    {
        const currentCell = cells[midIndex];
        currentCell.setAttribute('class', `cell current`);

        setTimeout(function()
        {
            for(let index = startIndex ; index <= endIndex ; index++) 
            {
                cells[index].setAttribute('class', `cell visited`);
            }
            resolve();
        }, intervalTime);
    })
}

function printIndexes(status)
{
    const idx = document.querySelector('.indexes');
    if(status == '')
    {
        idx.innerHTML = `<div> Element not found </div>`;
    }
    else
    {
        idx.innerHTML += ` <div> Element Found at index : ${status} </div> `;
    }
}