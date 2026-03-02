import React from 'react'

const Blog = () => {
  return (
    <main className='max-w-5xl mx-auto px-4 py-10 bg-[#0F766E]'>
        <h1 className='text-3xl font-bold text-center mt-10 text-[#575350]'>Blog</h1>

        <section>
            <h2 className='text-2xl font-semibold text-[#575350] mt-10 mb-4'>Latest Posts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='bg-white rounded-lg shadow-md p-6'>
                    <h3 className='text-xl font-semibold mb-2'>Post Title 1</h3>
                    <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className='text-blue-500 hover:underline'>Read More</a>
                </div>
                <div className='bg-white rounded-lg shadow-md p-6'>
                    <h3 className='text-xl font-semibold mb-2'>Post Title 2</h3>
                    <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className='text-blue-500 hover:underline'>Read More</a>
                </div>
                <div className='bg-white rounded-lg shadow-md p-6'>
                    <h3 className='text-xl font-semibold mb-2'>Post Title 3</h3>
                    <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className='text-blue-500 hover:underline'>Read More</a>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Blog