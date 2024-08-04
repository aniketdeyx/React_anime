import React, { useEffect, memo } from "react";

const PureExample = memo(({ text }) => {
    useEffect(() => {
        console.log("PureExample Mounted...");
    }, []);

    console.log("PureExample Rendered...");
    return <h1>{text}</h1>;
});

export default PureExample;
