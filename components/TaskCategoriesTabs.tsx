"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabItem {
  key: string;
  label: string;
  tasks: string[];
}

interface TaskCategoriesTabsProps {
  tabs: TabItem[];
}

export function TaskCategoriesTabs({ tabs }: TaskCategoriesTabsProps) {
  return (
    <Tabs defaultValue={tabs[0]?.key} className="w-full">
      <TabsList className="flex flex-wrap h-auto gap-1 bg-background-muted p-2">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.key} value={tab.key}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.key} value={tab.key} className="mt-4">
          <ul className="list-disc list-inside space-y-2 text-primary/90">
            {tab.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  );
}
