import { useState, useEffect, useCallback } from "react";
import { Activity, ActivityStep, SkillLevel } from "@/types/activity";
import { initialActivities } from "@/data/activities";
import { toast } from "sonner";

interface ActivityState {
  activities: Activity[];
  categories: string[];
  subCategories: { [key: string]: string[] };
  getActivitiesByCategory: (category: string) => Activity[];
  getActivityById: (id: string) => Activity | undefined;
  toggleFavorite: (id: string) => void;
  toggleActivityComplete: (id: string) => void;
  toggleStepComplete: (activityId: string, stepIndex: number) => void;
  updateActivityNotes: (activityId: string, notes: string) => void;
  markActivityViewed: (activityId: string) => void;
  getRecentlyViewedActivities: (limit?: number) => Activity[];
  getInProgressActivities: (limit?: number) => Activity[];
}

const LOCAL_STORAGE_KEY = "skillCraftAcademyActivities";

export function useActivities(): ActivityState {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const storedActivities = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    } else {
      setActivities(initialActivities);
    }
  }, []);

  useEffect(() => {
    if (activities.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities));
    }
  }, [activities]);

  const categories = Array.from(new Set(activities.map((a) => a.category)));
  const subCategories: { [key: string]: string[] } = categories.reduce((acc, category) => {
    acc[category] = Array.from(new Set(
      activities
        .filter(a => a.category === category && a.subCategory)
        .map(a => a.subCategory!)
    ));
    return acc;
  }, {} as { [key: string]: string[] });


  const getActivityById = useCallback(
    (id: string) => activities.find((activity) => activity.id === id),
    [activities]
  );

  const getActivitiesByCategory = useCallback(
    (category: string) => activities.filter((activity) => activity.category === category),
    [activities]
  );

  const toggleFavorite = useCallback((id: string) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === id
          ? { ...activity, isFavorite: !activity.isFavorite }
          : activity
      )
    );
    const activity = getActivityById(id);
    if (activity) {
      toast.success(activity.isFavorite ? `Removed "${activity.title}" from favorites.` : `Added "${activity.title}" to favorites!`);
    }
  }, [getActivityById]);

  const toggleActivityComplete = useCallback((id: string) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === id
          ? {
              ...activity,
              isCompleted: !activity.isCompleted,
              instructions: activity.instructions.map(step => ({...step, isCompleted: !activity.isCompleted})) // Mark all steps complete/incomplete
            }
          : activity
      )
    );
    const activity = getActivityById(id);
    if (activity) {
      toast.success(activity.isCompleted ? `Marked "${activity.title}" as incomplete.` : `"${activity.title}" completed!`);
    }
  }, [getActivityById]);

  const toggleStepComplete = useCallback(
    (activityId: string, stepIndex: number) => {
      setActivities((prevActivities) =>
        prevActivities.map((activity) =>
          activity.id === activityId
            ? {
                ...activity,
                instructions: activity.instructions.map((step, idx) =>
                  idx === stepIndex ? { ...step, isCompleted: !step.isCompleted } : step
                ),
              }
            : activity
        )
      );
      const activity = getActivityById(activityId);
      if (activity) {
        const step = activity.instructions[stepIndex];
        toast.info(step.isCompleted ? `Step ${stepIndex + 1} marked incomplete.` : `Step ${stepIndex + 1} completed!`);
      }
    },
    [getActivityById]
  );

  const updateActivityNotes = useCallback(
    (activityId: string, notes: string) => {
      setActivities((prevActivities) =>
        prevActivities.map((activity) =>
          activity.id === activityId ? { ...activity, notes } : activity
        )
      );
      toast.success("Notes updated!");
    },
    []
  );

  const markActivityViewed = useCallback((activityId: string) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === activityId ? { ...activity, lastViewed: Date.now() } : activity
      )
    );
  }, []);

  const getRecentlyViewedActivities = useCallback((limit: number = 5) => {
    return activities
      .filter(a => a.lastViewed)
      .sort((a, b) => (b.lastViewed || 0) - (a.lastViewed || 0))
      .slice(0, limit);
  }, [activities]);

  const getInProgressActivities = useCallback((limit: number = 5) => {
    return activities
      .filter(a => !a.isCompleted && a.instructions.some(step => step.isCompleted))
      .sort((a, b) => (b.lastViewed || 0) - (a.lastViewed || 0)) // Sort by last viewed for "continue learning"
      .slice(0, limit);
  }, [activities]);

  return {
    activities,
    categories,
    subCategories,
    getActivitiesByCategory,
    getActivityById,
    toggleFavorite,
    toggleActivityComplete,
    toggleStepComplete,
    updateActivityNotes,
    markActivityViewed,
    getRecentlyViewedActivities,
    getInProgressActivities,
  };
}