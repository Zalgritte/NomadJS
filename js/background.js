const images =[
    "0.jpg", "1.jpg", "2.jpg"
];

chosenimage = images[Math.round(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenimage}`;
document.body.appendChild(bgImage);