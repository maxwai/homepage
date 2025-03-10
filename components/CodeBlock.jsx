import utilStyles from "../styles/code.module.css";

export default function CodeBlock(content) {
    // taken from @atlaskit/code
    const lines = content.content.split("\n");
    return (
        <div className={utilStyles.codeBlock}>
            <code className="language-text"
                  style={{whiteSpace: "pre-wrap", wordBreak: "break-word"}}>
                {lines.map((line, i) => {
                    return (
                        <span className={utilStyles.codeBlockLine} key={i}>
                            <span className={utilStyles.codeBlockLineNumber}
                                  data-ds--line-number={i}/>
                            <span>{line}</span>
                        </span>
                    )
                })}
            </code>
        </div>
    )
}
