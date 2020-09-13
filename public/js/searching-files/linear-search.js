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
    const indexes = new Array();

    const arrayLength = cells.length;
    for(let index = 0 ; index < arrayLength ; index++)
    {
        await updateCells(cells, index, indexes, queryValue, intervalTime);
    }
    printIndexes(indexes);
    
    slider.disabled = LOCK = false;
}

async function updateCells(cells ,i, indexes, value, intervalTime)
{
    return new Promise(function(resolve) 
    {
        const currentCell = cells[i];
        currentCell.setAttribute('class', `cell current`);

        setTimeout(function() {
            if(Number(currentCell.innerHTML) == value)
            {
                indexes.push(i);
                currentCell.setAttribute('class', `cell done`);
            }
            else
            {
                currentCell.setAttribute('class', `cell visited`);
            }
            resolve()
        }, intervalTime);
    })
}

function printIndexes(indexes)
{
    const idx = document.querySelector('.indexes');
    if(indexes.length == 0)
    {
        idx.innerHTML = `<div> Element not found </div>`;
    }
    else
    {
        idx.innerHTML += ` <div> Element Found at index : </div> `;
        for(let i = 0 ; i < indexes.length ; i++)
        {
            if(i != indexes.length - 1) 
            {
                idx.innerHTML += `<div> ${indexes[i]} </div> , `;
            }
            else
            { 
                idx.innerHTML += `<div> ${indexes[i]} </div>`;
            }
        }
    }
}