import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useActivities } from "@/hooks/useActivities";
import { Activity, SkillLevel } from "@/types/activity";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Clock, BookOpen, CheckCircle, ChevronLeft, Save } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const ActivityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    getActivityById,
    toggleFavorite,
    toggleActivityComplete,
    toggleStepComplete,
    updateActivityNotes,
    markActivityViewed,
  } = useActivities();

  const activity = getActivityById(id || "");
  const [currentNotes, setCurrentNotes] = useState(activity?.notes || "");

  useEffect(() => {
    if (activity) {
      markActivityViewed(activity.id);
      setCurrentNotes(activity.notes);
    }
  }, [activity, markActivityViewed]);

  if (!activity) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-destructive">Activity Not Found</h1>
        <p className="text-muted-foreground mt-2">The activity you are looking for does not exist.</p>
        <Button onClick={() => navigate("/library")} className="mt-4">
          Go to Library
        </Button>
      </div>
    );
  }

  const handleSaveNotes = () => {
    updateActivityNotes(activity.id, currentNotes);
  };

  const skillLevelColor = {
    [SkillLevel.Beginner]: "text-green-600",
    [SkillLevel.Intermediate]: "text-yellow-600",
    [SkillLevel.Advanced]: "text-red-600",
  };

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-6">
      <Button variant="ghost" onClick={() => navigate(-1)} className="flex items-center text-primary hover:text-primary/90">
        <ChevronLeft className="h-5 w-5 mr-2" /> Back
      </Button>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-bold mb-2">{activity.title}</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                {activity.category} {activity.subCategory && ` / ${activity.subCategory}`}
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleFavorite(activity.id)}
              className={cn(
                "text-muted-foreground hover:text-red-500",
                activity.isFavorite && "text-red-500 fill-red-500"
              )}
            >
              <Heart className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center space-x-4 mt-4 text-sm">
            <div className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4 text-accent-foreground" />
              <span className={cn("font-medium", skillLevelColor[activity.skillLevel])}>
                {activity.skillLevel}
              </span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="mr-2 h-4 w-4" />
              <span>{activity.estimatedTime}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {activity.safetyNotes && (
            <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 rounded-md text-yellow-800 dark:text-yellow-200">
              <h3 className="font-semibold text-lg mb-1">Safety Notes:</h3>
              <p>{activity.safetyNotes}</p>
            </div>
          )}

          <div>
            <h3 className="text-2xl font-semibold mb-3">Supplies List</h3>
            <ul className="list-disc list-inside space-y-1 text-lg text-muted-foreground">
              {activity.suppliesList.map((supply, index) => (
                <li key={index}>{supply}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Instructions</h3>
            <div className="space-y-4">
              {activity.instructions.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Checkbox
                    id={`step-${index}`}
                    checked={step.isCompleted}
                    onCheckedChange={() => toggleStepComplete(activity.id, index)}
                    className="mt-1 h-5 w-5 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                  <Label htmlFor={`step-${index}`} className={cn("text-lg leading-relaxed", step.isCompleted && "line-through text-muted-foreground")}>
                    <span className="font-medium mr-2">{index + 1}.</span> {step.description}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {activity.troubleshootingTips && activity.troubleshootingTips.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-3">Troubleshooting Tips</h3>
              <ul className="list-disc list-inside space-y-1 text-lg text-muted-foreground">
                {activity.troubleshootingTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-2xl font-semibold mb-3">Your Notes</h3>
            <Textarea
              placeholder="Add your personal notes here..."
              value={currentNotes}
              onChange={(e) => setCurrentNotes(e.target.value)}
              className="min-h-[120px] bg-input text-foreground border-border focus:ring-ring"
            />
            <Button onClick={handleSaveNotes} className="mt-3 bg-accent text-accent-foreground hover:bg-accent/90">
              <Save className="h-4 w-4 mr-2" /> Save Notes
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            onClick={() => toggleActivityComplete(activity.id)}
            className={cn(
              "px-6 py-3 text-lg",
              activity.isCompleted ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {activity.isCompleted ? "Mark as Incomplete" : "Mark Activity Complete"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ActivityDetail;