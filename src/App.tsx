import { ThemeProvider } from "@/components/ui/theme-provider"
import { Navbar } from "./components/navbar"
import { Hero } from "./components/sections/hero"
import { Courses } from "./components/sections/courses"
import { Faculty } from "./components/sections/faculty"
import { Achievements } from "./components/sections/achievements"
import { Toppers } from "./components/sections/toppers"

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <Courses />
          <Faculty />
          <Achievements />
          <Toppers />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App