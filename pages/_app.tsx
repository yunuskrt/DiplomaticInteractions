import type { AppProps } from 'next/app'
import '../public/globals.css'

import 'semantic-ui-css/semantic.min.css'
import Layout from '@components/layout'

function MyApp({ Component, pageProps }: AppProps) {
	return <Layout app={<Component {...pageProps} />} />
}

export default MyApp
