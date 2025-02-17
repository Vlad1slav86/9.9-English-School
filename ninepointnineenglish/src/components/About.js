import React from "react";
import "./About.css";

const aboutItems = [
  {
    number: "1",
    jpTitle: "講師は全てネイティブスピーカー",
    jpDetail: "ベテランの講師陣が中心です。",
    title: "All of our teachers are native English speakers.",
    detail: "Our teachers are all highly experienced, with many years of teaching in Japan.",
  },
  {
    number: "2",
    jpTitle: "最大6名までの少人数&月謝制",
    jpDetail:
      "小さいクラスだからそれだけもっと楽しく密度の高いレッスンです。回数制のプライベートレッスンもございます。",
    title: "Maximum 6 students per class - Small Group & Monthly Payment System",
    detail:
      "Small classes ensure more focused and enjoyable lessons. We also offer private lessons on a pay-per-lesson basis.",
  },
  {
    number: "3",
    jpTitle: "実績のある効果的なレッスン法",
    jpDetail: "",
    title: "Effective and Proven Teaching Methods",
    detail: "We use time-tested methods to ensure students learn English in the most effective way.",
  },
  {
    number: "4",
    jpTitle: "100以上のクラスから、お子さまにぴったりのクラスが選べます",
    jpDetail: "ご希望の時間帯・お子さまのレベルにぴったりのクラスが見つかります。",
    title: "Choose from Over 100 Classes for Your Child's Needs",
    detail:
      "We provide various class options tailored to your child’s schedule and skill level.",
  },
  {
    number: "5",
    jpTitle: "保護者様はいつでもレッスンをご覧になれます",
    jpDetail: "",
    title: "Easy for Parents to Observe Classes",
    detail: "Parents are welcome to observe the lessons at any time.",
  },
  {
    number: "6",
    jpTitle: "体験レッスン",
    jpDetail: "お気軽にお問い合わせ下さい。納得のいくクラスでスタートしていただけます。",
    title: "Trial Lessons Available",
    detail:
      "Feel free to contact us for a trial lesson to see if our classes are the right fit for you.",
  },
  {
    number: "7",
    jpTitle: "充実の帰国生クラス",
    jpDetail: "",
    title: "Comprehensive Classes for Returnee Students",
    detail: "We offer specialized classes for students who have lived abroad.",
  },
  {
    number: "8",
    jpTitle: "短期ホームステイ・語学留学プランのご紹介が可能です。",
    jpDetail: "",
    title: "Short-Term Homestay & Language Study Abroad Programs",
    detail:
      "We assist students in planning short-term homestays or language study abroad programs.",
  },
  {
    number: "9",
    jpTitle: "毎月Newsletterを発行します。",
    jpDetail: "クラスの紹介など盛りだくさんの内容です。",
    title: "Monthly Newsletters",
    detail:
      "Each month, we send updates on class schedules, upcoming events, and much more to keep you informed.",
  },
];

const About = () => {
  return (
    <section id="about">
      <h2>特徴</h2>
      <div className="sets-apart-inner">
        {aboutItems.map((item, index) => (
          <div key={index} className={`about-item item-${index + 1}`}>
            <div className="content">
              {item.jpTitle && <h3>{item.jpTitle}</h3>}
              {item.jpDetail && <p>{item.jpDetail}</p>}
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
