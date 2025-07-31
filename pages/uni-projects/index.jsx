import Head from 'next/head'
import Link from "next/link";
import {faArrowLeft, faLink} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import utilStyles from "../../styles/utils.module.css";
import utilStylesCode from "../../styles/code.module.css";
import CodeBlock from "../../components/CodeBlock"

const miniJavaCodeBlock = `Program (
    declarations: [
        Declaration (
            type: Type ("int"),
            name: Name ("x")
        )
    ],
    statements: [
        AssignmentStatement (
            name: Name("x"),
            expression: NumberExpression(5)
        )
    ]
)`

export default function UniProjects() {
    return (
        <>
            <Head>
                <meta property="og:title" content="Maximilian Waidelich"/>
                <meta property="og:description"
                      content="University Projects - Maximilian Waidelich"/>
                <title>University Projects - Maximilian Waidelich</title>
            </Head>
            <div className="floating-box long wide">
                <Link href="/">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    <span className="tooltip">Back</span>
                </Link>
                <h1>University Projects</h1>
                <>
                    Here is a list some of my university software projects that I did. The source
                    code to those is not public.<br/>
                    <br/>
                    TUM: Technical University of Munich <br/>
                    HM: University of Applied Science Munich
                </>
                <>
                    <h2>Puzzle solving with a robot (2025, 2nd semester M.Sc. HM)</h2>
                    <>
                        In our robotics project lecture, we got the task to create a system that
                        first scans pieces of a puzzle, then calculates a solution for that puzzle
                        to finally 3D animate a robot arm moving the pieces to make a solved puzzle.
                    </>
                </>
                <>
                    <h2>BayCalc 2.0 (2025, 2nd semester M.Sc. HM)</h2>
                    <>
                        In our software engineering project lecture, we virtually worked for the
                        fictional <a href="https://www.co-inno-lab.org/">CIL Consulting</a> company
                        and there we worked on a real consulting project for <a
                        href="https://www.bayzen.de/">BayZeN</a>.<br/>
                        The project was to create a website where universities in Bavaria can upload
                        their GreenHouseHas (GHG) reports, analyze them, and, if wanted, make them
                        public for anyone to see the data.<br/>
                        Our team was composed of computer science and business administration
                        students. The B.A. students researched what the users and client really want
                        from the website. Meanwhile we C.S. students first looked at the state of
                        the project from the previous group and then decided on starting from
                        scratch after seeing the big technical debt and non-existent
                        documentation.<br/>
                        At the end of the semester we managed to build a working system using Rust
                        as a backend, Next.js as a frontend and Metabase for an easy way to create
                        graphs. It was then deployed using Docker containers in Kubernetes. We also
                        did a full ARC42 documentation for the project so that future groups can
                        easily work on the project.
                    </>
                </>
                <>

                    <h2>
                        <a href="https://github.com/maxwai/skb" className={utilStyles.headerLinks}>
                            Federated backup system (2024, 8th semester B.Sc. HM) {' '}
                            <FontAwesomeIcon icon={faLink}
                                             className={utilStyles.fontAwesomeAccentColour}
                                             size="2xs"/>
                        </a>
                    </h2>
                    <>
                        For the federated systems lecture, we needed to either expand an existing
                        federated system like Mastodon or create out own from scratch.<br/>
                        We decided to create a federated backup system from scratch. We named our
                        system "Sicherungskammer Bayern" (or SKB), making reference to
                        "Versicherungskammer Bayern", a german insurance company. <br/>
                        We designed our own REST-API for the different interfaces and also build a
                        CLI client in Rust. The server was build using Java and the quarkus library.<br/>
                        After finishing our assignment, we put our code on GitHub so that students
                        in the next year may expand our project since we didn't finish everything we
                        planned.
                    </>
                </>
                <>
                    <h2>re:quest by re:edu (2022, 4th semester B.Sc. HM)</h2>
                    <>
                        In our software architecture lecture, we partnered with <a
                        href="https://reedu.de/">re:edu</a> to create a website where virtual escape
                        games can be made for the participants to learn things. The idea was that
                        museums can create "quests" so that young visitors are encouraged to learn
                        about the expositions. At the same time, a focus was made to also convey
                        computer science skills while solving the quests. <br/>
                        Our part in the project consisted in building the website and the backend in
                        AWS and find a good architecture so that any museum can make its own escape
                        game.
                    </>
                </>
                <>
                    <h2>Mills (Nine men's morris) in Java with a SenseHat (2021, 2nd semester B.Sc.
                        HM)</h2>
                    <>
                        In CS2 we had to program a table-top game of our choice in Java in such a
                        way that it is playable on a SenseHat, an 8x8 LED Matrix.<br/>
                        In our group we chose the game Mills.<br/>
                        In the end, we went further then necessary and also added a bot which the
                        player (or another bot) could play against. Required was only a dumb bot
                        that makes moves at random but we also added a bot that used the
                        Min-Max-Algorithm with Alpha-Beta-Pruning to make it intelligent. We also
                        did machine learning training to have better scoring parameters to use
                        during the normal bot operation. <br/>
                        We also did a short comedy video of our process to show at the end of the
                        course and put it on <a href="https://youtu.be/zpHMkIdIgO8">Youtube</a>
                    </>
                </>
                <>
                    <h2>"Mini"-Java Parser and Assembler Interpreter (2017, 1st semester B.Sc.
                        TUM)</h2>
                    <>
                        In my first year the TUM, we had a project where we slowly build a big
                        program that could take in a "Mini"-Java (reduced Java) program and
                        translate it into assembler and then execute this assembler code
                        virtually. <br/>
                        The program consisted of multiple parts:
                        <ul>
                            <li>
                                A parser that takes in a string containing a "Mini"-Java program and
                                gives the program in Java objects. <br/>
                                For example: <div className={utilStylesCode.codeInline}>int x; x =
                                5;</div> would be translated into: <br/>
                                <br/>
                                <CodeBlock content={miniJavaCodeBlock}/>
                            </li>
                            <li>
                                A parser that takes that Java object and creates an assembler
                                program string.
                            </li>
                            <li>
                                An interpreter that takes an assembler program string and executes
                                it using a virtual stack-machine. The stack-machine was also part of
                                the program.
                            </li>
                        </ul>
                    </>
                </>
            </div>
        </>
    );
}
