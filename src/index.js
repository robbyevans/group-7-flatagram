function hideImage(data){
    for (items of data){
    const header=document.getElementById("card-title")
    let image=document.querySelector("#card-image")
    header.addEventListener('click',()=>{
      if(image.src==
        'http://127.0.0.1:5500/assets/coder-dog.png'){
        image.src="./assets/image-placeholder.jpg"
      }
      else{
        image.src=items.image
      }
    })
  }
  }