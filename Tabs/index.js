const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click",function(e){
    const id=e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active")
        })
    }
    e.target.classList.add("active")
    

    //hide other articles
    articles.forEach(function(b){
        b.classList.remove("active")
    })
    const s=document.getElementById(id);
    s.classList.add("active")
})