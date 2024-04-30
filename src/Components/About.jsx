import aboutImage from "../images/about.png";

export default function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          doloribus perferendis quaerat. Velit magni porro enim odio illo et
          voluptatum rem eos iusto amet ducimus deleniti dolorum sequi, ipsa
          nisi veniam earum esse architecto suscipit. Maxime officiis dicta
          fugiat necessitatibus, 
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}
