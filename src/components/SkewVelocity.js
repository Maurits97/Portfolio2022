import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function activateGsap() {
  gsap.registerPlugin(ScrollTrigger);
    
  let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".skew", "skewY", "deg"), // fast
  clamp = gsap.utils.clamp(-5, 5); // don't let the skew go beyond 20 degrees. 
  
  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -300);
      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power4", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
      }
    }
  });

  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(".skew", {transformOrigin: "left center", force3D: true});
}

export default function SkewVelocity({ children }) {
  useEffect(() => { activateGsap() });

  return (
    <div className="skew">
      { children }
    </div>
  )
}