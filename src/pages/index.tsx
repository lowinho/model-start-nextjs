import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Image from '../assets/image.svg'
import { YourContainer } from './styles'

const Home: React.FC = () => {
  return (
    <YourContainer>
      <Head>
        <title>Homepage</title>
      </Head>

      <Image className="teste" />
      <Link href="/teste">
        <a>Go to test</a>
      </Link>
    </YourContainer>
  )
}

export default Home
