import _ from 'lodash'
// import Print from './print.js';

function component() {
    let element = document.createElement("div");
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    // element.onclick = Print.bind(null,'Hello webpack!')

    return element;
}
document.body.appendChild(component());
