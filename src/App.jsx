import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/Applayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Leadership } from "./components/About/Leadership";
import Story from "./components/About/Story";
import { MedicalBilling } from "./components/Servicespage/MedicalBilling";
import { MedicalCoding } from "./components/Servicespage/MedicalCoding";
import { ARDenialManagement } from "./components/Servicespage/ARDenialManagement";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/about/story" element={<Story />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/services/billing" element={<MedicalBilling />} />
          <Route path="/services/coding" element={<MedicalCoding />} />
          <Route path="/services/ar-denial" element={<ARDenialManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}
