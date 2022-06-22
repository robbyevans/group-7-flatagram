
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
