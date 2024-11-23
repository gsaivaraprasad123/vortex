import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { COURSES } from "@/lib/constants"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function Courses() {
  return (
    <section id="courses" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Our Courses
        </h2>
        <p className="mt-4 text-muted-foreground text-center mb-12">
          Comprehensive programs designed to shape future tech leaders
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={course.image}
                  alt={course.name}
                  className="object-cover w-full h-full brightness-90 hover:scale-105 transition-transform duration-300"
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}