import TimelineItem from "./TimelineItem";
import experienceData from "../../data/experienceData";

function Timeline() {
  return (
    <div className="mx-auto mt-20 max-w-4xl">
      {experienceData.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          isLast={index === experienceData.length - 1}
        />
      ))}
    </div>
  );
}

export default Timeline;