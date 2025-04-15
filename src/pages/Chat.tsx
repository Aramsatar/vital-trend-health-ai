
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      content: "Hello! I'm your health assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      sender: "user",
      content: input,
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMessage]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: "ai",
        content: "This is a demo of the AI health assistant interface. In a real application, this would connect to a health AI model.",
        timestamp: new Date()
      };
      
      setMessages(current => [...current, aiResponse]);
    }, 1000);
  };
  
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Health AI Chat" 
        description="Chat with your AI health assistant"
      />
      
      <Card className="h-[calc(100vh-14rem)]">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                  {message.sender === "ai" && (
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p>{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t p-4">
            <form onSubmit={handleSend} className="flex space-x-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send size={18} />
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
