import React, {useState, useEffect, useCallback, useRef, useLayoutEffect} from 'react';
import ReviewsProvider from './ReviewsProvider';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function sizeLabel(size){
  return size*1.5;
}
function sizeUnit(size){
  return size*3;
}
function sizeNumber(size){
  return size*6;
}

const ReviewsBar = ({score, unit}) => {

  // const { score } = props;
  // const { unit } = props;



  return (
    
    <ReviewsProvider  valueStart={0} valueEnd={score} style={{width: "100%",height: "100%" }} >
      {(value) => (
          <CircularProgressbarWithChildren  
            value={score}
            text={`${value}`}
            circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
            styles={{
              trail: {
              //   strokeLinecap: 'butt',
                transform: 'rotate(-126deg)',
                transformOrigin: 'center center',
                stroke: "#1d144f",
              },
              path: {
              //   strokeLinecap: 'butt',
                transform: 'rotate(-126deg)',
                transformOrigin: 'center center',
                stroke: "#fff",
              },
              text: {
                display: "none",
                fill: '#fff',
                fontFamily:"Arial"
              },
              
            }}
            strokeWidth={6}
          >
              <div className="f-col f-c" >
                  <div className="f-row f-c">
                      <strong  style={{fontSize: "3em", fontFamily: '"Open Sans", Arial', fontWeight: 200}}>{score} </strong>
                      <span style={{fontSize: "1.5em",fontFamily: '"Open Sans", Arial' , color: "rgb(166, 162, 188)", fontWeight: 200, padding: 5}}>{unit}</span>
                  </div>
                  <span style={{fontSize:  "0.8em",fontFamily: '"Open Sans", Arial',marginTop: 15,color: "rgb(166, 162, 188)", fontWeight: 200}}>SPEED</span>              
              </div>
          
          </CircularProgressbarWithChildren>
        
        
      )}
    
        
    </ReviewsProvider>
  );
};

export default ReviewsBar;