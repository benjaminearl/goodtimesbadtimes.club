Marquee3k.init()

const imageContainer = document.getElementById("image-container"); // Retrieve the image-container element
const imageUrls = [
  "assets/card_01.png",
  "assets/card_02.png",
  "assets/card_03.png",
  "assets/card_04.png",
  "assets/card_05.png",
  "assets/card_06.png",
  "assets/card_07.png",
];

let i = 0; // Initialize a counter variable

function addImageWithDelay() {
  // Check if there are still images left to add
  if (i < imageUrls.length) {
    const img = document.createElement("img");
    img.src = imageUrls[i];
    img.style.top = Math.random() * (imageContainer.clientHeight - img.height) + "px";
    img.style.left = Math.random() * (imageContainer.clientWidth - img.width) + "px";
    img.style.position = "absolute"; // Set the position style to absolute
    img.style.transform = "rotate(" + Math.random() * 90 + "deg)"; // Set a random rotation angle
    imageContainer.appendChild(img);
    i++; // Increment the counter variable

    img.addEventListener('click', function() {
      img.parentNode.removeChild(img);
    });

    // Schedule the next image to be added after 1 second
    setTimeout(addImageWithDelay, 1000);
  }
}

// Start adding the images with a delay
addImageWithDelay();





