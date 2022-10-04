let container = document.querySelector(".container")
let showBtn = document.querySelector(".header span") 

showBtn.onclick = function () {
  getData("https://jsonplaceholder.typicode.com/posts")
}


function getData(apiLink) {
  fetch(apiLink)
  .then ((response) => {return response.json()})
  .then((posts) => {
    posts.forEach((ele) => {

      // main div
      let mainDiv = document.createElement("div")
      mainDiv.className = "post"

      // first div
      let firstDiv = document.createElement("div")
      firstDiv.className = "users"

      // users id section
      let userid = document.createElement("h3")
      userid.className = "userid"
      let useridText = document.createTextNode(`User Id: ${ele.userId}`)
      userid.appendChild(useridText)

      // id section
      let postId = document.createElement("h3")
      postId.className = "postid"
      let postIdText = document.createTextNode(`Post Id: ${ele.id}`)
      postId.appendChild(postIdText)

      // appending usersID & id to firstDiv
      firstDiv.appendChild(userid)
      firstDiv.appendChild(postId)

      // second div
      let secDiv = document.createElement("div")
      secDiv.className = "content"

      // title section
      let title = document.createElement("h2")
      title.className = "title"
      let titleText = document.createTextNode(ele.title)
      title.appendChild(titleText)

      // body section
      let body = document.createElement("p")
      body.className = "body"
      let bodyText = document.createTextNode(ele.body)
      body.appendChild(bodyText)

      // appending title & body to seconddiv
      secDiv.appendChild(title)
      secDiv.appendChild(body)

      // appending first and second div to the main div
      mainDiv.appendChild(firstDiv)
      mainDiv.appendChild(secDiv)

      container.appendChild(mainDiv)

    });
  })
}
