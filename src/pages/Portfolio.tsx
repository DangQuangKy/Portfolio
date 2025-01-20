import GitHubIcon from '@mui/icons-material/GitHub';

const Portfolio = () => {
    return (
        <section className="p-8">
            <h1 className="text-3xl font-mono text-center">Portfolio</h1>
            <div className="flex mt-10">
                <div className="flex-1">
                    <div className="flex justify-center align-center"><img src="/src/assets/prj1.png" className="rounded-lg w-[450px] h-[380px] object-cover" /></div>
                </div>
                <div className="flex-1 leading-8">
                    <h2 className="text-center text-lg font-mono font-bold">The e-commerce website "Shop 1970"</h2>
                    <ul>
                        <li><span className="font-bold">Description:</span>
                            <p>"Shop 1970" is an e-commerce platform specializing in men's shirts. The website includes key pages such as the homepage, product listing, product detail, shopping cart, checkout, and additional informational pages.</p>
                        </li>
                        <li><span className="font-bold">Technologies Used:</span>
                            <ul className="list-disc pl-6">
                                <li><span className="font-bold">Languages:</span> HTML, CSS, JavaScript, SCSS</li>
                                <li><span className="font-bold">Libraries and Frameworks:</span> ReactJS, React Router DOM, Redux Toolkit, Material UI</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mt-8 w-36 h-10 border border-blue-500 text-blue-500 flex justify-center items-center rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                        <a
                            href="https://github.com/DangQuangKy/project_DP_reactjs"
                            target="_blank"
                            className="w-full h-full flex justify-center items-center"
                        >
                            <GitHubIcon /> Git code
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;