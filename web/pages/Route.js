import { useEffect } from 'react'
import { withRouter } from 'next/router'
import * as gtag from '../lib/gtag'

const Route = ({ router, Component, pageProps }) => {
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])
    return (
        <Component {...pageProps} />
    )
}

export default withRouter(Route)