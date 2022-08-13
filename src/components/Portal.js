import React from 'react';
import "./styles/Portal.css";

const Portal = () => {

    let chispa = document.createElement('div');
    chispa.className="chispa";
    chispa.style.rotate=i *2+ 'deg';
	let chispaTranslation=
		math.random()*
		(120 - 100)+100;
    	chispa.style.transform=
        'translate('+chispaTranslation+'px)';





    return (
        <div id="portal">Portal</div>
        

    )
}

export default Portal