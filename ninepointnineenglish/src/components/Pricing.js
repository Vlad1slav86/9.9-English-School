import React from "react";
import "./Pricing.css";

const tuitionFees = {
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
};

const Pricing = () => {
  return (
    <section id="pricing">
      <h2>料金</h2>
      <div className="tuition-card">
        <div className="content">
          <div className="column">
            <h4>{tuitionFees.jpTitle}</h4>
            {tuitionFees.jpDetail.split("\n").map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
          </div>
          <div className="column">
            <h4>{tuitionFees.title}</h4>
            {tuitionFees.detail.split("\n").map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
