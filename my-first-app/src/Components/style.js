import React from 'react';
// import './Style.css';
import './Style.css';

function Style(props) {

    let className = props.heading ? 'heading' : '';
return (
<div>
<h1 className={`${className}  large-font`}>Styles for react Compomnents</h1>
{/* <h1 className='heading'>Styles for react Compomnents</h1> */}
    </div>
);
}
export default  Style;