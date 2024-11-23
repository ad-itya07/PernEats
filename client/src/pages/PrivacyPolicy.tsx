import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", textAlign: "left", lineHeight: "1.8" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px", borderBottom: "2px solid orange", paddingBottom: "5px" }}>
        Privacy Policy
      </h1>
      <p>
        <strong><u>Effective Date:</u></strong> <em>2024</em>
      </p>
      <p>
        Welcome to <strong><em>PernEats!</em></strong> Your privacy is our priority, and we are committed to safeguarding the
        information you share with us. This Privacy Policy explains how we collect, use, and protect your data when you interact with
        our services.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>1. Information We Collect</h2>
      <ul>
        <li>
          <strong><u>Personal Information:</u></strong> Your <em>name, email address, phone number, delivery address,</em> and
          <em> payment details.</em>
        </li>
        <li>
          <strong><u>Usage Data:</u></strong> Information about how you interact with our website, such as <em>pages viewed, time
          spent,</em> and <em>actions taken.</em>
        </li>
        <li>
          <strong><u>Device Data:</u></strong> Details about your device, such as <em>IP address, browser type,</em> and <em>operating
          system.</em>
        </li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>2. How We Use Your Information</h2>
      <p>
        We use the information we collect to:
      </p>
      <ul>
        <li><strong>Process and deliver your orders</strong> in a timely and efficient manner.</li>
        <li>
          <strong>Provide customer support:</strong> Ensuring we can assist you with any issues or queries you may have.
        </li>
        <li>
          <strong>Send updates, promotions,</strong> and service-related notifications that are relevant to your preferences.
        </li>
        <li>
          <strong>Improve our website and services:</strong> By analyzing how users interact with our platform.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>3. Sharing Your Information</h2>
      <p>
        <em>
          At PernEats, we do not sell your personal information to third parties. We may share your information with trusted partners
          and service providers to process your orders, manage payments, and improve user experience.
        </em>
      </p>
      <ul>
        <li>
          <strong><u>Third-Party Services:</u></strong> Payment gateways, delivery partners, and analytics tools.
        </li>
        <li>
          <strong><u>Legal Compliance:</u></strong> If required by law, we may disclose your data to comply with regulations or
          protect our rights.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>4. Your Rights</h2>
      <p>
        We respect your rights regarding your personal information and provide the following options:
      </p>
      <ul>
        <li>
          <strong><u>Access and Update:</u></strong> You can access or update your personal information by logging into your account.
        </li>
        <li>
          <strong><u>Opt-Out:</u></strong> You can unsubscribe from marketing communications by clicking the "unsubscribe" link in
          our emails.
        </li>
        <li>
          <strong><u>Request Deletion:</u></strong> Contact us to delete your account or any stored data permanently.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>5. Security</h2>
      <p>
        <em>
          We implement robust security measures to protect your information from unauthorized access, alteration, or disclosure. Our
          systems are monitored to prevent breaches and ensure data privacy.
        </em>
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>6. Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy, please contact us at: <br />
        <strong>Email:</strong> <a href="mailto:support@perneats.com" style={{ color: "#ff6600" }}>support@perneats.com</a> <br />
        <strong>Phone:</strong> +1 123-456-7890
      </p>
    </div>
  );
};

export default PrivacyPolicy;
