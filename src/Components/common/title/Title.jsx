import Zoom from "react-reveal/Zoom";

function Title({ subtitle, title }) {
  return (
    <div id="heading">
      <Zoom right cascade>
        <h1>{subtitle}</h1>
        <h3>{title}</h3>
      </Zoom>
    </div>
  );
}

export default Title;
