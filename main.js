//To start this project, click the bottom left corner of VSCode with the circle and the triangle and click the Terminal, then type hs -o and hit enter
//Make sure to always hard reload the page to see changes. cmd + shift + r

//This prints things to the console. 
// Hit ctrl + shift + i to open the inspector window in chrome
console.log('Hello World')


const colors = ["red", "orange", "yellow", "green", "blue"];
//You can access the elements in this array by saying colors[0] which would equal red and colors[1] would be orange

const colorLoop = () => {
  //This is a basic for loop, it is starting at 0 when it sets index = 0, then it keeps looping until the condition 'index < colors.length' is met. so its basivally just looping until it gets to the end of the array 'colors', and each itteration it is making index go up one number
  for(let index = 0; index < colors.length; index++)
  {
    console.log(colors[index])
  }
};

colorLoop()




const handleButtonClickHex = () => {

    //This just generates a random hex number. You can google shit like this haha
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    //This is actually changing the background color of the body tag, you can kinda see how document is the highest level thing like the whole page and then it goes to the body specifically and is changing the backgroundcolor
    document.body.style.backgroundColor = `#${randomColor}`;

    //And this is doing the same kinda thing but the queryselector is telling the computer to pint at the id of button-hex-name on the index.html file. you can do the same thing with classes but start with a . instead of a #, kinda like in CSS
    document.querySelector('#button-name-hex').innerHTML = `#${randomColor}`;
  };
  
const buttonEvent = () => {
    //This is a button click event. This is pretty far along stuff so dont worry if its confusing. but basically its telling the computer to wait until the button is clicked and then it calls the handleButtonCLickHex function above.
    document
      .querySelector('.hex-button')
      .addEventListener('click', handleButtonClickHex);
  };
  
  const colorArray = [
    'red',
    'blue',
    'yellow',
    'green',
    'orange',
    'purple',
    'cream',
    'wheat',
    'hotpink',
    'aquamarine',
    'brown',
    'cornflowerblue',
    'darkmagenta',
    'fuchsia',
  ];
  
  //This is just saving this document.querySelector('body') thing to a variable so you can use it over and over and don't have to retype that shit
  const bodySelector = document.querySelector('body');
  
  const handleButtonClickSimple = () => {
    //This is doing the same thing as the hex function, but instead of making a random hex number its picking a random color from the colorArray above  
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    bodySelector.style.backgroundColor = randomColor;
    document.querySelector('#button-name').innerHTML = `${randomColor}`;
  };
  
  const simpleButtonEvent = () => {
    document
      .querySelector('#buttons')
      .addEventListener('click', handleButtonClickSimple);
  };
  
  //You will see init functions a lot. You usually put every function you want to fire on page load in here 
  const init = () => {  
    simpleButtonEvent();
    buttonEvent();
  
  };
  
  //And here we are calling the init function
  init();