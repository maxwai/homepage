import showTooltip from "../tooltipShow";
import hideTooltip from "../tooltipHide";
import utilStyles from "../../styles/utils.module.css";

export function Miyazaki({image=""}) {
    return (
        <g className={utilStyles.prefecture} data-name="Miyazaki" data-image={image}
           onMouseOver={showTooltip} onMouseOut={hideTooltip}>
            <path
                d="m255.24 341.72.05-.3-.02-.25-.07-.25.11-.31.08-.23.1-.24-.01-.3-.2.1-.22-.06-.19-.12-.22-.05-.18.12-.2-.03-.2-.24-.2-.05-.34-.02-.23.08-.24.09-.01.24-.1.24-.04.27-.19.17-.06.23-.23.18-.24.02-.26.06-.18.07-.2-.06-.26-.05-.24-.01-.22-.06-.22.01-.22.02-.2-.02-.14.2-.16.17-.22.07-.27-.04-.2-.04-.19-.11-.24-.1-.18-.3.08-.26.1-.23-.2-.13-.36-.3-.16-.2-.11-.23-.33.18h-.25l-.2.06-.1.22-.29.12h-.24l-.2.04-.2.05-.21.04-.39-.01-.06-.25-.21-.36-.21.03-.39.1h-.27l-.2-.07-.2.12h-.2l-.14.19-.04.25-.15.16-.04.25-.19.16.09.23.07.23-.14.2-.04.25-.22.15-.15.16-.2.03-.2.09-.2.22-.08.25-.1.22-.04.24.01.23-.24.13-.14-.17-.2.05-.2.36-.17.18-.08.23-.07.39-.06.28.09.25-.13.28-.16.16-.3.18-.26-.08-.2-.05-.25-.08-.24.24-.08.24.03.25-.2.07-.2.1.02.26.07.22-.1.22-.2.12v.27l-.04.31.13.24.03.24.02.44.07.23.13.21.11.21.18.27.2.1h.24l.13.2-.02.26.12.22.01.24-.05.24.21.13.2.06.17.2.18.3-.13.2-.08.22-.13.23-.13.2-.15.2-.19.11-.37-.09v.46l-.2.14.1.35.33.05.14.18.06.24.13.25.17.18.23.12.07.22-.04.25.03.25.1.2-.19.15-.22.02-.22-.08-.24.03-.2-.03-.2-.11-.13-.18h-.36l-.22-.05-.19.25-.19.38-.2.13-.1.2-.02.25-.22.02-.18.1-.19-.06-.19.06-.2-.18-.27-.17-.2.04-.2.14-.2.04-.25.32-.15.19-.19-.1-.23-.06-.2.09-.14.18-.2-.09h-.43l-.22-.04h-.23l-.34-.06-.2-.08-.2.1-.22.36-.2.17-.05.24v.26l.17.16h.21l.26.07.23.33.26.16.16.19.18.12v.27l.05.26.04.25.16.17.1.23.06.27.24.2.4.08.22.02.22.06.3.24.23.15.1.27.11.2.1.26-.1.57-.06.23-.05.24-.2.07.03.45.04.23.1.22.4.1.25.01.16.16.13.2.2.02.2.03.27.06.2-.03.21.06.07.23-.18.17-.07.22.18.1.2.08.21-.05.2.07-.03.24v.34l.03.34.17.18-.02.24.01.27.16.35.18.15.1.25.1.24.19-.21.15-.24.17-.14.2.16.14.18.2.15.17.16.33.13.2-.08.23-.08.2-.08.28.22.18.07-.03.3.04.23.18.17.11.25.02.25-.08.23-.18.15.13.32.05.25v.3l-.06.22-.2.1-.21.1-.14.25-.12.2-.02.41-.04.23.04.04.17.15c.24-.12.48-.04.74 0l.15-.1.03.2-.17.06.32.34.16-.02.19.16-.12.28q0 .34.23.6l.6.1.2-.16.37-.01.3.6.38-.08.05-.2-.24-.1-.08-.25a1 1 0 0 0 .3-.53l.43-.3.08-.21-.11-.42-.1-.1-.01-.31.55-.4-.04-.25a1 1 0 0 1-.3-.54l.16-.1.1.17.05-.17-.12-.14.14-.31-.13-.2.02-.13.28-.06.13-.53.1.2.18-.09-.07-.34.18-.37.74-.47-.11-.25.2-.25-.13-.44-.13-.06.07-.17.19-.1.03-.24-.22-.14q.2-.58.26-1.19c.18-.25.37-.44.37-.77l-.1-.23-.13-.06c-.1-.26-.33-.45-.58-.57l-.06-.38.1-.14q.1-.65.25-1.28c.07-.35-.02-.79.1-1.12.33-.82.64-1.6.86-2.46-.3.06-.62 0-.8-.27l.56.14q.24-.2.34-.52l-.1.47c.42-1.19.68-2.37 1.05-3.58.35-1.11.46-2.14 1.04-3.2l-.07-.16.19.1.17-.1-.03-.53.15-.26c-.07-.27.06-.5.15-.77a1 1 0 0 1 .66-.17l-.07-.2.23-.37-.04-.2-.41.11.15-.2-.02-.1-.17.23h-.13l.12-.2-.07-.24a3 3 0 0 1 .24-.5l.09.11h.23l-.05.1.17.11h.22l.59-.59-.23-.2-.1-.36-.43.18-.13-.07.1-.12c-.18-.68.08-.96.42-1.57l-.01-.09-.31.26-.25-.17.35-.12-.15-.44.2-.18.25.6.14.1.43-.05.04-.16.3-.24-.1-.06.13-.07.08-.38.12-.12-.12-.23.05-.14-.07-.16.14-.02.05-.2.18-.13.03.21.1.06v-.27l.56-.48.04-.2.32.29.33-.14-.2-.41.13-.2.2.06-.12-.21.08-.04-.1-.1zm-.42.67.04-.1z"
                style={{fill: image === "" ? "var(--prefecture-empty)" : "var(--evergreen)"}} data-originalstrokewidth="0.35"/>
        </g>
    )
}