import profile from "../assets/twitter.svg";
import "../styles/header.css";
function header() {
  return (
    <>
      <div className="header-logo">
        <img src={profile} alt="profile" />
      </div>
    </>
  );
}

export default header;
