export interface CarrierInfo {
  country: string;
  countryCode: string;
  carrierName: string;
  lineType: string;
  timezone: string;
  validFormat: boolean;
}

export interface SocialProfile {
  platform: string;
  url: string;
  description: string;
  confidence: "high" | "medium" | "low";
}

export interface MessagingApp {
  app: string;
  status: "active" | "inactive" | "unknown";
  details: string;
}

export interface LeakRecord {
  breachName: string;
  date: string;
  leakDetails: string;
  riskLevel: "critical" | "high" | "medium" | "low";
}

export interface WebMention {
  title: string;
  url: string;
  snippet: string;
}

export interface SearchSource {
  title: string;
  url: string;
}

export interface OSINTReport {
  carrierInfo: CarrierInfo;
  profiles: SocialProfile[];
  messaging: MessagingApp[];
  leaks: LeakRecord[];
  mentions: WebMention[];
  summary: string;
  riskScore: number;
  sources?: SearchSource[];
  apiWarning?: string;
}
