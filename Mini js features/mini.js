let istatus = document.querySelector("h5");

let btn = document.querySelector("#add");
let check = 0;

btn.addEventListener("click", () => {
  if (check == 0) {
    istatus.innerText = "Friends";
    istatus.style.color = "green";
    check = 1;
    btn.innerHTML = "Remove";
    console.log("helo");
  } else {
    istatus.innerText = "Stranger";
    istatus.style.color = "red";
    check = 0;
    btn.innerHTML = "Add Friend";
  }
});
// insta love feature------------

let con = document.querySelector("#container");
let love = document.querySelector("i");

con.addEventListener("dblclick", function () {
  love.style.transform = "translate(160%,-55%)  scale(1)";
  love.style.opacity = 0.8;
  
  setTimeout(() => {
    love.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    love.style.transform = "translate(160%,-55%)  scale(0)";
  }, 1000);
});

// custom cursor--------
let main = document.querySelector("body");
let crsr = document.querySelector(".cursor");

main.addEventListener("mousemove",(dets)=>{
     crsr.style.left=dets.x+"px";
     crsr.style.top=dets.y+"px";
})