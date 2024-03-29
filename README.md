- initial score 56
### Report
Avoid large layout shifts 8 elements found
Enable text compression Potential savings of 1,578 KiB
Minify JavaScript Potential savings of 1,192 KiB
Largest Contentful Paint element 3,430 ms
Eliminate render-blocking resources Potential savings of 500 ms
Reduce unused CSS Potential savings of 398 KiB
Serve images in next-gen formats Potential savings of 771 KiB
Preload Largest Contentful Paint image Potential savings of 160 ms
Preconnect to required origins Potential savings of 110 ms
Reduce unused JavaScript Potential savings of 132 KiB
Efficiently encode images Potential savings of 48 KiB
Page prevented back/forward cache restoration 1 failure reason
Minify CSS Potential savings of 27 KiB
Serve static assets with an efficient cache policy 2 resources found
Ensure text remains visible during webfont load
Does not use passive listeners to improve scrolling performance
Image elements do not have explicit width and height
Avoid enormous network payloads Total size was 3,917 KiB

### improvemnts
- image compression
- css and js minification
- lazy loading, decoding async for images 
- replaced some scripts (like jquery, bootstrap) with cdn versions
- added async defer to scripts
- added preconnect to google fonts
- added font display swap