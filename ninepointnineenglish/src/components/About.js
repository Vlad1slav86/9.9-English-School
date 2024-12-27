import React from "react";
import "./About.css";

const aboutItems = [
  {
    number: "1",
    title: "All of our teachers are native English speakers.",
    detail: "Our teachers are all highly experienced, with many years of teaching in Japan.",
    jpTitle: "講師は全てネイティブスピーカー",
    jpDetail: "ベテランの講師陣が中心です。",
  },
  {
    number: "2",
    title: "Maximum 6 students per class - Small Group & Monthly Payment System",
    detail: "Small classes ensure more focused and enjoyable lessons. We also offer private lessons on a pay-per-lesson basis.",
    jpTitle: "最大6名までの少人数&月謝制",
    jpDetail: "小さいクラスだからそれだけもっと楽しく密度の高いレッスンです。回数制のプライベートレッスンもございます。",
  },
  {
    number: "3",
    title: "Effective and Proven Teaching Methods",
    detail: "We use time-tested methods to ensure students learn English in the most effective way.",
    jpTitle: "実績のある効果的なレッスン法",
    jpDetail: "",
  },
  {
    number: "4",
    title: "Choose from Over 100 Classes for Your Child's Needs",
    detail: "We provide various class options tailored to your child’s schedule and skill level.",
    jpTitle: "100以上のクラスから、お子さまにぴったりのクラスが選べます",
    jpDetail: "ご希望の時間帯・お子さまのレベルにぴったりのクラスが見つかります。",
  },
  {
    number: "5",
    title: "Easy for Parents to Observe Classes",
    detail: "Parents are welcome to observe the lessons at any time.",
    jpTitle: "保護者様はいつでもレッスンをご覧になれます",
    jpDetail: "",
  },
  {
    number: "6",
    title: "Trial Lessons Available",
    detail: "Feel free to contact us for a trial lesson to see if our classes are the right fit for you.",
    jpTitle: "体験レッスン",
    jpDetail: "お気軽にお問い合わせ下さい。納得のいくクラスでスタートしていただけます。",
  },
  {
    number: "7",
    title: "Comprehensive Classes for Returnee Students",
    detail: "We offer specialized classes for students who have lived abroad.",
    jpTitle: "充実の帰国生クラス",
    jpDetail: "",
  },
  {
    number: "8",
    title: "Short-Term Homestay & Language Study Abroad Programs",
    detail: "We assist students in planning short-term homestays or language study abroad programs.",
    jpTitle: "短期ホームステイ・語学留学プランのご紹介が可能です。",
    jpDetail: "",
  },
  {
    number: "9",
    title: "Monthly Newsletters",
    detail: "Each month, we send updates on class schedules, upcoming events, and much more to keep you informed.",
    jpTitle: "毎月Newsletterを発行します。",
    jpDetail: "クラスの紹介など盛りだくさんの内容です。",
  },
];

const tuitionFees = {
  title: "Tuition Fees",
  detail: `
    Group Lesson Fee:
    - Grade School to High School (50 min class): ¥8,250/month
    - Kindergarten (30 min class): ¥5,315/month

    Sign-Up Fee: ¥11,000
    Material Fee (1 year): ¥6,700

    Special Rates for Siblings:
    - Sign-Up Fee: Free for 2nd child onward
    - Material Fee (1 year): ¥6,700
    - Monthly Fee for 50 min class: ¥7,150
    - Monthly Fee for 30 min class: ¥4,890

    Private Lesson Fee:
    - Sign-Up Fee: ¥11,000
    - Per Lesson:
      - 30 min: ¥3,300–¥4,812
      - 45 min: ¥4,620–¥6,737
      - 60 min: ¥5,940–¥8,690
    (Fees vary by age and schedule. Please inquire for details.)
    Material Fee: Approximately ¥4,000–¥5,000 as needed.
  `,
  jpTitle: "料金",
  jpDetail: `
    ○ グループクラス料金:
    - 小学生～高校生クラス（50分間）: ¥8,250/月
    - 幼稚園クラス（30分間）: ¥5,315/月

    入会金: ¥11,000
    教材費（1年分）: ¥6,700

    ご兄弟姉妹二人目以降の方:
    - 入会金: 無料
    - 教材費（1年分）: ¥6,700
    - 月謝（50分クラス）: ¥7,150
    - 月謝（30分クラス）: ¥4,890

    ○ プライベートクラス料金:
    - 入会金: ¥11,000
    - 受講料（1レッスンあたり）:
      - 30分: ¥3,300～¥4,812
      - 45分: ¥4,620～¥6,737
      - 60分: ¥5,940～¥8,690
    （年齢と受講日時で金額が変わります。詳しくはお問い合わせ下さい）
    - 教材費: 随時 ¥4,000～¥5,000程度
  `,
};

const About = () => {
  return (
    <section id="about">
      <h2>アバウト</h2>
      <div className="sets-apart-inner">
        {aboutItems.map((item, index) => (
          <div key={index} className={`about-item item-${index + 1}`}>
            <div className="content">
              <h5>{item.number}</h5>
              <h3>{item.title}</h3>
              {item.jpTitle && <h4>{item.jpTitle}</h4>}
              {item.detail && <p>{item.detail}</p>}
              {item.jpDetail && <p>{item.jpDetail}</p>}
            </div>
          </div>
        ))}
      </div>

    {/* Tuition Fees Section */}
<div className="tuition-card">
  {/* <h3>Tuition Fees</h3> */}
  <div className="content">
    <div className="column">
      {/* <h4>Japanese</h4> */}
      {tuitionFees.jpTitle && <h4>{tuitionFees.jpTitle}</h4>}
      {tuitionFees.jpDetail.split("\n").map((line, i) => (
        <p key={i}>{line.trim()}</p>
      ))}
    </div>
    <div className="column">
      <h4>Tuition Fees</h4>
      {tuitionFees.detail.split("\n").map((line, i) => (
        <p key={i}>{line.trim()}</p>
      ))}
    </div>
  </div>
</div>


    </section>
  );
};

export default About;
