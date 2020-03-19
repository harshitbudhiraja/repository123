const imageupload = document.querySelector(".image-upload");
imageupload.addEventListener("change",function(e){
    
const imagePicker = document.getEventById("imagePicker");

imagePicker.addEventListener("click",function(){
    imageupload.click();
})

imageupload.addEventListener("change",function{
    const img = document.createElement("img");

    // const img = document.createElement("img");
    const imgdata= imageupload.files[0];
    img.src=URL.createObjectURL(imgdata);
    console.log(img.src);
    const body = document.querySelector("body");
    body.appendChild(img);


    img.onload=function(){
        URL.revokeObjectURL(img.src);
    }
})

