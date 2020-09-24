const user = {
    name: 'anandman03',
    repo: 'sorting-and-searching-visualizer'
}

const header = `
    <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox"/>
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
                <div> <h4> 
                    <a href="https://${user.name}.github.io/${user.repo}/"> Searching & Sorting Visualizer </a> 
                </h4> </div>
                <li><a href="https://${user.name}.github.io/${user.repo}/views/linear-search.html">Linear Search</a></li>
                <li><a href="https://${user.name}.github.io/${user.repo}/views/binary-search.html">Binary Search</a></li>
                <li><a href="https://${user.name}.github.io/${user.repo}/views/bubble-sort.html">Bubble Sort</a></li>
                <li><a href="https://${user.name}.github.io/${user.repo}/views/insertion-sort.html">Insertion Sort</a></li>
                <li><a href="https://${user.name}.github.io/${user.repo}/views/selection-sort.html">Selection Sort</a></li>
                <li><a href="https://${user.name}.github.io/${user.repo}/views/merge-sort.html">Merge Sort</a></li>
                <li><a href="https://${user.name}.github.io/${user.repo}/views/quick-sort.html">Quick Sort</a></li>
            </ul>
        
        </div>
    </nav>
    <br>
`

document.write(header)