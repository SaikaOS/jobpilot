import React, { FC } from 'react'

interface JobProps {
    id: number,
    title: string,
    salary: string,
    location: string
}

interface Jobs {
    jobs: JobProps[]
}

const JobsList:FC<Jobs> = ({jobs}) => {
  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>
          {job.title}
        </div>
      ))}
    </div>
  )
}

export default JobsList