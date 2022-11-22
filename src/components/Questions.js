import React from 'react'

export default function Questions() {
  return (
    <div className="flex justify-center mt-24 mb-24">
        <ol className="text-center text-3xl">
            <li><h1 className="text-5xl mb-8 text-green-300">Questions</h1></li>
            <li className="mb-8">
                <h3>What do you think of Next.js?</h3>
                <p className="text-green-300 text-left text-2xl m-auto mt-5 w-1/2 leading-10">
                    I really enjoy using Next.js. I love the page based routing system. I am excited to try out the new /app directory that was just released in Next.js 13 to see how the more advanced routing capabilities work. The pre-rendering and image optimization components are great for performance, although I still need to get on some bigger projects to feel the full effect in action.  </p>
            </li>
            <li className="mb-8">
                <h3>How do you manage state in your apps? Please explain.</h3>
                <p className="text-green-300 text-left text-2xl m-auto mt-5 w-1/2 leading-10">
                    I manage state by...
                </p>
            </li>
            <li className="mb-8">
                <h3>What's your experience with Firebase?</h3>
                <p className="text-green-300 text-2xl text-left m-auto mt-5 w-1/2 leading-10">
                    I have heard of Firebase before but never used it myself. So I took the opportunity to make this app to get a better feel for it. I use MongoDB for almost all of my projects so Firebase's NoSQL database felt really comfortable. I set up a couple different collections for the Portfolio and Team Members page. 
                </p>
            </li>
            <li className="mb-4">
                <h3>What's your experience with TailwindCSS?</h3>
                <p className="text-green-300 text-2xl text-left m-auto mt-5 w-1/2 leading-10">
                    Tailwind CSS is probably my favorite CSS framework (along with Materialize CSS). 
                </p>
            </li>
        </ol>
    </div>
  )
}
