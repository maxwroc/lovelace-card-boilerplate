# lovelace-card-boilerplate
Startup setup for new lovelace (Home Assistant) card development 

## What is here?

* Card code written in TypeScript
* Bundling all the files to single output
* Map file generated, poiting to repo url (with version etc), this way debugging is possible without having source code locally
* CSS code minimized, converted to TS and included in output bundle
* Two bundle types: debug and crunched one
* LitElement class extracted from the home-assistant-main element, this way lit-elemnt package doesn't need to be bundled which minimizes the bundle size 

## How to use it?
1. Clone this repo to your box
  
    `git clone https://github.com/maxwroc/lovelace-card-boilerplate.git your-card-name`
  
2. Create empty repo on your git server and copy it's url

3. Change the remote url

    `git remote set-url origin [your target repo url]`
    
4. Change the card class name and the custom element name in index.ts
    
5. Push the code and you are ready to go

    `git push origin master`
    
6. Build
 
    The output files are located in `dist` directory.
    
   * `npm run build` produces debug version of the code (just bundled but no crunched)
   * `npm run release` produces crunched bundle
   
    Note: The style.ts file is auto-generated
    
