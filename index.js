const userCardTemplate = document.querySelector("[data-user-template")  
const userCardContainer = document.querySelector("[data-user-cards-container]")

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
        
          
        