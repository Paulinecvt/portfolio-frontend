import timelineData from '../timeline/timelineData.json';
import { TimelineItem } from '../timeline/timelineItems';
import '../timeline/timeline.css';

export const Timeline = () => {
    return (
        <>
            <br/>
            <div className='flex justify-start'>
            <h2 className='title text-right uppercase'>About my journey</h2>
            </div>
            <br/>
            <div>
                {timelineData.length > 0 && (
                    <div className="timeline-container">
                        {timelineData.map((data, idx) => (
                            <TimelineItem data={data} key={idx} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
