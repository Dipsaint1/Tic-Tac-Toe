const boxes = document.querySelectorAll(".box");

function handleClick(e){
  console.log("Clicked");
}

boxes.forEach(box => {
  box.addEventListener("click", handleClick, {once:true});
});


function game(){
  
}


handleClick();