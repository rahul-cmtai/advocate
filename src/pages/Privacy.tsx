import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => (
  <>
    <Navigation />
    <div className="mt-24" />
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-orange-accent">Privacy Policy</h1>
      <p className="mb-4">At Advocate Gauri Saraswat, we are committed to protecting your privacy and ensuring the confidentiality of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you engage with our legal services, including Criminal Defense, Civil Litigation, and Corporate Law.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal details (name, contact information, etc.) provided through consultation forms or direct communication.</li>
        <li>Case-related documents and information necessary for legal representation in areas such as family disputes, criminal defense, civil litigation, and corporate matters.</li>
        <li>Website usage data (cookies, analytics) to improve our services and user experience.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide legal advice and representation tailored to your needs.</li>
        <li>To communicate with you regarding your case or inquiry.</li>
        <li>To comply with legal and regulatory obligations.</li>
        <li>To improve our website and services.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Data Security</h2>
      <p className="mb-4">We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or misuse. Only authorized personnel have access to your data, and we never share your information with third parties except as required by law or with your explicit consent.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
      <p className="mb-4">You have the right to access, update, or request deletion of your personal information at any time. To exercise these rights or for any privacy-related questions, please contact us at <a href="mailto:decodelawwithgauri@gmail.com" className="text-orange-accent underline">decodelawwithgauri@gmail.com

</a>.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Policy Updates</h2>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Please review this page periodically for the latest information.</p>
    </div>
    <Footer />
  </>
);

export default Privacy; 