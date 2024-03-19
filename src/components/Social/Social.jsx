import React from 'react';
import "./Social.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Social = ({DevToLogo, color}) => {
    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/asi-kavya-reddy-308574146/");
      };
      const handleGitGubClick = () => {
        window.open("https://github.com/kavyaredd9");
      };
      const handleTwitterClick = () => {
        window.open("https://twitter.com/kavya-reddy");
      };
      const handleInstagramClick = () => {
        window.open("https://www.instagram.com/kavya-reddy/");
      };
  return (
<div className="intr-ct-con-div" style={{color: color || '#000'}}>
          <TiSocialLinkedin
            size={25}
            className="intr-con-icon"
            onClick={handleLinkedInClick}
          />
          <FaGithub
            size={20}
            className="intr-con-icon"
            onClick={handleGitGubClick}
          />
          <FaXTwitter
            size={20}
            className="intr-con-icon"
            onClick={handleTwitterClick}
          />
          <FaInstagram
            size={20}
            className="intr-con-icon"
            onClick={handleInstagramClick}
          />
        </div>  )
}

export default Social;