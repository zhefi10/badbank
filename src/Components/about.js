import Card from './card';
// import {Link} from 'react-router-dom';
const thisYear = new Date().getFullYear();

function About() {
    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="ABOUT US"
            title={title}
            text={about}
            body = {body}
         />
    );
}

const title = <a href="https://github.com/zhefi10/badbank" target="_blank" rel="noreferrer">
    <button className="btn btn-warning">
    BadBank on GitHub
    </button>
    </a>;

const body = <>
    <a href="https://github.com/zhefi10" target="_blank" rel="noreferrer"><button className="btn btn-outline-success" data-bs-toggle="tooltip" data-bs-placement="left" title="Click here to see my repository" > Erick Suarez<img src="./prog.png" height="32" alt='iSANDEx Logo'></img></button></a>
    </>

const about = <> 
This programmer of Bad Bank made this website with love/hate trying to make it funny in the process with the  help of <a href="https://reactjs.org" target="_blank" rel="noreferrer" >
    <span className="badge bg-primary" data-bs-toggle="tooltip" data-bs-placement="left" title="https://reactjs.org"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png" alt='React Icon' height="16"></img> React
    </span> 
</a> and styled with the overpowered <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
    <span className="badge bg-primary" data-bs-toggle="tooltip" data-bs-placement="left" title="https://getbootstrap.com/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png" alt='Bootstrap Icon' height="16"></img> Bootstrap
    </span>
</a>, Also <a href="https://bootswatch.com" target="_blank" rel="noreferrer">
    <span className="badge bg-primary" data-bs-toggle="tooltip" data-bs-placement="left" title="hhttps://bootswatch.com"><img src="https://camo.githubusercontent.com/51da0973891f15de1404fe9e17951136a420dafec4f9bbfa883e6283623c9317/68747470733a2f2f626f6f747377617463682e636f6d2f5f6173736574732f696d672f6c6f676f2d6461726b2e737667" alt='Bootswatch Icon' height="16"></img>  Bootswatch
    </span>
</a> theme's <a href="https://bootswatch.com/spacelab" target="_blank" rel="noreferrer" alt='SpaceLab Icon'>
    <span className="badge rounded-pill bg-light" data-bs-toggle="tooltip" data-bs-placement="left" title="https://bootswatch.com/spacelab">
    Spacelab.
    </span>
</a> Finally, some libraries. <a> 
</a>
</>;


export default About;

