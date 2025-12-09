import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-muted hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Custom portfolio variants
        hero: "bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground font-semibold hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-100 bg-[length:200%_100%] hover:bg-right transition-all duration-500",
        "hero-outline": "border-2 border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-100 animate-[border-glow_3s_ease-in-out_infinite]",
        glow: "bg-primary text-primary-foreground relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 hover:shadow-xl hover:shadow-primary/40",
        glass: "bg-card/40 backdrop-blur-xl border border-border/50 text-foreground hover:bg-card/60 hover:border-primary/30",
        // New unique variants
        neon: "bg-transparent border-2 border-primary text-primary font-semibold hover:bg-primary/10 hover:text-foreground hover:animate-[neon-flicker_1.5s_ease-in-out]",
        magnetic: "bg-gradient-to-r from-secondary to-primary text-primary-foreground font-semibold relative overflow-hidden hover:animate-[magnetic-pulse_0.6s_ease-in-out] hover:shadow-2xl hover:shadow-primary/50",
        cyber: "bg-card border border-primary/50 text-primary font-mono uppercase tracking-widest relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary/20 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300 hover:text-foreground hover:border-primary",
        pulse: "bg-primary text-primary-foreground font-semibold animate-pulse-glow hover:scale-105 hover:animate-none transition-transform",
        shine: "bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold relative overflow-hidden after:absolute after:top-0 after:left-[-100%] after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent hover:after:animate-[shine_0.8s_ease-in-out]",
        gradient: "bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground font-semibold bg-[length:200%_200%] animate-[gradient-rotate_4s_ease_infinite] hover:shadow-xl hover:shadow-secondary/30 hover:scale-105",
        morphing: "bg-primary text-primary-foreground font-semibold rounded-xl hover:rounded-3xl transition-all duration-500 hover:bg-secondary hover:shadow-xl hover:shadow-secondary/40 hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
