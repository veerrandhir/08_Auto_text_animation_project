
const containerE1 = document.querySelector('.container')
const careers = ['Youtuber', 'WebDeveloper' , 'SocialMedia Influencer', 'Writer' , 'Freelancer','Business Man', 'Entrepreneur', 'Actor']

let careerIndex = 0;
let charIndex = 0;
 
updateText();

function updateText() {
    charIndex++
    containerE1.innerHTML = `<h1> " I am ${careers[careerIndex]
        .slice(0,1) === "E"  ? "an" : "a" && careers[careerIndex]
        .slice(0,1) === "A"  ? "an" : "a" } ${careers[careerIndex]
        .slice(0,charIndex)} "<\h1> `
    if(charIndex === careers[careerIndex].length){
        careerIndex++
        charIndex = 0;
    }
    if(careerIndex === careers.length){
        careerIndex = 0; 
    }
    setTimeout(updateText, 300);
}