// DOM IMPORTS
const typewriterElements = document.getElementsByClassName("typewriter");
const themeToggle = document.getElementsByClassName("theme")[0];
themeToggle.onclick = () => {
    document.body.classList.toggle('light-theme');
    themeToggle.textContent = "Toggle Theme " + (!document.body.classList.contains("light-theme") ? "☀️" : "🌙");
}
let contents = [
    ["Apps", "Websites", "Tools"],
    ["Work", "Run", "Excel"],
    [
        "Random Typewriter effect, done by me, used by me on this website",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ]
];

// TYPEWRITER
Array.from(typewriterElements).forEach((element, index) => {
    setTimeout(() => {
        typewriter(element, contents[index], 0);
    }, 2000);
});

function typewriter(element, textArr, index) {
    let text = textArr[index];
    let chars = text.split("");

    // ERASE 
    const erase = setInterval(() => {
        chars.pop();
        element.textContent = chars.join("");
        if (chars.length === 0) {
            clearInterval(erase);
            let nextIndex = (index + 1) % textArr.length;
            setTimeout(() => {
                write(element, textArr, nextIndex);
            }, 500);
        }
    }, 100);

    // WRITE
    function write(element, textArr, index) {
        let text = textArr[index];
        let splitText = text.split("");
        element.textContent = "";
        let i = 0;
        const writeInterval = setInterval(() => {
            element.textContent += splitText[i];
            i++;
            if (i >= splitText.length) {
                clearInterval(writeInterval);
                setTimeout(() => {
                    typewriter(element, textArr, index);
                }, 1500);
            }
        }, 100);
    }
}