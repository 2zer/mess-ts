import Link from 'next/link'
import Layout from '../components/Layout'
// @ts-ignore
import config from '../config/config'

const IndexPage = () => {
    return (
        <Layout title={"Bienvenue - " + config.club.name.toUpperCase()}>
            <Link href='/main'>go on the main page</Link>
        </Layout>
    )
}

export default IndexPage