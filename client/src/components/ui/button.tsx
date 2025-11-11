// Salin dan Timpa semua kode di client/src/components/ui/button.tsx dengan kode ini:

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // === INI BAGIAN YANG SAYA UBAH ===
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0" +
  
  " transition-all duration-300 ease-out active:translate-y-0",
  // === AKHIR PERUBAHAN DI DASAR ===
  {
    variants: {
      variant: {
        // === SAYA TAMBAHKAN 'hover:' DI SEMUA VARIAN INI ===
        default:
          "bg-primary text-primary-foreground border border-primary-border hover:bg-primary/90", // Akan sedikit memudar
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive-border hover:bg-destructive/90", // Akan sedikit memudar
        outline:
          " border [border-color:var(--button-outline)] shadow-xs active:shadow-none hover:bg-accent hover:text-accent-foreground", // Akan terisi warna aksen
        secondary: 
          "border bg-secondary text-secondary-foreground border border-secondary-border hover:bg-secondary/80", // Akan sedikit memudar
        ghost: 
          "border border-transparent hover:bg-accent hover:text-accent-foreground", // Akan terisi warna aksen
      },
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }