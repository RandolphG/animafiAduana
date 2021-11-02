import React from "react";
import { avatar } from "../../../resources";
import "./styles/_userAvatarStyles.scss";

const UserAvatar = () => {
  return (
    <div className="avatarContainer">
      <div className="user-avatar">
        <img alt="avatar" className="avatar" src={avatar.image} />
        <div className="status-overlay">
          <i className="bowtie-icon bowtie-status-success success" />
        </div>
      </div>
    </div>
  );
};

export default UserAvatar;
