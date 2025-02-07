import { useState } from 'react'
import {Button} from './components/ui/button.jsx'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function App() {
  const [count, setCount] = useState(0)

  return (
       <main className='p-4'>
      <Button variant="destructive">Click Me</Button>
      <Button variant="default">Click Me</Button>

      <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
          </AccordionItem>
     </Accordion>


     <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>


       </main>
  )
}

export default App
