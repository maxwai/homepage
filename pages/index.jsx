import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCloudArrowDown,
    faLeaf,
    faServer,
    faMale,
    faCubes,
    faRectangleAd,
    faCircleChevronRight
} from '@fortawesome/free-solid-svg-icons'
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
                    <Link href="/me" className={utilStyles.topLevelLinks}>
                        <FontAwesomeIcon icon={faMale}/>
                        <span className="tooltip">「Me」</span>
                    </Link>
                    <a href="https://youtube.com/@maximilianwaidelich"
                       className={utilStyles.topLevelLinks}>
                        <FontAwesomeIcon icon={faYoutube}/>
                        <span className="tooltip">「Youtube」</span>
                    </a>
                </div>
                <h2>Self hosted services:</h2>
                <p className={utilStyles.leftAligned}>
                    I host a lot of services for myself via docker on a server at home. <br
                    className={utilStyles.desktopBreak}/>
                    These services include, but are not limited to:
                </p>
                <div className={utilStyles.hostedServices}>
                    <div>
                        <FontAwesomeIcon icon={faGitlab} className={utilStyles.fontAwesomeAccentColour} size="lg"/>
                        Gitlab
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCloudArrowDown} className={utilStyles.fontAwesomeAccentColour}/>
                        Nextcloud
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLeaf} className={utilStyles.fontAwesomeAccentColour} size="lg"/>
                        Paperless
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faServer} className={utilStyles.fontAwesomeAccentColour} size="lg"/>
                        Uptime
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCubes} className={utilStyles.fontAwesomeAccentColour} size="lg"/>
                        RPM Repository
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faRectangleAd} className={utilStyles.fontAwesomeAccentColour} size="lg"/>
                        PiHole
                    </div>
                </div>
                <h1>
                    <Link href="/projects" className={utilStyles.headerLinks}>
                        Personal Projects {' '}
                        <FontAwesomeIcon icon={faCircleChevronRight} className={utilStyles.fontAwesomeAccentColour}
                                         size="2xs"/>
                    </Link>
                </h1>
                <h1>
                    <Link href="/uni-projects" className={utilStyles.headerLinks}>
                        University Projects {' '}
                        <FontAwesomeIcon icon={faCircleChevronRight} className={utilStyles.fontAwesomeAccentColour}
                                         size="2xs"/>
                    </Link>
                </h1>
                <h1>
                    <Link href="/cv" className={utilStyles.headerLinks}>
                        CV {' '}
                        <FontAwesomeIcon icon={faCircleChevronRight} className={utilStyles.fontAwesomeAccentColour}
                                         size="2xs"/>
                    </Link>
                </h1>
            </div>
            <iframe className={utilStyles.MapsIframe}
                    src="https://www.google.com/maps/d/embed?mid=1PYvlXwIXQChIU3Fsy3WMzXkQ4zpshhEk&ehbc=2E312F">
            </iframe>
        </>
    );
}
