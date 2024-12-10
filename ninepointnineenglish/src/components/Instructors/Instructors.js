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
      mainImageClass: "instructor-main-image paul",  // Added 'paul' class
      bio: (
        <>
          <strong>私どもの「子どもの英会話」は、第一に「楽しい」レッスンです。<br></br>「楽しい」からこそお子さまの参加意欲と英語に対する関心を高く維持できるのです。<br></br>第二言語の習得はその言語をプロセスできる神経回路の新たな構築を意味します。<br></br>脳の発育が活発な時期にどんどん「英語の刺激」を与えてあげることが大切です。<br></br>「楽しく過ごす英語だけの時間」。これが最も効果的な刺激の与え方なのです。</strong>
          <p>Paul has been teaching English in Yamagata since 1993, and started working with us in 1997. He is teaching at Futabacho.</p>
        </>
      ),
      smallImagesClass: [
        "instructor-small-image paul-small-1",
        "instructor-small-image paul-small-2",
        "instructor-small-image paul-small-3",
        "instructor-small-image paul-small-4",
      ],
    },
    {
      name: (
        <>
          <strong>ルイス ハリソン</strong>
          <p>七日町校担当講師 <br></br>幼児から高校生クラスまでを担当。<br></br>クラスの雰囲気はとても穏やかで、シャイな生徒さんも安心してご参加いただけます。</p>
          
        </>
      ),
      mainImageClass: "instructor-main-image lewis",  // Added 'lewis' class
      bio: (
        <>
          <strong>Lewis Harrison</strong>
          <p>Lewis is from the UK and he teaches at Nanokamachi.</p>
        </>
      ),
      smallImagesClass: [
        "instructor-small-image lewis-small-1",
        "instructor-small-image lewis-small-2",
        "instructor-small-image lewis-small-3",
        "instructor-small-image lewis-small-4",
      ],
    },
    {
      name: (
        <>
          <strong>ジャスティン オラスキー</strong>
          <p>Justin Orasky</p>
        </>
      ),
      mainImageClass: "instructor-main-image justin",  // Added 'justin' class
      bio: (
        <>
          <strong>七日町校担当講師 <br></br>幼児から帰国生クラスまで、生徒さんの関心を引き付け、楽しみながら身につくレッスンが好評です。</strong>
          <p>Justin is from the U.S.A and he teaches at Nanokamachi.</p>
        </>
      ),
      smallImagesClass: [
        "instructor-small-image justin-small-1",
        "instructor-small-image justin-small-2",
        "instructor-small-image justin-small-3",
        "instructor-small-image justin-small-4",
      ],
    },
    {
      name: (
        <>
          <strong>武田千夏</strong>
          <p>Takeda, Chinatsu</p>
        </>
      ),
      mainImageClass: "instructor-main-image chinatsu",  // Added 'chinatsu' class
      bio: (
        <>
          <strong>ディレクター／英検対策クラス担当講師</strong>
          <p>Director／She is teaching at Nanokamachi.</p>
        </>
      ),
      smallImagesClass: []  // Empty or with images as needed
    }
  ];

  return (
    <section id="instructors">
      <h2>Meet Our Instructors</h2>
      <div className="instructors-container">
        {instructorData.map((instructor, index) => (
          <div key={index} className="instructor-card">
            <div className="instructor-info">
              <div
                className={instructor.mainImageClass} // Apply the CSS class
                alt={instructor.name}
              />
              <div className="bio">
                <h3>{instructor.name}</h3>
                <div className="bio-text">
                  {instructor.bio}
                </div>
                {instructor.smallImagesClass && instructor.smallImagesClass.length > 0 && (
                  <div className="small-images">
                    {instructor.smallImagesClass.map((smallImageClass, idx) => (
                      <div
                        key={idx}
                        className={smallImageClass}  // Apply the CSS class
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
