import Head from 'next/head'
import Link from "next/link";
import {faArrowLeft, faLink} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Code} from '@atlaskit/code';
import utilStyles from "../../styles/utils.module.css";

export default function Projects() {
    return (
        <>
            <Head>
                <meta property="og:title" content="Maximilian Waidelich"/>
                <meta property="og:description" content="Personal Projects - Maximilian Waidelich"/>
                <title>Personal Projects - Maximilian Waidelich</title>
            </Head>
            <div className="floating-box long wide">
                <Link href="/">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    <span className="tooltip">Back</span>
                </Link>
                <h1>Personal Projects</h1>
                <>
                    Here is a list of my public personal software projects that I did that can be found on <a
                    href="https://github.com/maxwai">GitHub</a>. Most of these can also be found on <a
                    href="https://hub.docker.com/u/maxwai">Docker</a>.
                </>
                <>
                    <h2>
                        <a href="https://github.com/maxwai/homepage" className={utilStyles.headerLinks}>
                            Homepage (May 2022 - now) {' '}
                            <FontAwesomeIcon icon={faLink} className={utilStyles.fontAwesomeAccentColour} size="2xs"/>
                        </a>
                    </h2>
                    <>
                        I made this homepage using a template of a friend. I wrote it using next.js in Javascript then
                        exported it as a static html.<br/>
                        I use next.js instead of direct HTML and CSS (which would be possible) because it is easier to
                        develop with next.js because of the autocomplete and some helper packages.
                    </>
                </>
                <>
                    <h2>
                        <a href="https://github.com/maxwai/download-renamer-mover" className={utilStyles.headerLinks}>
                            Download Renamer & Mover (Jul 2021 - now) {' '}
                            <FontAwesomeIcon icon={faLink} className={utilStyles.fontAwesomeAccentColour} size="2xs"/>
                        </a>
                    </h2>
                    <>
                        Frequently downloading files, I needed an easy way to sort them on my server once
                        downloaded. <br/>
                        At the beginning, I used <a href="https://www.rename-expert.de/">Rename Expert</a> to rename and
                        move the files. This worked fine at the beginning but quickly became tedious. <br/>
                        As such, I made a programm that watched a folder for new files, renamed them according to a
                        regex pattern and moved them to the correct folder. Also you could manually add mappings (e.g.
                        translate file name X to file name Y and try to move again) via a discord bot where a log of
                        what is happening is also being posted. <br/>
                        At first written in Java, I later rewrote it in Rust as an exercise to learn Rust.
                    </>
                </>
                <>
                    <h2>
                        <a href="https://github.com/marcelropos/HM-DiscordBot" className={utilStyles.headerLinks}>
                            HM Discord Bot (Jul 2021 - now) {' '}
                            <FontAwesomeIcon icon={faLink} className={utilStyles.fontAwesomeAccentColour} size="2xs"/>
                        </a>
                    </h2>
                    <>
                        During my study at the University of Applied Science of Munich (HM), I helped a friend run a
                        discord server where students could get together. For this, a discord bot was built. I then
                        began maintaining the bot with my friend in my second year.<br/>
                        The bot is written in Python but is currently being rewritten in Rust for better performance and
                        a ground up redesign.
                    </>
                </>
                <>
                    <h2>
                        <a href="https://github.com/maxwai/local-rpm-repo-updater" className={utilStyles.headerLinks}>
                            RPM Repository (Dec 2022) {' '}
                            <FontAwesomeIcon icon={faLink} className={utilStyles.fontAwesomeAccentColour} size="2xs"/>
                        </a>
                    </h2>
                    <>
                        Sometimes software is only available as a direct rpm download link with no rpm repository.
                        This make updating a pain since you can't just do <Code>dnf update</Code> to update a package,
                        what should normally be the way on Linux. <br/>
                        Examples of such software includes Zoom and DBeaver. <br/>
                        As such, I made a shell script that checks these websites for new rpm packages, signs them and
                        creates a rpm repository. <br/>
                    </>
                </>
                <>
                    <h2>
                        <a href="https://github.com/maxwai/adlist-merger" className={utilStyles.headerLinks}>
                            PiHole Adlist Merger (May 2022 - Jan 2023) {' '}
                            <FontAwesomeIcon icon={faLink} className={utilStyles.fontAwesomeAccentColour} size="2xs"/>
                        </a>
                    </h2>
                    <>
                        Running a PiHole at home, I needed ad lists to be able to block ads and tracking links. As the
                        amount of links quickly became so much that updating the database took too long, I decided to
                        write a programm that takes all the ad list links and puts them together into one big list while
                        removing duplicates.
                    </>
                </>
                <>
                    <h2>
                        <a href="https://github.com/maxwai/skripte-server-backup" className={utilStyles.headerLinks}>
                            Script-Server Backup (Mar 2022) {' '}
                            <FontAwesomeIcon icon={faLink} className={utilStyles.fontAwesomeAccentColour} size="2xs"/>
                        </a>
                    </h2>
                    <>
                        At the university faculty, there is a server that has old exams so that students can look at
                        them to prepare for exams. This is done since not many professors give these old exams to
                        students. But since this server is not really approved by the university, there is the
                        possibility at any moment that the university decides to shut it down. As such, I made a
                        programm that periodically checks the server for changes and puts the new files into a git
                        repository to allow for history tracking.
                    </>
                </>
                <>
                    <h2>ATConnect</h2>
                    From June 2020 to June 2021 I managed with some friends a virtual ATC Group for Microsoft Flight
                    Simulator 2020. For that I started working on two project that weren't finished when I left the
                    group. As such, these projects are not complete.
                    <ul>
                        <li>
                            <>
                                <h3>
                                    <a href="https://github.com/maxwai/ATConnect_Bot"
                                       className={utilStyles.headerLinks}>
                                        Discord Bot (Jan 2021 - Jun 2021) {' '}
                                        <FontAwesomeIcon icon={faLink} className={utilStyles.fontAwesomeAccentColour}
                                                         size="xs"/>
                                    </a>
                                </h3>
                                <>
                                    We wanted a discord bot on our server to make event planing and similar easier. I
                                    started building it and got pretty far before the end of the project.
                                </>
                            </>
                        </li>
                        <li>
                            <>
                                <h3>
                                    <a href="https://github.com/maxwai/kmlToEuroscope"
                                       className={utilStyles.headerLinks}>
                                        .kml to Euroscope Parser (Sep 2020 - Aug 2021) {' '}
                                        <FontAwesomeIcon icon={faLink} className={utilStyles.fontAwesomeAccentColour}
                                                         size="xs"/>
                                    </a>
                                </h3>
                                <>
                                    We also needed an easier way to convert .kml files (files got from Google Earth)
                                    into files that can be used by Euroscope, a virtual ATC software. <br/>
                                    I managed to finish the .kml to .ese parser but didn't start on the .kml to .sct
                                    parser.
                                </>
                            </>
                        </li>
                    </ul>
                </>
                <>
                    <h2>
                        <a href="https://github.com/maxwai/Python-speedtest" className={utilStyles.headerLinks}>
                            Python Internet Speedtest (Apr 2019) {' '}
                            <FontAwesomeIcon icon={faLink} className={utilStyles.fontAwesomeAccentColour} size="2xs"/>
                        </a>
                    </h2>
                    <>
                        At that time our internet connection was very unstable. To be able to prove this to our ISP, we
                        needed a dataset of internet speed that would show that. <br/>
                        As such, I made a python script that would periodically check the internet speed and put it in a
                        log for later use.
                    </>
                </>
            </div>
        </>
    );
}