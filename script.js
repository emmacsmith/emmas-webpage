console.log("Hello, World!");




//creating my accessible reveal me button 

const button = document.querySelector("button");

button.addEventListener("click", function (event) {
    const isExpanded = button.getAttribute("aria-expanded")

    if (isExpanded === "true"){
        //hide the content 
        button.setAttribute("aria-expanded", "false")
        button.nextElementSibling.setAttribute("hidden", "")
        button.nextElementSibling.nextElementSibling.setAttribute("hidden", "")

    } else if (isExpanded === "false"){
        //show the content
        button.setAttribute("aria-expanded", "true")
        button.nextElementSibling.removeAttribute("hidden")
        button.nextElementSibling.nextElementSibling.removeAttribute("hidden")
    }
})
  