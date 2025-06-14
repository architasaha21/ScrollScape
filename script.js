// const title = document.querySelector('.title')
// const leaf1 = document.querySelector('.leaf1')
// const leaf2 = document.querySelector('.leaf2')
// const bush2 = document.querySelector('.bush2')
// const mount1 = document.querySelector('.mount1')
// const mount2 = document.querySelector('.mount2')

// document.addEventListener('scroll', function() {
//     let value = window.scrollY
//     // console.log(value)
//     title.style.marginTop = value * 1.1 + 'px'

//     leaf1.style.marginLeft = -value + 'px'
//     leaf2.style.marginLeft = value + 'px'

//     bush2.style.marginBottom = -value + 'px'

//     mount1.style.marginBottom = -value * 1.1 + 'px'
//     mount2.style.marginBottom = -value * 1.2 + 'px'
// })

const title = document.querySelector('.title');
const leaf1 = document.querySelector('.leaf1');
const leaf2 = document.querySelector('.leaf2');
const bush2 = document.querySelector('.bush2');
const mount1 = document.querySelector('.mount1');
const mount2 = document.querySelector('.mount2');

let latestScroll = 0;
let ticking = false;

function updateParallax(scrollY) {
    title.style.marginTop = scrollY * 1.1 + 'px';
    leaf1.style.marginLeft = -scrollY + 'px';
    leaf2.style.marginLeft = scrollY + 'px';
    bush2.style.marginBottom = -scrollY + 'px';
    mount1.style.marginBottom = -scrollY * 1.1 + 'px';
    mount2.style.marginBottom = -scrollY * 1.2 + 'px';
}

window.addEventListener('scroll', function () {
    latestScroll = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            updateParallax(latestScroll);
            ticking = false;
        });
        ticking = true;
    }
});
