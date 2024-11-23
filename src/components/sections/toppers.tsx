import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TOPPERS } from "@/lib/constants"
import { Medal, Star } from "lucide-react"

export function Toppers() {
  return (
    <section id="toppers" className="py-24 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Academic Achievers
        </h2>
        <p className="mt-4 text-muted-foreground text-center mb-12">
          Recognizing academic excellence and dedication
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {TOPPERS.map((topper, index) => (
            <Card key={topper.id} className="relative overflow-hidden">
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-yellow-500/20 p-2 rounded-full">
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src={topper.image} alt={topper.name} />
                  <AvatarFallback>{topper.name[0]}</AvatarFallback>
                </Avatar>
                <div className="mt-4">
                  <CardTitle className="flex items-center justify-center gap-2">
                    {topper.name}
                    <Medal className="h-4 w-4 text-yellow-500" />
                  </CardTitle>
                  <CardDescription>{topper.course}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Section</p>
                    <p className="font-medium">{topper.section}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="font-medium">{topper.year}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground">CGPA</p>
                  <p className="text-2xl font-bold text-primary">{topper.cgpa}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}