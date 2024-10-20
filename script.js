function shareWebsite() {
            const websiteUrl = window.location.href;
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    text: 'Check out this website!',
                    url: websiteUrl
                }).then(() => {
                    console.log('Website link shared successfully');
                }).catch((error) => {
                    console.error('Error sharing website link:', error);
                });
            } else {
                prompt('Copy this link:', websiteUrl);
            }
        }



const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("download-btn");

downloadBtn.addEventListener("click", e =>{
e.preventDefault();
downloadBtn.innerText = "Downloading file....";

    fetchFile(fileInput.value);

}); 

function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a")
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/,'');
        document.body.appendChild9(aTag);
    aTag.child();
  aTag.remove();
URL.revokeObjectURL(tempUrl);
downloadBtn.innerText = "Downloading file...."
    }).catch(() => {

        downloadBtn.innerText = "Downloading file...."
       alert("failed to download video");
    })}


