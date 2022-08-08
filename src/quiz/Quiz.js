/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import './quizcss/quiz.css';

export default function Quiz({ data }) {
  const [currentQue, setCurrentQue] = useState(0);
  const [sro, setSro] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [time, setTime] = useState(30);

  // This is the Function for Next Question Button
  const nextQueButton = () => {
    const nextQue = currentQue + 1;
    setCurrentQue(nextQue);
  };

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      setTime(30 - 1);
      if (time > 0) {
        setTime(time - 1);
      }
      if (time === 0) {
        const nextQue = currentQue + 1;
        if (currentQue < data.length) {
          setCurrentQue(nextQue);
        } else {
          setTime(0);
        }
      }
    }, 1000);
  }, [time]);

  // Option Button
  const optionButton = (item) => {
    if (item.option === data[currentQue].answer) {
      setSro(sro + 1);
    } else {
      setWrong(wrong + 1);
    }
  };

  // jsx code
  return (
    <div className="main">
      <div className="frame">
        <h1 className="h1tag">Bootstrap Quiz</h1>
        <h4>
          <span>Question Total:</span>
          {data.length}
        </h4>
        <br />
        <div>
          {currentQue < data.length
            ? (
              <div className="questiondiv">
                <h2>
                  <br />
                  {data[currentQue].question}
                </h2>
                <div>
                  <div className="quediv">
                    <br />
                    {data[currentQue].ansOption.map((item, index) => <button type="button" className="quediv1" onClick={() => optionButton(item)} key={index}>{item.option}</button>)}
                  </div>
                  <br />
                </div>
                <br />
                <div className="timerdiv">
                  <span>{time}</span>
                  <button type="button" className="btn btn-success" onClick={nextQueButton}>Next</button>
                </div>
                <br />
              </div>
            )
            : (
              <div className="questiondiv">
                <h2>
                  <br />
                  Right:
                  {sro}
                  <br />
                  <br />
                  Wrong:
                  {wrong}
                  <br />
                  <br />
                </h2>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
