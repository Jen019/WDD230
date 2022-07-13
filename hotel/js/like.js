function toggleImage() {
  const img1 = "images/heart2.png";
  const img2 = "images/heart.png";

  const imgElement = document.getElementsByClassName('heart-like');
  
  
    imgElement.src = (imgElement.src === img1)? img2 : img1;
      
}