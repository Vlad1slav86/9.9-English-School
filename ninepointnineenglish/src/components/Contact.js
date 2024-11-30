import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="school-info">
            <h3>学校所在地</h3>
            <p><strong>七日町校：</strong>山形市七日町2-1-3 プラザビル七日町3階</p>
            <p><strong>双葉町校：</strong>山形市双葉町1-4-11</p>
            <p><strong>Nanokamachi School:</strong> 3/F Tosho Bldg. 1-3 Nanokamachi 2-Chome Yamagata-shi, Yamagata 990-0042 Japan</p>
            <p><strong>Futabacho School:</strong> 4-11 Futabacho 1-Chome Yamagata-shi, Yamagata 990-0828 Japan</p>
          </div>

          <div className="contact-details">
            <h3>お問い合わせ</h3>
            <p>📞 <strong><a href="tel:0236252299">023-625-2299</a></strong></p>

            <p>📧 <strong><a href="mailto:info@ninepointnineenglish.com">info@ninepointnineenglish.com</a></strong></p>

            <p>
              メールでお問い合せの際は必ずお電話番号をお書き添え下さい。返信メールが届かない場合がございます。
            </p>
          </div>
          <div className="business-hours">
            <h3>受付時間</h3>
            <p>火曜～金曜: <strong>13時～20時</strong></p>
            <p>土曜: <strong>～17時</strong></p>
            <p>月・日・祝日休み</p>
            <h3>Business Hours:</h3>
            <p>Tuesday through Friday: <strong>1:00pm - 8:00pm</strong></p>
            <p>Saturday: <strong>Until 5:00pm</strong></p>
            <p>Closed Monday, Sunday, and National Holidays</p>
          </div>
          
          <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.13173465625!2d140.33261904091844!3d38.253250649334504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8bb6036d0fbf5d%3A0x81d5d77f1225c035!2s1-ch%C5%8Dme-3%20Nanukamachi%2C%20Yamagata%2C%20990-0042%2C%20Japan!5e0!3m2!1sen!2sus!4v1732986755974!5m2!1sen!2sus" 
          width="900" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>




        </div>
      </div>
    </section>
  );
};

export default Contact;
