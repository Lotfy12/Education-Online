import { team } from "../Dummydata";
import "./Team.css";
function TeamCard() {
  return (
    <div>
      <section className="teamCard componentSpace">
        <div className="container grid4">
          {team.map((item) => (
            <div className="itemss" key={item.name}>
              <div className="img">
                <img src={item.cover} alt={item.name} />
                <div className="overlay">
                  <i className="fab fa-facebook-f icon"></i>
                  <i className="fab fa-twitter icon"></i>
                  <i className="fab fa-instagram icon"></i>
                  <i className="fab fa-tiktok icon"></i>
                </div>
              </div>
              <div className="details">
                <h3 className="memberName">{item.name}</h3>
                <p className="experience">{item.work}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TeamCard;
