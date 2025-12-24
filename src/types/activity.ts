export enum SkillLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

export interface ActivityStep {
  description: string;
  isCompleted: boolean;
}

export interface Activity {
  id: string;
  title: string;
  category: string;
  subCategory?: string; // Optional sub-category for better organization
  skillLevel: SkillLevel;
  estimatedTime: string;
  suppliesList: string[];
  safetyNotes?: string;
  instructions: ActivityStep[];
  troubleshootingTips?: string[];
  notes: string;
  isCompleted: boolean;
  isFavorite: boolean;
  lastViewed?: number; // Timestamp for recently viewed
}