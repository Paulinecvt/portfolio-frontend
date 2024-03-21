import { FaFilePen } from "react-icons/fa6";
import { HiCodeBracketSquare } from "react-icons/hi2";

export const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <time className='year'>{data.year}</time>
            <h3 className='event uppercase'>{data.event}</h3>
            <h4 className='place'>{data.place}</h4>
            <p>{data.description}</p>
            <br/>
            {data.projects && data.projects.length > 0 && <FaFilePen/>}
            {data.projects && data.projects.map((project, index) => (
                <p key={index} className="">{project}</p>
            ))}
            <br/>
            {data.technologies && data.technologies.length > 0 && <HiCodeBracketSquare/>}
            {data.technologies && data.technologies.map((technology, index) => (
                <p key={index} className="">{technology}</p>
            ))}
            <span className="circle" />
        </div>
    </div>
);