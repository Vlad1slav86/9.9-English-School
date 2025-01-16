import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Recruitment.css";

const Recruitment = () => {
  const lineAccountUrl = "https://line.me/R/ti/p/@107jffgd#~"; // Replace with the actual Line account URL

  return (
    <section id="recruitment">
      <div className="recruitment-container">
        <div className="recruitment-line-qr-code">
          <h3>Recruitment Information (LINE)</h3>
          <p>Scan the QR code below to connect with us on LINE.</p>
          <p>
            Working at 9.9 is a fulfilling experience filled with growth opportunities. We value passionate teaching staff and a positive learning environment. Would you like to build a new career as part of this vibrant team?
          </p>

          <QRCodeCanvas value={lineAccountUrl} size={200} bgColor="#ffffff" fgColor="#000000" />
          <p>
            Alternatively, <a href={lineAccountUrl} target="_blank" rel="noopener noreferrer">click here</a> to open LINE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
