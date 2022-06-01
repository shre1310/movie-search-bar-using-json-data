const userCardTemplate = document.querySelector("[data-user-template")        
        fetch("movies.json")
          .then(res => res.json())
          .then(data=>{
            const card = userCardTemplate.content.cloneNode(true).children;
            console.log(card)
          })
        
          
        