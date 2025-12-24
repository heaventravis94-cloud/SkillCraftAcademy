import { useActivities } from "@/hooks/useActivities";
import ActivityCard from "@/components/ActivityCard";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { getInProgressActivities, getRecentlyViewedActivities, toggleFavorite } = useActivities();

  const inProgressActivities = getInProgressActivities(3);
  const recentlyViewedActivities = getRecentlyViewedActivities(3);

  return (
    <div className="space-y-8 py-8">
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-primary mb-4">SkillCraft Academy</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Unlock your potential with a vast library of practical skills. Learn anytime, anywhere, through clear, structured lessons.
        </p>
        <div className="mt-6">
          <Link to="/library">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4">
              Explore Skills
            </Button>
          </Link>
        </div>
      </section>

      {inProgressActivities.length > 0 && (
        <section className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-card-foreground mb-6">Continue Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} onToggleFavorite={toggleFavorite} />
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/progress">
              <Button variant="outline" className="text-primary hover:text-primary/90">View All Progress</Button>
            </Link>
          </div>
        </section>
      )}

      {recentlyViewedActivities.length > 0 && (
        <section className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-card-foreground mb-6">Recently Viewed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyViewedActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} onToggleFavorite={toggleFavorite} />
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/library">
              <Button variant="outline" className="text-primary hover:text-primary/90">Browse More</Button>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-card p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-card-foreground mb-4">Suggestions</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Discover new skills tailored just for you! (Feature coming soon)
        </p>
        <Link to="/library">
          <Button variant="outline" className="text-primary hover:text-primary/90">Explore All Categories</Button>
        </Link>
      </section>
    </div>
  );
};

export default Index;