import { useEffect, useState } from "react";
import JobBtn from "./JobBtn";
import JobInfo from "./JobInfo";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState();
  const [value, setValue]= useState(0)
  

  const url = "https://course-api.com/react-tabs-project";

  useEffect(() => {
    const fetchJob = async () => {
      const response = await fetch(url);
      const jobData = await response.json();
      setJobs(jobData);
      setLoading(false);
    };
    fetchJob()
  }, []);
  console.log(jobs);

  return (
    <div className="App">
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        {loading ? (
          "loading..."
        ) : (
          <div className="jobs-center">
            <JobBtn jobs={jobs} setValue={setValue} value={value} />
            <JobInfo jobs={jobs} value={value}/>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
