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
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className='major'>
                <h3>先生たちからのワンポイントアドバイス</h3>
                <p>先生をご紹介します。</p>
              </header>
              <Link to='/teachers' className='link primary' />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className='major'>
                <h3>英語</h3>
                <p>英語は世界をつなげます。</p>
              </header>
              <Link to='/generic' className='link primary' />
            </article>
          </section>
          <section id='two' className='tiles' id='french'>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className='major'>
                <h3>フランス語</h3>
                <p>フランス語は美しく話すことばです。</p>
              </header>
              <Link to='/landing' className='link primary' />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className='major'>
                <h3>Ipsum</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to='/landing' className='link primary' />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className='major'>
                <h3>Consequat</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to='/landing' className='link primary' />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className='major'>
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to='/landing' className='link primary' />
            </article>
          </section>
          <section className='tiles'>
            <div className='inner'>
              <header className='major'>
                <h2>Massa libero</h2>
              </header>
              <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
              <ul className='actions'>
                <li><Link to='/landing' className='button next'>Get Started</Link></li>
              </ul>
            </div>
          </section>
        </div>

      </Layout>
    )
  }
}

export default HomeIndex
