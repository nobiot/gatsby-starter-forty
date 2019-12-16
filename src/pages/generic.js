import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
  <Layout>
    <Helmet>
      <title>Generic - Forty by HTML5 UP</title>
      <meta name='description' content='Generic Page' />
    </Helmet>

    <div id='main' className='alt'>
      <section id='one'>
        <div className='inner'>
          <header className='major'>
            <h1>英会話</h1>
          </header>
          <span className='image main'><img src={pic11} alt='' /></span>
          <p>世界の人々が理解し合うために英語はますます必要になっていきます。外国語を習得する最良の方法は『言葉のリズム』にまず慣れることです。初歩の段階ではテキストの内容に沿った会話練習が多く、 実力が上るに連れテキストの内容を基本とした応用会話や自由会話の度合が増します。</p>
          <hr />
          <dl>
            <dt>イブニング・コース ＆ 土曜日英語コース</dt>
            <dd>
              <p>タ方の成人クラスです。長い実績を持ち、多くの人に親しまれているコースです。16 歳以上の方から受講できます。会話クラスに加えて、ビジネス会話クラスが好評です。初級から上級まで多段階のレベルがあり実力に合ったクラスに入学して頂きます。</p>
            </dd>
            <hr />
            <dt>デイ・コース</dt>
            <dd>
              <p>昼間の成人コースです。長い実績を誇るコースです。多くの主婦の方に親しまれているコースです。初級から上級まで多段階のレベルがあり実力に合ったクラスに入学して頂きます。内容はイブニング・コースと同様です</p>
            </dd>
            <hr />
            <dt>プライム・イングリシュ・コース （旧名称：アダルト・イングリッシュ・コース） </dt>
            <dd>
              <p>成人の年令別編成コースです。
ABC 発音復習から始める入門クラスから中級クラスまであります。
当校はシニアの英会話クラスを、他に先駆けて開講（１９７８年）し、予想を超え
る好評を得た実績があります。以来、伝統を誇っています。「壮年・高年者の英会話クラ
ス発祥の教室」として受講者の方に満足頂けるような親しみやすい教授法も豊かです。 </p>
            </dd>
          </dl>

        </div>
      </section>
    </div>

  </Layout>
)

export default Generic
