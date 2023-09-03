import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Sm() {
  return (
    <div className='socialc'>
<h1 className='headc'>Follow us on</h1>
<div class="socialc-container">
      <a href="https://www.youtube.com"
        className="youtubec" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faYoutube} size="4x" />
      </a>
      <a href="https://www.facebook.com"
        className="facebookc" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="4x" />
      </a>
      <a href="https://www.twitter.com" className="twitterc" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="4x" />
      </a>
      <a href="https://www.instagram.com"
        className="instagramc" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="4x" />
      </a>
      <a href="https://www.Linkedin.com"
        className="Linkedinc" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="4x" />
      </a>
</div>

    </div>
  )
}