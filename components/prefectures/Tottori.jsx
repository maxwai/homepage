import showTooltip from "../tooltipShow";
import hideTooltip from "../tooltipHide";
import utilStyles from "../../styles/utils.module.css";

export function Tottori({image=""}) {
    return (
        <g className={utilStyles.prefecture} data-name="Tottori" data-image={image}
           onMouseOver={showTooltip} onMouseOut={hideTooltip}>
            <path
                d="m284.26 278.97-.12.25.09.24-.06.35-.23.14-.13.22-.06.25.05.34.01.31.12.2-.07.24.08.25.08.26-.14.23-.2.05h-.22l-.21.05-.2-.05-.18.1-.27.19h-.21l-.19.1-.2.06-.3.13-.21.07-.18.16-.2.1-.19.16.03.28.2-.06.22.03.18.16-.03.25.17.18.09.25-.13.2-.16.13-.23.08-.2.08-.17.2-.1.23-.04.24.03.26-.09.23-.05.23.08.32.01.26.38-.2.16.15.21-.02.2-.04.22-.05.23-.03.31.13.07-.22.32-.03.25.35.17.14.14-.19.22-.06.04-.43v-.26l.19-.14.18.13.2.1.2-.08.16-.19h.2l.2.08.3-.25.2-.05.23.02.32-.16.02-.25-.07-.25-.1-.22-.07-.23-.11-.22.1-.25.17-.13.2.1.19.11.19.08.2.04.19-.04.21-.04.17-.15.2-.1.24-.07.19-.08.27.17-.02-.43-.04-.24-.14-.18-.07-.29.16-.16.2.05.2.02.17-.14.22-.01.1-.22.1-.28.08-.23v-.25l.1-.25v-.24l.09-.25.14-.2.02-.27.15-.2.2.09.21.04.42.01.27.1.2.2.2.07.2.11.17-.12.23-.01.24.05.2.07.2.02h.23l.15.2.33.15.18.12.22.13.2.13.11.22.07.26.14.2.19.21.3-.08.16-.2.2-.2.1-.34.1-.2.23-.04.18-.12.19-.1.18-.07.37-.15-.05-.25.08-.23h.2l.28-.2.2-.1.23.06.18-.09.2-.12.21.03.06.26-.13.39-.08.23.19.16.2.04.2.01.21.04.18.12.19-.08.33-.02.2-.1.21.03.1.22.17.14.14.18.28.05.1.2.12.2.02.25-.14.35.15.17.24-.07.1.21-.03.25-.12.19-.04.26.18.14.13.22.2.25.19-.12.1-.22.18-.11.2-.05.27-.1.18-.1.23-.01.14-.2h.2l.13.18.2.09.28-.09.2-.02.21-.02.2-.1.16-.15.15-.18.2-.09.2-.12.2-.36.29-.13h.2l.1.22.4.13.18.13.2-.1.19-.08.2-.15.18-.12.19-.1.12-.22.2-.1.19-.13.17-.13-.07-.24-.02-.25.04-.25-.16-.17-.06-.23.15-.42-.03-.3-.21-.24-.22-.06-.19-.12-.07-.22.07-.24.07-.23-.07-.24.02-.35-.2-.1-.2-.08-.34-.15-.03-.27-.08-.4v-.25l-.08-.24-.03-.31-.16-.16-.11-.2.1-.23.1-.27v-.24l-.08-.26-.26-.05-.01-.27-.11-.43-.17-.16-.5-.33-.09.18h-.33l-.2-.12-.07.34-.86.1-.07.3-.26.1-.09.28a9 9 0 0 1-2.3.65c-.74.1-2 .57-2.69.16l-.22-.37-.1.3c-.26.13-.54.07-.8.06l-.13.13-.25-.01c-.48.44-1.35.33-1.96.38a10 10 0 0 1-5.08-.64c-.42.08-1.07.08-1.44.3-.44.26-.78.46-1.27.59l-.08.22-.12.03a1 1 0 0 0-.18.48l-.37.23c-.76-.46-1.55-1.13-1.64-2.1l-.58.05.2.6c.5 1.03.88 1.73 1.88 2.33l-.08.5-.66-.5-.8.11v.11z"
                style={{fill: image === "" ? "var(--prefecture-empty)" : "var(--evergreen)"}} data-originalstrokewidth="0.35"/>
        </g>
    )
}