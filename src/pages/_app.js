import '@/styles/globals.css'
import dynamic from 'next/dynamic'
// import Layout from 'components/Layout'

const Layout = dynamic( () => import('components/Layout'),{
  ssr: false,
})

export default function App({ Component, pageProps }) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  )
}
