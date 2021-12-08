import "./App.css";
import $ from "jquery";
import Menu from "./Component/HeaderNavigation/HeaderNavigation";
import Footer from "./Component/FooterWebsite/FooterWebsite";
import SummaryCovid from "./Component/InformationCovid19/SummaryCovid";
import CheckViolation from "./Component/CheckViolation/CheckViolation";
import Summary from "./Component/InformationDTU/SummaryDTU/Summary";
import { Routes, Route } from "react-router-dom";
import SummaryPage from "./Component/InformationDTU/Pages/SummaryPage/SummaryPage";
import Team from "./Component/InformationDTU/Pages/Team/Team";
import Overview from "./Component/InformationDTU/Pages/Overview/Overview";
import Mission from "./Component/InformationDTU/Pages/Mission/Mission";
import Traditional from "./Component/InformationDTU/Pages/Traditional/Traditional";
import Research from "./Component/InformationDTU/Pages/Research/Research";
import Prevent from "./Component/InformationCovid19/Prevent/Prevent";
import Hand from "./Component/InformationCovid19/Hand/Hand";
import Precautions from "./Component/InformationCovid19/Precautions/Precautions";
import Symptoms from "./Component/InformationCovid19/Symptoms/Symptoms";
import ScrollToTop from "./Component/InformationDTU/Pages/SideNavigation/ScrollTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route exact path="/" element={<SummaryCovid />} />
        <Route path="/over" element={<Summary />} />
        <Route path="/check" element={<CheckViolation />} />
        <Route path="/summarypage" element={<SummaryPage />}>
          <Route path="overview" element={<Overview />} />
          <Route path="mission" element={<Mission />} />
          <Route path="traditional" element={<Traditional />} />
          <Route path="research" element={<Research />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/prevent" element={<Prevent />} />
        <Route path="/hand-wash" element={<Hand />} />
        <Route path="/precautions" element={<Precautions />} />
        <Route path="/symptoms" element={<Symptoms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
