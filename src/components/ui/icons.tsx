
import { 
  ArrowRight, 
  Github, 
  Home, 
  BarChart, 
  TrendingUp, 
  Calendar, 
  MessageSquare, 
  User, 
  Settings, 
  Moon, 
  Sun, 
  LogOut,
  Menu,
  Activity,
  Laptop
} from "lucide-react"

export const Icons = {
  arrowRight: ArrowRight,
  gitHub: Github,
  home: Home,
  barChart: BarChart,
  trendingUp: TrendingUp,
  calendar: Calendar,
  messageSquare: MessageSquare,
  user: User,
  settings: Settings,
  moon: Moon,
  sun: Sun,
  logOut: LogOut,
  menu: Menu,
  activity: Activity,
  laptop: Laptop,
  healthlyLogo: ({ className }: { className?: string }) => (
    <img 
      src="/lovable-uploads/cd438ca8-78ca-443f-92e0-79a6cf85291b.png" 
      alt="Healthly Logo" 
      className={className || "h-6 w-6 rounded-lg"}
    />
  )
}
