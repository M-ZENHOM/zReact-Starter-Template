import React from "react"
import { cn } from "../../lib/utils"


const AlertTrigger = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => (
    <button
        ref={ref}
        className={cn(
            "inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/80",
            className
        )}
        {...props}
    />
))
AlertTrigger.displayName = "AlertTrigger"


const AlertDialogOverlay = React.forwardRef<HTMLDivElement, AlertDialoagProps>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn({ "fixed": props.open, "hidden": !props.open },
            "inset-0 z-30 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}
    />
))
AlertDialogOverlay.displayName = "AlertDialogOverlay"

interface AlertDialoagProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
}

const AlertDialoag = React.forwardRef<HTMLDivElement, AlertDialoagProps>(({ className, ...props }, ref) => (
    <>
        <div
            ref={ref}
            className={cn({ "fixed": props.open, "hidden": !props.open },
                " top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-md rounded-md p-4 min-h-[150px] bg-black dark:bg-white z-50",
                className
            )}
            {...props}
        />
        <AlertDialogOverlay open={props.open} />
    </>
))
AlertDialoag.displayName = "AlertDialoag"


const ADTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn(
            "text-md font-semibold text-white dark:text-gray-900",
            className
        )}
        {...props}
    />
))
ADTitle.displayName = "ADTitle"


const ADDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-gray-300 dark:text-gray-500", className)}
        {...props}
    />
))

ADDescription.displayName = "ADDescription"



const ADContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("space-y-2", className)}
        {...props}
    />
))
ADContent.displayName = "ADContent"


const CancelButton = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => (
    <button
        ref={ref}
        className={cn(
            "inline-flex items-center justify-center rounded-md bg-white dark:bg-black px-4 py-2 text-sm font-semibold dark:text-white hover:bg-white/80 dark:hover:bg-black/80",
            className
        )}
        {...props}
    />
))
CancelButton.displayName = "CancelButton"

const ActionButton = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => (
    <button
        ref={ref}
        className={cn(
            "inline-flex items-center justify-center rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700/90",
            className
        )}
        {...props}
    />
))
CancelButton.displayName = "CancelButton"

const ADFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center justify-end space-x-2 mt-3", className)}
        {...props}
    />
))
CancelButton.displayName = "CancelButton"


export { AlertDialoag, ADTitle, ADDescription, ADContent, CancelButton, ActionButton, ADFooter, AlertTrigger }