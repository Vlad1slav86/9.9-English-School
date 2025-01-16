import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Contact.css";

const Contact = () => {
  const lineAccountUrl = "https://line.me/R/ti/p/@107jffgd#~"; // Replace with the actual Line account URL

  return (
    <section id="contact">
      <div className="contact-container">
        <h2>お問い合わせ</h2>
        <div className="contact-info">
          <div className="school-info">
            <h3>学校所在地</h3>
            <p><strong>七日町校：</strong>山形市七日町2-1-3 プラザビル七日町3階</p>
            <p><strong>双葉町校：</strong>山形市双葉町1-4-11</p>
          </div>

          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12532.711903989992!2d140.32543881298176!3d38.252178099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8bb60396943975%3A0x8921d3d7e032ae3c!2z44OX44Op44K244OT44Or5LiD5pel55S6!5e0!3m2!1sen!2sus!4v1734453072973!5m2!1sen!2sus"
              width="900"
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>


          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.366966697417!2d140.32040467675878!3d38.247794271869964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8bb60d9ed798bd%3A0x88788111eb6e0047!2s1-ch%C5%8Dme-4-11%20Futabach%C5%8D%2C%20Yamagata%2C%20990-0828%2C%20Japan!5e0!3m2!1sen!2sus!4v1734452593004!5m2!1sen!2sus" 
              width="900" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>



          <div className="contact-details">
            <h3>お問い合わせ</h3>
            <p>📞 <strong><a href="tel:0236252299">023-625-2299</a></strong></p>
            <p>📧 <strong><a href="mailto:info@ninepointnineenglish.com">info@ninepointnineenglish.com</a></strong></p>
            <p>メールでお問い合せの際は必ずお電話番号をお書き添え下さい。返信メールが届かない場合がございます。</p>
          </div>

          <div className="business-hours">
            <h3>受付時間</h3>
            <p>火曜～金曜: 13時～20時</p>
            <p>土曜: ～17時</p>
            <p>月・日・祝日休み</p>
            <h3>Business Hours:</h3>
            <p>Tuesday through Friday: 1:00pm - 8:00pm</p>
            <p>Saturday: Until 5:00pm</p>
            <p>Closed Monday, Sunday, and National Holidays</p>
          </div>

          <div className="line-qr-code">
  <h3>Recruitment Information (LINE)</h3>
  <p>Scan the QR code below to connect with us on LINE.</p>
  <QRCodeCanvas value={lineAccountUrl} size={150} bgColor="#ffffff" fgColor="#000000" />
  <p>
    Alternatively, <a href={lineAccountUrl} target="_blank" rel="noopener noreferrer">click here</a> to open LINE.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
