const searchInput =document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e =>{
  const value = e.target.valueu
  users.forEach(user => {
    const isVisible = user.name.includes(value)
  })
})

        fetch("movies.json")
          .then(res => res.json())
          .then(data=>{
            const card = userCardTemplate.textContent.cloneNode(true).children[0];
            const header =card.querySelector("[data-heade]")
            const body = card.querySelector("[data-body]")
            header.textContent = user.name
            body.textContent = user.email
            userCardContainer.append(card)
            console.log(card)
          })
        
          
        