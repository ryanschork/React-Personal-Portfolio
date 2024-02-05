import { Col } from "react-bootstrap";
export const ProjectCard = ({title, description, imgUrl, button, link, buttonOne, linkOne}) => {
    return (
        <Col sm={6} className="project-card">
            <div className="proj-imgbx">
                <img src={imgUrl} alt />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href={link}><button className="proj-btn">{button}</button></a>
                    <a href={linkOne}><button className="git-btn">{buttonOne}</button></a>
                </div>
            </div>
        </Col>
    )
}