import React from "react";
import Instructor from "./Instructor";
import "./Instructors.css";

const Instructors = () => {
  const instructorData = [
    {
      name: (
        <>
          <strong>校長 ポール プライス</strong>
          <p>Paul Price</p>
        </>
      ),
      mainImage: "/images/paul2013.jpg",
      bio: (
        <>
          <strong>私どもの「子どもの英会話」は、第一に「楽しい」レッスンです。「楽しい」からこそお子さまの参加意欲と英語に対する関心を高く維持できるのです。第二言語の習得はその言語をプロセスできる神経回路の新たな構築を意味します。脳の発育が活発な時期にどんどん「英語の刺激」を与えてあげることが大切です。「楽しく過ごす英語だけの時間」。これが最も効果的な刺激の与え方なのです。</strong>
          <p>Paul has been teaching English in Yamagata since 1993, and started working with us in 1997. He is teaching at Futabacho.</p>
        </>
      ),
      smallImages: [
        "/images/Paul_DSC02343.jpg",
        "/images/Paul_IMG_0962.jpg",
        "/images/Paul_IMG_1539.jpg",
        "/images/sPaul_DSC02397.jpg",
      ],
    },
    {
      name: (
        <>
          <strong>ルイス ハリソン</strong>
          <p>Lewis Harrison</p>
        </>
      ),
      mainImage: "/images/Lewis_Top_s.jpg",
      bio: (
        <>
          <strong>七日町校担当講師 幼児から高校生クラスまでを担当。クラスの雰囲気はとても穏やかで、シャイな生徒さんも安心してご参加いただけます。</strong>
          <p>Lewis is from the UK and he teaches at Nanokamachi.</p>
        </>
      ),
      smallImages: [
        "/images/Lewis_1s.jpg",
        "/images/Lewis_2s.jpg",
        "/images/Lewis_3s.jpg",
        "/images/Lewis_4s.jpg",
      ],
    },
    {
      name: (
        <>
          <strong>ジャスティン オラスキー</strong>
          <p>Justin Orasky</p>
        </>
      ),
      mainImage: "/images/Justin_DSC02302.jpg",
      bio: (
        <>
          <strong>七日町校担当講師 幼児から帰国生クラスまで、生徒さんの関心を引き付け、楽しみながら身につくレッスンが好評です。</strong>
          <p>Justin is from the U.S.A and he teaches at Nanokamachi.</p>
        </>
      ),
      smallImages: [
        "/images/Justin_Aoi_IMG_0844.jpg",
        "/images/Justin_erika71.jpg",
        "/images/Justin_mao_momoka.jpg",
        "/images/Justin_yuma_kimika_satsuki.jpg",
      ],
    },
    {
      name: (
        <>
          <strong>武田千夏</strong>
          <p>Takeda, Chinatsu</p>
        </>
      ),
      mainImage: "/images/chinatsu3.jpg",
      bio: (
        <>
          <strong>ディレクター／英検対策クラス担当講師</strong>
          <p>Director／She is teaching at Nanokamachi.</p>
        </>
      ),
      smallImages: [] // You can leave this empty or add small images later
    }
  ];

  return (
    <section id="instructors">
      <h2>Meet Our Instructors</h2>
      <div className="instructors-container">
        {instructorData.map((instructor, index) => (
          <div key={index} className="instructor-card">
            <div className="instructor-info">
              <img
                src={instructor.mainImage}
                alt={instructor.name}
                className="instructor-main-image"
              />
              <div className="bio">
                <h3>{instructor.name}</h3>
                <div className="bio-text">
                  {instructor.bio}
                </div>
                {instructor.smallImages && instructor.smallImages.length > 0 && (
                  <div className="small-images">
                    {instructor.smallImages.map((smallImage, idx) => (
                      <img
                        key={idx}
                        src={smallImage}
                        alt={`Small Image ${idx + 1}`}
                        className="instructor-small-image"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
