import '../styles/global.css'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import utilStyles from "../styles/utils.module.css";

config.autoAddCss = false

export default function App({Component, pageProps}) {
    return (
        <div className={utilStyles.overlay}>
            <Component {...pageProps} />
        </div>
    );
}
