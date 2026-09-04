import{ useState, useEffect } from "react";
import type { JSX } from 'react/jsx-runtime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Darkmode(): JSX.Element {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
        } else if (savedTheme === 'light') {
            setIsDark(false);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <>
        <div className="bg-orange-200 dark:bg-taupe-700 flex items-end justify-end">
            <button className="m-1 p-2 rounded-full bg-orange-300 dark:bg-taupe-600 hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors"
                onClick={toggleTheme}
            >
                {isDark ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </button>
        </div>
        </>
    )
}