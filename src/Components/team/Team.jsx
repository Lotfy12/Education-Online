import AWrapper from "../about/AWrapper";
import Back from "../common/back/Back";
import Footer from "../common/footer/Footer";
import Header from "../common/heading/Header";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <div>
      <Header />
      <Back title="Team" />
      <TeamCard />
      <AWrapper />
      <Footer />
    </div>
  );
}

export default Team;
