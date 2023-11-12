import Head from 'next/head'
import Link from "next/link";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import profilePic from "../../public/images/profile_picture.jpg"
import utilStyles from "../../styles/utils.module.css";

export default function Me() {
    return (
        <>
            <Head>
                <meta property="og:title" content="Maximilian Waidelich"/>
                <meta property="og:description" content="CV - Maximilian Waidelich"/>
                <title>CV - Maximilian Waidelich</title>
            </Head>
            <div className="floating-box">
                <Link href="/">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    <span className="tooltip">Back</span>
                </Link>
                <h1>CV</h1>
                <div className={utilStyles.profilePic}>
                    <Image src={profilePic} alt="Profile Picture" fill/>
                </div>
                <div style={{display: "inline-block", verticalAlign: "middle"}}>
                    <h2 className={utilStyles.cvH2}>Maximilian Waidelich</h2>
                    <table className={utilStyles.cvTable}>
                        <tbody>
                        <tr>
                            <td>Birthplace:</td>
                            <td>Munich</td>
                        </tr>
                        <tr>
                            <td>Birth year:</td>
                            <td>1999</td>
                        </tr>
                        <tr>
                            <td>Nationality:</td>
                            <td>German, French</td>
                        </tr>
                        <tr>
                            <td>Languages:</td>
                            <td>
                                C1/C2: German, French, English <br/>
                                Beginner: Japanese
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <>
                    <h2>Education</h2>
                    B.Sc. Informatik at <a>
                    TUM <span className="tooltip">Technical University of Munich</span> </a> (not finished)
                    (2017 - 2019) <br/>
                    B.Sc. Informatik at the University of Applied Science Munich (2020 - now)
                </>
                <>
                    <h2>Diplomas</h2>
                    2017: French "Baccalauréat" with grade "good" (15.02/20 Pt.)
                </>
                <>
                    <h2>Experience</h2>
                    <h3>MicroFuzzy GmbH (February - June 2017)</h3>
                    Elektronik and network setup of new workplace tables
                    <h3>Parfun Co., Ltd. (September 2022 - January 2023)</h3>
                    Internship in Japan as part of studies.
                    <ul>
                        <li>Development of a modern Wordpress website</li>
                        <li>Development of an Android App with an AWS Backend</li>
                    </ul>
                    <h3>Teiimo GmbH (March 2020 - January 2024)</h3>
                    Working student position
                    <ul>
                        <li>Development of Android applications</li>
                        <li>Server management</li>
                        <li>Development of binary parser in Python and C++</li>
                        <li>Design of new internal processes for software development</li>
                    </ul>
                </>
                <>
                    <h2>Certificates</h2>
                    C1 Cambridge English Certificate (February 2020)
                </>
                <>
                    <h2>Hobbies</h2>
                    Piano <br/>
                    Tennis <br/>
                    Drones
                </>
                <div className={utilStyles.timeStamp}>
                    from 2023.11.12
                </div>
            </div>
        </>
    );
}