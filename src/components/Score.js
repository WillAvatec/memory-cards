
export default function Score ({score,highS}) {

    return (
        <div>
            <div id="actual">
                Score: {score}
            </div>
            <div id="high">
                Best Score: {highS}
            </div>
        </div>
    )
}
