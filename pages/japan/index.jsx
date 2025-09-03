import Head from 'next/head'
import Link from "next/link";

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {Miyagi} from "../../components/prefectures/Miyagi";
import {Yamagata} from "../../components/prefectures/Yamagata";
import {Nara} from "../../components/prefectures/Nara";
import {Shiga} from "../../components/prefectures/Shiga";
import {Yamanashi} from "../../components/prefectures/Yamanashi";
import {Saitama} from "../../components/prefectures/Saitama";
import {Gunma} from "../../components/prefectures/Gunma";
import {Tochigi} from "../../components/prefectures/Tochigi";
import {Gifu} from "../../components/prefectures/Gifu";
import {Miyazaki} from "../../components/prefectures/Miyazaki";
import {Kochi} from "../../components/prefectures/Kochi";
import {Fukui} from "../../components/prefectures/Fukui";
import {Toyama} from "../../components/prefectures/Toyama";
import {Ishikawa} from "../../components/prefectures/Ishikawa";
import {Nagano} from "../../components/prefectures/Nagano";
import {Aomori} from "../../components/prefectures/Aomori";
import {Kyoto} from "../../components/prefectures/Kyoto";
import {Shizuoka} from "../../components/prefectures/Shizuoka";
import {Kanagawa} from "../../components/prefectures/Kanagawa";
import {Mie} from "../../components/prefectures/Mie";
import {Aichi} from "../../components/prefectures/Aichi";
import {Tottori} from "../../components/prefectures/Tottori";
import {Chiba} from "../../components/prefectures/Chiba";
import {Fukushima} from "../../components/prefectures/Fukushima";
import {Ibaraki} from "../../components/prefectures/Ibaraki";
import {Iwate} from "../../components/prefectures/Iwate";
import {Osaka} from "../../components/prefectures/Osaka";
import {Nagasaki} from "../../components/prefectures/Nagasaki";
import {Saga} from "../../components/prefectures/Saga";
import {Okinawa} from "../../components/prefectures/Okinawa";
import {Fukuoka} from "../../components/prefectures/Fukuoka";
import {Kumamote} from "../../components/prefectures/Kumamote";
import {Kagoshima} from "../../components/prefectures/Kagoshima";
import {Oita} from "../../components/prefectures/Oita";
import {Yamaguchi} from "../../components/prefectures/Yamaguchi";
import {Shimane} from "../../components/prefectures/Shimane";
import {Hiroshima} from "../../components/prefectures/Hiroshima";
import {Ehime} from "../../components/prefectures/Ehime";
import {Okayama} from "../../components/prefectures/Okayama";
import {Kagawa} from "../../components/prefectures/Kagawa";
import {Tokushima} from "../../components/prefectures/Tokushima";
import {Hyogo} from "../../components/prefectures/Hyogo";
import {Wakayama} from "../../components/prefectures/Wakayama";
import {Niigata} from "../../components/prefectures/Niigata";
import {Akita} from "../../components/prefectures/Akita";
import {Tokyo} from "../../components/prefectures/Tokyo";
import {Hokkaido} from "../../components/prefectures/Hokkaido";

import AichiImage from "../../public/images/japan/Aichi.jpg";
import AkitaImage from "../../public/images/japan/Akita.jpg";
import AomoriImage from "../../public/images/japan/Aomori.jpg";
import FukuokaImage from "../../public/images/japan/Fukuoka.jpg";
import FukushimaImage from "../../public/images/japan/Fukushima.jpg";
import GifuImage from "../../public/images/japan/Gifu.jpg";
import GunmaImage from "../../public/images/japan/Gunma.jpg";
import HiroshimaImage from "../../public/images/japan/Hiroshima.jpg";
import HokkaidoImage from "../../public/images/japan/Hokkaido.jpg";
import HyogoImage from "../../public/images/japan/Hyogo.jpg";
import IshikawaImage from "../../public/images/japan/Ishikawa.jpg";
import IwateImage from "../../public/images/japan/Iwate.jpg";
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
import ToyamaImage from "../../public/images/japan/Toyama.jpg";
import WakayamaImage from "../../public/images/japan/Wakayama.jpg";
import YamagataImage from "../../public/images/japan/Yamagata.jpg";
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
                    visited is shown in green. Feel free to hover over the map (long press on
                    mobile) to see my favourite photo I took there (so far)!
                    <br/>
                    Thanks to <a href="https://marcothms.de/">Marco Thomas</a> for the template.
                </>
                <svg id="svg-map" viewBox="85 40 450 510">
                    <Aichi image={AichiImage.src}/>
                    <Akita image={AkitaImage.src}/>
                    <Aomori image={AomoriImage.src}/>
                    <Chiba/>
                    <Ehime/>
                    <Fukui/>
                    <Fukuoka image={FukuokaImage.src}/>
                    <Fukushima image={FukushimaImage.src}/>
                    <Gifu image={GifuImage.src}/>
                    <Gunma image={GunmaImage.src}/>
                    <Hiroshima image={HiroshimaImage.src}/>
                    <Hokkaido image={HokkaidoImage.src}/>
                    <Hyogo image={HyogoImage.src}/>
                    <Ibaraki/>
                    <Ishikawa image={IshikawaImage.src}/>
                    <Iwate image={IwateImage.src}/>
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
                    <Toyama image={ToyamaImage.src}/>
                    <Wakayama image={WakayamaImage.src}/>
                    <Yamagata image={YamagataImage.src}/>
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
