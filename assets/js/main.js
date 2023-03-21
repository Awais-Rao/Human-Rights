document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {

        

        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top', 'shadow');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            document.getElementById('wrapper').classList.remove('d-none');
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top', 'shadow');
            // remove padding top from body
            document.body.style.paddingTop = '0';
            document.getElementById('wrapper').classList.add('d-none');
        }
    });

});

/*==================== SHOW SCROLL UP ====================*/ 
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)


/*==================== HIDE SEARCHBAR ON SCROLL UP ====================*/ 
function hide_search(){
    const searchbar = document.getElementById('searchbar');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 10) searchbar.classList.remove('show_searchbar');
}
window.addEventListener('scroll', hide_search)



/*==================== SHOW SEARCHBAR  ====================*/ 

const search_button = document.getElementById('nav_button');
const search_bar = document.getElementById('searchbar');
const search_icon = document.getElementById('magnify_icon');

search_button.addEventListener( 'click', function(){
    search_bar.classList.add('show_searchbar');
    search_icon.classList.add('fa-xmark'); search_icon.classList.remove('fa-magnifying-glass');
})


/// ERROR IN GETTING ELEMENT

let close_icon = document.querySelector(".fa-xmark");

close_icon.addEventListener('click', function(){
    alert("hi");
    search_bar.classList.remove('show_searchbar');
})




