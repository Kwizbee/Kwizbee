let navcontainer = document.querySelector(".navcontainer");
let iframe = document.getElementById('display');
let navbarelements = document.querySelectorAll(".headerbuttons")
console.log(navbarelements)

var t = TweenLite.to(".navcontainer", .25, {backgroundColor:"#F6EFD9", ease:Linear.easeNone, paused:true, reversed:true});
var t2 = TweenLite.to(".headerbuttons", .1, {color:"black", ease:Linear.easeNone, paused:true, reversed:true});

function loop() {
    requestAnimationFrame(loop)
    if(iframe.contentWindow.scrollY < 75){
        t.reverse()
        t2.reverse()
    } else {
        t.play()
        t2.play()
    }
    for (const element of navbarelements) {
        let navbarhover = TweenLite.to(element, .1, {color:"#F3D319", ease:Linear.easeNone, paused:true, reversed:true});
        let navbarreverse
        if(iframe.contentWindow.scrollY < 75) {
            navbarreverse = TweenLite.to(element, .1, {color:"#F6EFD9", ease:Linear.easeNone, paused:true, reversed:true});
        } else {
            navbarreverse = TweenLite.to(element, .1, {color:"black", ease:Linear.easeNone, paused:true, reversed:true});
        }
        
        element.addEventListener("mouseenter", () => navbarhover.play());
        element.addEventListener("mouseleave", () => navbarreverse.play());
      }
}

loop()