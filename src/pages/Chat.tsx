
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Plus, Trash2, MessageSquare, ArrowLeft, Search, History, Files, Library } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

type ChatMessage = {
  id: number;
  sender: "user" | "ai";
  content: string;
  timestamp: Date;
};

type ChatHistory = {
  id: number;
  title: string;
  preview: string;
  date: Date;
  messages: ChatMessage[];
};

export function Chat() {
  const navigate = useNavigate();
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [input, setInput] = useState("");
  const [chatHistories, setChatHistories] = useState<ChatHistory[]>([
    {
      id: 1,
      title: "Blood Pressure Advice",
      preview: "How can I lower my blood pressure naturally?",
      date: new Date(2025, 4, 1),
      messages: [
        {
          id: 1,
          sender: "user",
          content: "How can I lower my blood pressure naturally?",
          timestamp: new Date(2025, 4, 1, 10, 30)
        },
        {
          id: 2,
          sender: "ai",
          content: "There are several lifestyle changes that can help lower blood pressure naturally: 1) Maintain a healthy weight, 2) Exercise regularly - aim for 150 minutes per week, 3) Reduce sodium intake, 4) Limit alcohol, 5) Eat a heart-healthy diet rich in fruits, vegetables, and whole grains, 6) Reduce stress through meditation or deep breathing exercises, 7) Quit smoking if you smoke, 8) Get adequate sleep - 7-8 hours per night is recommended. Would you like me to elaborate on any of these strategies?",
          timestamp: new Date(2025, 4, 1, 10, 31)
        }
      ]
    },
    {
      id: 2,
      title: "Sleep Issues",
      preview: "I'm having trouble sleeping at night. Any advice?",
      date: new Date(2025, 3, 28),
      messages: [
        {
          id: 1,
          sender: "user",
          content: "I'm having trouble sleeping at night. Any advice?",
          timestamp: new Date(2025, 3, 28, 22, 15)
        },
        {
          id: 2,
          sender: "ai",
          content: "I'm sorry to hear you're having trouble sleeping. Here are some suggestions that might help improve your sleep quality: create a consistent sleep schedule, make your bedroom comfortable (dark, quiet, and cool), limit screen time before bed, avoid caffeine and large meals in the evening, try relaxation techniques, and consider speaking with your healthcare provider if the issue persists.",
          timestamp: new Date(2025, 3, 28, 22, 16)
        }
      ]
    }
  ]);
  
  const currentChat = chatHistories.find(chat => chat.id === activeChat);
  
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || !activeChat) return;
    
    // Add user message
    const newUserMessage: ChatMessage = {
      id: currentChat ? Math.max(...currentChat.messages.map(m => m.id)) + 1 : 1,
      sender: "user",
      content: input,
      timestamp: new Date()
    };
    
    setChatHistories(histories => 
      histories.map(chat => 
        chat.id === activeChat 
          ? { ...chat, messages: [...chat.messages, newUserMessage] }
          : chat
      )
    );
    
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: currentChat ? Math.max(...currentChat.messages.map(m => m.id)) + 2 : 2,
        sender: "ai",
        content: "This is a demo of the AI health assistant interface. In a real application, this would connect to a health AI model that can provide personalized medical advice based on your health data.",
        timestamp: new Date()
      };
      
      setChatHistories(histories => 
        histories.map(chat => 
          chat.id === activeChat 
            ? { ...chat, messages: [...chat.messages, aiResponse] }
            : chat
        )
      );
    }, 1000);
  };
  
  const createNewChat = () => {
    const newChat: ChatHistory = {
      id: Math.max(...chatHistories.map(c => c.id)) + 1,
      title: `New Chat ${chatHistories.length + 1}`,
      preview: "",
      date: new Date(),
      messages: [
        {
          id: 1,
          sender: "ai",
          content: "Hello! I'm your health assistant. How can I help you today?",
          timestamp: new Date()
        }
      ]
    };
    
    setChatHistories([...chatHistories, newChat]);
    setActiveChat(newChat.id);
  };
  
  const deleteChat = (id: number) => {
    setChatHistories(chatHistories.filter(chat => chat.id !== id));
    
    if (activeChat === id) {
      setActiveChat(chatHistories.length > 1 ? chatHistories[0].id : null);
    }
  };

  const suggestionCards = [
    {
      title: "What's happening with my health?",
      description: "See what's been happening with your health metrics over the last 24 hours",
      icon: <div className="p-2 bg-purple-500/20 rounded-lg"><History size={18} className="text-purple-500" /></div>
    },
    {
      title: "Medication interaction check",
      description: "Check if your current medications have any interactions to be aware of",
      icon: <div className="p-2 bg-blue-500/20 rounded-lg"><Files size={18} className="text-blue-500" /></div>
    },
    {
      title: "Generate health report",
      description: "Create a summary of your health trends to share with your doctor",
      icon: <div className="p-2 bg-green-500/20 rounded-lg"><Library size={18} className="text-green-500" /></div>
    }
  ];

  return (
    <div className="space-y-4 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full" 
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft size={18} />
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Health AI Chat</h1>
        </div>
        <Button onClick={createNewChat} size="sm" className="gap-1">
          <Plus size={16} /> New Chat
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Chat History Sidebar */}
        <Card className="md:col-span-1 order-2 md:order-1 h-[calc(100vh-14rem)] overflow-hidden bg-gradient-to-br from-background to-muted/50">
          <CardHeader className="p-3 border-b">
            <div className="flex flex-col space-y-3">
              <CardTitle className="text-sm font-medium">Chat History</CardTitle>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search chats..."
                  className="w-full pl-8 bg-background h-9"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-[calc(100%-4rem)] overflow-y-auto">
            <div className="flex-1 overflow-auto">
              {chatHistories.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-4">
                  <MessageSquare className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">No chat history yet</p>
                  <Button onClick={createNewChat} variant="outline" size="sm" className="mt-2">
                    Start a new chat
                  </Button>
                </div>
              ) : (
                <div>
                  {chatHistories.map(chat => (
                    <div
                      key={chat.id}
                      onClick={() => setActiveChat(chat.id)}
                      className={`p-3 cursor-pointer hover:bg-muted/50 border-b last:border-b-0 flex justify-between group ${
                        activeChat === chat.id ? "bg-muted" : ""
                      }`}
                    >
                      <div className="overflow-hidden">
                        <h3 className="font-medium text-sm truncate">{chat.title}</h3>
                        <p className="text-xs text-muted-foreground truncate">{chat.preview}</p>
                        <p className="text-xs mt-1">{format(chat.date, 'MMM dd, yyyy')}</p>
                      </div>
                      <Button
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteChat(chat.id);
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Chat Content */}
        <Card className="md:col-span-3 order-1 md:order-2 h-[calc(100vh-14rem)] bg-gradient-to-br from-background via-background to-secondary/20">
          <CardContent className="p-0 flex flex-col h-full">
            <Tabs defaultValue="chat" className="flex-1 flex flex-col">
              <TabsList className="px-4 pt-2 justify-start border-b rounded-none">
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="insights">Health Insights</TabsTrigger>
              </TabsList>
              
              <TabsContent value="chat" className="flex-1 flex flex-col m-0 data-[state=active]:flex-1">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {!activeChat ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="max-w-lg mx-auto">
                        <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">Hello! I'm your Health Assistant</h3>
                        <p className="text-xl text-muted-foreground mb-8">How can I help you today?</p>
                        
                        <div className="grid grid-cols-1 gap-4">
                          {suggestionCards.map((suggestion, index) => (
                            <div 
                              key={index} 
                              className="p-4 rounded-xl border bg-card/30 backdrop-blur-sm hover:bg-card/50 cursor-pointer transition-all flex items-center gap-3"
                              onClick={() => {
                                setInput(suggestion.title);
                                createNewChat();
                              }}
                            >
                              {suggestion.icon}
                              <div>
                                <h4 className="font-medium mb-1">{suggestion.title}</h4>
                                <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    currentChat?.messages.map((message) => (
                      <div 
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`flex max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                          {message.sender === "ai" && (
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src="/lovable-uploads/cd438ca8-78ca-443f-92e0-79a6cf85291b.png" />
                              <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={`p-3 rounded-2xl ${
                              message.sender === "user"
                                ? "bg-gradient-to-r from-primary to-purple-500 text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }`}
                          >
                            <p className="leading-relaxed">{message.content}</p>
                            <div className="text-xs opacity-70 mt-1 text-right">
                              {format(message.timestamp, "h:mm a")}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                
                <div className="border-t p-4">
                  <form onSubmit={handleSend} className="flex space-x-2">
                    <Input
                      placeholder={activeChat ? "Type your message..." : "Select or create a chat to start"}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-1 bg-card/30"
                      disabled={!activeChat}
                    />
                    <Button type="submit" size="icon" disabled={!activeChat} className="bg-gradient-to-r from-primary to-purple-500">
                      <Send size={18} />
                    </Button>
                  </form>
                </div>
              </TabsContent>
              
              <TabsContent value="insights" className="flex-1 overflow-auto m-0 p-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2">Health Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border-primary/10">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base font-medium">Your Blood Pressure Trend</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[200px] w-full">
                            {/* Simple SVG chart visualization */}
                            <svg viewBox="0 0 800 200" className="w-full h-full">
                              <path 
                                d="M0,120 C100,120 150,80 200,100 S250,150 300,140 S350,60 400,80 S450,130 500,140 S550,90 600,80 S650,110 700,100 S750,120 800,120" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="3"
                                className="text-primary"
                              />
                              <path 
                                d="M0,150 C100,150 150,130 200,140 S250,170 300,160 S350,120 400,130 S450,160 500,170 S550,140 600,130 S650,150 700,140 S750,150 800,150" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="3"
                                className="text-primary/60"
                              />
                            </svg>
                          </div>
                          <div className="text-sm text-muted-foreground text-center mt-2">
                            Your blood pressure has been stable over the past month
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="overflow-hidden bg-gradient-to-br from-amber-500/5 to-amber-500/10 border-amber-500/10">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base font-medium">Health Recommendations</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex gap-2 items-center">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              Maintain your current exercise routine
                            </li>
                            <li className="flex gap-2 items-center">
                              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                              Consider reducing sodium intake
                            </li>
                            <li className="flex gap-2 items-center">
                              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                              Schedule your annual checkup
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <Card className="overflow-hidden bg-gradient-to-br from-indigo-500/5 to-indigo-500/10 border-indigo-500/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">Topics You've Discussed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Blood Pressure</div>
                        <div className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">Sleep</div>
                        <div className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">Exercise</div>
                        <div className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">Nutrition</div>
                        <div className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">Stress Management</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
