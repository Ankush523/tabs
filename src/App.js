import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJob = await response.json();
    setJobs(newJob);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="App">
      <div>
        <h2>Jobs</h2>
      </div>
      <div>
        <div>
          {
            jobs.map((job,index) => {
              return <button key={job.id} onClick={() => setValue(index)}>{ job.company}</button>
            })
          }
        </div>
        <h2>{title}</h2>
        <h3>{company}</h3>
        <p>{dates}</p>
        {
          duties.map((duty,index) => {
            return(
              <div key={index}>
                <p>{duty}</p>
                </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
