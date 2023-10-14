import Head from 'next/head'
import Link from "next/link";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as emoji from 'node-emoji'

export default function Me() {
    return (
        <>
            <Head>
                <meta property="og:title" content="Maximilian Waidelich"/>
                <meta property="og:description" content="Me - Maximilian Waidelich"/>
                <title>Me - Maximilian Waidelich</title>
            </Head>
            <div className="floating-box">
                <Link href="/">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    <span className="tooltip">Back</span>
                </Link>
                <h2>About Me</h2>
                <>
                    Hello, I'm Maximilian Waidelich,<br/>
                    a half{' '}
                    <a>German<span className="tooltip">「&#127866;」</span></a>
                    , half{' '}
                    <a>French<span className="tooltip">「&#129366;」</span></a>
                    {' '}computer science student from{' '}
                    <a>Munich<span className="tooltip">「&#129384;」</span></a>
                    , Germany.<br/>
                    I was born in December of 1999 in Munich, Bavaria.<br/>
                </>
                <h3>Things I Do</h3>
                <ul>
                    <li>
                        Coding - still{' '}
                        <a href="https://github.com/maxwai">learning</a>
                    </li>
                    <li>
                        Gaming - simulation, sandBox, indie, building
                    </li>
                    <li>
                        Learning{' '}
                        <a>日本語<span className="tooltip">「Japanese」</span></a>
                        {' '}- slooowly, but steadily
                    </li>
                </ul>
                <h3>Things I Like</h3>
                <ul>
                    <li>Filming:{' '}
                        <a href="https://www.youtube.com/channel/UCoXvICIefTuB_FiD4uvsvmQ">
                            <FontAwesomeIcon icon={faYoutube} size="lg"/>
                        </a>
                    </li>
                    <li>Drones</li>
                    <li>Films and Series</li>
                    <li><a>アニメとマンガ<span className="tooltip">「Anime & Manga」</span></a></li>
                    <li><a>Japan<span className="tooltip">「{emoji.get("jp")}」</span> </a></li>
                </ul>
            </div>
        </>
    );
}