import { Link } from "react-scroll";

export default function Offer () {
  return (
    <div id="presentaion">
      <div className="pr-heading">
         <h1>A Big <span>Offer</span> For This Summer</h1>
         <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="pr-btns">
          <Link to="#" className="pr-btn">JOIN NOW</Link>
        </div>
      </div>
    </div>
  )
}