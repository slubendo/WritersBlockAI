import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/section/$section')({
  component: Section,
});

function Section() {
  const { section } = Route.useParams();

  return (
    <div className="bg-slate-200">
      {/* component */}
      <div className="max-w-screen-xl mx-auto">

        <main className="mt-12">
          <div className="flex sm:flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mb-12">

            <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
              <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded-md object-cover w-full h-64" alt="Main Post" />
              <span className="text-green-700 text-sm hidden md:block mt-4"> Technology </span>
              <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
                Ignorant branched humanity led now marianne too.
              </h1>
              <p className="text-gray-600 mb-4">
                Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood
                decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple
                itself. Oh be me, sure wise sons, no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up.
              </p>
              <a href="#" className="inline-block px-6 py-3 mt-2 rounded-md bg-indigo-600 text-gray-100">
                Read more
              </a>
            </div>

            {/* sub-main posts */}
            <div className="w-full md:w-4/7">
              {/* post 1 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" alt="Post 1" />
                <div className="bg-white rounded px-4">
                  <span className="text-green-700 text-sm hidden md:block"> Gadgets </span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    At every tiled on ye defer do. No attention suspected oh difficult.
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or
                  </p>
                </div>
              </div>

              <div className="rounded w-full flex flex-col md:flex-row mb-10">
                <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" alt="Post 2" />
                <div className="bg-white rounded px-4">
                  <span className="text-green-700 text-sm hidden md:block"> Bitcoin </span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Fond his say old meet cold find come whom. The sir park sake bred.
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Integer commodo, sapien ut vulputate viverra, Integer commodo Integer commodo, sapien ut vulputate viverra, Integer commodo
                  </p>
                </div>
              </div>

              <div className="rounded w-full flex flex-col md:flex-row mb-10">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" alt="Post 3" />
                <div className="bg-white rounded px-4">
                  <span className="text-green-700 text-sm hidden md:block"> Insights </span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Advice me cousin an spring of needed. Tell use paid law ever yet new.
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. 
                  </p>
                </div>
              </div>

              <div className="rounded w-full flex flex-col md:flex-row mb-10">
                <img src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" alt="Post 4" />
                <div className="bg-white rounded px-4">
                  <span className="text-green-700 text-sm hidden md:block"> Cryptocurrency </span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Advice me cousin an spring of needed. Tell use paid law ever yet new.
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. 
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* recent posts */}
          <div className="flex mt-4 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl">Latest</h2>
            <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">

            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="Recent Post 1" />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">Put all speaking her delicate recurred possible.</h2>
                <p className="text-gray-700 mt-2">
                  Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
                  So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
                </p>
                <a href="#" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </a>
              </div>
            </div>

            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="Recent Post 2" />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">Is at purse tried jokes china ready decay an. </h2>
                <p className="text-gray-700 mt-2">
                  Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. 
                  Procured shutters mr it feelings. To or three offer house begin taken am at. 
                </p>
                <a href="#" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </a>
              </div>
            </div>

            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="rounded" alt="Recent Post 3" />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
                <p className="text-gray-700 mt-2">
                  Alteration connection to so as collecting me. 
                  Difficult in delivered extensive at direction allowance. 
                  Alteration put use diminution can considered sentiments interested discretion.
                </p>
                <a href="#" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </a>
              </div>
            </div>

          </div>

        </main>

      </div>
    </div>
  );
}

export default Section;
