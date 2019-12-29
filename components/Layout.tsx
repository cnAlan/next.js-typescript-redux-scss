import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import '../styles/common.scss'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>我的</a>
        </Link>
        <Link href="/users">
          <a>登录</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <span>Design by Alan</span>
    </footer>
  </div>
)

export default Layout
