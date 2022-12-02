import React from "react";

const NavigationBtn = (props) => {
    const buttons = [
        { buttonID: 1, buttonName: "Tab Button-1" },
        { buttonID: 2, buttonName: "Tab Button-2" },
        { buttonID: 3, buttonName: "Tab Button-3" },
        { buttonID: 4, buttonName: "Tab Button-4" },
        { buttonID: 5, buttonName: "Tab Button-5" },
    ]
    return (
        <div>
            <div className="nav-section">
                <div className="nav-container">
                    <div className="button-container">
                        {
                            buttons.map((btn, index) => {
                                return (
                                    <div key={btn.buttonID}>
                                        <button>{btn.buttonName}</button>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}
export default NavigationBtn;