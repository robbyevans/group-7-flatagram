
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
