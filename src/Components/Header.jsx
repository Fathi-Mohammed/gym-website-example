import { Link } from "react-scroll";

export default function Header() {
  return (
    <div id="main">
      <div className="header-heading name">
        <h2>STEP UP YOUR BODY</h2>
        <h1><span>FITNESS</span> With US</h1>
        <p className="details">
          Bulid Your Body And Fitness With Professional.
        </p>
        <div className="header-btns">
          <Link to="#" className="header-btn">Join Us</Link>
        </div>
      </div>
    </div>
  )
}
