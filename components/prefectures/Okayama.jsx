import showTooltip from "../tooltipShow";
import hideTooltip from "../tooltipHide";
import utilStyles from "../../styles/utils.module.css";

export function Okayama({image=""}) {
    return (
        <g className={utilStyles.prefecture} data-name="Okayama" data-image={image}
           onMouseOver={showTooltip} onMouseOut={hideTooltip}>
            <path
                d="m297.56 280.13-.18.12-.2.1-.21-.07-.22.1-.28.21h-.19l-.1.22.07.25-.38.16-.18.06-.19.1-.19.12-.22.03-.09.22-.1.34-.21.2-.16.21-.28.06-.22-.22-.12-.18-.07-.25-.12-.22-.19-.13-.22-.15-.19-.13-.34-.12-.12-.2-.22-.02h-.22l-.22-.06-.22-.07h-.22l-.19.13-.18-.13-.22-.06-.19-.19-.28-.1-.4-.02-.23-.03-.18-.1-.16.22-.03.25-.13.22-.09.25v.22l-.1.25v.25l-.09.25-.09.25-.1.25h-.21l-.19.12h-.19l-.19-.06-.18.16.06.31.16.16.03.25.03.44-.28-.2-.19.1-.22.06-.22.1-.15.15-.22.03-.19.07-.22-.07-.19-.06-.15-.12-.22-.1-.19.13-.1.25.13.22.06.25.1.22.06.25v.25l-.31.15-.25-.03-.19.06-.31.25-.19-.09h-.22l-.15.19-.2.1-.18-.1-.19-.13-.18.13v.25l-.07.44-.22.06-.12.19.06.25.19.12.19.16.1.22.12.18.18.13.16.15v.38l-.13.19-.15.18-.06.25-.13.2.13.21.12.22-.16.19.07.22-.13.21-.03.25v.25l.16.16.1.22.15.15.18.25.16.29.22.34.34.22.2.12.08.22-.03.28-.06.25-.12.35-.07.22.13.37-.19.35.19.15v.25l.1.35.12.15.06.25.19.13.18.12-.09.25-.1.22-.12.19.1.22-.16.25.19.34.1.25.12.16.34.09.12.44.2.15.12.22.1.22v.38l-.04.25-.03.25.19.06-.1.31v.22l.03.1.32.09.03.18.12-.06-.12-.69.12-.06.19-.28-.03-.22.15.25.2-.03.12.13.22.03-.1.47.22.03.19.37h.25l.19-.12.3.03q.21-.3.41-.63l.2-.06.21.06.25-.25h.28c.15-.17.27-.37.47-.47l.16.35.25-.13-.19-.15.03-.07h.13l.12-.59.16.03.06.28.25.13.19-.25v.06l-.16.31-.25.1-.03 1.06h.44v.22l.18-.1v-.43l-.21-.16.21-.34.22-.13c.06.23.08.45.22.63l.03-.47.1-.1-.1.85.2.1.08.3-.03.2.32.37.3-.03.35.15c-.22-.22-.21-.48-.25-.78l.5-.28.06.1c.41.08.62.17.97.4l.28-.03.13.15.31-.06.1-.22.09.22.19-.1-.1-.09.1-.12-.13-.13.1-.28h.12l.16-.28.06.07.12-.07-.15-.43a.7.7 0 0 1 .37-.47l.25.06.1.25.22.12.03-.09-.22-.19.1-.12-.07-.13a1 1 0 0 1 .22-.34l.28.12.06-.18.13.03-.03-.1.09-.06-.1-.12.13-.22.25-.1-.25-.5-.31-.09-.35.16a1 1 0 0 0-.72.06l-.37.44-.06.4-.1.03c-.14-.22-.29-.43-.34-.68l.06-.16q.26 0 .5-.13l-.06-.09.13-.06.12.12c.28-.24.69-.26 1.03-.34a.8.8 0 0 0 .63.06l.06.22.22-.25h.12a.8.8 0 0 0-.22.53l.25.1.22-.13.2.22.37-.19h.28l.15-.18.2-.07.02-.25h.16l.1-.28.15.19.28-.13a1 1 0 0 1 .31-.5l-.22-.03-.12-.31.06-.06.28.15.16-.25-.06-.09.3-.1-.09-.02.03-.13.13.03.25-.15-.25-.13.25-.03.03-.1h.16l.1-.15.05.1.1-.2-.35-.3-.28.09-.15-.07v-.09h-.16l-.1-.06.13-.19-.37-.22.1-.1.96.35-.19.1v.06l.72.06.22-.28-.06-.1.25.07.15-.25.53.44.38-.35.06.1.06-.04-.28-.56.07-.03-.13-.19-.12-.28-.04-.22-.15-.18-.13-.22-.28-.16-.06-.22-.22.03-.25-.22-.03-.25-.13-.22.1-.18.12-.19-.06-.22.16-.19.18-.12.2-.1v-.28l-.13-.25-.16-.15-.16-.16-.22-.03-.03-.25.2-.16.18-.15.03-.25-.1-.22.16-.19.03-.25-.15-.12-.13-.22.1-.22.15-.19.2-.16.15-.09h.22l.18-.1-.03-.24.13-.44-.03-.25.4-.1.19-.12.06-.22v-.25l.13-.22.06-.4.25-.25.19-.03h.25l.22.09.09-.25-.1-.28.1-.22-.16-.19-.22-.1-.21-.12-.04-.25v-.25l.16-.12.19-.19.1-.22-.13-.22h-.19l-.31.13-.19.37-.19.1-.22.1-.12.18-.16.15-.22.1-.22.03h-.18l-.28.1-.2-.1-.12-.19-.22.03-.12.2h-.25l-.19.08-.25.13-.22.03-.15.13-.13.21-.15.13-.22-.25-.13-.25-.19-.13.04-.25.12-.18.03-.25-.1-.22-.24.06-.16-.16.16-.34-.03-.25-.1-.22-.12-.19-.28-.06-.13-.15-.15-.16-.13-.22-.22-.03-.19.1-.3.02-.23.07-.15-.13-.22-.03H298l-.19-.03-.19-.19.1-.22.12-.37-.06-.28zm-9.4 20.87a1 1 0 0 1-.41.25l-.1.19-.18.03-.13.15q.26.06.5 0l.16-.15.31.03.16-.03a.7.7 0 0 0-.19-.44zm.12 1.19a1 1 0 0 0-.37.25l-.04.22.07.12.15.03.1-.18.12-.13a.5.5 0 0 0-.03-.31"
                style={{fill: image === "" ? "var(--prefecture-empty)" : "var(--evergreen)"}} data-originalstrokewidth="0.35"/>
        </g>
    )
}