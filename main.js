class MyHeader extends HTMLElement{
    connectedCallback (){
        this.innerHTML = `
        <h1 id="title-text">Chase Copy Centre</h1>
        <ul id="top-menu">
            <li><a href="#">Stationery</a></li>
            <li><a href="#">Laminating Services</a></li>
            <li><a href="#">Photocopying Services</a></li>
            <li id="about-us"><i class="fa-solid fa-caret-down"></i><a  href="#">About Us</a>
                <ul id="about-us-list">
                    <li><a href="meetstaff.html">Meet The Staff</a></li>
                    <li><a href="#">Mission Statement</a></li>
                    <li><a href="#">How We Got Started</a></li>
                </ul>
            </li>
            <li><a href="#">Contact us</a></li>

        </ul>
        `
    }
}

customElements.define('my-header', MyHeader);