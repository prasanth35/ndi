import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const Faq: React.FC = ({className}:{className?:string}) => {

  const faqs: FAQItem[] = [
    {
      question: 'What features does the finance dashboard offer?',
      answer: 'Our dashboard provides a comprehensive suite of features, including real-time data integration, customizable reports, interactive visualizations, and tools to monitor key metrics like total income, orders, top products, recent transactions, and revenue. These features are designed to simplify financial management and enhance decision-making for your business.',
    },
    {
      question: 'Is the dashboard customizable to fit my business needs?',
      answer: 'Yes, the dashboard is highly customizable to fit your specific business needs.',
    },
    {
      question: "What kind of support is available if I need help?",
      answer: ""
    },
    {
      question: "How secure is my financial data on the platform?",
      answer: ""
    },
    {
      question: "Can I integrate the dashboard with other tools and software?",
      answer: ""
    },
    {
      question: "Is Magnolia suitable for small businesses?",
      answer: ""
    },
    {
      question: "Can Magnolia integrate with other tools?",
      answer: ""
    },
    {
      question: "How can I get started with Magnolia?",
      answer: ""
    },
    {
      question: "Can I customize the Magnolia dashboard?",
      answer: ""
    },
    {
      question: "Can multiple users access Magnolia?",
      answer: ""
    }
  ];

  return (
    <div className={cn([className])}>
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion type='single' collapsible className='w-full'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} className='border-2 rounded-xl px-4' value={faq.question}>
              <AccordionTrigger className='text-sm hover:no-underline hover:font-semibold'>{faq.question}</AccordionTrigger>
              <AccordionContent> {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </div>
  );
};

export default Faq;
