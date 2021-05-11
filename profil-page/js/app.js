const changeImgBtn = document.querySelector("#profil-edit-btn");
const closeBtn = document.querySelector("#close-btn")
const overlayForm = document.querySelector("#overlay");

changeImgBtn.addEventListener("click", displayForm);


function displayForm() {
    overlayForm.style.display = "block";
}

// upload
const uploadeForm = document.querySelector("#uploadeForm");
const inpFile = document.querySelector("#inpFile");

uploadeForm.addEventListener("submit", e => {
    // prevent page form reloading
    e.preventDefault();

    const endpoint = "upload.php";
    const formData = new FormData();
  


    formData.append("inpFile", inpFile.files[0]);

    fetch(endpoint, {
        method: "post",
        body: formData
    }.catch(console.error));
});

