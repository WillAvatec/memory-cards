
export default function Score ({score,highS}) {

    return (
        <div className="score">
            <div id="actual">
                Score: {score}
            </div>
            <div id="high">
                Best Score: {highS}
            </div>
        </div>
    )
}
