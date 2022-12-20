import { useStopwatch } from "react-timer-hook";

function StopWatch() {

    // const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({ autoStart: true });
    const { seconds, minutes, } = useStopwatch({ autoStart: true });
    return (
        <div style={styles.component}>
            {/* <h1>countUp Timer</h1> */}
            <div style={styles.timerBox}>
                <span style={styles.countString}>{minutes}:</span>
                <span style={styles.countString}>{seconds}</span>
            </div>
            {/* <p>{isRunning ? "Running..." : "Not running..."}</p> */}
            {/* <button
            onClick={reset as unknown as React.MouseEventHandler<HTMLButtonElement>}>
                Reset
            </button>
            <button
            onClick={start as unknown as React.MouseEventHandler<HTMLButtonElement>}>
                start
            </button>
            <button
            onClick={pause as unknown as React.MouseEventHandler<HTMLButtonElement>}>
                pause
            </button> */}
        </div>
    );
};

const styles : {[key: string]: React.CSSProperties} = {
    component:{
        padding: 10,
        margin: 5,
        width: "fit-content",
        border: "solid",
        borderRadius:1000
    },
    timerBox:{
        // width: "fit-content",
        // border: "solid",
        // borderWidth: 2,
        // borderRadius: 15,
    },
    countString:{
        fontSize: 30,
        fontWeight:10,
        fontFamily:"fantasy",
    },
}
export default StopWatch;