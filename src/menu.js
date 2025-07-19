import "./menu.css"
import menuPic from "./fast-food.png";
export function menu(cont){
    const titleMenu = document.createElement("div");
    titleMenu.setAttribute("class","titleMenu");
    const pic = document.createElement("img");
    pic.setAttribute("id", "menuPic");
    pic.src = menuPic;
    const menuTxt = document.createElement("div");
    menuTxt.setAttribute("class", "center-text")
    menuTxt.textContent="Menu"
    const menuContent = document.createElement("div");
    menuContent.setAttribute("class", 'block');
    const headling = document.createElement("div");
    headling.setAttribute("class", "headling");
    headling.textContent= "Burger Menu:";
    const menuPositions = document.createElement("div");
    menuPositions.setAttribute("class", "menuPositions");
    menuPositions.textContent = "Burger Menu: \n Classic Burger - $6.99\nCheeseburger - $7.49\nBacon Cheeseburger - $8.49\nDouble Patty Burger - $9.99\nVeggie Burger - $ 7.99\nChicken Burger - $7.79\n\nFries - $8.99\nOnion Rings - $6.49\nSoft Drink - $6.99\nMilkshake - $4.99";
        function appending(){
        cont.appendChild(titleMenu);
        cont.appendChild(menuContent);
        menuContent.appendChild(headling)
        menuContent.appendChild(menuPositions)
        titleMenu.appendChild(pic);
        titleMenu.appendChild(menuTxt);
        

    }
    appending()
}