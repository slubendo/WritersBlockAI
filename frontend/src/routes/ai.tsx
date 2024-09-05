import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ai')({
  component: AI,
});
function AI() {
  return (
    <div className='min-h-svh max-w-screen-xl'>
          <div className="mb-4 md:mb-0 w-full max-w-screen-xl mx-auto relative" style={{ height: '20em' }}>
            <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{ backgroundImage: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, .7))' }}></div>
            <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="absolute left-0 top-0 w-full h-full z-0 object-cover" alt="Background" />
            <div className="p-8 absolute bottom-0 left-0 z-20">
              <h2 className="text-6xl relative left-0 font-semibold text-gray-100 leading-tight">
               Writers Block AI
              </h2>
              <p className="text-3xl p-1 text-gray-100 leading-tight">
                Generate a unique writing prompt with the help of AI.
              </p>
            </div>
          </div>

          <div className="flex justify-center p-1 mt-4 mb-4">
            
            <form className='flex flex-col items-center w-3/5 bg-white border rounded-xl py-2 px-4 border-slate-400'>
              <div className='flex flex-col w-full'>
                <h3 className="text-xl font-bold mb-2">Select Genre</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-12 w-full">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="genre-1" name="genre" value="Action" />
                    <label htmlFor="genre-1">Action</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="genre-2" name="genre" value="Comedy" />
                    <label htmlFor="genre-2">Mystery</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="genre-3" name="genre" value="Drama" />
                    <label htmlFor="genre-3">Fantasy</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="genre-4" name="genre" value="Romance" />
                    <label htmlFor="genre-4">Sci-Fi</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="genre-5" name="genre" value="Sci-Fi" />
                    <label htmlFor="genre-5">Thriller</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="genre-6" name="genre" value="Horror" />
                    <label htmlFor="genre-6">Horror</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="genre-7" name="genre" value="Documentary" />
                    <label htmlFor="genre-7">Comedy</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="genre-8" name="genre" value="Animation" />
                    <label htmlFor="genre-8">Tragedy</label>
                  </div>
                </div>
              </div>

              <div className='flex flex-col w-full mt-2'>
                <h3 className="text-xl font-bold mb-2">Select Setting</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-12 w-full">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="setting-1" name="setting" value="Urban" />
                    <label htmlFor="setting-1">City</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="setting-2" name="setting" value="Rural" />
                    <label htmlFor="setting-2">Suburban</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="setting-3" name="setting" value="Suburban" />
                    <label htmlFor="setting-3">Farm</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="setting-4" name="setting" value="Fantasy Realm" />
                    <label htmlFor="setting-4">Forest/Jungle</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="setting-5" name="setting" value="Sci-Fi City" />
                    <label htmlFor="setting-5">Medieval</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="setting-6" name="setting" value="Historical" />
                    <label htmlFor="setting-6">Futuristic</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="setting-7" name="setting" value="Post-Apocalyptic" />
                    <label htmlFor="setting-7">Post-Apocalyptic</label>
                  </div>
                </div>
              </div>

              <div className='flex flex-col w-full mt-2'>
                <h3 className="text-xl font-bold mb-2">Plot Twist</h3>
                <div className="flex justify-between w-1/3 gap-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="twist-1" name="plot-twist" value="yes" />
                    <label htmlFor="twist-1">Yes!</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="twist-2" name="plot-twist" value="no" />
                    <label htmlFor="twist-2">No</label>
                  </div>
                </div>
              </div>

              <div className='flex justify-end w-full mt-1'>
                <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded capitalize tracking-wide mr-2">
                  Generate
                </button>
                <button className="px-4 py-2 bg-green-700 text-gray-200 rounded capitalize tracking-wide">
                  Random
                </button>
              </div>
            </form>

          </div>

          <p className='text-xl text-start  w-4/5 mx-auto mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor dicta ratione pariatsunt, ex voluptatem totam incidunt eaque! Dolores, iusto nesciunt!</p>

          <form className='flex justify-center mt-10'>
            <textarea name="" id="" placeholder='Start Writing' className='text-2xl resize-none w-4/5 min-h-screen mx-auto border rounded-xl py-2 px-4 border-slate-400 outline-none' cols={30} rows={10}></textarea>
          </form>
   
    </div>
    )
}

export default AI;