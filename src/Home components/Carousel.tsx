import type { JSX } from 'react/jsx-runtime';


export default function Carousel() : JSX.Element {
    return (
        <>
        <div className="carousel w-full h-130 my-0">
  <div id="slide1" className="carousel-item relative w-full ">
    <img
      alt="desk with-notebook"
      src="./src/images/workspace-with-note-brick-wall.jpg"
      className="w-full object-cover object-bottom" />
    <div className="absolute inset-0 bg-linear-to-r from-black to-red-900 opacity-50"></div>
    <h1 className="absolute inset-0 flex items-center justify-center text-white sm:text-2xl md:text-5xl font-bold">
    Welcome to my Portfolio
  </h1>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle"></a>
      <a href="#slide2" className="btn btn-circle"></a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      alt="desk with-notebook"
      src="./src/images/james-harrison-vpOeXr5wmR4-unsplash.jpg"
      className="w-full object-cover object-center" />
    <div className="absolute inset-0 bg-linear-to-r from-black to-red-900 opacity-50"></div>
    <h1 className="absolute inset-0 flex items-center justify-center text-white sm:text-2xl md:text-5xl font-bold"> Iezzi Federica <br></br>Full Stack Web developer</h1>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle"></a>
      <a href="#slide3" className="btn btn-circle"></a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      alt="desk with-notebook"
      src="./src/images/4443324.jpg"
      className="w-full object-cover object-center" />
    <div className="absolute inset-0 bg-linear-to-r from-black to-green-950 opacity-50"></div>
    <h1 className="absolute inset-0 flex items-center justify-center text-white sm:text-2xl md:text-5xl font-bold">Project Showcase</h1>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle"></a>
      <a href="#slide4" className="btn btn-circle"></a>
    </div>
  </div>
</div>
        </>
    )
}