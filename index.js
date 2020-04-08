let menuDropdownLinks = document.querySelectorAll('.menu-dropdown-item');
let navButton = document.querySelector('#navButton');
let menuItems = document.querySelectorAll('.menu-item');

menuDropdownLinks.forEach(function(item)
{
    item.onclick = toggleDropdown;

});
 newLocal = menuItems.forEach(function (item) {
    item.onclick = changeSection;
});

navButton.onclick = function() {
    let nav = document.querySelector('nav');
    if(nav.classList.contains('showNav')) {
        nav.className = "closeNav";
        toggleHamburgerMenu();
        toggleClosebtn();
    }
    else
    {
        nav.className = "showNav";
        toggleHamburgerMenu();
        toggleClosebtn(); 
    }
}

function changeSection() {
    let activeArticle = document.querySelector('.activeArticle');
    let newArticleId = this.getAttribute('href');
    let newArticle = document.querySelector( newArticleId);
    let nav = document.querySelector('nav');
    if(nav.classList.contains('showNav')){
        nav.className = "closeNav";
    }
    
    activeArticle.classList.remove('active-article');
    activeArticle.hidden = true;
    newArticle.classList.add('active-article');
    newArticle.hidden = false;
}

function toggleDropdown(){

    let listNumber = this.dataset.list;
    let ul = document.querySelector('#sublist-' + listNumber);

    let arrow = document.querySelector('#sublist-' + listNumber + '-arrow');
    
    if(ul.hidden) {
        ul.hidden = false;
        arrow.innerText = "arrow_drop_up";
    }
    else{
        ul.hidden = true;
        arrow.innerText = "arrow_drop_down";
    }
    }
    function toggleHamburgerMenu() {
        let menu = document.querySelector('.hamburger-menu');
        if(menu.hidden)
        {
            menu.hidden = false;
        }
        else
        {
            menu.hidden = true;
        }

    }
function toggleClosebtn() {
    let closebtn = document.querySelector('.close-btn');
    if(closebtn.hidden)
        {
            closebtn.hidden = false;
        }
        else
        {
            closebtn.hidden = true;
        }

}