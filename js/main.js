class MyHeader extends HTMLElement{
    connectedCallback (){
        this.innerHTML = `
        
        <h1 id="title-text"><a href="/index.html">Ultimate Copy Centre</a></h1>
        <ul id="top-menu">
            <li><a href="#">Stationery</a></li>
            <li><a href="/laminate.html">Laminating Services</a></li>
            <li><a href="#">Photocopying Services</a></li>
            <li id="about-us"><i class="fa-solid fa-caret-down"></i><a  href="#">About Us</a>
                <ul id="about-us-list">
                    <li><a href="/meetstaff.html">Meet Our Team</a></li>
                    <li><a href="/mission.html">Mission Statement</a></li>
                    <li><a href="#">How We Got Started</a></li>
                </ul>
            </li>
            <li><a href="#">Contact us</a></li>

        </ul>
        `
    }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <p>Built by Supercatch-8108 2022</p>
        `
    }
}

customElements.define('my-footer',MyFooter);



let saveFile = () => {
   
    
    const name = document.getElementById('name');
    const address = document.getElementById('address');
    const contact = document.getElementById('contact');
    let topText = document.getElementById('top-text');
    let dateField = document.getElementById('date');
    let formField = document.getElementById('formField');



    let data = "Name: " + name.value + "\r\n" 
    + "Address: " + address.value + "\r\n" 
    + "Contact #: " + contact.value + "\r\n" 
    + "Requested Date: " + dateField.value + "\r\n";
    console.log(data);



    const textToBLOB = new Blob([data], {type: "text/plain"});

    
    
    let newlink = document.createElement("a");
    newlink.download = "Laminating request";




    if (window.webkitURL) {
        newlink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newlink.href = window.URL.createObjectURL(textToBLOB);
        newlink.style.display = "none"; 
        document.body.appendChild(newlink);
    }
    newlink.click();

    name.value = " ";
    address.value = " ";
    contact.value = " ";

    formField.style.display = "none";
    topText.innerHTML = 'Thank you for making an appointment with us !';
    
}





