import { FaCheck, FaTimes } from "react-icons/fa";

function Card(props) {
 
  const hasCrossMark = props.Data.some(item => !item.value);
  const buttonBackgroundColor = hasCrossMark ? '#7caef6' : '#007bff';

  return (
    <div className="col ">
      <div className="card " style={{ textAlign: 'center', borderRadius: '18px',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.4)'}}>

        <div className="card-body ">
          <h6 className="card-title" style={{ color: 'Gray' ,letterSpacing:'2px'}}><b>{props.name}</b></h6>
          <h1>{props.pack}</h1>
          <br></br>
          <hr></hr>
          <ul className="card-text" style={{ textAlign: 'left', lineHeight: 2.4, listStyleType: 'none' }}>
            {props.Data && props.Data.map((item, index) => (
              <li key={index}>
                {item.value ? (
                  <span>
                    <FaCheck className="icon" style={{ color: 'black',textIndent:'5px' }} />
                    <span style={{ color: 'black', paddingLeft:'10px'}}>{item.text}</span>
                  </span>
                ) : (
                  <span>
                    <FaTimes className="icon" style={{ color: 'gray' }} />
                    <span style={{ color: 'gray', paddingLeft:'10px' }}>{item.text}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="d-grid ">
            <button className="btn" style={{ backgroundColor: buttonBackgroundColor,color:'white', height:'50px', borderRadius: '40px', fontSize: '10px',letterSpacing:'2px'}}><b>BUTTON</b></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
