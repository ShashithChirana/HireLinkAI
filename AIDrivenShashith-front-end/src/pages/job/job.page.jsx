import Navigation from "@/components/Shared/Navigation";

function JobPage() {
 
    const params=useParams();

    return (
    <main className='p-4'>
      <h1 className="text-2xl">Job Page</h1>
      <p>{params.id}</p>
    </main>
  );
}

export default JobPage;