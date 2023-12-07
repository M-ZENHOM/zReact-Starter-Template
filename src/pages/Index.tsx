import { Card, CardContent, CardDescription, CardTitle } from "../components/ui/Card"
import Counter from "../components/Counter"
import { Icons } from "../components/Icons"
import Wrapper from "../components/Wrapper"
import SEO from "../lib/SEO"
import GlowBG from "../components/GlowBG"

function Index() {
  return (
    <Wrapper className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 place-items-center gap-3 pb-20">
      <SEO title="zReact Starter Template" description="This template is built on top of Vite, React.js and Tailwind CSS" />
      <GlowBG />
      {initCards.map((card, i) => (
        <Card key={i} className="w-full max-w-sm p-6 space-y-2 text-center flex flex-col items-center justify-center">
          <CardTitle className="text-4xl flex items-center space-x-3">{card.icon}</CardTitle>
          <CardContent className="text-xl"> {card.title}</CardContent>
          <CardDescription> {card.description}</CardDescription>
        </Card>
      ))}

      <Card className="w-full max-w-sm p-6 space-y-2 text-center flex flex-col items-center justify-center">
        <CardContent className="  text-xl">
          <Counter />
        </CardContent>
        <CardDescription>Counter with useLocalStorage Hook </CardDescription>
      </Card>
    </Wrapper>
  )
}

const initCards = [
  {
    icon: <><Icons.React /> <Icons.TypeScript /></>,
    title: "Fully written in Typescript & TSX",
    description: "With custom ui components.",
  },
  {
    icon: <Icons.Hook />,
    title: "React Custom Hooks",
    description: "useLocalStoage Hook, useTheme Hook, useDebounce Hook, etc..",
  },
  {
    icon: <Icons.Link />,
    title: "File based routing",
    description: "Routes with react-router",
  },
  {
    icon: <Icons.SEO />,
    title: "SEO",
    description: "Frindally SEO with React Helmet Async",
  },
  {
    icon: <Icons.Confetti />,
    title: "Cutom Icons  with react-icons",
    description: "All icons u need with one library with custom Icons component",
  }
]

export default Index
