import burgerPic from "./cheese-burger.png"
import chickenPic from "./fried-chicken.png"

export function home(cont){
        const title = document.createElement("div");
        title.setAttribute("class","title");
        const leftImg =document.createElement("div");
        leftImg.setAttribute("class", "left-img");
        const rightImg =document.createElement("div");
        rightImg.setAttribute("class","right-img");
        const centerText = document.createElement("div");
        centerText.setAttribute("class","center-text");
        const imgRight = document.createElement("img");
        imgRight.src = chickenPic;
        const imgLeft = document.createElement("img");
        imgLeft.src = burgerPic;
        const block = document.createElement("div");
        block.setAttribute("class", "block");
        const headline = document.createElement("div");
        headline.setAttribute("class", "headline");
        headline.textContent="About us";
        const texting = document.createElement("div");
        texting.setAttribute("class","text");
        texting.textContent="Welcome to The Burger Sanctuary! We’ve got everything you’re looking for, from the Classic, to fusion flavors like the Kimchi, to the Veggie, for our vegetarian friends. We’re committed to serving delicious, fresh fare that will make you re-think how burgers should taste. Check out our menu for our variety of hand-crafted burgers and see why people come to us for the Best Burger";
    
    function appending(){
        cont.appendChild(title);
        cont.appendChild(block);
        block.appendChild(headline);
        block.appendChild(texting);
        title.appendChild(leftImg);
        leftImg.appendChild(imgLeft);
        rightImg.appendChild(imgRight);
        
        title.appendChild(centerText);
        title.appendChild(rightImg);
        centerText.textContent="Burger Sanctuary"
    }
    appending()
}