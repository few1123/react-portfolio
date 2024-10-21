import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const AbilitiesAndProjects = ({ customMessage = "" }) => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        const projectData = await fetch('/path-to-your-api-or-json')
            .then((response) => response.json())
            .catch((error) => {
                console.log("Failed to fetch projects", error);
                return [];
            });
        setProjects(projectData);
    };

    const renderProjects = (projects) => {
        return (
            <div className="project-grid">
                {projects.map((project, idx) => (
                    <div className="project-item" key={idx}>
                        <div className="image-box">
                            <img
                                src={project.image}
                                className="project-image"
                                alt={project.name}
                            />
                            <div className="overlay">
                                <div className="content">
                                    <p className="title">{project.name}</p>
                                    <h4 className="description">{project.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(project.url)}
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="container abilities-and-projects-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Abilities and Projects".split("")}
                        idx={15}
                    />
                </h1>


                <p className="custom-message">{customMessage}</p>


                <div className="skills-section left-align">
                    <h2>Computer Skills</h2>
                    <ul>
                        <li>Microsoft Office (MS Word, Excel, and PowerPoint)</li>
                        <li>HTML, CSS, Bootstrap, MySQL, PHP, Flutter, Next.js, React</li>
                        <li>GitHub, VSCode, GitHub Desktop</li>
                        <li>Arduino, Python, C++, Cisco</li>
                    </ul>
                </div>
                <div className="skills-section left-align">
                    <h2>Network Skills</h2>
                    <ul>
                        <li>VLAN Trunk Port: Configuration and management of VLAN trunking</li>
                        <li>VTP (VLAN Trunking Protocol): VLAN management and propagation</li>
                        <li>Port Security: Implementation and management of port security measures</li>
                        <li>InterVLAN Routing: Configuration of routing between VLANs</li>
                    </ul>
                </div>
                <div className="skills-section left-align">
                    <h2>Computer Network System Lab</h2>
                    <li>
                        การออกแบบเครือข่ายและการกําหนดที่อยู่ IP ให้กับคอมพิวเตอร์แต่ละเครื่องภายในเครือข่ายเดียวกัน
                        เลือกช่วงที่อยู่ IP ส่วนตัว กําหนดที่อยู่ IP ซับเน็ตมาสก์ ตั้งค่าเกตเวย์เริ่มต้น กําหนดค่า DNS
                        การใช้คอมพิวเตอร์เพื่อสื่อสารกับอุปกรณ์อื่น ๆ เช่น สวิตช์ บริดจ์ เราเตอร์ และเกตเวย์ในเครือข่าย
                        อุปกรณ์แต่ละเครื่อง
                    </li>
                   
                </div>
                <div>{renderProjects(projects)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default AbilitiesAndProjects;
