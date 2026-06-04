export interface StatCardData {
  title: string;
  value: string;
  description: string;
  trend: "up" | "down" | "neutral";
  trendValue: string;
  iconName: string;
}

export const statsData: StatCardData[] = [
  {
    title: "Monthly Revenue",
    value: "$48,200",
    description: "Nextera revenue this month",
    trend: "up",
    trendValue: "+9.4%",
    iconName: "DollarSign",
  },
  {
    title: "Active Leads",
    value: "34",
    description: "Leads in pipeline",
    trend: "up",
    trendValue: "+6",
    iconName: "TrendingUp",
  },
  {
    title: "Open Projects",
    value: "12",
    description: "Projects in progress",
    trend: "neutral",
    trendValue: "2 due soon",
    iconName: "Package",
  },
  {
    title: "Active Clients",
    value: "56",
    description: "Clients you work with",
    trend: "up",
    trendValue: "+3",
    iconName: "Users",
  },
  {
    title: "Pending Invoices",
    value: "8",
    description: "Awaiting payment",
    trend: "down",
    trendValue: "-2",
    iconName: "FileText",
  },
];

export const revenueChartData = [
  { month: "Jan", revenue: 32000, expenses: 18500 },
  { month: "Feb", revenue: 36500, expenses: 19200 },
  { month: "Mar", revenue: 41200, expenses: 20100 },
  { month: "Apr", revenue: 38900, expenses: 19800 },
  { month: "May", revenue: 44100, expenses: 21400 },
  { month: "Jun", revenue: 46800, expenses: 22100 },
  { month: "Jul", revenue: 48200, expenses: 22800 },
];

export const recentTransactions = [
  {
    id: "INV-2026-0142",
    client: "Atlas Digital",
    amount: "$4,800.00",
    status: "Completed",
    date: "2026-06-03",
    avatar: "AD",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "INV-2026-0141",
    client: "Horizon Retail",
    amount: "$2,150.00",
    status: "Pending",
    date: "2026-06-02",
    avatar: "HR",
    image: "https://plus.unsplash.com/premium_photo-1733971878518-fee3ce2b7aa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "INV-2026-0140",
    client: "Summit Logistics",
    amount: "$6,200.00",
    status: "Completed",
    date: "2026-06-01",
    avatar: "SL",
    image: "https://plus.unsplash.com/premium_photo-1690294614341-cf346ba0a637?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "INV-2026-0139",
    client: "Nova Health",
    amount: "$1,850.00",
    status: "Processing",
    date: "2026-05-30",
    avatar: "NH",
    image: "https://images.unsplash.com/photo-1532170579297-281918c8ae72?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "INV-2026-0138",
    client: "Brightline Studio",
    amount: "$3,400.00",
    status: "Completed",
    date: "2026-05-28",
    avatar: "BS",
    image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  },
];

export const categoryData = [
  { category: "Client Projects", value: 420, fill: "hsl(var(--primary))" },
  { category: "Campaigns", value: 180, fill: "#000000" },
  { category: "Training", value: 95, fill: "#22c55e" },
  { category: "Retainers", value: 140, fill: "#f5f4f3" },
];

export const userGrowthData = [
  { day: "Mon", users: 4 },
  { day: "Tue", users: 7 },
  { day: "Wed", users: 5 },
  { day: "Thu", users: 9 },
  { day: "Fri", users: 6 },
  { day: "Sat", users: 2 },
  { day: "Sun", users: 1 },
];

export const upcomingTasks = [
  {
    id: 1,
    title: "Q2 campaign review — Horizon Retail",
    dueDate: "Tomorrow",
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    title: "Client onboarding: Atlas Digital",
    dueDate: "Jun 6, 2026",
    priority: "Medium",
    status: "Scheduled",
  },
  {
    id: 3,
    title: "Training session — internal team",
    dueDate: "Jun 10, 2026",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Monthly report for Nextera leadership",
    dueDate: "Jun 12, 2026",
    priority: "High",
    status: "Planning",
  },
  {
    id: 5,
    title: "Purchase order follow-up — Summit Logistics",
    dueDate: "Jun 14, 2026",
    priority: "Low",
    status: "Planning",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Noureddine Elm",
    role: "Founder & Admin",
    status: "online",
    lastSeen: "Just now",
    avatar: "NE",
    image: "/me.webp",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Account Manager",
    status: "online",
    lastSeen: "2m ago",
    avatar: "SC",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Marcus Bell",
    role: "Project Lead",
    status: "away",
    lastSeen: "15m ago",
    avatar: "MB",
    image: "https://plus.unsplash.com/premium_photo-1690294614341-cf346ba0a637?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Campaign Specialist",
    status: "online",
    lastSeen: "Just now",
    avatar: "ER",
    image: "https://plus.unsplash.com/premium_photo-1733971878518-fee3ce2b7aa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Lisa Wong",
    role: "Finance & Invoicing",
    status: "offline",
    lastSeen: "2h ago",
    avatar: "LW",
    image: "https://images.unsplash.com/photo-1532170579297-281918c8ae72?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
