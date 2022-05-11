# Notes

## Bootstrap

Since I’m very familiar with Bootstrap, I chose it as my responsive framework. As the guidelines said “recent browsers and mobile devices,” I went with Bootstrap version 5, which removes support for Internet Explorer. If a project had the requirement of supporting IE, I would use Bootstrap 4.

As I didn’t need most of the elements, I only imported scss files I was certain I’d need in my style.scss file. This saved almost 25% on the final minimized css file size. I tried doing the same with javascript, but had trouble finding the right mix of javascript files that would give me the navigation collapse without including the entire thing.

There are many classes in bootstrap that can make it easier to style things (like all the flexbox classes), but I’m not convinced I like using them. I’ve gone both ways here: using some of those classes as well as manually adding my own in other spots. The final method I use would probably depend on what the opinions of the rest of the team are, but I lean toward putting those things in my CSS and not cluttering up the HTML with lots of extra classes. This could also allow removal of some of the bootstrap dependencies. I’ve used both here partly so you can see that I know how to do both, and partly just depending on whether I was knee deep in CSS or HTML at the time. The ones I like the most are the ones that apply `display` styling at different breakpoints.

## Gulp

I used gulp to generate the css from Bootstrap scss files combined with my additions.

## Owl Carousel and JQuery

I was going to try to get by without JQuery here, but I wasn’t sure how to get the kind of carousel behavior efficiently (and in a decent timeframe) without incorporating Owl Carousel (which depends on JQuery). I have built elements before that collapse to a similar kind of carousel with just CSS (using scroll-snap), but the navigation dots and scaling of non-active items becomes difficult at that point. Maybe someday I’ll figure that out.

## Decisions and Assumptions

1. In the interest of standardizing styles, since some buttons used the Interstate font and some didn’t, I standardized to Interstate for buttons. In the real world, I would check with the designer before making this kind of decision.

2. Hover states weren’t clearly defined, so in absence of a direct line to the designer, I made some interpretive decisions. This applies primarily to the Insights cards (which were obviously intended to be links) and the buttons.

3. I used clip-path for the angled corners on the images. This fits within the browser support requirement, and ensures ease of maintanence for the Insights content.

4. There were a few inconcistencies that I assumed were errors, like the fact that the ‘IL’ in the location for the first event is a different font weight, and the fact that the last button has a slight glow.

5. I also standardized button padding instead of button width. [STILL DECIDING]

6. The gradient in Photoshop on the event cards was hard to reproduce as it was rendered so I didn’t have the precise color and alpha information. However, I think I got it pretty close.

7. As I had no vector artwork to work with, any images are just 1:1, no alternate sizes because that would just be up-converting smaller images, which is kind of pointless since that happens in the browser. I would have loved to be able to go SVG for the logo images.

8. Events and Insights headers on mobile seemed to have been updated after the desktop design, so I went with that style across the board, as it didn’t make much sense to change those between mobile and desktop. For the differences in styling with the Events cards, I liked mobile better so I mostly went with that.

9. The way the bootstrap collapsible nav element is built, it becomes really difficult if not impossible to do the style of mobile nav that was in the design in regards to coloring. Maybe I’ll figure it out someday, but instead of gray background in the navbar + white background in the expandend links section + gray background on the links, I left the navbar itself with a white background, which matches the desktop version.

10. The mobile design is 750 pixels wide, which is quite wide for mobile devices. As a result, I made additional minor decisions for responsiveness on actual phone sizes, as well as smaller desktop and tablet sizes for which I didn’t have a design.

11. The mobile design had a lot more links than the desktop, and not the same links, so I combined them.
