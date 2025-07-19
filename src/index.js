import "./styles.css"
import { menu } from "./menu.js";
import {home } from "./home.js";
import{contact} from "./contact.js";
 const content = document.querySelector("#content");
const homeC = document.querySelector("#home");
const contactC = document.querySelector("#contact");
const menuC = document.querySelector("#menu");
home(content)
homeC.addEventListener("click",()=>{
    clear();
    home(content);
})
contactC.addEventListener("click", ()=>{
    clear();
    contact(content);
})
menuC.addEventListener("click",()=>{
    clear();
    menu(content);
})
function clear(){
    content.innerHTML = '';
}

