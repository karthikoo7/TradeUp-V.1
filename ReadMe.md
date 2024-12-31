Project Notes:

-For every page we have the main page, which calls all the components that make up the page. Components help enforce code modularity.

-We use <link> when we want to swtich to different pages within the websites whereas we use anchor tag
<a> when we want to provide a link to an external site.

-react project created using command create-react-app {
npx create-react-app my-app
cd my-app
npm start
}

-Setup of Bootstrap also plays an important role in this project. Setup is done using cdn link in the index.html file.

-Using extension simple react snippets to setup react pages faster-
imr (to setup the import react)
ffc(to setup function with the return componnent)

**Multiple lines of code
-hold alt button and select lines where you want to write the same code. once done type the code at once into the multiple lines. hold shift and hold the arrow to select for copy and paste.

**React Router-Dom setup-
-Using npm i react-router-dom we install to use {BrowserRouter}, {Routes}, {Route} in our index.js file to be able to link multiple components to thier separrate routes which when clicked lead to a separate page.
-<BrowserRouter> then <Routes> contains all the routes and then using <Route path='' element={<componentName/>}> we specify each route and the element it renders when that link is accessed.


**Reusing Components using props
-Here, by using props , we are able to use the same component multuple times by passing different values to props thus
removing the need to create separate components with similar structure.
-this is done by writing the ({props}) in the function which can be accesessed in the return part.these props are defined in the file where the component is called.i.e here product page.
--Here, it allows us to reuse the same component mulitple times with the similar format only changing values thus  making it more efficent
method of re-using the component.Check ProductPage.js for more info.

-In the navbar I have replaced all the <a></a> with <Link></Link> and imported links from react router dom, we must also replace href with to='/' which stores the link of th page.
-I have also placed navbar and footer in index.js so that all the  pages being rendered have access to it and it is displayed autoomatically for every page.
REplaced anchor tag in other files with Link provided by router-reat-dom.
-Adding Not found page to be diaplyed for all unrecognized url i.e {localhost:3000/lfgnslgnl} displays 404 not found. and provides a link to redirect to the homepage

**Custom CSS styling
-As in Hero.js of SupportPage we may sometimes need to use override bootstrap css to get the required styling.
-remember to link the stylesheet under bootstrap cdn for the custom srtyling to take precedence.
-