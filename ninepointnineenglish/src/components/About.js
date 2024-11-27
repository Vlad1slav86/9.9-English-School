/*import React from "react";
import "./About.css"; // Importing CSS styles

const About = () => {
  return (
    <section id="about">
      <h2>About Us</h2>

      <div className="about-item">
        <h3>1. All of our teachers are native English speakers.</h3>
        <p>Our teachers are all highly experienced, with many years of teaching in Japan.</p>
      </div>

      <div className="about-item">
        <h3>2. Maximum 6 students per class - Small Group & Monthly Payment System</h3>
        <p>Small classes ensure more focused and enjoyable lessons. We also offer private lessons on a pay-per-lesson basis.</p>
      </div>

      <div className="about-item">
        <h3>3. Effective and Proven Teaching Methods</h3>
        <p>We use time-tested methods to ensure students learn English in the most effective way.</p>
      </div>

      <div className="about-item">
        <h3>4. Choose from Over 100 Classes for Your Child's Needs</h3>
        <p>We provide various class options tailored to your child’s schedule and skill level.</p>
      </div>

      <div className="about-item">
        <h3>5. Easy for Parents to Observe Classes</h3>
        <p>Parents are welcome to observe the lessons at any time.</p>
      </div>

      <div className="about-item">
        <h3>6. Trial Lessons Available</h3>
        <p>Feel free to contact us for a trial lesson to see if our classes are the right fit for you.</p>
      </div>

      <div className="about-item">
        <h3>7. Comprehensive Classes for Returnee Students</h3>
        <p>We offer specialized classes for students who have lived abroad.</p>
      </div>

      <div className="about-item">
        <h3>8. Short-Term Homestay & Language Study Abroad Programs</h3>
        <p>We assist students in planning short-term homestays or language study abroad programs.</p>
      </div>

      <div className="about-item">
        <h3>9. Monthly Newsletters</h3>
        <p>Each month, we send updates on class schedules, upcoming events, and much more to keep you informed.</p>
      </div>

      <div className="about-item">
        <h3>Tuition Fees:</h3>
        <ul className="fee-list">
          <li>Group Class: 50-minute class (Grade School to High School) - ¥8,250/month</li>
          <li>Group Class: 30-minute class (Kindergarten) - ¥5,315/month</li>
          <li>Private Classes: From ¥3,300 for a 30-minute lesson</li>
          <li>Material Fee: ¥6,700/year</li>
          <li>Special Rates for Siblings</li>
        </ul>
      </div>

      <div className="about-item">
        <h3>Contact Information:</h3>
        <p>Phone: 023-625-2299</p>
        <p>Email: info@ninepointnineenglish.com</p>
        <p>Business Hours: Tuesday to Friday 1 PM - 8 PM, Saturday until 5 PM</p>
        <p>Closed on Mondays, Sundays, and National Holidays</p>
      </div>

      <div className="about-item">
        <h3>Our Students Go On to Top Universities!</h3>
        <p>We are proud of our students who have gone on to prestigious universities like:</p>
        <ul className="university-list">
          <li>Georgetown University</li>
          <li>Seoul National University</li>
          <li>Tokyo University</li>
          <li>Keio University</li>
          <li>Waseda University</li>
          <li>And many more...</li>
        </ul>
      </div>
    </section>
  );
};

export default About;*/


import React from "react";
import "./About.css"; // Importing CSS styles

