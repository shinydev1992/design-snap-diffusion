const testimonials = [
  {
    content: "My house has never been so put together, loved the variations and choices.",
    link: "",
    author: {
      name: "Jenny Jacobs",
      role: "Engineer & Author",
      image: "/eve.jpg",
    },
  },
  {
    content:
      "This cutting-edge tool transformed my living room from drab to fab, understanding & tailoring to my tastes effortlessly.",
    link: "",
    author: {
      name: "Todd M.",
      role: "Engineer",
      image: "/arthur.jpg",
    },
  },
  {
    content:
      "The bedroom redesign options offered were not only stylish but also perfectly in tune with my personal style.",
    link: "",
    author: {
      name: "Carolyn Hargrave",
      role: "Startup Founder",
      image: "/ade.jpeg",
    },
  },
  {
    content:
      "Never thought my eclectic style could be improved, love the designs!",
    link: "",
    author: {
      name: "Evelyn Bell",
      role: "Software Engineer",
      image: "/rob.jpg",
    },
  },
  {
    content:
      "This is a game changer for the world of interior design.",
    link: "",
    author: {
      name: "Tanya K.",
      role: "Some dude on the internet",
      image: "/music.jpg",
    },
  },
  {
    content:
      "Breathed new life into my old study, creating a space I now truly love.",
    link: "",
    author: {
      name: "Gideon Mathews",
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
          <h1 className="mx-auto max-w-5xl font-dallas font-display text-2xl font-bold tracking-normal text-[#4C3D30] sm:text-6xl">
            DESIGN ENTHUSIASTS AGREE
          </h1>
          <p className="mx-auto mt-4 max-w-4xl text-xs sm:text-lg font-articulat font-bold text-[#4C3D30] leading-1 tracking-widest">
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
              <figure className="relative flex flex-col h-[260px] justify-between rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <blockquote className="flex flex-col gap-y-3 font-articulat font-bold tracking-widest">
                  <p className="text-lg text-[#4C3D30]">
                    "{column.content}"
                  </p>
                  <div className="font-display text-xl text-[#4C3D30]">
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
