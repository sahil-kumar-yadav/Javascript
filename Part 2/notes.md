# main DOM and EVENTS

- DOM document model object (aapka jo document(html) hai kis model sy bana hai )
- console.log(window) window obejct

# 00:18:25  -  All DOM selector

- innerText -  return only visible text
- innerContent - return all text even if it is in span or display hidden
- innerhtml - return html of selected element
- # getElememtByClassName('class')
- # getElementById('id')
- querySelector --> Css selector
- # document.querySelector('h1') -- > gives first h1 tag element
- document.querySelector('#id') -- > gives id element
- document.querySelector(csstag) -- > gives first class element with given classname
- # document.querySelector(csstag) --> gives all elements with given css tag
- Nodelist is similar to array but not array
- For Nodelist use forEach loop
- document.querySelectorAll('')[index  of that enement] 
- HTMLCollection py koi bhi loop nahi lagega so we have to convert it to array by Array.from(htmlcollection name)


# 00:59:58  -  How to create a new element
// 1.52

# Use Git bash to create multiple files

# [project 4 Link ](https://javascript-e6p.pages.dev/)

# [project 3 Link](https://digital-analog-clock.tiiny.site/)



# 05:30:41  -  Promise in javscript
- The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response.

- network sy agar 404 error atta hai to vo .then me jayega , kyuki error sirf tabh aata hai jab browser request he nahi kar pata 


```javascript

async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}


 ```