export default function MainHome() {
  return (
    <>
      <main className="mt-0 mx-auto">
        <div>
          <h1 className="text-4xl text-center font-serif font-bold text-gray-800 dark:text-white text-shadow-lg">What did i use to create this website?</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">React</h2>
              <p>I made use of React to build this website. 
                - UseState and UseEffect are the main hooks I used to manage state and side effects in my components.
                - I also used React Router to handle navigation between different pages of the website.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
              <h2 className="card-title">TypeScript</h2>
              <p>I used TypeScript to add static typing to my React components, which helps catch errors at compile time and improves code quality.</p>
            </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Tailwind CSS</h2>
              <p>I used Tailwind CSS to style the components of the website. It provided a utility-first approach to styling, making it easy to create responsive and consistent designs.</p>
            </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">DaisyUI</h2>
              <p>I used DaisyUI to enhance the UI components of the website. It provided a set of pre-designed, customizable components that helped speed up the development process.</p>
            </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Git Hub</h2>
              <p>I used Git Hub to version control my code and save it in a remote repository.
                Furthermore, I, especially, made use of commits to track changes on the main branch.
              </p>
            </div>
            </div>
        </div>
      </main>
    </>
  );
}