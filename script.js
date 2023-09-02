function rotateImage3dOnHover() {
  const containerImg = document.querySelector(".container__image");
  const img = containerImg.querySelector("img");

  if (!containerImg || !img) {
    return;
  }

  containerImg.addEventListener("mousemove", (e) => {
    const { offsetX, offsetY } = e;

    let rotateX = 1;
    let rotateY = -1;

    if (e.target.offsetHeight / 2 < offsetY) {
      rotateX = -1;
    }
    if (e.target.offsetWidth / 2 < offsetX) {
      rotateY = 1;
    }

    img.style.transform = `rotate3d(${rotateX}, ${rotateY}, 0, 3deg)`;
  });

  containerImg.addEventListener("mouseleave", (e) => {
    img.style.transform = "none";
  });
}

rotateImage3dOnHover();
