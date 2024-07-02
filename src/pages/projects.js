import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const projects = () => {
  return (
    <>
    <Head>
                <title>Projects Page</title>
                <meta name="description" content="any description"></meta>
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text={'Imagination Trumps Knowledge!'} />
                    <div className='grid grid-cols-12 gap-24'></div>
                </Layout>
            </main>
    </>
  )
}

export default projects