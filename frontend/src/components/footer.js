import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <footer>
            <div className="so-icons">
                <SocialIcon
                    className="so-icon"
                    url="https://www.facebook.com/profile.php?id=100016617975313"
                    bgColor="white"
                ></SocialIcon>
                <SocialIcon
                    className="so-icon"
                    url="https://www.linkedin.com/in/anas-alnabale-0646421ba/"
                    bgColor="white"
                ></SocialIcon>
                <SocialIcon
                    className="so-icon"
                    url="https://www.instagram.com/anas_alnabale18/"
                    bgColor="white"
                ></SocialIcon>
            </div>
            Or Contact me on :0790744031
            <p class="copyright">Agents On Clouds © 2018</p>
        </footer>
    );
};

export default Footer;
