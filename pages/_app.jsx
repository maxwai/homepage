import '../styles/global.css'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import utilStyles from "../styles/utils.module.css";
import {Roboto} from 'next/font/google'

config.autoAddCss = false

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ["latin"],
})

export default function App({Component, pageProps}) {
    return (
        <main className={roboto.className}>
            <div className={utilStyles.overlay}>
                <Component {...pageProps} />
            </div>
        </main>
    );
}
