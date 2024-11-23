import { Button } from "@/components/ui/button"
import { DEPARTMENT_INFO } from "@/lib/constants"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="px-4 py-24 md:py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {DEPARTMENT_INFO.name}
        </h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          {DEPARTMENT_INFO.description}
        </p>
        <div className="mt-8">
          <Button>
            Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {DEPARTMENT_INFO.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl font-bold md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}