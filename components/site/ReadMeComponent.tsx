import { Code, Database, Cloud, GitBranch } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const ReadMeComponent = () => {
  return (
    <ScrollArea className="h-[calc(90svh-150px)] md:h-[calc(100vh-170px)] lg:h-[calc(100vh-200px)] w-full">
      <div className="p-6 space-y-6">
        {/* About Me and Education sections are already commented out */}

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-emerald-600">Professional Expertise</h2>
          <Separator className="my-2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-950 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Code className="w-6 h-6 text-green-500 mr-2" />
                <h4 className="font-bold text-lg">Full Stack Development</h4>
              </div>
              <ul className="list-disc pl-6 space-y-1">
                <li>JavaScript, TypeScript, Go, Python</li>
                <li>React, Next.js, SolidJS, SolidStart</li>
                <li>Node.js, Express.js, Bun</li>
                <li>HTML5, CSS3, TailwindCSS, Responsive Design</li>
              </ul>
            </div>
            
            <div className="bg-zinc-950 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Database className="w-6 h-6 text-indigo-500 mr-2" />
                <h4 className="font-bold text-lg">Databases & APIs</h4>
              </div>
              <ul className="list-disc pl-6 space-y-1">
                <li>PostgreSQL, MySQL, SQLite</li>
                <li>Serverless databases(Supabase, Neon, Turso)</li>
                <li>RESTful APIs, GraphQL</li>
                <li>Authentication & Authorization systems</li>
              </ul>
            </div>
            
            <div className="bg-zinc-950 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <GitBranch className="w-6 h-6 text-orange-500 mr-2" />
                <h4 className="font-bold text-lg">DevOps & Deployment</h4>
              </div>
              <ul className="list-disc pl-6 space-y-1">
                <li>Git, GitHub, CI/CD pipelines</li>
                <li>Docker, Kubernetes</li>
                <li>Vercel, Netlify, AWS</li>
                <li>Performance optimization</li>
              </ul>
            </div>
            
            <div className="bg-zinc-950 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Cloud className="w-6 h-6 text-blue-500 mr-2" />
                <h4 className="font-bold text-lg">Cloud Computing</h4>
              </div>
              <ul className="list-disc pl-6 space-y-1">
              <li>Azure</li>
                <li>Microsoft 365</li>
                <li>Enterprise migrations & assessments</li>
                <li>Technical training & architecture consulting</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-emerald-600">Let's Build Something Great Together</h2>
          <Separator className="my-2" />
          <p className="text-gray-800 dark:text-gray-200">
            With over 7 years of experience in the tech industry, I help businesses, startups, and individuals build scalable, high-performance web applications, automate workflows, and optimize cloud infrastructure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-emerald-600">What I Offer</h2>
          <Separator className="my-2" />
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
            <li><span className="font-semibold">Web & SaaS Development</span> From idea to production, using modern frameworks and best practices.</li>
            <li><span className="font-semibold">API Development & Integration</span> Connect systems seamlessly for improved data flow and functionality.</li>
            <li><span className="font-semibold">Cloud & Serverless Architecture</span> Scalable, efficient, and cost-effective solutions.</li>
            <li><span className="font-semibold">Performance & Security Audits</span> Make your applications faster, more secure, and reliable.</li>
            <li><span className="font-semibold">Consulting & Mentoring</span> Get expert guidance on technology decisions, architecture, and best practices.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-emerald-600">Why Work With Me?</h2>
          <Separator className="my-2" />
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
            <li>Problem solver who transforms technical challenges into business opportunities.</li>
            <li>Aligns technical solutions with business goals.</li>
            <li>Creates collaborative environments where knowledge sharing accelerates success.</li>
            <li>Continuously evolves with industry trends to deliver cutting-edge solutions.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-emerald-600">Testimonials</h2>
          <Separator className="my-2" />
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-5 relative">
              <div className="text-zinc-300 italic pr-10">
                "Michael has been an invaluable asset to our team, bringing brilliance, dedication, and exceptional leadership. Wishing him all the best in their future endeavors."
              </div>
              <div className="absolute top-4 right-4 text-emerald-700 opacity-10 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M11.9997 10.2001C11.9997 7.22012 9.77973 5.00012 6.79973 5.00012H4.99976V5.80012C4.99976 8.17012 6.91976 10.0901 9.29976 10.0901H10.0998V11.0001C10.0998 13.2101 8.30976 15.0001 6.09976 15.0001H4.99976L6.09976 19.0001H7.09976C9.09976 19.0001 11.9997 14.0001 11.9997 10.2001Z" />
                  <path d="M21.9997 10.2001C21.9997 7.22012 19.7797 5.00012 16.7997 5.00012H14.9997V5.80012C14.9997 8.17012 16.9197 10.0901 19.2997 10.0901H20.0997V11.0001C20.0997 13.2101 18.3097 15.0001 16.0997 15.0001H14.9997L16.0997 19.0001H17.0997C19.0997 19.0001 21.9997 14.0001 21.9997 10.2001Z" />
                </svg>
              </div>
            </div>
            
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-5 relative">
              <div className="text-zinc-300 italic pr-10">
                "Michael has a great spirit, dedication, learning curve, flexibility and he is easy to work with even under stress and is strong in his commitments. Short: don't think twice if you have a chance to hire him."
              </div>
              <div className="absolute top-4 right-4 text-emerald-700 opacity-10 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M11.9997 10.2001C11.9997 7.22012 9.77973 5.00012 6.79973 5.00012H4.99976V5.80012C4.99976 8.17012 6.91976 10.0901 9.29976 10.0901H10.0998V11.0001C10.0998 13.2101 8.30976 15.0001 6.09976 15.0001H4.99976L6.09976 19.0001H7.09976C9.09976 19.0001 11.9997 14.0001 11.9997 10.2001Z" />
                  <path d="M21.9997 10.2001C21.9997 7.22012 19.7797 5.00012 16.7997 5.00012H14.9997V5.80012C14.9997 8.17012 16.9197 10.0901 19.2997 10.0901H20.0997V11.0001C20.0997 13.2101 18.3097 15.0001 16.0997 15.0001H14.9997L16.0997 19.0001H17.0997C19.0997 19.0001 21.9997 14.0001 21.9997 10.2001Z" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ScrollArea>
  );
};

export default ReadMeComponent;