import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloudArrowDown, faLeaf, faServer, faMale, faMap, faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faGitlab, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <meta property="og:title" content="Maximilian Waidelich"/>
                <meta property="og:description" content="Welcome"/>
                <title>Maximilian Waidelich</title>
            </Head>
            <div className="floating-box center">
                <h1>Maximilian Waidelich</h1>
                <div className="nav">
                    <a href="https://github.com/maxwai" className={utilStyles.topLevelLinks}>
                        <FontAwesomeIcon icon={faGithub}/>
                        <span className="tooltip">「GitHub」</span>
                    </a>
                    <Link href="/me">
                        <a className={utilStyles.topLevelLinks}>
                            <FontAwesomeIcon icon={faMale}/>
                            <span className="tooltip">「Me」</span>
                        </a>
                    </Link>
                    <a href="https://www.youtube.com/channel/UCoXvICIefTuB_FiD4uvsvmQ"
                       className={utilStyles.topLevelLinks}>
                        <FontAwesomeIcon icon={faYoutube}/>
                        <span className="tooltip">「Youtube」</span>
                    </a>
                </div>
                <h2>Self hosted Services:</h2>
                <div className={utilStyles.links}>
                    <a href="https://gitlab.lochhamer123.de">
                        <FontAwesomeIcon icon={faGitlab} className={utilStyles.fontAwesomeAccentColour} size="lg"/>
                        Gitlab
                    </a>
                </div>
                <div className={utilStyles.links}>
                    <a href="https://nextcloud.lochhamer123.de">
                        <FontAwesomeIcon icon={faCloudArrowDown} className={utilStyles.fontAwesomeAccentColour}/>
                        Nextcloud
                    </a>
                </div>
                <div className={utilStyles.links}>
                    <a href="https://paperless.lochhamer123.de/">
                        <FontAwesomeIcon icon={faLeaf} className={utilStyles.fontAwesomeAccentColour} size="lg"/>
                        Paperless
                    </a>
                </div>
                {/*<div class={utilStyles.links}>
                    <a href="https://map.lochhamer123.de">
                        <FontAwesomeIcon icon={faMap} className={utilStyles.fontAwesomeAccentColour}/>
                        Minecraft Dynmap
                    </a>
                </div>deactivated since not used*/}
                <div className={utilStyles.links}>
                    <a href="https://uptime.lochhamer123.de/status">
                        <FontAwesomeIcon icon={faServer} className={utilStyles.fontAwesomeAccentColour} size="lg"/>
                        Uptime
                    </a>
                </div>
                <div className={utilStyles.links}>
                    <a href="https://github.com/maxwai/homepage">
                        <FontAwesomeIcon icon={faGlobe} className={utilStyles.fontAwesomeAccentColour} size="lg"/>
                        Code for this Website
                    </a>
                </div>
            </div>
            <iframe className={utilStyles.MapsIframe}
                    src="https://www.google.com/maps/d/embed?mid=1PYvlXwIXQChIU3Fsy3WMzXkQ4zpshhEk&ehbc=2E312F">
            </iframe>
        </>
    );
}
