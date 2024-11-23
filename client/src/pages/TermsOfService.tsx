import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", textAlign: "left", lineHeight: "1.8" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px", borderBottom: "2px solid orange", paddingBottom: "5px" }}>
        Terms of Service
      </h1>
      <p>
        <strong><u>Effective Date:</u></strong> <em>2024</em>
      </p>
      <p>
        Welcome to <strong><em>PernEats!</em></strong> These Terms of Service ("Terms") govern your access to and use of our website
        and services. By using PernEats, you agree to comply with these Terms. Please read them carefully.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>1. Acceptance of Terms</h2>
      <p>
        By accessing or using <strong><em>PernEats</em></strong>, you acknowledge that you have read, understood, and agreed to be
        bound by these Terms and our <strong><u>Privacy Policy</u></strong>. If you do not agree, you must stop using our services
        immediately.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>2. Eligibility</h2>
      <p>
        <strong><u>Eligibility to Use:</u></strong> You must be at least 18 years old or have parental consent to use our services.
        By agreeing to these Terms, you confirm that you meet this requirement.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>3. Account Responsibilities</h2>
      <p>
        <strong><u>Account Creation:</u></strong> You are required to create an account to access certain features. You must provide
        accurate, complete, and updated information during the registration process.
      </p>
      <p>
        <strong><u>Security:</u></strong> You are responsible for safeguarding your account credentials and notifying us immediately
        of any unauthorized access.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>4. Prohibited Activities</h2>
      <p>
        While using PernEats, you agree not to:
      </p>
      <ul>
        <li>
          <strong>Engage in unlawful or fraudulent activities</strong> that violate any applicable laws or regulations.
        </li>
        <li>
          <strong>Upload or share harmful content:</strong> This includes viruses, malicious code, or other disruptive software.
        </li>
        <li>
          <strong>Impersonate others:</strong> Falsely represent yourself as another person or entity.
        </li>
        <li>
          <strong>Interfere with our services:</strong> Attempt to disrupt or overload our systems.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>5. Orders and Payments</h2>
      <p>
        By placing an order on PernEats, you agree to the following terms:
      </p>
      <ul>
        <li>
          <strong><u>Payment:</u></strong> All payments must be completed at the time of order placement. We accept major credit cards,
          digital wallets, and other payment methods specified on our platform.
        </li>
        <li>
          <strong><u>Order Accuracy:</u></strong> Please review your order before submission. PernEats is not responsible for errors
          in your order details.
        </li>
        <li>
          <strong><u>Refunds and Cancellations:</u></strong> Refunds are processed based on our cancellation and refund policy. 
          Contact our support team for assistance.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>6. Intellectual Property</h2>
      <p>
        All content, including text, graphics, logos, and software on <strong><em>PernEats</em></strong>, is protected by copyright,
        trademark, and other intellectual property laws. You may not copy, reproduce, or distribute any content without prior written
        consent from PernEats.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>7. Termination</h2>
      <p>
        We reserve the right to terminate or suspend your access to our services if you violate these Terms or engage in any activity
        that harms PernEats or its users.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>8. Limitation of Liability</h2>
      <p>
        PernEats is not liable for any indirect, incidental, or consequential damages arising from the use of our services, including
        but not limited to lost profits, data loss, or unauthorized access.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>9. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. By continuing to use our services after changes are made, you agree to the revised
        Terms. We recommend reviewing this page periodically.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#ff6600", marginTop: "20px" }}>10. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at: <br />
        <strong>Email:</strong> <a href="mailto:support@perneats.com" style={{ color: "#ff6600" }}>support@perneats.com</a> <br />
        <strong>Phone:</strong> +1 123-456-7890
      </p>
    </div>
  );
};

export default TermsOfService;
