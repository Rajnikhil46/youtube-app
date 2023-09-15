import React, { useState , useEffect} from 'react'
import Disp from './Disp';
import Table from './Table';

const App = () => {
  const [isVisible, setVisible] = useState(false)
  const [currentVideo,setcurrentVideo]=useState({})

  const [data, setData] = useState([])


  useEffect(() => {
      fetch("http://localhost:3000/data").then(res => res.json()).then(data => setData(data))


  }, [])


  return (
    <div>
      {isVisible && (<Disp isVisible={isVisible} setVisible={setVisible}  data={data} setData={setData}  currentVideo={currentVideo} setcurrentVideo={setcurrentVideo}/>)}
      <Table isVisible={isVisible} setVisible={setVisible} data={data} setData={setData} currentVideo={currentVideo} setcurrentVideo={setcurrentVideo}/>

    </div>
  )
}

export default App
