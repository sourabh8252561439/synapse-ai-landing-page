export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  color: string;
}

export interface PricingPlan {
  name: string;
  id: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface WorkflowNode {
  id: string;
  type: 'trigger' | 'action' | 'integration';
  label: string;
  status: 'idle' | 'running' | 'success' | 'error';
  value: string;
}

export interface MetricCard {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  color: string;
}
