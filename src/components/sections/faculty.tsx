import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FACULTY } from "@/lib/constants"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Faculty() {
  return (
    <section id="faculty" className="py-24 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Our Faculty
        </h2>
        <p className="mt-4 text-muted-foreground text-center mb-12">
          Meet our experienced and dedicated teaching staff
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {FACULTY.map((member) => (
              <CarouselItem key={member.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <Avatar className="w-32 h-32">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-lg mt-4">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.position}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {member.specialization}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}