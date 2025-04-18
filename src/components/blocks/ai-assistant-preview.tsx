
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AIAssistantPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-3 py-1 text-sm">AI Assistant</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your personal health guide</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Get personalized health recommendations and insights from our AI-powered assistant, trained on the latest medical research.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto overflow-hidden">
          <div className="bg-primary p-4 text-white flex items-center gap-2">
            <Brain className="w-5 h-5" />
            <h3 className="font-semibold">AI Health Assistant</h3>
          </div>
          
          <div className="p-4 space-y-4 min-h-[300px]">
            <div className="flex gap-3">
              <div className="bg-primary/20 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                <Brain className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                <p>Hi there! I'm your healthcare assistant. How can I help you today?</p>
              </div>
            </div>
            
            <div className="flex gap-3 justify-end">
              <div className="bg-primary/10 p-3 rounded-lg rounded-tr-none max-w-[80%]">
                <p>I've been having headaches lately and my blood pressure readings are higher than normal. Should I be concerned?</p>
              </div>
              <div className="bg-blue-500 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                <div className="text-white text-sm">You</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="bg-primary/20 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                <Brain className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                <p>I see you're concerned about headaches and elevated blood pressure. Based on your recent readings (145/92), this is indeed higher than your normal range (120/80). While I can't diagnose conditions, persistent headaches with elevated blood pressure should be discussed with your healthcare provider.</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex gap-2">
            <input 
              type="text" 
              placeholder="Type your health question here..." 
              className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="sm">Send</Button>
          </div>
          <div className="px-4 pb-4 text-xs text-slate-500 text-center">
            Your data is private and secure. We never share your health information.
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button onClick={() => navigate('/chat')}>
            Talk to Your AI Assistant
          </Button>
        </div>
      </div>
    </section>
  );
}
