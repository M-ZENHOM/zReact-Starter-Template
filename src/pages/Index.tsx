import { Card, CardContent, CardDescription, CardTitle } from "../components/Card"
import Counter from "../components/Counter"
import { Icons } from "../components/Icons"
import Wrapper from "../components/Wrapper"
import SEO from "../lib/SEO"

function Index() {
  return (
    <Wrapper className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 place-items-center gap-3 pb-20">
      <SEO title="zReact Starter Template" description="This template is built on top of Vite, React.js and Tailwind CSS" />
      <div className="absolute top-0 left-[50%] -translate-x-[50%] w-full md:w-[700px] h-[500px]  dark:bg-blue-500/10 blur-3xl opacity-75 -z-10" />
      <Card className="w-full max-w-sm p-6 space-y-2 text-center flex flex-col items-center justify-center">
        <CardTitle className="text-4xl flex items-center space-x-3">  <Icons.React />+<Icons.TypeScript /></CardTitle>
        <CardContent className="text-xl">
          Fully written in Typescript & TSX
        </CardContent>
        <CardDescription>
          <p>With custom ui components.</p>
        </CardDescription>
      </Card>
      <Card className="w-full max-w-sm p-6 space-y-2 text-center flex flex-col items-center justify-center">
        <CardTitle className="text-4xl">  <Icons.Hook /></CardTitle>
        <CardContent className="text-xl">
          React Custom Hooks
        </CardContent>
        <CardDescription>
          <p>useLocalStoage Hook, useTheme Hook, etc..</p>
        </CardDescription>
      </Card>
      <Card className="w-full max-w-sm p-6 space-y-2 text-center flex flex-col items-center justify-center">
        <CardTitle className="text-4xl">  <Icons.Link /></CardTitle>
        <CardContent className="  text-xl">
          File based routing
        </CardContent>
        <CardDescription>
          <p>All icons u need with one library with custom Icons component</p>
        </CardDescription>
      </Card>
      <Card className="w-full max-w-sm p-6 space-y-2 text-center flex flex-col items-center justify-center">
        <CardTitle className="text-4xl">  <Icons.SEO /></CardTitle>
        <CardContent className="  text-xl">
          SEO
        </CardContent>
        <CardDescription>
          <p>Frindally SEO with React Helmet Async</p>
        </CardDescription>
      </Card>
      <Card className="w-full max-w-sm p-6 space-y-2 text-center flex flex-col items-center justify-center">
        <CardTitle className="text-4xl">  <Icons.Confetti /></CardTitle>
        <CardContent className="  text-xl">
          Cutom Icons  with react-icons
        </CardContent>
        <CardDescription>
          <p>All icons u need with one library with custom Icons component</p>
        </CardDescription>
      </Card>
      <Card className="w-full max-w-sm p-6 space-y-2 text-center flex flex-col items-center justify-center">
        {/* <CardTitle className="text-4xl">  <Icons.Confetti /></CardTitle> */}
        <CardContent className="  text-xl">
          {/* Cutom Icons  with react-icons */}
          <Counter />
        </CardContent>
        <CardDescription>
          <p>Counter with useLocalStorage Hook</p>
        </CardDescription>
      </Card>
    </Wrapper>
  )
}

export default Index
