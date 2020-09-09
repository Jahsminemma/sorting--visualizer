const controls = `
    <div class="controls">

        <div class="generator">
            <input type="number" placeholder="Enter length of array to be generated">
            <button class="btn" onclick="renderArray()">Generate Random Elements</button>
        </div>

        <div class="speed">
            <label for="text" style="font-size: 17px;">Fast</label>
            <input type="range" class="slider" min="80" max="2000" value="1500" step="">
            <label for="text" style="font-size: 17px;">Slow</label>
        </div>

    </div>
`

document.write(controls)