AOS.init();

  
const images = document.querySelectorAll(".ukiyo");
images.forEach(image => {
  new Ukiyo(image, {
    scale: 1.5,
    speed:1.5,
  });
});




