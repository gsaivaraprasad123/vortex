import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ACHIEVEMENTS } from "@/lib/constants"
import { Trophy } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Achievements
        </h2>
        <p className="mt-4 text-muted-foreground text-center mb-12">
          Celebrating our department's success and recognition
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((achievement) => (
            <Card key={achievement.id} className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardHeader>
                <div className="mb-4 w-fit rounded-full bg-primary/10 p-2">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{achievement.title}</CardTitle>
                <CardDescription>{achievement.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}