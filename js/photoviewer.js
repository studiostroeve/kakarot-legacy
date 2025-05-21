// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all images inside the '.images' container
    const images = document.querySelectorAll(".p-img-container img");
  
    // Add click event listeners to all images
    images.forEach(function(image) {
      image.addEventListener("click", function() {
        // Set the source of the full image to be the same as the clicked image
        document.getElementById("full-image").src = image.src;
        document.getElementById("full-text").innerHTML = image.dataset.text;
  
        // Show the image viewer
        document.getElementById("image-viewer").style.display = "grid";
      });
    });
  
    // Add click event listener for the close button
    document.querySelector("#image-viewer .close").addEventListener("click", function() {
      // Hide the image viewer
      document.getElementById("image-viewer").style.display = "none";
    });

    document.querySelector("#image-viewer #full-image").addEventListener("click", function() {
      // Hide the image viewer
      document.getElementById("image-viewer").style.display = "none";
    });
  });
  