import { Button } from "../components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "../components/ui/Card";
import Wrapper from "../components/Wrapper";
import Image from '../assets/img.jpg'
import SEO from "../lib/SEO";
import { Icons } from "../components/Icons";
import { ADContent, ADDescription, ADFooter, ADTitle, ActionButton, AlertDialoag, AlertTrigger, CancelButton } from "../components/ui/Alert-Dialoag";
import { useState } from "react";
import GlowBG from "../components/GlowBG";

const variants = ["default", "outline", "secondary", "destructive", "ghost", "violet", "neon"]

export default function Components() {
    const [open, setOpen] = useState(false)
    return (
        <Wrapper className="px-8 pb-20">
            <SEO title="Components" description="This template is built on top of Vite, React.js and Tailwind CSS" />
            <GlowBG />
            <h2 className="text-extrabold text-3xl tracking-tight my-5">Buttons</h2>
            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 md:space-x-4">
                {variants.map((va, i) => (
                    //@ts-ignore 
                    <Button variant={va} key={i}>{va}</Button>
                ))}
                <Button size="icon"><Icons.Sun /></Button>
                <Button size="icon" variant="outline"><Icons.Moon /></Button>
            </div>
            <div className="border my-10" />
            {/* Alert Dialoag */}
            <AlertTrigger onClick={() => setOpen(!open)}>AlertDialog</AlertTrigger>
            <AlertDialoag open={open}>
                <ADContent>
                    <ADTitle>Are you sure to delete this?</ADTitle>
                    <ADDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</ADDescription>
                </ADContent>
                <ADFooter>
                    <CancelButton onClick={() => setOpen(false)}>Cancel</CancelButton>
                    <ActionButton>Yes, Delete Account</ActionButton>
                </ADFooter>
            </AlertDialoag>
            <div className="border my-10" />
            {/* Cards */}
            <h2 className="text-extrabold text-3xl tracking-tight my-5">Cards</h2>
            <div className="grid grid-cols-fluid gap-4 w-full">
                <Card className="w-fit h-fit p-6">
                    <CardTitle className="text-4xl flex items-center space-x-3">Hello World</CardTitle>
                    <CardDescription>Hello world with react</CardDescription>
                    <CardContent className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ex?
                    </CardContent>
                </Card>
                <Card className="w-fit md:w-[350px] p-6 space-y-1">
                    <CardTitle className="text-4xl flex items-center space-x-3">Card with Image</CardTitle>
                    <CardDescription>image description</CardDescription>
                    <CardContent className="text-xl">
                        <img className="w-full h-52 object-cover rounded-xl" src={Image} alt="Image" />
                    </CardContent>
                    <CardFooter className="space-x-3">
                        <Button variant="outline">View</Button>
                        <Button>Buy</Button>
                    </CardFooter>
                </Card>
            </div>

        </Wrapper>
    )
}
