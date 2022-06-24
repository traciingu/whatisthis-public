const Navbar = () => {
    const sections = [
        { label: "HOME", link: "#home" },
        { label: "LEARN", link: "#learn" },
        { label: "GAMES", link: "#games" },
        { label: "FAQs", link: "#faqs" },
    ];

    return (
        <nav>
            <ul>
                {sections.map((section, index) => (
                    <li key={index}>
                        <a href={`${section.link}`}>
                            {section.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;