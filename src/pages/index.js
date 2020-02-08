import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render () {
    return (
      <Layout>
        <Helmet
          title='自由が丘ランゲージスクール'
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />

        <Banner />

        <div id='main'>
          <section id='one' className='tiles'>
            <article className='style1' style={{ backgroundImage: `url(${pic01})` }}>
              <header className='major'>
                <h1>先生たちからのワンポイントアドバイス</h1>
                <p>個性あふれる先生たちをご紹介します。</p>
              </header>
              <Link to='/teachers' className='link primary' />
            </article>
            <article className='style2' style={{ backgroundImage: `url(${pic04})` }}>
              <header className='major'>
                <h1>高校生英語塾</h1>
                <ul className='no-bullet'>
                  <li>大学入学試験での高得点の取得</li>
                  <li>英語力を生涯向上させる基盤づくり</li>
                </ul>
              </header>
              <Link to='/highschool-english' className='link primary' />
            </article>
            <article className='style3' style={{ backgroundImage: `url(${pic02})` }}>
              <header className='major'>
                <h1>英語</h1>
                <ul className='no-bullet'>
                  <li>プライム・イングリッシュ・コース 壮年・高年者の英会話</li>
                  <li>イブニング・コース＆土曜日英語コース</li>
                  <li>デイ・コース</li>
                  <li>帰国子女英語</li>
                  <li>子ども英語塾</li>
                </ul>
              </header>
              <Link to='/english' className='link primary' />
            </article>
            <article className='style4' style={{ backgroundImage: `url(${pic03})` }}>
              <header className='major'>
                <h1>フランス語</h1>
                <ul className='no-bullet'>
                  <li>クール・デュ・ソワール＆土曜日フランス語コース </li>
                  <li>クール・ドゥ・ラ・ジュルネ</li>
                  <li>帰国子女フランス語</li>
                  <li>アドレサン（幼児童）フランス語</li>
                </ul>
              </header>
              <Link to='/french' className='link primary' />
            </article>
            <article className='style5' style={{ backgroundImage: `url(${pic05})` }}>
              <header className='major'>
                <h3>マンツーマン <br /> セミ・プライベート</h3>
                <ul className='no-bullet'>
                  <li>マンツーマン・クラスで効率的に英会話を修得できます。 </li>
                  <li>セミ・プライベートではご要望に合わせた（専門の研究発表のプラクティスなど）のカスタマイズができます。 </li>
                </ul>
              </header>
              <Link to='/one-to-one' className='link primary' />
            </article>
            <article className='style6' style={{ backgroundImage: `url(${pic06})` }}>
              <header className='major'>
                <h1>子ども英語塾</h1>
                <ul className='no-bullet'>
                  <li>楽しく英会話と書き方を学びます。</li>
                </ul>
              </header>
              <Link to='/kids-english' className='link primary' />
            </article>
            <article className='style1' style={{ backgroundImage: `url(${pic06})` }}>
              <header className='major'>
                <h1>体験レッスン</h1>
                <ul className='no-bullet'>
                  <li>体験は無料です。体験レッスンで、あなたに合ったクラスを選びましょう。先生も同時にレベル・チェックをしてくれます。ぜひお試し下さい。</li>
                </ul>
              </header>
              <Link to='/trial' className='link primary' />
            </article>
            <article className='style2' style={{ backgroundImage: `url(${pic06})` }}>
              <header className='major'>
                <h1>会話スペース</h1>
                <ul className='no-bullet'>
                  <li>当校の受講者でなくても、自由に参加できます。会話力のレベルは問いません。</li>
                  <li>英会話 フランス語会話</li>
                  <li>土曜日 参加費1,000円 (初回は無料です) お気軽にご参加ください。</li>
                </ul>
              </header>
              <Link to='/space' className='link primary' />
            </article>
          </section>
          {/* <section className='tiles'>
            <div className='inner'>
              <header className='major'>
                <h2>お知らせ</h2>
              </header>
              <ul className='actions'>
                <li><Link to='/landing' className='button'>お知らせ一覧</Link></li>
              </ul>
            </div>
          </section> */}
          <section className='tiles'>
            <div className='inner'>
              <header className='major'>
                <h2>言葉は新しい世界を拓きます。</h2>
              </header>
              <p>世界は英語で心をつなぎます。</p>
              <p>美しく、フランス語は美しく話す言葉です。</p>
              <ul className='actions'>
                <li><Link to='/about' className='button'>本校の特色と沿革</Link></li>
              </ul>
            </div>
          </section>
        </div>

      </Layout>
    )
  }
}

export default HomeIndex
