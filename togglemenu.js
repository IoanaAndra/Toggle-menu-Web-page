let toggleNavStatus = false;

let toggleNav = function()  {

    let getSideBar = document.querySelector(".nav-sidebar");
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    let getSideBarTitle = document.querySelector(".nav-sidebar span");
    let getSideBarLinks = document.querySelectorAll(".nav-sidebar a"); //puts element into array
   
    if(toggleNavStatus === false)  {

        getSideBarUl.style.visibility = "visible";
        getSideBar.style.width = "272px";
        getSideBarTitle.style.opacity = "0.5";

        let arrayLength = getSideBarLinks.length;

        for (let i = 0; i < arrayLength; i++) {
            const element = arr];

            getSidebarLinks[i].style.opacity = "1";
            
        }

        toggleNavStatus = true;
    }
    else if(toggleNavStatus === true)  {

        getSideBar.style.width = "50px";
        getSideBarTitle.style.opacity = "0";

        let arrayLength = getSideBarLinks.length;

        for (let i = 0; i < arrayLength; i++) {
            const element = arr];

            getSidebarLinks[i].style.opacity = "0";
            
        }

        toggleNavStatus = false;
    }
}