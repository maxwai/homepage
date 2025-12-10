import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBoxOpen,
    faCircleChevronRight,
    faCloudArrowDown,
    faCubes,
    faHouseSignal,
    faImages,
    faKitchenSet,
    faLeaf,
    faMale,
    faRectangleAd
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faGitlab,
    faYoutube,
    faWatchmanMonitoring
} from '@fortawesome/free-brands-svg-icons'
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
                        <a href="https://hub.docker.com/r/gitlab/gitlab-ce">
                            <FontAwesomeIcon icon={faGitlab}
                                             className={utilStyles.fontAwesomeAccentColour}
                                             size="lg"/>
                            Gitlab
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/nextcloud/server">
                            <FontAwesomeIcon icon={faCloudArrowDown}
                                             className={utilStyles.fontAwesomeAccentColour}/>
                            Nextcloud
                        </a>
                    </div>
                    <div>
                        <a href="https://docs.paperless-ngx.com/">
                            <FontAwesomeIcon icon={faLeaf}
                                             className={utilStyles.fontAwesomeAccentColour}
                                             size="lg"/>
                            Paperless
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/louislam/uptime-kuma">
                            <FontAwesomeIcon icon={faWatchmanMonitoring}
                                             className={utilStyles.fontAwesomeAccentColour}
                                             size="lg"/>
                            Uptime
                        </a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCubes}
                                         className={utilStyles.fontAwesomeAccentColour} size="lg"/>
                        RPM Repository
                    </div>
                    <div>
                        <a href="https://pi-hole.net/">
                            <FontAwesomeIcon icon={faRectangleAd}
                                             className={utilStyles.fontAwesomeAccentColour}
                                             size="lg"/>
                            PiHole
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/sysadminsmedia/homebox">
                            <FontAwesomeIcon icon={faBoxOpen}
                                             className={utilStyles.fontAwesomeAccentColour}/>
                            Homebox
                        </a>
                    </div>
                    <div>
                        <a href="https://www.home-assistant.io/">
                            <FontAwesomeIcon icon={faHouseSignal}
                                             className={utilStyles.fontAwesomeAccentColour}
                                             size="lg"/>
                            Home Assistant
                        </a>
                    </div>
                    <div>
                        <a href="https://immich.app/">
                            <FontAwesomeIcon icon={faImages}
                                             className={utilStyles.fontAwesomeAccentColour}
                                             size="lg"/>
                            Immich
                        </a>
                    </div>
                    <div></div>
                    <div>
                        <a href="https://github.com/TandoorRecipes/recipes">
                            <FontAwesomeIcon icon={faKitchenSet}
                                             className={utilStyles.fontAwesomeAccentColour}
                                             size="lg"/>
                            Tandoor
                        </a>
                    </div>
                </div>
                <h1>
                    <Link href="/projects" className={utilStyles.headerLinks}>
                        Personal Projects {' '}
                        <FontAwesomeIcon icon={faCircleChevronRight}
                                         className={utilStyles.fontAwesomeAccentColour}
                                         size="2xs"/>
                    </Link>
                </h1>
                <h1>
                    <Link href="/uni-projects" className={utilStyles.headerLinks}>
                        University Projects {' '}
                        <FontAwesomeIcon icon={faCircleChevronRight}
                                         className={utilStyles.fontAwesomeAccentColour}
                                         size="2xs"/>
                    </Link>
                </h1>
                <div style={{display: "grid", gridTemplateColumns: "45% 45%", columnGap: "10%"}}>
                    <div style={{textAlign: "end", width: "fit-content", justifySelf: "end"}}>
                        <h1 style={{marginTop: "0"}}>
                            <Link href="/cv" className={utilStyles.headerLinks}>
                                CV {' '}
                                <FontAwesomeIcon icon={faCircleChevronRight}
                                                 className={utilStyles.fontAwesomeAccentColour}
                                                 size="2xs"/>
                            </Link>
                        </h1>
                    </div>
                    <div style={{textAlign: "start", width: "fit-content", justifySelf: "start"}}>
                        <h1 style={{marginTop: "0"}}>
                            <Link href="/japan" className={utilStyles.headerLinks}>
                                Japan {' '}
                                <FontAwesomeIcon icon={faCircleChevronRight}
                                                 className={utilStyles.fontAwesomeAccentColour}
                                                 size="2xs"/>
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}
