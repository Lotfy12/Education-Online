import { useLocation } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

function Back({ title }) {
  const location = useLocation();

  return (
    <>
      <section className="back">
        <Zoom cascade>
          <h2>Home /{location.pathname.split("/")[1]}</h2>
          <h1>{title}</h1>
        </Zoom>
      </section>
      <div className="marigin"></div>
    </>
  );
}

export default Back;
