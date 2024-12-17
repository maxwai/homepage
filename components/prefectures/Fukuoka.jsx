import showTooltip from "../tooltipShow";
import hideTooltip from "../tooltipHide";
import utilStyles from "../../styles/utils.module.css";

export function Fukuoka({image=""}) {
    return (
        <g className={utilStyles.prefecture} data-name="Fukuoka" data-image={image}
           onMouseOver={showTooltip} onMouseOut={hideTooltip}>
            <path
                d="M235.25 312.9c-.47.12-.83.34-1.25.57l-.1.16.1.15.31-.03-.03.19-.1.06-.21.03a2.7 2.7 0 0 0-1.34-.62l-.25.1-.07.27-.28.13-.12.4c-.38.47-1.3.71-1.85.44l-.06-.22-.72.06-.03.1.06.12-.18.47-.54.19-.28-.16.1.44-.22.53-.35.13-.18-.07a1 1 0 0 1 0 .7l.37.05.16.25c-.16.46-.2.85-.56 1.2l-.35.05c-.28.73-1.23 1.4-2.03 1.35l.25.25q.28 0 .47.22l.1-.07v-.3l.18-.23.56-.12.19-.22.22-.06.16.1-.07.12.16.43-.28.16-.1.72-.09-.03v.25l-.22.15v.16l-.1-.03-.27.15-.07-.06.1-.1-.1-.09-.5.28-.8-.18.02.12-.06.16c-.27.14-.5.03-.78-.03l-.06-.06.18-.35-.09-.19c-.25.07-.44 0-.69-.06l-.15-.4.15-.35c-.13-.25-.35-.32-.6-.44l-.02.13.1.22c-.16.25-.45.36-.7.5l-.21-.03-.16.15-.03.1.1.25-.2.31-.4.22-.38-.25-.1.25-.3.15.12.16.06.25.5-.19.22.13-.06.15-.25.1-.06.25.37-.22.19.16.38-.32.28.13-.22.1c-.35.56-1.1.54-1.44 1.05l-.87.22c-.1.25-.2.47-.22.72l.25.03.18-.06.29.06h.43l.16-.15.34.03.38.03.19-.1.18.07.16.15h.34l.19-.18.19-.13.22.03.22.1.21.03.2.1.18-.13.28-.1.19.13.19.12.15.16.22.03.22.06.19.16.18.19.2.09.15.16.22-.04.3.2h.26l.19.24.12.22.31.25.22-.34.16-.16.22-.06.19-.28.21-.13.2-.06.34-.13.18-.06.22.13.19.1.1.43v.47l-.04.84-.06.28v.25l-.53-.06-.22.44-.19.18-.1.25-.24.07-.16.28-.28.31-.25.19-.37.15-.32.29-.22.15-.22.38-.12.25-.25.4-.03.25-.06.5-.13.6.19.1.12.02-.03.22v.25l.13.06.18.1.22-.07-.06.22.13.2h.12l.1-.13.21.03-.12.25-.06.22.12.18h.19l.15.22.1.31-.03.25-.19.13-.06.22-.13.22.22.1-.16.18.25.28.16-.13.56-.06h.28l.5-.1.13-.21-.1-.22-.06-.25-.12-.37.15-.16.2-.13.18-.06.16-.15.18-.2.22-.05.19-.22-.03-.25.19-.13.15-.15.22.03h.25l.19.12.19-.03.25-.03.22.03.18.03.1-.25.03-.25.12-.19-.03-.25.13-.25.18-.25.16.16v.25h.22l.19-.06.22.1.18-.07.13.19.18.12.2.19.15.1.25.12h.22l.18.06.22.1.2.12.18.12h.28l.22-.06.12-.19.13-.21.06-.29.1-.25.03-.25-.03-.25.21-.15-.06-.25-.19-.1-.18-.09-.2-.12-.21-.16-.06-.25.1-.38h-.23l-.15-.18.12-.38h.19l.34-.28-.12-.22.15-.19.1-.21-.07-.25-.09-.22v-.28l-.12-.22-.28-.16.15-.19.25-.15.06-.35.25-.09.22-.06v-.25l.06-.22.07-.25v-.44l.12-.22.06-.28h.2l.18-.16.19-.25.06-.3.19-.1.25-.16.18-.15.16-.16.19-.1.34-.06h.22l.19-.06.19-.1.25.07.18.1h.22l.31.09h.25l.2.03.21-.03.38.03h.34l.22-.06.31-.07-.12-.22v-.25l.18-.15.16-.16.03-.22-.03-.28-.16-.15-.09-.35.22-.43v-.16l-.13.1.1-.35c-.23-.1-.47-.1-.72-.13h-.72l-.1.13-.46-.44h-.16l-.03-.4c-.25-.2-.31-.53-.44-.82l-.31-.15a.8.8 0 0 1-.1-.66l-.15-.1-.06-.15c.12-.39.17-.65.15-1.06l-.25-.03c-.06-.23-.1-.47-.03-.69l-.06-.16-.4.03-.04.16-.15.1-.41-.66v-.16l.1-.03.3.16.16-.32-.12-.62c.13-.22.17-.49.22-.72l.3.1-.12-.16.07-.13.18-.12-.3-.13.21-.12.06-.22.19-.1-.03-.15.1-.25-.76.1-.06-.1h-.4v.31c-.47.31-.65.77-.91 1.25l-.47.1-.03-.1-.19.06-.03-.15-.19.03-.12-.13.12-.18.19-.03.06.12h.19l.12.13.07-.13-.7-1c-.19.22-.38.47-.68.56-.03.43-.44.8-.56 1.22l-.13-.28-.75.25-.15-.06c.46-.12 1.02-.28 1.31-.69l.03-.25.13-.12-.07-.2-.15-.09.28-.12.19-.47zm-7.25 1.2c-.24 0-.48.08-.72.09a.7.7 0 0 0-.03.56h.38l.06-.37.31-.04v-.25zm.72.06-.03.1.22.27h.28l-.1-.25-.22-.12zm-2.13 2.87-.15.13-.03.18.09.16.19-.16.03-.18zm-3.34 2.06-.13.1.07.15.1.04.21-.16-.06-.13zm1.66.32-.13.03-.12.15q.07.26.18.5h.22l.13-.15a1 1 0 0 0-.13-.47zm-.2 1.3a.5.5 0 0 0-.18.32l.03.28.13.07a1 1 0 0 1 .19-.22.4.4 0 0 0-.07-.35z"
                style={{fill: image === "" ? "var(--prefecture-empty)" : "var(--evergreen)"}} data-originalstrokewidth="0.35"/>
        </g>
    )
}