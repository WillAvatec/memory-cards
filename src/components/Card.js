export default function Card ({handleClick,refID,color,altProp,srcUrl}){

    const onClick = () =>{
        handleClick(refID)
    }

    return (
        <div>
            <div className="card">
                <img alt={altProp}
                src={srcUrl}
                onClick={onClick}
                style={{width:'200px',height:'300px',backgroundColor:color,margin:'30px'}}
                />
            </div>
        </div>
    )
}