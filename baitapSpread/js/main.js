jumpText = () => {
    let str = document.querySelector(".heading").innerHTML ;
    console.log(str);
    let char = [...str];
    let content = char.map((item,index) => {
        return `
            <span>${item}</span>
        `
   
    })

    document.querySelector(".heading").innerHTML = content.join("");
    
    console.log(content);
}

jumpText();