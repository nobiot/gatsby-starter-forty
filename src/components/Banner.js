import React from 'react'

const Banner = (props) => (
  <section id='banner' className='major'>
    <div className='inner'>
      <header className='major'>
        <h1>自由が丘ランゲージスクールへようこそ。</h1>
        <h2>自由が丘駅徒歩３０秒。</h2>
        <p>伝統あるアットホームな英語・フランス語教室</p>
      </header>
      <div className='content'>
        <p>お問合せ・お申込みは ０１２０－００９－０３５<br />(フリーダイアル)</p>
        <ul className='actions'>
          <li><a href='#one' className='button next scrolly'>英語</a></li>
          <li><a href='#french' className='button next scrolly'>フランス語</a></li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
