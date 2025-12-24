import React from "react";
import { useActivities } from "@/hooks/useActivities";
import ActivityCard from "@/components/ActivityCard";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Favorites = () => {
  const { activities, toggleFavorite } = useActivities();
  const favoriteActivities = activities.filter((activity) => activity.isFavorite);

  return (
    <div className="space-y-8 py-8">
      <h1 className="text-4xl font-bold text-center text-primary flex items-center justify-center">
        <Heart className="h-9 w-9 mr-3 text-red-500 fill-red-500" /> Your Favorites
      </h1>

      {favoriteActivities.length === 0 ? (
        <div className="text-center p-8 bg-card rounded-lg shadow-md">
          <p className="text-xl text-muted-foreground mb-4">
            You haven't favorited any activities yet.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Click the heart icon on any activity to add it to your favorites!
          </p>
          <Link to="/library">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Browse Activities
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} onToggleFavorite={toggleFavorite} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;