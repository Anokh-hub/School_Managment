import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import AboutSchool from "./pages/AboutSchool";
import SchoolInspiration from "./pages/SchoolInspiration";
import PrincipalMessage from "./pages/PrincipalMessage";
import SchoolProjects from "./pages/SchoolProjects";
import Address from "./pages/Address";
import Shabad from "./pages/Shabad";
import SchoolPrayer from "./pages/SchoolPrayer";
import Pledge from "./pages/Pledge";

import AdmissionProcedure from "./pages/AdmissionProcedure";
import Examination from "./pages/Examination";
import SchoolRules from "./pages/SchoolRules";
import FeesStructure from "./pages/FeesStructure";
import AdmissionWithdrawal from "./pages/AsmissionWithdrawal";

import ComputerLab from "./pages/ComputerLab";
import Library from "./pages/Library";

import Curriculum from "./pages/Curriculum";
import SchoolStaff from "./pages/SchoolStaff";
import Syllabus from "./pages/Syllabus";
import Results from "./pages/Result";

import PhotoGallery from "./pages/PhotoGallery";
import Achievements from "./pages/Achievments";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about-school" element={<AboutSchool />} />
        <Route path="/school-inspiration" element={<SchoolInspiration />} />
        <Route path="/principal-message" element={<PrincipalMessage />} />
        <Route path="/school-projects" element={<SchoolProjects />} />
        <Route path="/address" element={<Address />} />
        <Route path="/shabad" element={<Shabad />} />
        <Route path="/school-prayer" element={<SchoolPrayer />} />
        <Route path="/pledge" element={<Pledge />} />

        <Route path="/admission-procedure" element={<AdmissionProcedure />} />
        <Route path="/examination" element={<Examination />} />
        <Route path="/school-rules" element={<SchoolRules />} />
        <Route path="/fees-structure" element={<FeesStructure />} />
        <Route path="/admission-withdrawal" element={<AdmissionWithdrawal />} />

        <Route path="/computer-lab" element={<ComputerLab />} />
        <Route path="/library" element={<Library />} />

        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/school-staff" element={<SchoolStaff />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/results" element={<Results />} />

        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route
          path="*"
          element={
            <div className="px-4 py-24 text-center">
              <h1 className="text-4xl font-bold text-blue-950">
                404 — Page Not Found
              </h1>
              <p className="mt-4 text-slate-600">
                The page you are looking for does not exist.
              </p>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}