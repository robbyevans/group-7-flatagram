function fetchComments(){

    fetch('http://localhost:3000/comments')
    .then((resp)=>resp.json())
    .then((data)=>{