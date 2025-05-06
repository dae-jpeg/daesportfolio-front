import React from "react";
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

interface SkillsSectionProps {
  categories?: SkillCategory[];
}

const SkillsSection = ({
  categories = defaultCategories,
}: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional
            capabilities.
          </p>
        </div>

        <Tabs
          defaultValue={categories[0].name.toLowerCase()}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name.toLowerCase()}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category.name}
              value={category.name.toLowerCase()}
            >
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

const defaultCategories: SkillCategory[] = [
  {
    name: "Technical",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "HTML/CSS", level: 95 },
      { name: "Git", level: 85 },
    ],
  },
  {
    name: "Design",
    skills: [
      { name: "UI/UX Design", level: 80 },
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 70 },
      { name: "Responsive Design", level: 90 },
      { name: "Design Systems", level: 75 },
      { name: "Visual Hierarchy", level: 85 },
    ],
  },
  {
    name: "Soft",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Teamwork", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Time Management", level: 80 },
      { name: "Adaptability", level: 90 },
      { name: "Leadership", level: 75 },
    ],
  },
];

export default SkillsSection;
