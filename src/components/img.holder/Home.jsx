import "./home.css"
import img from "../img.holder/pic.svg"
import phone from "./phone.png"
import contactList from "./contact-list.png"

export default function Home() {
    return (
        <div className="container">
            <div className="contact">
                <h1 className="contact-title">CONTACT US</h1>
                <p className="contact-desc">LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
            <div className="contact-email">
                <div className="contact-items">
                    <div className="contact-buttons">
                        <button className="C-list"> <img src={contactList} alt="" /> VIA SUPPORT CHAT</button>
                        <button className="Ph-list"> <img src={phone} alt="" /> VIA CALL</button>
                    </div>
                    <button className="via"> <i class="fa-solid fa-address-book"></i> VIA EMAIL FORM</button> <br />
                    <input className="name" type="text" placeholder="Name" /> <br />
                    <input className="email" type="email" placeholder="Email" /> <br />
                    <input className="text" type="text" placeholder="Text" />
                </div>
                <div className="contact-image">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}