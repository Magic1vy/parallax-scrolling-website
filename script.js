let stars = document.querySelector('.stars');
let moon = document.querySelector('.moon-img');
let mountainsBehind = document.querySelector('.mountains-behind');
let mountainsFront = document.querySelector('.mountains-front');
let heading = document.querySelector('.heading');
let btn = document.querySelector('.btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountainsBehind.style.top = value * 0.5 + 'px';
    mountainsFront.style.top = value * 0 + 'px';
    heading.style.marginRight = value  * 4 + 'px';
    heading.style.marginTop = value  * 1.5 + 'px';
    btn.style.marginTop = value  * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})