const data = {
    image_1: 
    {
        src: "./public/1.jpg",
        alt: "Le Chat Roux"
    },
    image_2: 
    {
        src: "./public/2.jpg",
        alt: "Le Perroquet"
    }
}
const li = document.querySelector("li")
li.classList.add("slide")
const img = document.querySelector("img");
li.appendChild(img);
const buttons = document.querySelectorAll(".btn")
const slides = document.querySelectorAll(".slide")

buttons.forEach((button) => {

    button.addEventListener("click", (e)=>{
       const calcNextSlide = e.target.id === "next" ? 1 : -1;
       const slideActive = document.querySelector('.active')

      let newIndex = calcNextSlide + [...slides].indexOf(slideActive);
       
      if(newIndex < 0) newIndex = [...slides].length - 1;
       if(newIndex >= [...slides].length) newIndex = 0 ;
       slides[newIndex].classList.add("active")

       slideActive.classList.remove("active")
    })
})