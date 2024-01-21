// // SearchForm Section code
// let searchForm = document.querySelector('.search-form');
// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
// }
// window.onscroll = () =>{
//     searchForm.classList.remove('active');
// }

// $(document).ready(function(){

//     $(window).scroll(function(){
//         //Navbar-bottom scrolling
//         if(this.scrollY > 5){
//             $('.navbar-bottom').addClass("sticky");
//         }else{
//             $('.navbar-bottom').removeClass("sticky");
//         }

//         //Scrolling Button Btn
//         if(this.scrollY > 500){
//             $('.scroll-up-btn').addClass("show");
//         }else{
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

//         //slide up script
//         $('.scroll-up-btn').click(function(){
//             $('html').animate({scrollTop:0});
//         });
        
    
// });


const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>50)
});

    // //////////navlistmenudrop//////////////////////
    let menuIcon=document.querySelector("#menu-icon");
    let navlist=document.querySelector(".navlist");
    
    menuIcon.onclick = ()=>{
        menuIcon.classList.toggle("bx-x");
        navlist.classList.toggle("open");
    }



