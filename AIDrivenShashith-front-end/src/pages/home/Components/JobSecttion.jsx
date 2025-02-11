import JobCard from "@/components/shared/JobCard";

function JobSection() {
  const jobs = [
    {
      _id: "xyz",
      title: "Intern - Software Engineer",
      type: "Full-time",
      location: "Remote",
    },
    {
      _id: "abc",
      title: "Software Engineer",
      type: "Full-time",
      location: "Colombo, Sri Lanka",
    },
    {
      _id: "abc",
      title: "Software Architect",
      type: "Hybrid",
      location: "Rajagiriya, Sri Lanka",
    },
  ];

  return (
    <section className="py-10 ">
      <h2 className="ml-10 text-4xl ">Available Jobs</h2>
      <div className="mt-8 flex flex-col gap-y-10 ml-9 mr-9">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job._id}
              title={job.title}
              _id={job._id}
              type={job.type}
              location={job.location}
            />
          );
        })}
      </div>
    </section>
  );
}

export default JobSection;
