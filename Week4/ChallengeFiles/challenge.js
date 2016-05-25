// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.

var divElement = document.createElement();
divElement.className = 'planet';
divElement.style.backgroundColor = 'red';

document.body.appendChild(divElement);


// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.

var divElement2 = document.createElement();
divElement2.className = 'moon';
divElement.appendChild(divElement2);




//extra code
///document..appendChild(divElement2);
/*

var div = document.createElement('div');
div.innerHTML = "my <b>new</b> skill - <large>DOM manipulation!</large>";
// set style
div.style.color = 'red';
// better to use CSS though - just set class
div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
document.body.appendChild(div);

*/
