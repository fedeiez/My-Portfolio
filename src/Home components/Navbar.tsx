import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SearchBar from './SearchBar';
import type { JSX } from 'react/jsx-runtime';


export default function Nav(): JSX.Element {
  return(
    <nav className="bg-orange-200 dark:bg-taupe-700 text-black p-8 shadow-md">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <ul className="m-0 flex flex-row ">
            <li className="dark:text-white m-1 p-4"><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li className="dark:text-white m-1 p-4 "><a href="#about" className="hover:text-gray-400">About me</a></li>
            <li className="dark:text-white m-1 p-4"><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        </ul>
        <div>
          <SearchBar />
        </div>
        <div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FontAwesomeIcon icon={faGithub} className="text-3xl dark:text-white" /></a>
        </div>
      </div>
    </nav>
  )}
