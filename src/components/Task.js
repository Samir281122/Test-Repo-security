import React, { useState } from "react";
import './style.css'
const Task = () => {
  const [trueFalse, setTrueFalse] = useState(false)
  const [check, setCheck] = useState("");
  const buttons = [
    { buttonID: 1, buttonName: "Tab Button-1", status:false },
    { buttonID: 2, buttonName: "Tab Button-2", status:false },
    { buttonID: 3, buttonName: "Tab Button-3", status:false },
    { buttonID: 4, buttonName: "Tab Button-4", status:false },
    { buttonID: 5, buttonName: "Tab Button-5", status:false },
  ]  
  const [data, setData] = useState(buttons);

  const changeComp = (e, check) => {
    setTrueFalse(e);
    setCheck(check.buttonName);
    const newState = buttons.map((item, index)=>{
      if(item.buttonID === check.buttonID){
        return {...item, status: true};
      }
      return item;
    })
    setData(newState);
    console.log(data)
  };
  return (
    <div>

      <div className="nav-section">

        <div className="nav-container">
          <div className="nav-button">
            {data.map((item, index) => {
              return (
                <div key={item.buttonID}>
                  <button className={item.status?"status":"btn-tab"}onClick={() => changeComp(true, item)}>
                    {item.buttonName}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {trueFalse && check === "Tab Button-1" ? <div className="page-section">
        <div className="page-container">
          <span className="page-content">
            GitHub, Inc. is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. Wikipedia
          </span>
        </div>
      </div> :
        null}
      {trueFalse && check === "Tab Button-2" ? <div className="page-section"><div className="page-container">
        <span className="page-content">
          Tweet
          See new Tweets
          Conversation
          GitHub
          @github
          Developers write the code that introduces vulnerabilities and they write the code that fixes them. And developers have the power to prevent vulnerabilities from being introduced in the first place. Learn how GitHub security can help you stay secure.
        </span>
      </div>
      </div> : null}
      {trueFalse && check === "Tab Button-3" ? <div className="page-section">
        <div className="page-container">
          <span className="page-content">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
          </span>
        </div>
      </div> : null}
      {trueFalse && check === "Tab Button-4" ? <div className="page-section">
        <div className="page-container">
          <span className="page-content">
            them. And developers have the power to prevent vulnerabilities from being introduced in the first place. Learn how GitHub security can help you stay secure.orem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
          </span>
        </div>
      </div> :
        null}
        {trueFalse && check === "Tab Button-5" ? <div className="page-section">
        <div className="page-container">
          <span className="page-content">
          @github
          Developers write the code that introduces vulnerabilities and they write the code that fixes them. And developers have the power to prevent monstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
          </span>
        </div>
      </div> :
        null}
    </div>
  );
};
export default Task;
