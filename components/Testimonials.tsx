const testimonials = [
  {
    content: "So good! I need this right now. Congrats on the launch!",
    link: "https://twitter.com/eveporcello/status/1631438728999899136",
    author: {
      name: "Eve Porcello",
      role: "Engineer & Author",
      image: "/eve.jpg",
    },
  },
  {
    content:
      "Finally! Something to help me get over my indecisiveness when decorating my house!",
    link: "https://twitter.com/arthur_dvorkin/status/1631402865209274369",
    author: {
      name: "Arthur Dvorkin",
      role: "Engineer",
      image: "/arthur.jpg",
    },
  },
  {
    content:
      "This is incredible, you don't need an interior designer anymore.",
    link: "https://www.tiktok.com/@thenubians/video/7206088336044313861?q=roomgpt.io&t=1677909079689",
    author: {
      name: "Ade Dada",
      role: "Startup Founder",
      image: "/ade.jpeg",
    },
  },
  {
    content:
      "I haven't changed my room layout for 5 years, but this app may change that. Great job.",
    link: "https://twitter.com/RobAttfield/status/1631545265281974273",
    author: {
      name: "Rob Attfield",
      role: "Software Engineer",
      image: "/rob.jpg",
    },
  },
  {
    content:
      "This is fantastic. I've already decided on a new wall color from a generated image and repainting it is now my weekend project.",
    link: "https://twitter.com/Music4UsAll/status/1631622608595607552",
    author: {
      name: "Music",
      role: "Some dude on the internet",
      image: "/music.jpg",
    },
  },
  {
    content: "🤯",
    link: "https://twitter.com/github/status/1631821360619028482",
    author: {
      name: "GitHub",
      role: "The one and only",
      image: "/github.jpg",
    },
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10 max-w-7xl hidden md:block"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7 flex flex-col items-center justify-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto max-w-4xl font-display text-2xl font-bold tracking-normal text-[#4C3D30] sm:text-6xl">
            DESIGN ENTHUSIASTS AGREE
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-xs sm:text-lg text-[#4C3D30] leading-1">
            See what thousands of customers are saying about design snap
          </p>
        </div>
        <div
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="hover:scale-105 transition duration-300 ease-in-out "
            >
              <figure className="relative flex flex-col h-full justify-between rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <blockquote className="flex flex-col gap-y-3">
                  <p className="text-lg tracking-tight text-[#4C3D30]">
                    "{column.content}"
                  </p>
                  <div className="font-display font-bold text-base text-[#4C3D30]">
                    {column.author.name}
                  </div>
                </blockquote>
                <figcaption className="relative flex items-center justify-between pt-4">
                  <div>
                  <div className="flex items-center">
                    <svg aria-hidden="true" className="text-yellow-400 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="text-yellow-400 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="text-yellow-400 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="text-yellow-400 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="text-yellow-400 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
