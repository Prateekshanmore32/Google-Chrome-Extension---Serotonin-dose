fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => {
    const url = data.message;
    const image=document.getElementById("image");
    image.src=url;
  }
  )
