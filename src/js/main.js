const selfDescriptionContainer = document.querySelector("#self-desc")
const spotifyContainer = document.querySelector("#spotify")
const skillsContainer = document.querySelector("#skills")
const connectContainer = document.querySelector("#connect")

function addDoodle(name, positioin, yVal, xVal, hVal, container){
    
    const doodleElement = document.createElement("img");
    if (positioin === "top"){
        doodleElement.src = "/"+name+".png";
        doodleElement.classList.add('absolute',`-top-[${yVal}px]`, `-right-${xVal}`, `h-[${hVal}px]`)
    } else {
        doodleElement.src = "/"+name+".png";
        doodleElement.classList.add('absolute',`-bottom-[${yVal}px]`, `-left-[${xVal}px]`, `h-[${hVal}px]`)
    }
    
    container.append(doodleElement)

}

selfDescriptionContainer.addEventListener('mouseover', function(){ 
    addDoodle("face", "top", "80", "14", "200", selfDescriptionContainer)
    addDoodle("question", 'bottom', "80", "80", "200", selfDescriptionContainer)
})

selfDescriptionContainer.addEventListener('mouseleave', function(){
    const doodles = selfDescriptionContainer.querySelectorAll('img');
    doodles.forEach(function(doodle) {
        doodle.remove();
    });
})

spotifyContainer.addEventListener('mouseover', function(){ 
    const doodleElement = document.createElement("img");
    doodleElement.src = "/notes.png";
    doodleElement.classList.add('absolute',`top-[40px]`, `-right-[35px]`, `h-[180px]`)
    spotifyContainer.append(doodleElement)
    
    addDoodle("music", 'bottom', "10", "50", "200", spotifyContainer)
})

spotifyContainer.addEventListener('mouseleave', function(){
    const doodles = spotifyContainer.querySelectorAll('img');
    doodles.forEach(function(doodle) {
        doodle.remove();
    });
})

skillsContainer.addEventListener('mouseover', function(){ 
    addDoodle("pencil", 'top', "60", "14", "180", skillsContainer)
    addDoodle("laptop", 'bottom', "70", "95", "250", skillsContainer)
})

skillsContainer.addEventListener('mouseleave', function(){
    const doodles = skillsContainer.querySelectorAll('img');
    doodles.forEach(function(doodle) {
        doodle.remove();
    });
})


connectContainer.addEventListener('mouseover', function(){ 
    addDoodle("handshake", 'top', "110", "20", "330", connectContainer)
})

connectContainer.addEventListener('mouseleave', function(){
    const doodles = connectContainer.querySelectorAll('img');
    doodles.forEach(function(doodle) {
        doodle.remove();
    });
})
