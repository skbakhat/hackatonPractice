import "./FooterStyle.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
function Footer() {
  return (
    <>
      <div className="mainFooter">
        <div className="mainFooter1">
          <div className="subFooter1">
            <h4>Opening Time</h4>
            <h5>Mon to sat ......... 8am to 8pm</h5>
            <h5>Sunday ......... 11am to 8pm</h5>
            <h5>Public holiday ......... 8am to 1pm</h5>
          </div>
          <div className="subFooter2">
            
            <input type="text" placeholder="Name"></input>
            <br />
            <input type="text" placeholder="Email"></input>
            <br />
            <button>Subscribe</button>
          </div>
          <div className="subFooter3">
            <LocationOnIcon />
            <h5>The Yummmy. PO Box 00006 </h5>
            <h5>nehru strret, coimbatore</h5>
            <PhoneIcon />
            <h5>Phone: (+91) 123-45689</h5>
            <h5>Fax: (+91) 123-45678</h5>
            <ChatBubbleIcon />
            <h5>yummy@domain.com</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
