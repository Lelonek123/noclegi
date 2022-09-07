import React from "react";

const quotes = [
    "Some inspiring quote...",
    "Other inspiring quote...",
    "And another one...",
];

function InspiringQuote(props) {
    const [quote, setQuote] = React.useState("Loading quotes...");
    const [firstRender, setFristRender] = React.useState(true)
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    React.useLayoutEffect(() => {
        if (!firstRender) {
            setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        } else {
            setFristRender(!firstRender);
        }
    }, [loading])

    return (
        <p
            style={{
                color: "white",
                fontWeight: "bold",
                marginLeft: "10px",
            }}
        >
            {quote}
        </p>
    );
}

export default InspiringQuote;
