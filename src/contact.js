export function contact(cont){

        const titleMenu = document.createElement("div");
        titleMenu.setAttribute("class","titleMenu");
        const menuTxt = document.createElement("div");
        menuTxt.setAttribute("class", "center-text")
        menuTxt.textContent="Contacts"
        const menuContent = document.createElement("div");
        menuContent.setAttribute("class", 'block');
        const headling = document.createElement("div");
        headling.setAttribute("class", "headling");
        headling.textContent= "Personal information";
        const menuPositions = document.createElement("div");
        menuPositions.setAttribute("class", "menuPositions");
        menuPositions.textContent = " Contact List:\n\nEmily Carter - emily.carter@gmail.com - (555) 497-8479\nJames Nguyen - james.nguyen@gmail.com - (555) 987-5944\nSofia Patel - sofia.patel@gmail.com - (555) 645-7789\nLiam Robinson - liam.robinson@gmail.com - (555) 876-9944\nIsabella Kim - isabella.kim@gmail.com - (555) 496-4484\nNoah Thompson - noah.thompson@gmail.com - (555) 678-9964\nAva Martinez - ava.martinez@gmail.com - (555) 475-9945\nEthan Brooks - ethan.brooks@gmail.com - (555) 494-8844";
            function appending(){
            cont.appendChild(titleMenu);
            cont.appendChild(menuContent);
            menuContent.appendChild(headling)
            menuContent.appendChild(menuPositions)
            titleMenu.appendChild(menuTxt);
            
    
        }
        appending()
    }
