import Header from '../components/Header/Header'
import JobsList from '../components/JobsList/JobsList'
import useFetch from '../hooks/useFetch'

const FindJobPage = () => {
  const { data: jobs, isPending, error } = useFetch('http://localhost:5173/jobs')
  return (
    <div>
      <Header />
      <h2>Find Job</h2>
      <section>
      {error && <p>{error}</p>}
            {isPending && <p>Loading users...</p>}
            {jobs && <JobsList jobs={jobs} />}
      </section>
    </div>
  )
}

export default FindJobPage