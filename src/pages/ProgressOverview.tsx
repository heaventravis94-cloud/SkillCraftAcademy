import React from "react";
import { useActivities } from "@/hooks/useActivities";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProgressOverview = () => {
  const { activities } = useActivities();
  const totalActivities = activities.length;
  const completedActivities = activities.filter((a) => a.isCompleted).length;
  const inProgressActivities = activities.filter((a) => !a.isCompleted && a.instructions.some(step => step.isCompleted)).length;
  const completionPercentage = totalActivities > 0 ? Math.round((completedActivities / totalActivities) * 100) : 0;

  return (
    <div className="space-y-8 py-8">
      <h1 className="text-4xl font-bold text-center text-primary flex items-center justify-center">
        <TrendingUp className="h-9 w-9 mr-3 text-accent-foreground" />
        Your Progress
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card text-card-foreground shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-medium">Total Activities</CardTitle>
            <BookOpen className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold">{totalActivities}</div>
            <p className="text-sm text-muted-foreground">Skills available</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card text-card-foreground shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-medium">Completed</CardTitle>
            <CheckCircle className="h-6 w-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold">{completedActivities}</div>
            <p className="text-sm text-muted-foreground">Activities finished</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card text-card-foreground shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-medium">In Progress</CardTitle>
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold">{inProgressActivities}</div>
            <p className="text-sm text-muted-foreground">Activities started</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-card text-card-foreground shadow-md p-6">
        <CardTitle className="text-2xl font-medium mb-4">Overall Completion</CardTitle>
        <div className="flex items-center space-x-4">
          <Progress value={completionPercentage} className="h-4 bg-secondary" indicatorClassName="bg-primary" />
          <span className="text-lg font-semibold">{completionPercentage}%</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {completionPercentage === 100 
            ? "Congratulations! You've completed all activities!" 
            : completionPercentage > 0 
              ? "Keep going! You're making great progress!" 
              : "Start completing activities to track your progress!"}
        </p>
      </Card>
      
      <div className="text-center mt-8">
        <Link to="/library">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Discover More Skills
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProgressOverview;