import { useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

import "./PageNotFound.css";
function PageNotFound() {
  const nav = useNavigate();

  return (
    <div className="PageNotFound">
      <Zoom>
        <h1>404</h1>
        <h3>Oops! This Page Could Not Be Found</h3>
        <p>
          SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN
          REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE
        </p>
        <button onClick={() => nav(-1)}>Go back</button>
      </Zoom>
    </div>
  );
}

export default PageNotFound;
