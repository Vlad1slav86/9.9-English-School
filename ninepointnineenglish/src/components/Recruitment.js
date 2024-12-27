import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Recruitment.css";

const Recruitment = () => {
  const lineAccountUrl = "https://line.me/R/ti/p/@107jffgd#~"; // Replace with the actual Line account URL

  return (
    <section id="recruitment">
      <div className="recruitment-container">
        <div className="recruitment-line-qr-code">
        <h3>採用情報 (LINE)</h3>
<p>下記のQRコードをスキャンして、私たちとLINEでつながりましょう。</p>
<p>9.9で働くことは、充実感と成長の機会に満ちた素晴らしい経験です。私たちは、情熱を持って教えるスタッフと、前向きな学習環境を大切にしています。あなたもこの活気あるチームの一員として、新たなキャリアを築きませんか？</p>

          <QRCodeCanvas value={lineAccountUrl} size={200} bgColor="#ffffff" fgColor="#000000" />
          <p>または、<a href={lineAccountUrl} target="_blank" rel="noopener noreferrer">こちらをクリック</a>してLINEを開いてください。</p>

        </div>
      </div>
    </section>
  );
};

export default Recruitment;

