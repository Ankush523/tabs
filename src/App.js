import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const url = 'https://course-api.netlify.app/api/react-tabs-projects';
function App() {

  const[loading,setLoading] = useState(true)
  const[jobs,setJobs] = useState([])
  const[value,setValue] = useState(0)

  const fetchJobs = async() => {
    const response = await fetch(url)
    const newJob = await response.json()
    setJobs(newJob)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs();
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
