import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Sma() {
  return (
    <div className='socials'>
<div class="socials-container">
      <a href="https://www.youtube.com"
        className="youtubes" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faYoutube} size="1x" />
      </a>
      <a href="https://www.facebook.com"
        className="facebooks" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://www.twitter.com" className="twitters" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://www.instagram.com"
        className="instagrams" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      <a href="https://www.Linkedin.com"
        className="Linkedins" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
</div>

    </div>
  )
}