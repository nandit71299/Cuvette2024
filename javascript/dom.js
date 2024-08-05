const heading = document.getElementById("heading");

function handleClick() {
    const currentBg = heading.style.backgroundColor;
    const currentFg = heading.style.color;
    heading.style.backgroundColor = currentBg === 'red' ? 'green' : 'red'
    heading.style.color = currentFg === 'black' ? 'white' : 'black'
}

setInterval(handleClick, 500)

const btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
    const target = event.target;
    const bg = target.style.backgroundColor;
    target.style.backgroundColor = bg === '' ? 'blue' : bg === 'blue' ? 'red' : bg === 'red' ? 'blue' : 'red'
})

