import React from 'react'

const Banner = (props) => (
  <section id='banner' className='major'>
    <div className='inner'>
      <header className='major'>
        <h1>自由が丘ランゲージスクールへようこそ。</h1>
        <h2>自由が丘駅徒歩３０秒。</h2>
        <h3>伝統あるアットホームな英語・フランス語教室</h3>
        <p>お問合せ・お申込みは ０１２０－００９－０３５<br />(フリーダイアル)</p>
      </header>
      <div className='content'>
        <ul className='actions'>
          <li><a href='#one' >高校生 英語塾</a></li>
          <li><a href='#one' >壮年・高年者の英会話</a></li>
          <li><a href='#one' >帰国子女英語・フランス語</a></li>
          <li><a href='#one' >幼児童英語・フランス語</a></li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
