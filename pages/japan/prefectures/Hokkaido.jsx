import showTooltip from "../tooltipShow";
import hideTooltip from "../tooltipHide";
import utilStyles from "../../../styles/utils.module.css";

export function Hokkaido({image=""}) {
    return (
        <g className={utilStyles.prefecture} data-name="Hokkaido" data-image={image}
           onMouseOver={showTooltip} onMouseOut={hideTooltip}>
            <path
                d="M453.56 40.19a1 1 0 0 1-.68.25c-.4.3-.6.8-.47 1.28-.24.83-1.86 1.73-2.63 1.16a.7.7 0 0 1-.37.37c-.31-.02-.63.02-.88-.19l.06-.34-.62-.84-.13.06-.28.87c.1.45.22.74.44 1.13-.04.52-.5.86-.66 1.34-.19.6-.36.94-.75 1.44-.64.84-.1 1.85.32 2.66.96 1.89 2.18 3.86 2.68 5.93l.1.03c.32 1.36.68 2.69.84 4.07.1.9.57 3-.31 3.62-.3 1.4.02 2.82-1.16 3.88-.04.5-.58 1.23-.78 1.72l-.4.18c-.11.66.09 1.33.06 2-.02.33.15.68.12 1-.03.38-.12.75-.12 1.13 0 .75.25 1.5.15 2.25-.05.4.02.66-.12 1.06-.1.31-.25.6-.28.94l.1.15-.23-.09-.1.6c-.3.21-.35.6-.58.87-.21.25-.54.45-.79.66l-.15-.04-.16.2-.37-.13-.25.1-.28.37c-.69.26-1.52.17-2.1.75-.47.47-.8 1.33-1.19 1.9.02.62.37 1.04.44 1.63.07.56.23.88.63 1.28l.09.4c-.25.6-.49 1.11-.56 1.75.22.16.42.56.56.79.21.35.38.76.56 1.12.34.67.03 1.15.22 1.81l-.15.35.06.37c-.25.39-.44.9-.85 1.16l-.12.28h-.19a10 10 0 0 1-3.87 2.84l-1.82-.68c-.42-.17-.88-.08-1.21-.44l-.13-.31.19-.1.15-.34-.18-.31a6 6 0 0 0-1.85.37l-.06.28c-.3-.06-.53.02-.81.1l-.13-.04-.06-.15-.22-.03-.06.1.16.05-.1.07.06.09c-.35.17-.8.16-1.18.22a1 1 0 0 1-.44-.38v-.4l-.28.03-.4-.22-.1-.19-1.85-.53v-.25l.13-.12-.06-.13h-.22l-.06-.22h-.5c-.28-.42-1.05-.88-1.44-1.25l-.06-.25-.2.06-.21-.09-.13-.22c-.23-.14-.47-.1-.75-.1l-.06.1.06.19c-.16.42-.39.54-.75.78l-.37-.12c-.45.11-.78.08-1.25.03l.31.37c-.16.2-.15.44-.19.69l-.3.19.15.18-.06.22-.16.07.06.18c-.09.24-.19.46-.15.72.51.77.87 1.15 1.62 1.69.48.34 1.03.92 1.1 1.53.51.38.7.81 1.09 1.31l.22.1c.06.33-.1.55-.22.84-.8.42-1.76.75-2.31 1.47l-.13.03c-.54.9-.98 1.53-1.75 2.25 0 .4.02.8-.06 1.19-.21.2-.54.2-.81.25l-.04.12-.34-.34c-.01-.61-.61-.83-1.06-1.1-.36.55-.71 1.01-.9 1.63-.67.41-1.34.5-1.7 1.25l-.56.28a5 5 0 0 0-3.15.63c-.27.5-.57.91-.91 1.37.29 1.68 1.25 5.08-.81 6.06l-.22 1.04.31.75-.22.3.56.85c.48.1 1.06.12 1.47.4.2.7.6 1.21.97 1.82.38.14.8.1 1.19.1.33.35.82.47 1.19.84.33.34.36.85.75 1.15l-.07.13.25.12.22.38v.12c.24.3.49.54.5.94l-.03.16c.12.37.28.76.28 1.15l-.12.22c.06.25-.01.52-.1.75l-.21.16c.08.4.01.78-.04 1.19l-.21.25-.5-.1-.25.1c0 .81-.1 1.27-.6 1.93-.48.67-.68 1.1-.84 1.91l-.13.1c.02.37-.21.62-.18 1 .02.4-.03.85.18 1.21.24.4.34.78.47 1.22.08.28.3.46.28.78l.4.44c.25.2.47.47.79.53.4-.11.85-.33 1.25-.1.32.2.6.6.97.66l.37-.3c.05-.42.44-1.1.79-1.32l.09-.35c.58-.25 1.58-.43 2.03-.87l.88-.1c.33-.28.41-.4.56-.8l-.13-.22c-.03-1.05-.19-2.25.53-3.07l1.32-.18c.51-.42.92-.7 1.53-.97.06-.5.45-.98.34-1.47l.44-.38c.45-.11.92 0 1.31.25l.03.22h.13l.12.19-.03.37-.15.16-.07-.03v-.13l-.15-.09-.25.35a.8.8 0 0 0 .09.56q.3-.01.56-.13l-.12-.15c.52-.96 2-.27 2.75-.07q.6.19 1.19.44c.37.16.48.49.84.66l.81-.07.22-.18.34.06.07-.16h.3l.1-.22.4-.21.1-.29c.25-.13.36-.39.5-.62l.35-.13.18.16.5-.06c.12-.24.35-.33.57-.47l-.1-.4c-.3-.02-.48-.2-.72-.38l-.03-.16.13-.22-.07-.1c-.39-.02-.52-.34-.84-.5a4 4 0 0 0-1-.33c-.28-.07-.65 0-.9-.13l-1-.5-.22-.5-.1.1-.15-.16-.1-.38c-.4-.28-.55-.7-.97-1l-1.3-.93-.07-.25-.16-.1v-.47l-.5-.12c-.17-.28-.3-.52-.37-.85a4 4 0 0 1-.97-.53l-.53.28c-.7-.03-1.06.1-1.72.38-.33-.06-.8-.07-1.1-.22-.37-.19-.49-.4-.8-.62a3 3 0 0 1-.88-.75c-.18-.23-.54-.29-.75-.54-.49-.57-1.28-.6-1.97-.84-.75-.25-.75-.98-.69-1.66.13-1.41.7-2.81 1.47-4 .43-.65.86-1.2 1.37-1.8.55-.64.9-.73 1.7-.66l.09-.16c.42-.02.9.33 1.28.5.9-.28 1.48-.44 2.4-.38l.1.25.28.04.94.78v.4l.25.07.06.12-.16-.03v.34h.31l.75.63.1-.13.03.2c.98.2 1.11 1.42 1.28 2.2l1.28.57.16-.06.15.12.35-.03.12.1-.5.1-.03.33-.19.16-.09-.03-.03-.31-.13-.07.04-.09-.25-.06-.2.16h-.21l-.03.12.28.4.37.1.1.19.19-.03.5.15.21-.18v-.2c.14-.23.3-.44.57-.52l-.07-.07.07-.12.34-.13v-.18l1.5-1.5c.4-.4.84-.51 1.38-.72.94-.37 1.8-1.3 2.62-1.9l-.1-.04a.4.4 0 0 1 .26-.16l-.03.13a12 12 0 0 1 5.43-2.19l.16-.37.06.28.16.1c1.83 0 4.02.32 5.47 1.52l.34-.1-.19.26-.22-.1-.03.07c.53.3.83.5 1.22.97.3.35.88.37 1.13.8.32.07.68.06.9.32a4.5 4.5 0 0 1 2.22.56c.57.37 1.11 1.04 1.63 1.5.58.52 1.18.9 1.84 1.32.5.3 1.18.38 1.6.75.64.57 1.2.74 1.96 1.12.62.3 1.23.28 1.78.75.3.25.5.5.88.6.34.08.68.14.97.34.22.15.52.1.78.28l.94.63c.63-.03 1.2.12 1.81.25l.19.18.22-.12.56.15c.77 1 2.12 1.29 3.15 1.97.51.34.55 1.01 1.04 1.38q.74.55 1.4 1.22l.06-.03c-.3-1.32.5-2.18 1.32-3.1l-.13-.37.28-.94-.09-.25c.11-.58.46-1.34.31-1.9-.77-.63-.08-1.48-.28-2.23a43 43 0 0 1 3.03-5.25c1.06-1.5 2.39-2.8 3.69-4.09l-.28-.06.28-.1.1.1c.42-.27.83-.71 1.21-1.03l2.06-1.75a28 28 0 0 1 3.29-2.41 18 18 0 0 1 3.68-1.69c.87-.3 3.05-.8 3.6.19l-.03.13-.16-.04-.03.13.56.1c.4.43 1.22.48 1.75.65 1.96-.6 3.87.02 5.88.12l.06-.15c-.46-.26-1.1-.5-1.22-1.06.2-.6.83-1.14 1.28-1.57.55-.05.87 0 1.4.16l.1-.06-.16-.16a.6.6 0 0 1 .1-.47l-.06-.22.12-.12.13.25-.07.19c.58.08.94.13 1.44.43l.1.16.09.03-.03.16-.19.09-.06.25-.25-.1-.32.23-.75-.29-.09-.18-.19-.13-.34.31.1.22-.1.25.31-.06.16.16-.03.12.15.03.32.35a1 1 0 0 1 .78.03l.06-.13.84.16 1.1-.4.12-.26-.12-.15.03-.16-.22-.19-.19.1.07-.2-.13-.05.1-.1-.35-.18.06-.13.53.13-.06.12.16.03v.16l.12.22c.4.09.76-.18 1.1-.35l.12-.31-.1-.16.26-.25.43-.03.13.19.5-.03-.1-.06.1-.07.34.04-.15-.25-.66.06-.28-.13c-.17-.28-.1-.64 0-.93.36-.23.7-.56 1.16-.5l.15.18c.72.18 1.52-.5 2.16-.78l.47.1c.8-.36 3.14-.99 3.75-.1l-.13.13v.22l.35-.1.15-.31-.37-.16.19-.18.34.06.03-.25-.1-.13.1-.12a.8.8 0 0 0 .47-.28l-.1-.07-.06-.18c.22-.28.08-.6.32-.88v-.34l.21-.13.25.16.1-.06.1-.25.27-.16-.1-.19c.43-.18.92-.4 1.35-.12l.07-.03-.04-.13c.26-.13.53-.31.82-.34l.15.12.35-.22v.13h.09c.28-.18.57-.34.81-.56v-.1l.28-.06.1-.1-.06-.18.25-.22-.13-.1c-.34 0-.72.06-1.03-.12l.1-.12h-.2l-.03.15a1 1 0 0 1-.43-.06l-.07.16c-.53.06-.96 0-1.5-.1a4 4 0 0 1-1.37 1.1l.03.12c-.16.27-.44.33-.72.44l.06.06-.3.16-.13-.03-.13.18.03.13-.22.06-.34.72.13.06.18-.06.35.6-.13.28-.22.06a.8.8 0 0 0-.1-.66l-.33-.12-.16-.22c-.96.47-1.96.14-2.88-.28l-.46.15-.07-.06.03-.12-.21-.04-.04-.09h.13v-.31l-.1-.1.66.16v-.22a3 3 0 0 0-1.72-.31l-.34-.35h.53l.03-.06-.44-.12.1-.2c.3-.08.62-.01.94 0 .25.13.43.37.53.63l.43.2v-.13c.35.14.69.37 1 .56v.1l.13-.1c-1.14-.97-1.89-1.62-2.4-3.03-.23-.6-.3-1.22-.45-1.85-.07-.32-.02-.47-.18-.78-.14-.25-.28-.45-.25-.75l-.19-.22.1-.25-.23-.06-.3-.28.12-.22-.16-.22c.52-.03.95.24 1.47.28v.38l.1.06.27-.25.04.06-.13.2.6-.16.28.28-.25.06-.07.1.22-.04-.03.13.44-.07.06.1-.1.15-.34.04.2.15-.54-.12-.03.15-.31-.1-.07.07.38.19-.25.03c.36.18.73.06 1.1-.06l.15-.28-.03-.25c-.86-1.16-2.86-1.1-4.1-1.72-.7-1.18-1.66-2.27-1.59-3.69q.68-.68.63-1.66c-.03-.57.3-1.2.62-1.68.41-.62.8-1.12 1.31-1.66.4-.41.75-.61 1-1.19-.06-.51-.02-1.13.38-1.53s.88-1.13 1.34-1.44q.06-.4.35-.68v-.41l.28-.31.06-.47c-.16-.24-.34-.44-.4-.72l.09-.28-.25-.25.09-.31-.28-.13c-.24.19-.31.45-.44.72-.42.16-.48.57-.78.84-.37.35-.7.57-.9 1.04-.4.9-1.18 1.22-2 1.71l-.07.16c-.77.2-1.3 1-2.03 1.34l-.25.5-.34.04.09.12-.31.06-.06.19-.54.44-.18-.03c-.33.33-.32.82-.78 1.09-.43.24-1.08.45-1.2 1-.37.1-.6.4-.96.47-.44.09-.96.29-1.4.28-.85-.01-1.73.06-2.57-.06-1.89-.28-3.77-.49-5.47-1.4-.1-.28-.17-.62-.34-.85-.17-.24-.43-.3-.5-.6l.1-.22-.16-.25c.06-.42.04-.64-.07-1.06l-.18-.1-.44.29c-.73.02-1.47-.2-2.13-.5-.57-.25-1.52-.18-2.15-.28-.77-.12-1.5-.32-2.25-.5-.57-.14-1.34-.23-1.82-.6l-.18.07c-.46-.46-1.42-.6-2-.82l-2.72-.97a12 12 0 0 1-3.63-2.03l-.03-.18.06-.19c-.38-.73-1.74-1.13-2.43-1.5l-.28-.47c-1.03-.5-2.29-1.02-3.13-1.81v-.35l-.12-.09-.2.19a5 5 0 0 1-1.71-1.69l-.25-.1-.06-.12-.2-.12.04-.19-.12-.16-.16-.03c-.64-.65-1.37-1.13-2.03-1.75l-1.47-1.34c-.3-.28-.38-.7-.75-.9-.1-.6-.9-1.12-1.22-1.66-.3-.53-.8-.89-1.22-1.35v-.19l.16-.09-.19-.34.1-.22c-.49-.43-1.2-.87-1.16-1.6l-.16-.12-.03-.16h-.16l-.18-.22.06-.25c-.88-.2-1.47-.98-2.1-1.62-.85-.88-1.75-1.75-2.59-2.66-.66-.71-1.26-1.8-2.06-2.34l-1.63-1.1c-.35-.23-.9-.45-.87-.96l-.16-.1V42c-.7-.42-.96-.6-1.18-1.4zm-17.65 1.69-.1.34h-.9c0 .75-.05 1.43.15 2.16q.3 1.04.72 2.03c.24-.6.66-1.24.66-1.88 0-.73.1-1.34.25-2.06l-.78-.6zm3.12 4.75L438 47.75v1.47q.78.5 1.53 1.03a28 28 0 0 0 1.69-.56l.62-.82-.62-1.12c-.24-.21-.63-.7-.94-.78zm4.03 18.96a1 1 0 0 1-.5.29l.16.34h.5l.12.12.13.04.19-.22v-.38l-.16-.19zm-1.68.1a3 3 0 0 1-.57.34l-.06.4a3 3 0 0 0 .66.1l.3-.19.1-.25-.18-.37zm84.25 28.81-.2.03-.15.16a1 1 0 0 0 .16.37h.18l.1-.12v-.16l-.1-.28zm-14.35 6.31-.19.1-.09.25a1 1 0 0 0 .34.03l.1-.13.03-.22zm-106.06 17.13-1.47.84.31 1.53v1.4l.35.45 1.28-.28c.25-.9.3-1.6.31-2.54l1.13-.56v-.84zm-2.34 16.56-.38.03a.7.7 0 0 0 .28.72l.57-.22.12-.19-.19-.3zm8.9 3.6-.37.09a.6.6 0 0 0 .31.34h.31l.03-.12-.09-.22z"
                style={{fill: image === "" ? "var(--prefecture-empty)" : "var(--evergreen)"}} data-originalstrokewidth="0.35"/>
        </g>
    )
}
