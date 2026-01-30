'use client';

interface ProcessStepProps {
  number: string;
  title: string;
  desc: string;
}

const ProcessStep = ({ number, title, desc }: ProcessStepProps) => (
  <div className="flex gap-6 relative pl-6 group">
     <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-emerald-300 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors z-10"></div>
     <div className="text-emerald-600 font-mono text-sm pt-1 font-bold">{number}.</div>
     <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
     </div>
  </div>
);

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Simple. Fast. <span className="text-emerald-600">Reliable.</span>
            </h2>
            <div className="space-y-12 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-emerald-200"></div>
              <ProcessStep 
                number="1"
                title="A customer calls your business"
                desc="No waiting. No voicemail. The call is picked up immediately."
              />
              <ProcessStep 
                number="2"
                title="The AI answers & understands"
                desc="It handles new bookings, rescheduling, pricing, and availability questions."
              />
              <ProcessStep 
                number="3"
                title="Booked and Confirmed"
                desc="Synced to your calendar with confirmation sent to the client. That's it."
              />
            </div>
          </div>
          
          {/* Visual Representation */}
          <div className="relative">
             <div className="absolute inset-0 bg-emerald-200/50 blur-[80px]"></div>
             <div className="glass-card p-2 rounded-3xl border-emerald-200 rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-8 h-[500px] flex flex-col relative overflow-hidden shadow-lg">
                   {/* Chat Interface Mockup */}
                   <div className="flex items-center gap-4 mb-8 border-b border-emerald-200 pb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">AI</div>
                      <div>
                         <div className="text-gray-900 font-bold">Receptionist</div>
                         <div className="text-emerald-600 text-xs flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span> Active Call
                         </div>
                      </div>
                   </div>
                   <div className="space-y-6 flex-1 overflow-hidden">
                      <div className="bg-emerald-50 p-4 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl max-w-[85%]">
                         <p className="text-sm text-gray-700">&quot;Hi, thanks for calling! How can I help you today?&quot;</p>
                      </div>
                       <div className="bg-emerald-100 border border-emerald-200 p-4 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl max-w-[85%] ml-auto">
                         <p className="text-sm text-gray-800">&quot;I need to book an appointment for tomorrow afternoon.&quot;</p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl max-w-[85%]">
                         <p className="text-sm text-gray-700">&quot;I have an opening at 2:30 PM. Does that work for you?&quot;</p>
                      </div>
                      <div className="flex justify-center mt-auto">
                         <div className="px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg text-xs shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                           Booking Confirmed ✓
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
