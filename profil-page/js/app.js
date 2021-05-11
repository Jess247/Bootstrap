const changeImgBtn = document.querySelector("#profil-edit-btn");
const closeBtn = document.querySelector("#close-btn")
const overlayForm = document.querySelector("#overlay");

changeImgBtn.addEventListener("click", displayForm);


function displayForm() {
    overlayForm.style.display = "block";
}

// upload
const uploadForm = document.querySelector("#uploadForm");
const inpFile = document.querySelector("#inpFile");

uploadForm.addEventListener("submit", e => {
    // prevent page form reloading
    e.preventDefault();

    const endpoint = "profil-page/upload.php";
    const formData = new FormData();
  

    formData.append("inpFile", inpFile.files[0]);

    fetch(endpoint, {
        method: "post",
        body: formData
    }).catch(console.error);
});

