const SQUARE_COUNT = 3;
const SPEED = 5;
const TIMER_SPEED = 100;

document.addEventListener('DOMContentLoaded',()=>{
    let squareElement = document.getElementById("square");
    squareElement.style.backgroundColor = getRandomColor(); //starting color
    //let squareElement = document.querySelector("square"); it's the same thing as above
    squareElement.addEventListener("click", ()=>{
        alert("OMG YOU CAUGHT ME!");
    });

    //mouseover the square element to change the background color
    squareElement.addEventListener("mouseover", () => {
        squareElement.style.backgroundColor = getRandomColor();
    });

    let box = document.querySelector("#box");
    for(let i = 0; i<SQUARE_COUNT; i++)
    {
        //create the square
        let square = document.createElement('img');
        square.src = 'laughing_man.jpg';
        square.alt = 'Catch the Laughing Man!';
        square.className = 'square';
        square.addEventListener("mouseenter", ()=>{
             square.src="orochimaru_50x50.jpg";
         });
         square.addEventListener("mouseout", ()=> {
             square.src= 'laughing_man.jpg';
         });
        box.appendChild(square);
        //add it to the screen
    }
    let allSquares = box.children;
    let squareArray = Array.from(allSquares);
    squareArray.forEach(function(element, index){ //the index is getting passed in the foreach 
        var dx = SPEED * (Math.random()* 2 -1); //get the speed
        var dy = SPEED * (Math.random()* 2 -1); //get the speed 
        setInterval(() => {
            let currentLeft = parseInt(element.style.left) || 225; //  have to parseint it has the pixels and convert it to and INT. need to know the current position and move to amount of px
            let currentTop = parseInt(element.style.top) || 175; 
            if(currentLeft >=450 || currentLeft <=0) //change the direction to stay within the box
            {  
                dx*=-1;
                element.style.borderColor = getRandomColor();
            }
            if(currentTop >=350 || currentTop <=0)
            {
                dy*=-1;
            }
            
            element.style.left = (currentLeft+dx)+"px"; 
            element.style.top = (currentTop+dy)+ "px"; //move them a certain amount of px
        }, TIMER_SPEED); //all of the squares are going to get a dx and dy move all the squares at this speed
    });
   
}); 

function getRandomColor() {
    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;
    return color;
}