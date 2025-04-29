import React from 'react';
import Style from './style';
function Inline() {
    const heading = {
        fontSize: '72px',
        color: 'orange',
        backgroundColor: 'black',
        textAlign: 'center',
    
    }
return (
    <div>
<h1 className='Regularcss'>Regular Style</h1>
<h1 style={heading}>Inline Style for react componenets</h1>
<h1 className={Styles.moduless}>Css module style</h1>
    </div>
)
}export default Inline;
