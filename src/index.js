

// write your code here

//pseudocode
// 1*create  eventlistener('DOMContentLoaded') on the document
// 2*create a function to fetch title,image and likes from the json api
// 3*convert the data from the api to usable javascript objects using .then(data)=>data.json()
// 4*render the requested data to the DOM
// 5*create a function to fetch comments from the local api
// 6*convert data from api to usable objects using .jason()
// 7*render the comments to the comment section in DOM
// 8*add eventListener('submit') to the form Submit
// 9*render form input values to the DOM using the eventListener
// 10*prevent the submit form from reloading the page using e.preventDefault()
// 11*add eventListener('click') to the like button to render values to the DOM


document.addEventListener('DOMContentLoaded',()=>{
  
  fetch('http://localhost:3000/images')
  .then((resp)=>resp.json())
  .then((data)=>{
    
    // render data to DOM
    renderData(data)
    hideImage(data)
    //getting comments from the api
    fetchComments()
    //input form
    inputForm()
      
    //like button
    button()
      
    })
})

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
  function renderData(data){
  
    for (let items of data){
      
      //getting title from api
      let title=document.querySelector("#card-title" )
      title.innerHTML=items.title
      //getting the image form api
      let image=document.querySelector("#card-image")
      image.src=items.image
      image.alt=items.title
      //getting the likes from api
      let likeSpan=document.querySelector("#like-count")
      likeSpan.innerHTML=(`${items.likes} likes`)  
    }
  }
  function inputForm(){

    const form=document.querySelector("#comment-form")
    form.addEventListener('submit',(e)=>{
      e.preventDefault()
      const input=document.querySelector("#comment")
      const button=document.querySelector(".comment-button")
      const ul=document.querySelector("#comments-list")
      button.addEventListener('click',()=>{
        const li=document.createElement('li')
        li.innerHTML=input.value
        ul.append(li)
        li.addEventListener('click',()=>{
          li.remove()
        })
        e.target.reset()
      })
    })
  }

