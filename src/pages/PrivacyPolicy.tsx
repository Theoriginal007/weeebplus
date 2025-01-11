import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. By accessing and using our platform, you agree to the collection and use of your information as described in this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p>
          We collect various types of information to provide and improve our services:
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Personal Information:</strong> Information that can identify you, such as your name, email address, phone number, and payment details.</li>
          <li><strong>Usage Data:</strong> Information about how you access and use our platform, such as IP address, browser type, and usage patterns.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to track activity on our platform and personalize your experience.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p>
          We use the collected information for various purposes, including:
        </p>
        <ul className="list-disc pl-5">
          <li>To provide and maintain our services.</li>
          <li>To personalize and improve your experience on our platform.</li>
          <li>To communicate with you, including responding to inquiries or sending important updates.</li>
          <li>To process payments and manage transactions.</li>
          <li>To comply with legal obligations and enforce our terms of service.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
        <p>
          We do not sell your personal information. However, we may share your information with:
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Service Providers:</strong> Third-party companies that perform services on our behalf (e.g., payment processors, data storage providers).</li>
          <li><strong>Legal Compliance:</strong> If required by law, we may disclose your information to comply with legal obligations or respond to lawful requests by public authorities.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We take reasonable precautions to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal data, we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Data Protection Rights</h2>
        <p>
          Depending on your location, you may have the following rights regarding your personal data:
        </p>
        <ul className="list-disc pl-5">
          <li>The right to access and update your personal data.</li>
          <li>The right to request the deletion of your personal data.</li>
          <li>The right to object to the processing of your personal data.</li>
          <li>The right to withdraw consent at any time, where applicable.</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the details provided below.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy regularly for any updates.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@yourwebsite.com" className="text-blue-600">support@yourwebsite.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