const About = () => {
  return (
    <section id="about">
      <h2>About Us</h2>

      {/* English and Japanese Content */}
      <div className="about-item">
        <h3>1. All of our teachers are native English speakers.</h3>
        <p>Our teachers are all highly experienced, with many years of teaching in Japan.</p>
        <h4>講師は全てネイティブスピーカー</h4>
        <p>ベテランの講師陣が中心です。</p>
      </div>

      <div className="about-item">
        <h3>2. Maximum 6 students per class - Small Group & Monthly Payment System</h3>
        <p>Small classes ensure more focused and enjoyable lessons. We also offer private lessons on a pay-per-lesson basis.</p>
        <h4>最大6名までの少人数&月謝制</h4>
        <p>小さいクラスだからそれだけもっと楽しく密度の高いレッスンです。回数制のプライベートレッスンもございます。</p>
      </div>

      <div className="about-item">
        <h3>3. Effective and Proven Teaching Methods</h3>
        <p>We use time-tested methods to ensure students learn English in the most effective way.</p>
        <h4>実績のある効果的なレッスン法</h4>
      </div>

      <div className="about-item">
        <h3>4. Choose from Over 100 Classes for Your Child's Needs</h3>
        <p>We provide various class options tailored to your child’s schedule and skill level.</p>
        <h4>100以上のクラスから、お子さまにぴったりのクラスが選べます</h4>
        <p>ご希望の時間帯・お子さまのレベルにぴったりのクラスが見つかります。</p>
      </div>

      <div className="about-item">
        <h3>5. Easy for Parents to Observe Classes</h3>
        <p>Parents are welcome to observe the lessons at any time.</p>
        <h4>保護者様はいつでもレッスンをご覧になれます</h4>
      </div>

      <div className="about-item">
        <h3>6. Trial Lessons Available</h3>
        <p>Feel free to contact us for a trial lesson to see if our classes are the right fit for you.</p>
        <h4>体験レッスン</h4>
        <p>お気軽にお問い合わせ下さい。納得のいくクラスでスタートしていただけます。</p>
      </div>

      <div className="about-item">
        <h3>7. Comprehensive Classes for Returnee Students</h3>
        <p>We offer specialized classes for students who have lived abroad.</p>
        <h4>充実の帰国生クラス</h4>
      </div>

      <div className="about-item">
        <h3>8. Short-Term Homestay & Language Study Abroad Programs</h3>
        <p>We assist students in planning short-term homestays or language study abroad programs.</p>
        <h4>短期ホームステイ・語学留学プランのご紹介が可能です。</h4>
      </div>

      <div className="about-item">
        <h3>9. Monthly Newsletters</h3>
        <p>Each month, we send updates on class schedules, upcoming events, and much more to keep you informed.</p>
        <h4>毎月Newsletterを発行します。</h4>
        <p>クラスの紹介など盛りだくさんの内容です。</p>
      </div>

      {/* Tuition Fees */}
      <div className="about-item">
        <h3>Tuition Fees:</h3>
        <ul className="fee-list">
          <li>Group Class: 50-minute class (Grade School to High School) - ¥8,250/month</li>
          <li>Group Class: 30-minute class (Kindergarten) - ¥5,315/month</li>
          <li>Private Classes: From ¥3,300 for a 30-minute lesson</li>
          <li>Material Fee: ¥6,700/year</li>
          <li>Special Rates for Siblings</li>
        </ul>
        <h4>料金:</h4>
        <ul className="fee-list">
          <li>グループクラス料金: 50分（小学生〜高校生） - ¥8,250/月</li>
          <li>グループクラス料金: 30分（幼稚園クラス） - ¥5,315/月</li>
          <li>プライベートクラス: 30分 - ¥3,300〜</li>
          <li>教材費: ¥6,700/年</li>
          <li>ご兄弟姉妹の特別料金</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="about-item">
        <h3>Contact Information:</h3>
        <p>Phone: 023-625-2299</p>
        <p>Email: info@ninepointnineenglish.com</p>
        <p>Business Hours: Tuesday to Friday 1 PM - 8 PM, Saturday until 5 PM</p>
        <p>Closed on Mondays, Sundays, and National Holidays</p>
        <h4>お問い合わせは…</h4>
        <p>電話: 023-625-2299</p>
        <p>メール: info@ninepointnineenglish.com</p>
        <p>受付時間: 火曜日～金曜日 13:00～20:00、土曜日～17:00</p>
        <p>休業日: 月曜日、日曜日、祝日</p>
      </div>

      {/* University List */}
      <div className="about-item">
        <h3>Our Students Go On to Top Universities!</h3>
        <p>We are proud of our students who have gone on to prestigious universities like:</p>
        <ul className="university-list">
          <li>Georgetown University</li>
          <li>Seoul National University</li>
          <li>Tokyo University</li>
          <li>Keio University</li>
          <li>Waseda University</li>
          <li>And many more...</li>
        </ul>
        <h4>卒業生の進学先:</h4>
        <ul className="university-list">
          <li>慶應義塾大学</li>
          <li>東京大学</li>
          <li>上智大学</li>
          <li>早稲田大学</li>
          <li>東京慈恵医科大学</li>
          <li>その他多数...</li>
        </ul>
      </div>
    </section>
  );
};

export default About;

