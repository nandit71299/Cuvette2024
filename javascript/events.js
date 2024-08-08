function handleClick() {
    console.log("Hello I am Clicked")
}

console.log("HEllo")

document.getElementById('btn').addEventListener('dblclick', () => {
    console.log("Hello")
})

document.addEventListener('DOMContentLoaded', setTimeout(50000, console.log("Hello")))
