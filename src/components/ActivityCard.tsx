import React from "react";
import { Link } from "react-router-dom";
import { Activity, SkillLevel } from "@/types/activity";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Clock, BookOpen, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityCardProps {
  activity: Activity;
  onToggleFavorite: (id: string) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onToggleFavorite }) => {
  const skillLevelColor = {
    [SkillLevel.Beginner]: "text-green-600",
    [SkillLevel.Intermediate]: "text-yellow-600",
    [SkillLevel.Advanced]: "text-red-600",
  };

  return (
    <Card className="w-full max-w-sm bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{activity.title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {activity.category} {activity.subCategory && ` / ${activity.subCategory}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm">
          <BookOpen className="mr-2 h-4 w-4 text-accent-foreground" />
          <span className={cn("font-medium", skillLevelColor[activity.skillLevel])}>
            {activity.skillLevel}
          </span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4" />
          <span>{activity.estimatedTime}</span>
        </div>
        {activity.isCompleted && (
          <div className="flex items-center text-sm text-green-600 font-medium">
            <CheckCircle className="mr-2 h-4 w-4" />
            <span>Completed!</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Link to={`/activity/${activity.id}`}>
          <Button variant="outline" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
            View Activity
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onToggleFavorite(activity.id)}
          className={cn(
            "text-muted-foreground hover:text-red-500",
            activity.isFavorite && "text-red-500 fill-red-500"
          )}
        >
          <Heart className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;