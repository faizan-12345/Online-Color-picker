const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");

const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = ""; // clearing the container
    for(let i = 0; i < maxPaletteBoxes; i++){
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`
        

        // creating a new li element and injecting it to the container
        const color = document.createElement("li");
        color.classList.add("color"); 
        color.innerHTML = `<div class="rect-box" style="background:${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`
        // adding copyCode functionality for current li
        color.addEventListener("click",() => copyCode(color, randomHex));
        container.appendChild(color);
    }
}
generatePalette();


const copyCode = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex-value");

  // Copying the hex value, Updating the text to copied 
  // and changing text back to original hex after 1 second
  navigator.clipboard.writeText(hexVal).then(() => {
    colorElement.innerText = "Copied";
    setTimeout(() => colorElement.innerText = hexVal,1000)
  }).catch(() => alert("Failed to copy the color code!"));
}

refreshBtn.addEventListener("click",generatePalette);