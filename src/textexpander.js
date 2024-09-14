import { useState } from "react";

const expanderContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2.4rem",
    width: "600px",
    margin: "0 auto",
    paddingBottom: "10px",
};

export default function TextExpanderContainer() {
    return (
        <div style={expanderContainerStyle}>
            <TextExpander>
                Space travel is the ultimate adventure! Imagine soaring past the
                stars and exploring new worlds. It's the stuff of dreams and
                science fiction, but believe it or not, space travel is a real
                thing. Humans and robots are constantly venturing out into the
                cosmos to uncover its secrets and push the boundaries of what's
                possible.
            </TextExpander>

            <TextExpander
                count={20}
                expandTxt="Show text"
                collapseTxt="Collapse text"
                color="#ff6622"
            >
                Space travel requires some seriously amazing technology and
                collaboration between countries, private companies, and
                international space organizations. And while it's not always
                easy (or cheap), the results are out of this world. Think about
                the first time humans stepped foot on the moon or when rovers
                were sent to roam around on Mars.
            </TextExpander>

            <TextExpander expanded={true}>
                Space missions have given us incredible insights into our
                universe and have inspired future generations to keep reaching
                for the stars. Space travel is a pretty cool thing to think
                about. Who knows what we'll discover next!
            </TextExpander>
        </div>
    );
}

const expanderStyle = {
    color: "#ffffff",
};

function TextExpander({
    children,
    color = "#2b8a3e",
    count = 50,
    expandTxt = "show more",
    collapseTxt = "show less",
    expanded = false,
}) {
    const spanStyle = {
        cursor: "pointer",
        letterSpacing: "2px",
        color,
        marginLeft: "5px",
    };

    const [expand, setExpand] = useState(expanded);

    return (
        <div style={expanderStyle}>
            {!expand ? (
                <>
                    {children.slice(0, count)}
                    <span
                        onClick={() => setExpand((exp) => !exp)}
                        style={spanStyle}
                    >
                        ...{expandTxt}
                    </span>
                </>
            ) : (
                <>
                    {children}
                    <span
                        onClick={() => setExpand((exp) => !exp)}
                        style={spanStyle}
                    >
                        ...{collapseTxt}
                    </span>
                </>
            )}
        </div>
    );
}
