import Image from "next/image";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const Services = ({ className }: { className?: string }) => {

  const content: Array<{ key: number; header: string; content: string }> = [
    {
      key: 1,
      header: "Sign Up and Customize Your Dashboard",
      content: "Choose which metrics to display, set up alerts, and customize reports to focus on what matters most to you."
    },
    {
      key: 2,
      header: "Integrate Your Financial Data",
      content: "Whether it's your accounting software or sales channels, our integrations ensure all your data flows into one centralized location."
    },
    {
      key: 3,
      header: "Analyze and Optimize Your Finances",
      content: "Use our powerful tools to monitor income, track orders, evaluate top products, and review transactions."
    },
  ]

  return (
    <section id="services" className={cn([className])}>
      <div className="flex-1">
        <Badge variant={'outline'} className="bg-white">
          <Badge className="bg-secondary rounded-full px-1 py-1" /> &nbsp; How it Works
        </Badge>
        <h2 className="text-xl sm:text-3xl font-bold mt-2">
          Simplify Your Financial Management in Three Easy Steps
        </h2>
        <p className="text-gray-600 mt-4">
          Streamline your workflow with our intuitive process for quick setup
          and enhanced financial insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-10">
        <div className="space-y-6  rounded-md border">
          {
            content.map((item, index) =>
              <div className={cn(["flex items-start p-1"],(index%2 === 0 ? 'bg-[#F7FAFC]' : 'bg-white'))} key={item.key}>
                <Badge variant={'outline'} className="rounded-full bg-white px-2 py-1">
                  {item.key}
                </Badge>
                <div className="ml-2">
                  <h4 className="font-semibold text-balance">
                    {item.header}
                  </h4>
                  <p className="text-gray-600">
                    {item.content}
                  </p>
                </div>
              </div>
            )
          }
        </div>
        <div className="w-full h-full flex justify-center items-center content-center rounded-2xl mt-5 sm:mt-0">
          <Image
            src="/assets/png/recent-video.png"
            alt="Video thumbnail"
            height={100}
            width={600}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
