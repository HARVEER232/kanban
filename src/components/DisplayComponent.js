import react, { useState } from 'react';
import './DisplayComp.css'
function DisplayComponent(props) {
    const status = ["None", "Status", "User"]
    const priority = ["None", "Priority", "P1", "P2", "P3", "P4", "P5"];
    const [selectStatus, setSelectStatus] = useState(status[0])
    const [selectPriority, setSelectPriority] = useState(priority[0])
    props.sendStatusValue(selectStatus, selectPriority)
    const harveer = () => {
        props.closeSettingModal()
    }
    return (
        <div className="displayComponent">
            <button onClick={harveer} className="closeButton" >X</button>
            <div className="GroupingMain">
                <div>
                    Grouping
                </div>
                <div >
                    <select className="selectDropDown" onChange={(e) => setSelectStatus(e.target.value)}>
                        {status.map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="OrderingMain">
                <div>
                    Ordering
                </div>
                <div>
                    <select className="selectDropDown" onChange={(e) => setSelectPriority(e.target.value)}>
                        {priority.map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default DisplayComponent;