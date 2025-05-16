import React, { useEffect, useState } from "react";
import axios from "axios";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const SkillsSection = () => {
  const [categories, setCategories] = useState<SkillCategory[]>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/skill-categories/") // update URL if needed
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to load skills", err));
  }, []);

  if (categories.length === 0) {
    return <div className="text-center py-20">Loading skills...</div>;
  }

  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </div>

        <Tabs defaultValue={categories[0].name.toLowerCase()} className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.name} value={category.name.toLowerCase()}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.name} value={category.name.toLowerCase()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <Card key={skill.name} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex justify-between items-center">
                        <span>{skill.name}</span>
                        <span className="text-sm font-normal text-muted-foreground">
                          {skill.level}%
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
