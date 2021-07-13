const hero = document.querySelector('.hero');
const nav = document.querySelector('nav');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const tl = new TimelineMax();

tl.fromTo(hero,1,{height: "0%"}, {height: "80%", ease : Power2.easeInOut})

.fromTo(hero, 1.2, {width: "100%"}, {width : "80%", ease : Power2.easeInOut})

.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease : Power2.easeInOut}, "-=1.2")

.fromTo(nav, 1.2, {opacity: 0, x: 6000}, {opacity: 1, x: 0}, "-=1.5")

.fromTo(logo, 1.5, {opacity: 0, y: -600}, {opacity: 1, y: 0}, "-=1.2")

.fromTo(hamburger, 1.5, {opacity: 0, y: -600}, {opacity: 1, y: 0}, "-=1.2")

.fromTo(headline, 0.5, {opacity: 0, x: 60}, {opacity: 1, x: 0}, "-=0.5")

//here 1,1.2,0.5 are duration of animation
//and -=1.2,-=0.5 are animation delay duration