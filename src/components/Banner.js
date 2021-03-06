import React from 'react'
import { Link } from 'gatsby'

const Banner = (props) => (
  <section id='banner' className='major'>
    <div className='inner'>
      <header className='major'>
        <h1>自由が丘ランゲージスクールへようこそ。</h1>
        <h2>自由が丘駅徒歩３０秒。</h2>
        <h3>伝統あるアットホームな英語・フランス語教室</h3>
        <p>お問合せ・お申込みは ０１２０－００９－０３５<br />(フリーダイアル)</p>
      </header>
      <ul className='actions'>
        <li><Link to='/landing' className='button next'>すぐに行ってみる</Link></li>
      </ul>
    </div>
  </section>
)

export default Banner
