import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; 🌍 Global Material Flow Map</TypingAnimation>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span className="text-sm sm:text-md">✔ Recycling Facility Locator</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span className="text-sm sm:text-md">✔ Circular Hotspot Mapping</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span className="text-sm sm:text-md">✔ Impact Heatmaps</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span className="text-sm sm:text-md">✔ User-Specific Mapping</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span className="text-sm sm:text-md">✔ From Mines to Recycling Hubs</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-green-500">
        <span className="text-sm sm:text-md">✔ Personalized Map for Your Project”</span>
      </AnimatedSpan>

      <TypingAnimation delay={6000} className="text-muted-foreground">
        metals from mines to recycling hubs.
      </TypingAnimation>

    </Terminal>
  );
}
