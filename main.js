class MyHeader extends HTMLElement{
    connectedCallback (){
        this.innerHTML = `
        <h1 id="title-text"><a href="index.html">Chase Copy Centre</a></h1>
        <ul id="top-menu">
            <li><a href="#">Stationery</a></li>
            <li><a href="#">Laminating Services</a></li>
            <li><a href="#">Photocopying Services</a></li>
            <li id="about-us"><i class="fa-solid fa-caret-down"></i><a  href="#">About Us</a>
                <ul id="about-us-list">
                    <li><a href="meetstaff.html">Meet Our Team</a></li>
                    <li><a href="mission.html">Mission Statement</a></li>
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
        <p>Built by Raymond Howell 2022</p>
        `
    }
}

customElements.define('my-footer',MyFooter);