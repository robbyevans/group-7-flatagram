function fetchComments(){

    fetch('http://localhost:3000/comments')
    .then((resp)=>resp.json())
    .then((data)=>{
        for(let item of data){
            const ul=document.querySelector("#comments-list")
            const li=document.createElement('li')
            li.innerHTML=item.content
            ul.appendChild(li)
            
          }
        })
}

function button(){

    const likeBtn=document.querySelector("#like-button")
    let likeCount=0;
    likeBtn.addEventListener('click',()=>{
      likeCount++
      let likeSpan=document.querySelector("#like-count")
      likeSpan.innerHTML=(`${likeCount} likes`)  
    })
}