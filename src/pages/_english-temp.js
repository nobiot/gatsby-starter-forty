import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic03 from '../assets/images/pic03.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const English = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>Landing - Forty by HTML5 UP</title>
        <meta name='description' content='Landing Page' />
      </Helmet>

      <BannerLanding title='英語' subTitle='世界の人々が理解し合うために英語はますます必要になっていきます。外国語を習得する最良の方法は『言葉のリズム』にまず慣れることです。初歩の段階ではテキストの内容に沿った会話練習が多く、 実力が上るに連れテキストの内容を基本とした応用会話や自由会話の度合が増します。' />

      <div id='main'>
        <section>
          <div className='inner'>
            <header className='major'>
              <h2>イブニング・コース ＆ 土曜日英語コース</h2>
            </header>
            <span className='image left'><img src={pic09} alt='' /></span>
            <p>タ方の成人クラスです。長い実績を持ち、多くの人に親しまれているコースです。<br />
                16 歳以上の方から受講できます。<br />
                会話クラスに加えて、ビジネス会話クラスが好評です。<br />
                初級から上級まで多段階のレベルがあり実力に合ったクラスに入学して頂きます。</p>
            <div className='table-wrapper'>
              <table>
                <tbody>
                  <tr>
                    <td>週１回５０分</td>
                    <td>クラス定員３名（平均２名） </td>
                    <td>16,760 (内税 1,236)/月 </td>
                  </tr>
                  <tr>
                    <td>週１回５０分</td>
                    <td>定員５名（平均２-３名）</td>
                    <td>13,160 (内税 969)/月 </td>
                  </tr>
                  <tr>
                    <td>週１回７５分</td>
                    <td>定員５名（平均２-３名）</td>
                    <td>19,640 (内税 1,449)/月  </td>
                  </tr>
                  <tr>
                    <td>週１回４０分</td>
                    <td>定員３名（平均２名）</td>
                    <td>13,370 (内税 989)/月</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan='2' />
                    <td>入学金 + テキスト代 実費</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>
        <section id='one' className='spotlights'>
          <section>
            <Link to='/generic' className='image'>
              <img src={pic09} alt='' />
            </Link>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>イブニング・コース ＆ 土曜日英語コース</h3>
                </header>
                <p>昼間の成人コースです。長い実績を誇るコースです。多くの主婦の方に親しまれているコースです。初級から上級まで多段階のレベルがあり実力に合ったクラスに入学して頂きます。内容はイブニング・コースと同様です</p>
                <ul className='actions'>
                  <li><Link to='/generic' className='button'>Learn more</Link></li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link to='/generic' className='image'>
              <img src={pic10} alt='' />
            </Link>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>プライム・イングリシュ・コース 壮年・高年者の英会話</h3>
                </header>
                <p>成人の年令別編成コースです。ABC発音復習から始める入門クラスから中級クラスまであります。当校はシニアの英会話クラスを、他に先駆けて開講（１９７８年）し、予想を超える好評を得た実績があります。以来、伝統を誇っています。「壮年・高年者の英会話クラス発祥の教室」として受講者の方に満足頂けるような親しみやすい教授法も豊かです。 </p>
                <ul className='actions'>
                  <li><Link to='/generic' className='button'>Learn more</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </section>
        <section id='last'>
          <div className='inner'>
            <header className='major'>
              <h2>イブニング・コース ＆ 土曜日英語コース</h2>
            </header>
            <span className='image left'><img src={pic09} alt='' /></span>
            <p>タ方の成人クラスです。長い実績を持ち、多くの人に親しまれているコースです。<br />
                16 歳以上の方から受講できます。<br />
                会話クラスに加えて、ビジネス会話クラスが好評です。<br />
                初級から上級まで多段階のレベルがあり実力に合ったクラスに入学して頂きます。</p>
            <div className='table-wrapper'>
              <table>
                <tbody>
                  <tr>
                    <td>週１回５０分</td>
                    <td>クラス定員３名（平均２名） </td>
                    <td>16,760 (内税 1,236)/月 </td>
                  </tr>
                  <tr>
                    <td>週１回５０分</td>
                    <td>定員５名（平均２-３名）</td>
                    <td>13,160 (内税 969)/月 </td>
                  </tr>
                  <tr>
                    <td>週１回７５分</td>
                    <td>定員５名（平均２-３名）</td>
                    <td>19,640 (内税 1,449)/月  </td>
                  </tr>
                  <tr>
                    <td>週１回４０分</td>
                    <td>定員３名（平均２名）</td>
                    <td>13,370 (内税 989)/月</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan='2' />
                    <td>入学金 + テキスト代 実費</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>
      </div>

    </Layout>
  )
}

export default English
