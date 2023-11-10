import profile from "../assets/twitter.svg";
import "../styles/header.css";
function Header() {
  return (
    <>
      <div className="header-logo">
        <img src={profile} alt="profile" />
      </div>
    </>
  );
}

export default Header;
