import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LineIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

function ShareModal({ url }) {
  return (
    <div className="d-flex justify-content-between px-4 py-2 bg-gradient-to-r from-primary01 via-blue-400 to-pink-600 rounded-md">
      <FacebookShareButton url={url}>
        <FacebookIcon round={true} size={32} />
      </FacebookShareButton>

      <LinkedinShareButton url={url}>
        <LineIcon round={true} size={32} />
      </LinkedinShareButton>

      <PinterestShareButton url={url}>
        <PinterestIcon round={true} size={32} />
      </PinterestShareButton>

      <WhatsappShareButton url={url}>
        <WhatsappIcon round={true} size={32} />
      </WhatsappShareButton>

      <EmailShareButton url={url}>
        <EmailIcon round={true} size={32} />
      </EmailShareButton>

      <TelegramShareButton url={url}>
        <TelegramIcon round={true} size={32} />
      </TelegramShareButton>

      <RedditShareButton url={url}>
        <RedditIcon round={true} size={32} />
      </RedditShareButton>

      <TwitterShareButton url={url}>
        <TwitterIcon round={true} size={32} />
      </TwitterShareButton>
    </div>
  );
}

export default ShareModal;
