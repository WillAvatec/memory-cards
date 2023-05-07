export default function Card ({handleClick,refID,color,altProp,srcUrl}){

    const onClick = () =>{
        handleClick(refID)
    }

    return (
        <div>
            <div 
            className="card"
            style={{backgroundColor:color}}
            >
                    <img alt={altProp}
                        src={srcUrl}
                        onClick={onClick}
                        loading="lazy"
                    />
            </div>
        </div>
    )
}