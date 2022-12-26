
import React from "react";

const Circleprogress = () => {
    const [progressVal, setProgressVal] = React.useState(50)
    const [pctValue, setPctValue] = React.useState(0)
    const circleRadius = 17;
    const dynamicProgressVal = (e) => {
        setProgressVal(e.target.value)
    }
    React.useEffect(() => {
        // var $circle = $('#svg #bar');
        if (isNaN(progressVal)) {
            setProgressVal(100);
        }
        else {
            var c = Math.PI * (circleRadius * 2);

            if (progressVal < 0) { progressVal = 0; }
            if (progressVal > 100) { progressVal = 100; }

            setPctValue(((100 - progressVal) / 100) * c);
            console.log(pctValue)
            setTimeout(() => {
                setProgressVal(0);
                setPctValue(((100 - progressVal) / 100) * c);
                console.log(pctValue)
            }, 2000);

            //   $circle.css({ strokeDashoffset: pct});
        }
    }, progressVal)

    return (
        <>
            <div className="cont" data-pct={progressVal}>
                <svg className="svg" width="40" height="40" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle r={circleRadius} cx="20" cy="20" fill="transparent" stroke-dasharray="53.40" stroke-dashoffset="0"></circle>
                    <circle className="bar" r={circleRadius} cx="20" cy="20" fill="transparent" stroke-dasharray="53.40" stroke-dashoffset="0" style={{strokeDashoffset: pctValue + "px"}}></circle>
                </svg>
            </div>
            {/* <input onChange={dynamicProgressVal} type="number" /> */}
        </>
    )
}

export default Circleprogress

