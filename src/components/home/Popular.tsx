import { cn } from "@/lib/utils";
import CourseListHeader from "../client/courseListHeader";
import CourseCard from "../common/courseCard";

const PopularSection = ({className}:{className?:string}) => {

  const popular = [
    {
      title: "CDS Exam Previous Year Question",
      lessons: 6,
      hours: 40,
      certificate: true,
      image: "/assets/png/cds-mock1.png", 
    },
    {
      title: "CDS Exam Previous Year Question",
      lessons: 6,
      hours: 40,
      certificate: true,
      image: "/assets/png/cds-mock2.png",
    },
    {
      title: "CDS Exam Previous Year Question",
      lessons: 6,
      hours: 40,
      certificate: true,
      image: "/assets/png/cds-mock3.png",
    },
    {
      title: "CDS Exam Previous Year Question",
      lessons: 6,
      hours: 40,
      certificate: true,
      image: "/assets/png/cds-mock4.png",
    },
  ]

  const interests = [
    {
      title: "CDS Exam Previous Year Question",
      lessons: 6,
      hours: 40,
      certificate: true,
      image: "/assets/png/cds-mock4.png", 
    },
    {
      title: "CDS Exam Previous Year Question",
      lessons: 6,
      hours: 40,
      certificate: true,
      image: "/assets/png/cds-mock2.png",
    },
    {
      title: "CDS Exam Previous Year Question",
      lessons: 6,
      hours: 40,
      certificate: true,
      image: "/assets/png/cds-mock1.png",
    },
    {
      title: "CDS Exam Previous Year Question",
      lessons: 6,
      hours: 40,
      certificate: true,
      image: "/assets/png/cds-mock3.png", 
    },
  ]

  return (
    <section className={cn([className])}>
      <div>
        <CourseListHeader title="Popular" onSeeMore={undefined} />
        <div className="flex gap-4 overflow-x-auto">
          {
            popular.map(course => <CourseCard key={course.title} item={{
              ...course
            }} />)
          }
        </div>
        <br />
        <br />
        <CourseListHeader title="Based on your interests" onSeeMore={undefined} />
        <div className="flex gap-4 overflow-x-auto">
          {
            interests.map(course => <CourseCard key={course.title} item={{
              ...course
            }} />)
          }
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
