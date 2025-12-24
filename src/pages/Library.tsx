import React, { useState, useMemo } from "react";
import { useActivities } from "@/hooks/useActivities";
import ActivityCard from "@/components/ActivityCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

const Library = () => {
  const { activities, categories, subCategories, toggleFavorite } = useActivities();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubCategory, setSelectedSubCategory] = useState("all");

  const filteredActivities = useMemo(() => {
    let filtered = activities;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((activity) => activity.category === selectedCategory);
    }

    if (selectedSubCategory !== "all") {
      filtered = filtered.filter((activity) => activity.subCategory === selectedSubCategory);
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (activity) =>
          activity.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          activity.category.toLowerCase().includes(lowerCaseSearchTerm) ||
          activity.subCategory?.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
    return filtered;
  }, [activities, searchTerm, selectedCategory, selectedSubCategory]);

  const currentSubCategories = useMemo(() => {
    return selectedCategory !== "all" ? subCategories[selectedCategory] || [] : [];
  }, [selectedCategory, subCategories]);

  return (
    <div className="space-y-8 py-8">
      <h1 className="text-4xl font-bold text-center text-primary">Skill Library</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder="Search activities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-input text-foreground border-border focus:ring-ring"
        />
        <Select value={selectedCategory} onValueChange={(value) => {
          setSelectedCategory(value);
          setSelectedSubCategory("all"); // Reset sub-category when main category changes
        }}>
          <SelectTrigger className="w-full md:w-[200px] bg-input text-foreground border-border focus:ring-ring">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent className="bg-popover text-popover-foreground">
            <ScrollArea className="h-[200px]">
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </ScrollArea>
          </SelectContent>
        </Select>
        {selectedCategory !== "all" && currentSubCategories.length > 0 && (
          <Select value={selectedSubCategory} onValueChange={setSelectedSubCategory}>
            <SelectTrigger className="w-full md:w-[200px] bg-input text-foreground border-border focus:ring-ring">
              <SelectValue placeholder="Select Sub-Category" />
            </SelectTrigger>
            <SelectContent className="bg-popover text-popover-foreground">
              <ScrollArea className="h-[200px]">
                <SelectItem value="all">All Sub-Categories</SelectItem>
                {currentSubCategories.map((sub) => (
                  <SelectItem key={sub} value={sub}>
                    {sub}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
        )}
      </div>

      {filteredActivities.length === 0 ? (
        <p className="text-center text-muted-foreground text-lg">No activities found matching your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} onToggleFavorite={toggleFavorite} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;