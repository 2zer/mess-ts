import Link from 'next/link'
import Layout from '../components/Layout'
// @ts-ignore
import config from '../config/config'

const MainPage = () => {
    return (
        <Layout title={"Main - " + config.club.name.toUpperCase()}>
            <Link href='/'>go on the index page</Link>
        </Layout>
    )
}

export default MainPage