
let txt= document.querySelector('.track-button h2');
txt.innerHTML= txt.innerHTML.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>)`
).join('');
