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

