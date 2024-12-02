import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

const Testimonials = ({className}:{className?:string}) => {
  const testimonials = [
    {
      quote: "I love how intuitive Magnolia is — it’s like having a financial expert on your team.",
      name: "Gracie Abrams",
      role: "Finance Solutions",
      rating: 4.8,
    },
    {
      quote: "Magnolia’s dashboard is not only powerful but also incredibly user-friendly.",
      name: "Emily Ray",
      role: "Tech Innovators Inc.",
      rating: 4.8,
    },
    {
      quote: "Magnolia has saved us countless hours on financial reporting, allowing us to focus on growth.",
      name: "Theo James",
      role: "Retail Success Ltd.",
      rating: 4.8,
    },
  ];

  return (
    <section className={cn([" bg-blue-50 py-16",className])}>
      <div className="px-6 lg:px-12 text-center">
        <Badge variant={'outline'} className="bg-white">
        <Badge className="bg-secondary rounded-full px-1 py-1"/> &nbsp; Testimonials 
        </Badge>
        <h2 className="text-xl sm:text-3xl font-bold mt-2">
          Real Results and Real Voices from Our Happy Customers
        </h2>
        <p className="text-gray-600 mt-4">
          Hear from our satisfied customers who have transformed their financial
          management with our dashboard.
        </p>

        <div className="mt-12 flex overflow-x-auto gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-sm bg-white min-w-80">
              <CardHeader>
              <p className="text-base text-gray-800 italic mb-4">
                “{testimonial.quote}”
               </p>
              </CardHeader>
              <CardFooter className=" flex justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  <span className="text-xl font-semibold">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-yellow-500">
                <span className="text-xl">★</span>
                <span className="ml-1 text-gray-700">{testimonial.rating}</span>
              </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button variant={"outline"}>
            Load more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
