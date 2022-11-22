import React from 'react'

export default function Questions() {
  return (
    <div className="flex justify-center mt-24 mb-24">
        <ol className="text-center text-3xl">
            <li><h1 className="text-5xl mb-8 text-green-300">Questions</h1></li>
            <li className="mb-8">
                <h3>What do you think of Next.js?</h3>
                <p className="text-green-300 text-left text-2xl m-auto mt-5 w-3/4 leading-10">
                    I really enjoy using Next.js. I like the simple page based routing system. I am excited to try out the new /app directory feature that was released in Next.js 13 to see how the more advanced routing capabilities work. The pre-rendering and image optimization components are great for performance, although I still need to get on some bigger projects to feel the full effect. I am still learning and developing my skills with Next.js, but if I am making a React app, there is a good chance I am using Next.js as well.</p>
            </li>
            <li className="mb-8">
                <h3>How do you manage state in your apps? Please explain.</h3>
                <p className="text-green-300 text-left text-2xl m-auto mt-5 w-3/4 leading-10">
                    The most common way I manage state is using the useState hook. For example, on the <a className="underline decoration-solid decoration-white underline-offset-4" href="https://github.com/burd5/skycatchfire-mockup/blob/main/src/components/Portfolio.js">Portfolio</a> and <a className="underline decoration-solid decoration-white underline-offset-4" href="https://github.com/burd5/skycatchfire-mockup/blob/main/src/components/TeamMembers.js">Team Member</a> pages, I utilized the useState hook when getting the docs from the firebase database. I also used the useState hook to store the title and post date when adding insights to the database. I often use the url state when I want to add an "active" class to the current nav tab. On my <a className="underline decoration-solid decoration-white underline-offset-4" href="https://github.com/burd5/tea-time">Tea Time</a> app, I am using state to keep track of the form answers. All of these examples could be considered local state because they are managed inside a component. For more complex, global state, context API's are a popular choice. Redux has been on my to learn list for a while now so that will be the next thing I add to my "state" toolbelt.</p>
            </li>
            <li className="mb-8">
                <h3>What's your experience with Firebase?</h3>
                <p className="text-green-300 text-2xl text-left m-auto mt-5 w-3/4 leading-10">
                    I have heard of Firebase before but never used it myself. So I took the opportunity to make this app to get a better feel for it. I use MongoDB for almost all of my projects so Firebase's NoSQL database felt really comfortable. I set up a couple different collections for the Insights, Portfolio, and Team Members page. I did some basic CRUD requests to practice using the firebase database. I also deployed the website using Firebase's built in service. Firebase seems like a useful tool for quickly getting apps into production. There is a heavy focus on analytics and SEO's which makes it a good option when creating websites for businesses. 
                </p>
            </li>
            <li className="mb-4">
                <h3>What's your experience with TailwindCSS?</h3>
                <p className="text-green-300 text-2xl text-left m-auto mt-5 w-3/4 leading-10">
                    Tailwind CSS is probably my favorite CSS framework (along with Materialize CSS). I love how intuitive most of the utilities are and it feels more efficient to have everything all in one spot, although some may argue that it violates the "separation of concerns" principle and can crowd a file if a lot of styling is applied. There is a lot of support for Tailwind and I have enjoyed using third party plugins and themes like Daisy UI. I feel really comfortable using Tailwind CSS and it has quickly become the keystone of my styling stack. 
                </p>
            </li>
        </ol>
    </div>
  )
}
