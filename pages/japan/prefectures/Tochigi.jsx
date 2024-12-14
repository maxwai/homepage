import showTooltip from "../tooltipShow";
import hideTooltip from "../tooltipHide";
import utilStyles from "../../../styles/utils.module.css";

export function Tochigi({image=""}) {
    return (
        <g className={utilStyles.prefecture} data-name="Tochigi" data-image={image}
           onMouseOver={showTooltip} onMouseOut={hideTooltip}>
            <path
                d="m403 244.62-.05.23.2.04.17.17.22.09.21.05.21.07-.07.23-.18.16-.1.22-.18.08-.01.25-.3.3-.17.12-.02.26.06.23.18.12.06.26v.26l-.15.3-.13.2-.17.16-.14.19.03.23-.07.24-.15.36.05.25-.04.24.35.19.1.21.2.06.2.05h.23l.19.15.2.05.18-.1.2.1.22.04.2-.1.22.05.2-.05.15.15.05.24.15.26-.17.16-.18.26-.15.18-.32.03-.08.24.06.23-.1.22-.1.22-.19.25.12.43.22.3-.11.2-.2.15-.19.06-.1.2-.15.24-.14.2-.14.18-.17.28-.1.21-.11.2.01.26.02.25.3.25.23.26.28.15.25.1.05.28-.1.28.2.23.16.14.25.2.21.03.12.2.18.14.2-.06.37-.13h.22l.2-.09.2.06.35.18.16.18.56-.04h.28l.28-.14.21.07.16.16-.08.28.14.23.18.11.16.17.02.25.2.13.65.27.23-.14.24.08h.25l.2-.13.22-.18.3-.11.25-.1.67-.32.13-.26.05-.27.13-.2v-.29l-.03-.25.13-.19.15-.19.51-.05.25.08.37.24.12-.85.2-.12.21-.04.2-.1.22-.06.16-.13.02-.24.12-.2.54.13.34-.18.28-.04.4.02.26-.12.06-.25-.02-.26.32.02.2.05.17.16.2-.1.01-.24.2-.1.21-.04.23.01.12.21.16.17.2-.03.32.02.15-.2.19-.3v-.3l.04-.26-.02-.26.1-.22.09-.2.12-.2.17-.15.06-.23.21-.15.11-.27.06-.38-.04-.24.02-.23-.05-.4-.03-.24.03-.4.05-.23-.1-.34-.15-.37.08-.23-.15-.35-.03-.25-.19-.11-.03-.23.13-.19.15-.18.24-.05.29.01.2-.13.21-.04.1-.3-.04-.24-.17-.18-.18-.14-.16-.19-.07-.22-.02-.25.08-.3.12-.22v-.24l.04-.24-.02-.25-.08-.27-.1-.2-.08-.23.04-.25-.01-.26-.01-.23-.03-.26-.06-.24-.02-.3.18-.37-.18-.12-.14-.2.11-.2v-.73l-.11-.2.1-.26.06-.4-.25.06h-.2l-.2.08-.2-.09-.14-.16v-.24l-.06-.25-.03-.24-.19-.17-.21-.05-.18-.18-.2-.14-.07-.23-.17-.17-.2-.04-.2-.12-.2-.16-.18-.14-.2-.04-.22-.02-.22-.07-.2.03-.19-.12-.17-.16-.22-.04-.19-.08-.48-.03h-.2l-.2-.08-.3-.15-.2-.02-.21.02-.2.05-.21.04-.2.03-.2-.13-.2.08-.2.08h-.24l-.15.18-.2.02-.19.12-.19.1-.17.15-.08.2.07.26v.25l-.33.15-.21-.08h-.2l-.2.08-.16.18-.2.12-.3.03-.2.06-.2.01-.2.1-.16.13-.21-.03-.22.08-.14.2-.12.2-.2.01-.2.1-.39.08-.06.26-.17.16-.22-.01-.22.04-.2.05-.18.24-.19.1-.2.1-.18.12-.16.16-.2-.02-.19.1-.16.14-.2.08-.18-.11h-.22l-.2.04-.13.29-.14.2-.2.07-.14.2-.1.22-.19.13-.2-.07-.17.12-.38.24-.05.32-.15.2-.21.35z"
                style={{fill: image === "" ? "var(--prefecture-empty)" : "var(--evergreen)"}} data-originalstrokewidth="0.35"/>
        </g>
    )
}
