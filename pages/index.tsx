import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => { 
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
