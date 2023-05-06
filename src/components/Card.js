export default function Card (props){

    const onClick = () =>{
        props.handleClick(props.refID)
    }

    return (
        <div>
            <div 
            className="card" 
            style={{width:'100px',height:'100px',backgroundColor:'red',margin:'20px'}}
            onClick={onClick}
            >
                {props.refID}
            </div>
        </div>
    )
}