let namasteBtn = document.querySelector("button");
namasteBtn.addEventListener("click",inputMsg);

function inputMsg(){
    let name=prompt("Enter Name of Student");
    namasteBtn.textContent="roll No 1:"+name
}