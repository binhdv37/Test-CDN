let count = 0;
let greetings = ['Xin chào thế giới', 'Hello world!'];
function changeGreeting() {
    let index = count % 2;
    document.getElementById('greeting').innerHTML = greetings[index];
    count++;
    if (count === 1000) count = 0;
}
setInterval(changeGreeting, 1000);