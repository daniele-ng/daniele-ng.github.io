/**
 * Animations for DOM elements with the API IntersectionObserver
 */

var startCountersAnimation = true;

window.addEventListener("load", (event) => {

    const observer = new IntersectionObserver(handleIntersection);

    const hiddenElements = document.querySelectorAll(".transition-hide");
    const motionUpElements = document.querySelectorAll(".transition-motion-up");
    const motionLeftElements = document.querySelectorAll(".transition-motion-left");
    const motionRightElements = document.querySelectorAll(".transition-motion-right");
    const motionPathElements = document.querySelectorAll(".path");

    if (hiddenElements.length > 0) hiddenElements.forEach(elm => observer.observe(elm));
    if (motionUpElements.length > 0) motionUpElements.forEach(elm => observer.observe(elm));
    if (motionLeftElements.length > 0) motionLeftElements.forEach(elm => observer.observe(elm));
    if (motionRightElements.length > 0) motionRightElements.forEach(elm => observer.observe(elm));    
    if (motionPathElements.length > 0) motionPathElements.forEach(elm => observer.observe(elm));    

})

/**
 * Callback for the observer
 * 
 * @param {*} entries DOM elements array
 */
function handleIntersection(entries) {

    entries.map((entry) => {

        if (entry.isIntersecting) {

            if ( entry.target.classList.contains("transition-hide") ) {
                
                entry.target.classList.add('transition-fade-in');

            }

            if ( entry.target.classList.contains("transition-motion-up") ) {
                
                entry.target.classList.add('transition-slide-vertical');

            }

            if ( entry.target.classList.contains("transition-motion-left") || entry.target.classList.contains("transition-motion-right") ) {
                
                entry.target.classList.add('transition-slide-horizontal');

            }

            if ( entry.target.id == "counter" && startCountersAnimation) {

                startCounters();                

            }

            if ( entry.target.id == "keywords-cloud") {

                document.getElementById("path").classList.add("cloud-path"); 
                document.getElementById("words-cloud").classList.add("cloud-words-fade-in");               

            }

            if ( entry.target.classList.contains("path-top") ) {
                
                entry.target.classList.add('path-top-animation');

            }

            if ( entry.target.classList.contains("path-intermediate") ) {
                
                entry.target.classList.add('path-intermediate-animation');

            }

        }
    });
}

/**
 * Run counters animations
 */
function startCounters() {

    startCountersAnimation = false;

    let countProfile1 = -1;
    let limitCountProfile1 = document.querySelector( "#counter-profile-1" ).getAttribute('data-value');
    let countProfile2 = -1;
    let limitCountProfile2 = document.querySelector( "#counter-profile-2" ).getAttribute('data-value');
    let countProfile3 = -1;
    let limitCountProfile3 = document.querySelector( "#counter-profile-3" ).getAttribute('data-value');
    let countProfile4 = -1;
    let limitCountProfile4 = document.querySelector( "#counter-profile-4" ).getAttribute('data-value');

    var interval1 = setInterval(() => {

        countProfile1++;
        document.querySelector( "#counter-profile-1" ).innerHTML = countProfile1 + "%";
        document.querySelector( "#counter-profile-bar-1" ).setAttribute("style" , "width:" + countProfile1 + "%");

        if ( countProfile1 ==  limitCountProfile1 ) clearInterval(interval1);

        
    }, 50);

    var interval2 = setInterval(() => {

        countProfile2++;
        document.querySelector( "#counter-profile-2" ).innerHTML = countProfile2 + "%";
        document.querySelector( "#counter-profile-bar-2" ).setAttribute("style" , "width:" + countProfile2 + "%");

        if ( countProfile2 == limitCountProfile2 ) clearInterval(interval2);

        
    }, 50);

    var interval3 = setInterval(() => {

        countProfile3++;
        document.querySelector( "#counter-profile-3" ).innerHTML = countProfile3 + "%";
        document.querySelector( "#counter-profile-bar-3" ).setAttribute("style" , "width:" + countProfile3 + "%");

        if ( countProfile3 == limitCountProfile3 ) clearInterval(interval3);

        
    }, 50);

    var interval4 = setInterval(() => {

        countProfile4++;
        document.querySelector( "#counter-profile-4" ).innerHTML = countProfile4 + "%";
        document.querySelector( "#counter-profile-bar-4" ).setAttribute("style" , "width:" + countProfile4 + "%");

        if ( countProfile4 == limitCountProfile4 ) clearInterval(interval4);

        
    }, 50);
}