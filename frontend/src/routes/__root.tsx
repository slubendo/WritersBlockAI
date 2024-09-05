import { createRootRoute, Link, Outlet } from '@tanstack/react-router'



export const Route = createRootRoute({
    component: Root,
  });


  function Root() {
    interface Section {
        id: number;
        name: string;
      }
      
      const sections: Section[] = [
        { id: 1, name: "Fiction" },
        { id: 2, name: "Life Style" },
        { id: 3, name: "News"},
        { id: 4, name: "Entertainment" },
      ];

  return (
    <div className="bg-slate-200">
        <main className="flex flex-col max-w-screen-xl mx-auto min-h-screen">

        <header className="flex items-center justify-between py-2 border-b">
          <Link href="#" className="px-2 lg:px-0 uppercase font-bold text-purple-800">
            LOGO
          </Link>
          <ul className="inline-flex items-center">
            <li className="px-2 md:px-4">
              <Link to="/" className="text-gray-500 font-semibold hover:text-purple-500"> Home </Link>
            </li>
            <li className="px-2 md:px-4">
              <Link to="/ai" className="text-gray-500 font-semibold hover:text-purple-500"> WritersBlockAI </Link>
            </li>
            <li className="text-gray-500">
                |
            </li>
            {sections.map((section:Section) => (
            <li key={section.id} className="px-2 md:px-4">   
              <Link to={`/section/${section.name}` as "/section/$section"} params={{ section: section.name }} className="text-gray-500 font-semibold hover:text-purple-500"> {section.name} </Link>
            </li>
            ))}
          </ul>
        </header>
      <hr />
      <Outlet />


      <footer className="start-end self-end border-t mt-12 pt-12 pb-32">
          <div className="flex justify-around">
            <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
              <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
              <ul>
                <li> <Link href="#" className="block text-gray-600 py-2 hover:text-purple-600">Home</Link> </li>
                <li> <Link href="#" className="block text-gray-600 py-2 hover:text-purple-600">WriterBlockAI</Link> </li>
                <li> <Link href="#" className="block text-gray-600 py-2 hover:text-purple-600">GitHub</Link> </li>
              </ul>
            </div>

            <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
              <h6 className="font-semibold text-gray-700 mb-4">Blogs</h6>
              <ul>
              {sections.map((section:Section) => (
            <li key={section.id} className="">   
              <Link to={`/section/${section.name}` as "/section/$section"} params={{ section: section.name }} className="block text-gray-600 py-2 hover:text-purple-600"> {section.name} </Link>
            </li>
            ))}            
              </ul>
            </div>


            <div className="flex flex-wrap first:w-full lg:w-2/5">
                <p className="justify-start w-full text-gray-600  lg:block p-0 lg:pr-12">
                  Boisterous he on understood attachment as entreaties ye devonshire. 
                  In mile an form snug were been sell.
                  Extremely ham any his departure for contained curiosity defective. 
                  Way now instrument had eat diminution melancholy expression sentiments stimulated. 
                </p>
                <div className="w-full flex justify-end g:block p-0 lg:pr-12">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
                    className="h-10 w-10 rounded-full object-cover"
                    alt="Author"
                    />
                </div>
            </div>

          </div>
        </footer>   

        </main>    
    </div>
  )
}