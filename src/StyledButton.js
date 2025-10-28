import React, {useState} from 'react';

const StyledButton = ({isDisabled}) => {
   // variable to conditionally disable the button - {isDisable} here means or equal lift-state-up

  const [isHovered, setIsHovered] = useState(false);

  // style object = {}
    const styleAtt = {
      color: 'green', 
      width: '8rem',
      padding: '0.3rem',
      borderRadius: '8px'
    };

    const hoverStyle = {
      
       backgroundColor: isHovered ? 'lightblue' : 'white', // Dynamically update background color based on isDisabled
      cursor: isHovered ? 'pointer' : 'default'
    };

    // Combine style objects
    const combineStyle = {
      ...styleAtt,
      ...hoverStyle
    }
     
    styleAtt.backgroundColor = isDisabled ? 'lightgray' : 'white';

  return (
    <div>
      <h1 style={{textAlign: 'center', 
        color: 'blue', 
        padding: '0.3rem', 
        backgroundColor: 'lightgreen'}}
        >
          Styled Button Practical Activity
        </h1>


        <button className='styled btn'
            disabled={isDisabled} 
            value={'styled button'}
            style={combineStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
         >
          Styled Button
        </button>
    </div>
  )
};

const ChangeIsDisabled = () => {
  const [isDisabled, setIsDisabled] = useState(true)
  return (
    <div>
       <StyledButton isDisabled={isDisabled} />
      <button style={{borderRadius: '8px', fontSize: '12px'}} onClick={() => setIsDisabled(prev => !prev)}>
        {isDisabled ? 'Toggle to Enable' : 'Toggle to Disable'}
      </button>
      <p>Status: {isDisabled ? 'Disabled' : 'Enabled'}</p>
    </div>
  )
};

export default ChangeIsDisabled;

