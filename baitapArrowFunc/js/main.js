const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];

loadColor = () => {
    let content = "";
    for (const value of colorList) {
        content += `
            <button class="color-button ${value}" onclick="changeColor('${value}')"></button>`
    }
    console.log(content);
    document.getElementById("colorContainer").innerHTML = content; 
}

loadColor();

let color_click = "";
changeColor = (color) => {
    loadColor();
    if (color_click != "") document.getElementById("house").classList.toggle(color_click); 
    document.querySelector(`.${color}`).classList.add("active");
    document.getElementById("house").classList.add(color);    
    color_click = color;
    console.log(color_click);
}

