import 'server-only'

import Head from 'next/head'
import { CURRENT_THEME, TITLE_NAME } from '../../globals'
import './globals.css'
import { Providers } from './globalRedux/provider'
import Nav from '../components/nav'
import MainBody from './mainBody'
import Footer from '../components/footer'

export const metadata = {
  title: TITLE_NAME,
  description: 'My guide to life, the universe and everything.',  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href='./iconN.png' ref='icon'></link>
      </Head>
      <MainBody>
        <Providers>
          <Nav/>
          {children}
          <Footer/>
        </Providers>
      </MainBody>
    </html>
  )
}
