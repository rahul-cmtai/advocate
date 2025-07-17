import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => (
  <>
    <Navigation />
    <div className="mt-24" />
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-orange-accent">Terms of Service</h1>
      <p className="mb-4">Welcome to Advocate Gauri Saraswat. By accessing or using our website and legal services, you agree to the following terms and conditions. Please read them carefully before engaging with our firm for Criminal Defense, Civil Litigation, Corporate Law, or any other legal services.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Scope of Services</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>We provide legal consultation, advice, and representation in areas including but not limited to Criminal Defense, Civil Litigation, and Corporate Law.</li>
        <li>All information provided on this website is for general informational purposes and does not constitute legal advice or establish an attorney-client relationship.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Client Responsibilities</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Clients must provide accurate and complete information relevant to their legal matter.</li>
        <li>Clients are responsible for reviewing and understanding all documents and agreements provided by our firm.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Confidentiality</h2>
      <p className="mb-4">We maintain strict confidentiality of all client information in accordance with professional legal standards and applicable laws.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p className="mb-4">While we strive to provide the highest quality legal services,  Gauri Saraswat, Advocate is not liable for any damages arising from the use of this website or reliance on information provided herein. Legal outcomes depend on individual circumstances and cannot be guaranteed.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Changes to Terms</h2>
      <p className="mb-4">We reserve the right to update these Terms of Service at any time. Continued use of our website and services constitutes acceptance of the revised terms.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p>For questions regarding these terms, please contact us at <a href="mailto:decodelawwithgauri@gmail.com" className="text-orange-accent underline">decodelawwithgauri@gmail.com</a>.</p>
    </div>
    <Footer />
  </>
);

export default Terms; 