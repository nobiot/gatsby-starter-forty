import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

// TODO pitures need to be changed
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Generic = (props) => (
  <Layout>
    <BannerLanding title='自由が丘ランゲージスクールの６つの特色' subTitle='' />

    <div id='main'>
      <section id='one'>
        <div className='inner'>
          <header className='major'>
            <h2>言葉は新しい世界を拓きます。</h2>
          </header>
          <ol>
            <li>発音を重視し、正確な発音が初めから身に付くよう教授します</li>
            <li>上級者はもとより、アルファベットを知らない成人の方でも無理なく学べる教授法と経験があります。</li>
            <li>教授法を常に研究・開発あるいは採用して内容を充実させます(発展教授法等)。</li>
            <li>向学心を尊重します。</li>
            <li>受講生の意見や相談を歓迎します。</li>
            <li>伝統的な塾の精神を尊重し、常に、より良い学舎の実現を目指します。</li>
          </ol>
        </div>
      </section>
      <section id='two' className='spotlights'>
        <section>
          <img src={pic08} alt='' />
          <div className='content'>
            <div className='inner'>
              <blockquote>
              外国語を修得する最短の方法は、その言葉の《話す力》と、《聞く力》を、身につけることです。この二つの能力が養われたとき初めて、《読み・書きの力》も飛躍的に進歩することが可能となります。というのも、《読み・書き》の根底を支えているのは《話す・聞く能力》だからです。この能力が欠落している場合、《読み・書き》も充分な発達を示しません。《話す・聞く能力》が重要視されなかったため、数年に及ぶ努力を投人しても、外国語が思うように修得できないということが明らかになってきました。当校では、《話す・聞く能力》の開発を系統的に進め、《読み・書き》においても、大幅な進歩が得られるよう一貫した教授方針を基本にしています。従来、考えられていたよりも、より早く、深く、外国語の実力をつけることができます。外国語の修得を通して自他に資することを切に望みます。
              </blockquote>
              <p>校長</p>
            </div>
          </div>
        </section>
        <section>
          <Link to='/generic' className='image'>
            <img src={pic09} alt='' />
          </Link>
          <div className='content'>
            <div className='inner'>
              <header className='major'>
                <h3>自由が丘ランゲージスクールの沿革</h3>
              </header>
              <dl>
                <dt>
                  1971年6月3日
                </dt>
                <dd>
                  開校。授業開始日。
                  教授科目はフランス語及び英語会話。
                  住所は、東京都世田谷区奥沢8丁目31－6鈴木ビル2F。
                  大井町線（当時は田園都市線）九品仏駅より歩いて1分の所。
                  校名は『道濯塾』(Dokan Juku)であった。
                </dd>
              </dl>
              <dl>
                <dt>
                  1972年9月
                </dt>
                <dd>
                『外国人のための日本語』開講。
                </dd>
              </dl>
            </div>
          </div>
        </section>
        <section>
          <Link to='/generic' className='image'>
            <img src={pic10} alt='' />
          </Link>
          <div className='content'>
            <div className='inner'>
              <dl>
                <dt>
                  1978年2月20日
                </dt>
                <dd>
                  全受講者及び全職員とともに、隣りの駅に移転。
                  新住所は、東京都目黒区自由が丘1－28－8自由が丘デパート4F
                  東横線及び大井町線自由が丘駅正面改札口直前の所。
                  校名も現在の『自由が丘ランゲージスクール』に改める。
                </dd>
              </dl>
              <dl>
                <dt>
                  1978年10月
                </dt>
                <dd>
                  他に先がけて壮年・高年者の英語コースを開講。
                  『アダル卜・イングリッシユ・コース』( 現名称『プライム・イングリッシュ・コース』 ）と名付けて、最初は40才以上の人を対象とした。
                </dd>
              </dl>
              <p>校長：太 田 嘉 明<br />
              早稲田大学（哲学）卒<br />
              同修士卒<br />
              米国インディアナ大学留学<br />
              仏国ソルボンヌ留学<br />
              元 大学講師（英語担当）</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Generic
