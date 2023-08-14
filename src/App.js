import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Priority from './components/Priority'
import Users from './components/Users'
import DisplayComponent from './components/DisplayComponent'
import WelcomePage from './components/WelcomePage/WelcomePage'
function App() {
  const [showPriority, setShowPriority] = useState(false);
  const [showUsers, setShowUsers] = useState(false)
  const [showDisplayButton, setShowDisplayButton] = useState(false)
  const [apidata, setApiData] = useState([]);
  useEffect(() => {
    const url = "https://apimocha.com/quicksell/data";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const resData = await response.json();
        setApiData(resData)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [])
  const setDisplayBtnValue = () => {
    setShowDisplayButton(!showDisplayButton)
  }
  const harveer = (status, priority) => {
    if (status === "Status" && priority === "Priority") {
      setShowPriority(true)
      setShowUsers(false)
    } else if (status === "User") {
      setShowUsers(true)
      setShowPriority(false)
    }

  }
  const closeSettingModal = () => {
    setShowDisplayButton(!showDisplayButton)

  }
  return (
    <div className="App">
      <div className="displayDropdown">
        <button onClick={setDisplayBtnValue} className="displayButton">Display</button>
      </div>
      {showDisplayButton && <DisplayComponent sendStatusValue={harveer} closeSettingModal={closeSettingModal} />}
      <div className="dataMainDiv">
        {showPriority ?
          <Priority cardData={apidata} />
          : showUsers ? <Users cardData={apidata} /> :
            <WelcomePage />
        }
      </div>
    </div>
  );
}

export default App;
