import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExcerciseDashboard } from "./components/excercise/excercise"
import { ProgressDashboard } from "./components/progress/progress"
import { PersonalDashboard } from "./components/personal/personal"
import { BsStars } from "react-icons/bs";
import {Chat} from "./components/ai/chat";
export function Dashboard() {
  return (
    <Tabs defaultValue="personal" className="w-full flex gap-4">
      <TabsList className="flex flex-col w-fit bg-neutral-100 h-full space-y-2">
        <TabsTrigger value="personal">Personal Info</TabsTrigger>
        <TabsTrigger value="excercise">Excercise Info</TabsTrigger>
      <TabsTrigger value="progress">Progress Info</TabsTrigger>
      <TabsTrigger value="ai-assistant" className="flex gap-2 items-center"><span>AI Assistant</span> <BsStars className="text-yellow-500"/></TabsTrigger>
      </TabsList>
      <TabsContent value="personal"><PersonalDashboard/></TabsContent>
      <TabsContent value="excercise"><ExcerciseDashboard/></TabsContent>
      <TabsContent value="progress"><ProgressDashboard/></TabsContent>
      <TabsContent value="ai-assistant"><Chat/></TabsContent>
    </Tabs>
  )
}
