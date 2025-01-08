import React from "react";
import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import "font-awesome/css/font-awesome.min.css";
import "./Footer.css";

const Footer = () => {
  const lineAccountUrl = "line://ti/p/@NINEPOINTNINE"; // Replace with the actual Line account URL

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* School Address */}
        <div className="footer-address">
          <h3>学校所在地</h3>
          <p><i className="fa fa-map-marker"></i> <strong>七日町校：</strong>山形市七日町2-1-3 プラザビル七日町3階</p>
          <p><i className="fa fa-map-marker"></i> <strong>双葉町校：</strong>山形市双葉町1-4-11</p>
          <h3>お問い合わせ</h3>
          <p>📞 <strong><a href="tel:0236252299">023-625-2299</a></strong></p>
          <p>📧 <strong><a href="mailto:info@ninepointnineenglish.com">info@ninepointnineenglish.com</a></strong></p>
          <p>メールでお問い合せの際は必ずお電話番号をお書き添え下さい。<br/>返信メールが届かない場合がございます。</p>
        </div>

        {/* QR Code Section */}
        <div className="footer-qr-code">
  <h3>採用情報 (LINE)</h3>
  <QRCodeCanvas value={lineAccountUrl} size={150} bgColor="#ffffff" fgColor="#000000" />
  <p>QRコードをスキャンしてLINEでつながりましょう！</p>
  <p>または、<a href={lineAccountUrl} target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i> こちらをクリック</a>してLINEを開いてください。</p>
</div>


        {/* Navigation Links */}
        <div className="footer-links">
  <Link to="/"><i className="fa fa-home"></i> ホーム</Link> {/* Home */}
  <Link to="/about"><i className="fa fa-info-circle"></i> アバウト</Link> {/* About */}
  <Link to="/instructors"><i className="fa fa-users"></i> 講師紹介</Link> {/* Instructors */}
  <Link to="/announcements"><i className="fa fa-bullhorn"></i> お知らせ</Link> {/* Announcements */}
  <Link to="/calendar"><i className="fa fa-calendar"></i> カレンダー</Link> {/* Calendar */}
  <Link to="/recruitment"><i className="fa fa-briefcase"></i>採用情報</Link> {/* Calendar */}
  <Link to="/contact"><i className="fa fa-envelope"></i> お問い合わせ</Link> {/* Contact */}
</div>

      </div>

      {/* Copyright Notice */}
      <div className="footer-copyright">
        <p>&copy; 9.9 English School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
