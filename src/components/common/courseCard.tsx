import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { ArrowRight, Clock4, FileStack, FileText } from "lucide-react";

const CourseCard = ({ item }: { item: { title: string; lessons: number; hours: number; image: string } }) => (
  <Card className="shadow-md bg-gray-100">
    <CardContent className="p-2">
      <Image
        src={item.image}
        alt={item.title}
        height={160}
        width={300}
        className="h-40 w-full object-cover rounded-t-lg text-center"
      />
      <CardDescription className="mt-4">
        <h3 className="text-lg font-semibold text-black">{item.title}</h3>
        <div className="flex justify-between items-center gap-4 mt-3 text-sm">
          <span className="flex items-center gap-1 text-red-500">
            <FileStack /> {item.lessons}x lessons
          </span>
          <span className="flex items-center gap-1 text-primary">
            <Clock4 /> {item.hours} hours
          </span>
          <span className="flex items-center gap-1 text-red-500">
            <FileText /> Certificate
          </span>
        </div>
      </CardDescription>
    </CardContent>
    <CardFooter className="flex justify-between items-center mt-4 pt-4 border-t">
      <Button variant="ghost" className="font-semibold">
        Buy Now
      </Button>
      <Button variant="outline" className="rounded-3xl border-primary text-primary">
        <ArrowRight />
      </Button>
    </CardFooter>
  </Card>
);

export default CourseCard;
