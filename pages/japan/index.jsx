import Head from 'next/head'
import Link from "next/link";

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {Miyagi} from "./prefectures/Miyagi";
import {Yamagata} from "./prefectures/Yamagata";
import {Nara} from "./prefectures/Nara";
import {Shiga} from "./prefectures/Shiga";
import {Yamanashi} from "./prefectures/Yamanashi";
import {Saitama} from "./prefectures/Saitama";
import {Gunma} from "./prefectures/Gunma";
import {Tochigi} from "./prefectures/Tochigi";
import {Gifu} from "./prefectures/Gifu";
import {Miyazaki} from "./prefectures/Miyazaki";
import {Kochi} from "./prefectures/Kochi";
import {Fukui} from "./prefectures/Fukui";
import {Toyama} from "./prefectures/Toyama";
import {Ishikawa} from "./prefectures/Ishikawa";
import {Nagano} from "./prefectures/Nagano";
import {Aomori} from "./prefectures/Aomori";
import {Kyoto} from "./prefectures/Kyoto";
import {Shizuoka} from "./prefectures/Shizuoka";
import {Kanagawa} from "./prefectures/Kanagawa";
import {Mie} from "./prefectures/Mie";
import {Aichi} from "./prefectures/Aichi";
import {Tottori} from "./prefectures/Tottori";
import {Chiba} from "./prefectures/Chiba";
import {Fukushima} from "./prefectures/Fukushima";
import {Ibaraki} from "./prefectures/Ibaraki";
import {Iwate} from "./prefectures/Iwate";
import {Osaka} from "./prefectures/Osaka";
import {Nagasaki} from "./prefectures/Nagasaki";
import {Saga} from "./prefectures/Saga";
import {Okinawa} from "./prefectures/Okinawa";
import {Fukuoka} from "./prefectures/Fukuoka";
import {Kumamote} from "./prefectures/Kumamote";
import {Kagoshima} from "./prefectures/Kagoshima";
import {Oita} from "./prefectures/Oita";
import {Yamaguchi} from "./prefectures/Yamaguchi";
import {Shimane} from "./prefectures/Shimane";
import {Hiroshima} from "./prefectures/Hiroshima";
import {Ehime} from "./prefectures/Ehime";
import {Okayama} from "./prefectures/Okayama";
import {Kagawa} from "./prefectures/Kagawa";
import {Tokushima} from "./prefectures/Tokushima";
import {Hyogo} from "./prefectures/Hyogo";
import {Wakayama} from "./prefectures/Wakayama";
import {Niigata} from "./prefectures/Niigata";
import {Akita} from "./prefectures/Akita";
import {Tokyo} from "./prefectures/Tokyo";
import {Hokkaido} from "./prefectures/Hokkaido";

import AichiImage from "../../public/images/japan/Aichi.jpg";
import FukuokaImage from "../../public/images/japan/Fukuoka.jpg";
import FukushimaImage from "../../public/images/japan/Fukushima.jpg";
import GunmaImage from "../../public/images/japan/Gunma.jpg";
import HiroshimaImage from "../../public/images/japan/Hiroshima.jpg";
import HokkaidoImage from "../../public/images/japan/Hokkaido.jpg";
import HyogoImage from "../../public/images/japan/Hyogo.jpg";
import KanagawaImage from "../../public/images/japan/Kanagawa.jpg";
import KyotoImage from "../../public/images/japan/Kyoto.jpg";
import MiyagiImage from "../../public/images/japan/Miyagi.jpg";
import NaganoImage from "../../public/images/japan/Nagano.jpg";
import NaraImage from "../../public/images/japan/Nara.jpg";
import OitaImage from "../../public/images/japan/Oita.jpg";
import OsakaImage from "../../public/images/japan/Osaka.jpg";
import SaitamaImage from "../../public/images/japan/Saitama.jpg";
import ShizuokaImage from "../../public/images/japan/Shizuoka.jpg";
import TochigiImage from "../../public/images/japan/Tochigi.jpg";
import TokyoImage from "../../public/images/japan/Tokyo.jpg";
import WakayamaImage from "../../public/images/japan/Wakayama.jpg";
import YamanashiImage from "../../public/images/japan/Yamanashi.jpg";

export default function Japan() {
    return (
        <>
            <Head>
                <meta property="og:title" content="Maximilian Waidelich"/>
                <meta property="og:description" content="Japan - Maximilian Waidelich"/>
                <title>Japan - Maximilian Waidelich</title>
            </Head>
            <div className="floating-box">
                <Link href="/">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    <span className="tooltip">Back</span>
                </Link>
                <h1>Japan</h1>
                <>
                    This is a map of Japan showing all the beautiful prefectures, kindly provided
                    by <a href="https://mapchart.net">mapchart.net</a>. Each prefecture that I have
                    visited is shown in green. Feel free to hover over the map to see my favourite
                    photo I took there (so far)!
                    <br/>
                    The hover function is currently broken on mobile.
                    <br/>
                    Thanks to <a href="https://marcothms.de/">Marco Thomas</a> for the template.
                </>
                <svg id="svg-map" viewBox="85 40 450 510">
                    <Aichi image={AichiImage.src}/>
                    <Akita/>
                    <Aomori/>
                    <Chiba/>
                    <Ehime/>
                    <Fukui/>
                    <Fukuoka image={FukuokaImage.src}/>
                    <Fukushima image={FukushimaImage.src}/>
                    <Gifu/>
                    <Gunma image={GunmaImage.src}/>
                    <Hiroshima image={HiroshimaImage.src}/>
                    <Hokkaido image={HokkaidoImage.src}/>
                    <Hyogo image={HyogoImage.src}/>
                    <Ibaraki/>
                    <Ishikawa/>
                    <Iwate/>
                    <Kagawa/>
                    <Kagoshima/>
                    <Kanagawa image={KanagawaImage.src}/>
                    <Kochi/>
                    <Kumamote/>
                    <Kyoto image={KyotoImage.src}/>
                    <Mie/>
                    <Miyagi image={MiyagiImage.src}/>
                    <Miyazaki/>
                    <Nagano image={NaganoImage.src}/>
                    <Nagasaki/>
                    <Nara image={NaraImage.src}/>
                    <Niigata/>
                    <Oita image={OitaImage.src}/>
                    <Okayama/>
                    <Okinawa/>
                    <Osaka image={OsakaImage.src}/>
                    <Saga/>
                    <Saitama image={SaitamaImage.src}/>
                    <Shiga/>
                    <Shimane/>
                    <Shizuoka image={ShizuokaImage.src}/>
                    <Tochigi image={TochigiImage.src}/>
                    <Tokushima/>
                    <Tokyo image={TokyoImage.src}/>
                    <Tottori/>
                    <Toyama/>
                    <Wakayama image={WakayamaImage.src}/>
                    <Yamagata/>
                    <Yamaguchi/>
                    <Yamanashi image={YamanashiImage.src}/>
                </svg>

                <div id="map-tooltip" style={{left: "1738px", top: "434px", display: "none"}}>
                    <div>
                        <h4>Hokkaido</h4>
                        <p>Not yet visited :c</p>
                    </div>
                </div>
            </div>
        </>
    );
}
