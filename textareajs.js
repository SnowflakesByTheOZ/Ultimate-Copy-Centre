let content = document.getElementById('text-window')
downloadText = (textMessage) => {
    console.log(textMessage);
    content.value = " ";



    let textBlob = new Blob([textMessage],{type:"text/plain"});
    let downloadlink = document.createElement('a');
    downloadlink.download = "Note App Document"
    downloadlink.href = window.webkitURL.createObjectURL(textBlob);
    downloadlink.click();

}

