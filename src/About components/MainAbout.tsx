
export default function MainAbout() {
    return (
        <>
        <div className="container mx-auto p-8">
            <div>
                <img src="./src/images/pic-profilo.jpg" alt="Federica Iezzi" className="rounded-full mx-auto w-80 h-80 mb-4 shadow-xl border" />
                <h1 className="text-4xl font-bold my-4 text-center ">Federica Iezzi</h1>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-100 my-4 p-8 border rounded-lg shadow-md">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg mb-4">Hi, my name is Federica Iezzi and I am a web developer. I have a passion for creating beautiful and functional websites that provide a great user experience. I have experience with a variety of web technologies, including HTML, CSS, JavaScript, React, and Redux.</p>
                <p className="text-lg mb-4">In my free time, I enjoy learning new technologies and keeping up with the latest trends in web development. I also enjoy contributing to open source projects and collaborating with other developers.</p>
                <p className="text-lg mb-4">If you would like to get in touch with me, please feel free to reach out via email or connect with me on LinkedIn. Thank you for visiting my portfolio!</p>
            </div>
        </div>
        </>
    )
}