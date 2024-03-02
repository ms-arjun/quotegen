let btn = document.querySelector("#new-quote");
let bodybg = document.querySelector("body");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
const allQuotes = [
    {
        quote: "Sometimes, when you get something new,you trick yourself into believing it has the power to change absolutely everything about you." ,
        author: "Siobhan Vivian"
    },
    {
        quote: "The object of your desire is not an object" ,
        author: "Jack Gardner"
    },
    {
        quote: "The object of your desire is not an object" ,
        author: "Jack Gardner"
    },
    {
        quote: "Be yourself; everyone else is already taken." ,
        author: "Oscar wilde"
    },
]
let img1 = "url('./assets/pexels-aleksandar-pasaric-325185.jpg')";
let img2 ="url('./assets/pexels-ian-turnell-709552.jpg')";
let img3 = "url('./assets/pexels-sohail-nachiti-807598.jpg')";


btn.addEventListener("click",function(){
let colors = [img1,img2,img3];
let ranColor = Math.floor(Math.random() * colors.length)
bodybg.style.background = colors[ranColor] ;




let random =  Math.floor(Math.random() * allQuotes.length);
     quote.innerText = allQuotes[random].quote;
    
    author.innerText = allQuotes[random].author;
})




 

// btn.addEventListener("click", function(){
//      let random =  Math.floor(Math.random() * allQuotes.length);
//      quote.innerText = allQuotes[random].quote;
    
//      author.innerText = allQuotes[random].author;


     
// })
