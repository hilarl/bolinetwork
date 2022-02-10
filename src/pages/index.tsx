import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Image from 'next/image'

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-gray-800'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Image
              src="/images/logo.svg"
              alt="Picture of the author"
              width={60}
              height={80}
            />
            <h1 className='mt-12 text-cyan-400 text-3xl md:text-6xl mb-6'>
              An unbiased digital economy.
            </h1>
            <p className='mt-2 text-md text-white text-lg md:text-2xl'>
              Boli is a decentralized economy that allows entrepreneurs, creators and organizations to launch their business in the blockchain within minutes — no technical knowledge required. It comes with its own Blockchain, lets you create custom Digital Assets and Tokens.
            </p>
          </div>
        </section>
        <section className="p-6 md:p-0 mt-10 md:mt-20 container mx-lg mx-auto layout flex min-h-screen flex-col items-center justify-center">
          <div className="md:flex">
            <div className="flex-initial mr-20">
              <Image
                src="/images/orgs.jpg"
                alt="Picture of the author"
                width={400}
                height={600}
              />
            </div>
            <div className="flex-initial">
              <h1 className="text-blue-600 text-3xl mt-10 md:mt-0 md:text-6xl">Decentralized Organizations.</h1>
              <p className="text-xl md:text-2xl mt-2 text-blue-600">Launch your business in the blockchain within minutes. </p>
              <ul className="text-md md:text-2xl mt-6 md:mt-12">
                <li>Interoperable and Autonomous Blockchains</li>
                <li>Decentralized Network Governance</li>
                <li>Self-Sovereign Identities</li>
                <li>Branded Tokens</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="p-6 md:p-0 container  mx-lg layout flex md:min-h-screen flex-col items-center justify-center">
          <div className="md:flex md:flex-row-reverse">
            <div className="flex-initial ml-20 items-center">
              <Image
                src="/images/nft.jpg"
                alt="Picture of the author"
                width={800}
                height={600}
              />
            </div>
            <div className="flex-initial">
              <h1 className="text-purple-600 text-3xl mt-10 md:mt-0 md:text-6xl">Digital Assets.</h1>
              <p className="text-xl md:text-2xl mt-2 text-purple-600">Tokenize real-world assets. </p>
              <ul className="text-md md:text-2xl mt-6 md:mt-12">
                <li>Commissioned Digital Assets</li>
                <li>Proof of Ownership</li>
                <li>Fractional Ownership</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="p-6 md:p-0 container mx-lg layout flex md:min-h-screen flex-col items-center justify-center">
          <div className="md:flex">
            <div className="flex-initial mr-12">
              <Image
                src="/images/contract.jpg"
                alt="Picture of the author"
                width={900}
                height={600}
              />
            </div>
            <div className="flex-initial">
              <h1 className="text-orange-400 text-3xl mt-10 md:mt-0 md:text-6xl">Smart Contracts.</h1>
              <p className="text-xl md:text-2xl mt-2 text-orange-400">Create transactions in blockchains. </p>
              <ul className="text-md md:text-2xl mt-6 md:mt-12">
                <li>Self Executing Contracts</li>
                <li>Crowdfunding</li>
                <li>Carbon Bonds</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="container bg-gray-800 p-12 pb-24 pt-24 md:p-32 mt-16 md:mt-12">
          <div className="md:flex">
            <div className="flex-initial">
              <h3 className="text-cyan-400 mb-4">Boli Network’s Native Token is</h3>
              <h1 className="text-4xl md:text-6xl text-white mb-4">KOKAA’ Boli</h1>
              <p className="text-md md:text-lg md:mr-32 text-white">Boli Network is powered by its native KOKAA’  Boli cryptocurrency. KOKAA tokens are used to pay transaction fees, enable our users to receive rewards through staking, and let them vote on proposals for the development of the ecosystem, with their staked KOKAA tokens.</p>
            </div>
            <div className="flex-initial p-20 md:p-0">
              <Image
                src="/images/kokaa.png"
                alt="Picture of the author"
                width={665}
                height={690}
              />
            </div>
          </div>
          <div className="md:flex md:mt-24">
            <div className="flex-initial mb-14 md:mb-0">
              <h1 className="mb-3 text-white text-2xl">Boli Hub</h1>
              <p className="text-white">Boli Hub is the main Blockchain that powers the Boli ecosystem. Secondary Blockchains within the ecosystem connects to Boli Hub and it acts as the intermediary between these Blockchains.</p>
            </div>
            <div className="flex-initial">
              <h1 className="mb-3 text-white text-2xl">Boli Nodes</h1>
              <p className="text-white">Boli Nodes are indepedent Blockchains within the Boli Network. Boli Nodes form Communities and other independent networks within the ecosystem.</p>
            </div>
          </div>
        </section>
        <div className="text-center bg-gray-900">
          <footer className='text-white text-center p-10'>
            © {new Date().getFullYear()} {' '}
            Boli Association
          </footer>
        </div>
      </main>
    </Layout>
  );
}
