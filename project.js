const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
    else{
      entry.target.classList.remove("show");
    }

  });
},{
  threshold:0.15
});

const hiddenElements =
document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>
observer.observe(el)
);

window.addEventListener("scroll",()=>{

  let scroll =
  document.documentElement.scrollTop;

  let height =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;

  let scrolled = (scroll / height) * 100;

  document.getElementById("progress-bar")
  .style.width = scrolled + "%";

});