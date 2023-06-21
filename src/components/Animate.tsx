import { useState } from "react";
import firstImage from './AnimateImages/first.png'
import secondImage from './AnimateImages/second.png'
import thirdImage from './AnimateImages/third.png'
import fourthImage from './AnimateImages/fourth.png'
import fifthImage from './AnimateImages/fifth.png'
import sixthImage from './AnimateImages/sixth.png'
import seventhImage from './AnimateImages/seventh.png'
import eigthImage from './AnimateImages/eighth.png'
import ninthImage from './AnimateImages/ninth.png'
import tenthImage from './AnimateImages/tenth.png'
import eleventhImage from './AnimateImages/eleventh.png'
import twelfthimage from './AnimateImages/twelfth.png'

const Animate = () => {
    let [clickCounter, setClickCounter] = useState(0);
    let myImage = ''
    const handleClick = () => {
      clickCounter += 1;
      setClickCounter(clickCounter);
      
    };
    switch(clickCounter) {
            case 0:
                myImage = firstImage
                break;
            case 1:
                myImage = secondImage
                break;
            case 2:
                myImage =thirdImage
                break;
            case 3:
                myImage = fourthImage
                break;
            case 4:
                myImage = fifthImage
                break;
            case 5:
                myImage = sixthImage
                break;
            case 6:
                myImage = seventhImage
                break;
            case 7:
                myImage = eigthImage
                break;
            case 8:
                myImage = ninthImage
                break;
            case 9:
                myImage = tenthImage
                break;
            case 10:
                myImage = eleventhImage
                break;
            case 11:
                myImage = twelfthimage
                break;
            default:
                clickCounter = 0;
                myImage= firstImage
        }
    return (
      <>
        <div className="Animate">
            <button onClick={handleClick}>Animate</button>
            <img src={myImage} />
        </div>
        
      </>
    );
  };

export default Animate