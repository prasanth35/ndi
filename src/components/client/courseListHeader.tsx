"use client";
import { Sparkle } from "lucide-react";
import { Button } from "../ui/button";

const CourseListHeader = ({ title, onSeeMore }: { title: string; onSeeMore?: () => void }) => (
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-2 items-center">
        <Sparkle className="text-primary fill-primary" />
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <Button className="rounded-full" onClick={onSeeMore}>
        See More
      </Button>
    </div>
  );

  export default CourseListHeader