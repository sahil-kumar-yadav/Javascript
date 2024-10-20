# Main DOM and Events

- **DOM (Document Object Model)**: A programming interface for HTML and XML documents. It represents the document structure as a tree of objects, allowing programs to manipulate the content and structure of the document dynamically.
- **Window Object**: The global context for the browser; you can log it using `console.log(window)` to see various properties and methods available.
  - DOM document model object (aapka jo document(html) hai kis model sy bana hai )
  - console.log(window) window obejct

### 1. DOM Selectors (00:18:25)


- **innerText**: Retrieves only the visible text within an element, excluding hidden elements.
- **textContent**: Gets all text, including text in hidden elements.
- **innerHTML**: Returns the HTML content of the selected element.
  - innerText -  return only visible text
  - innerContent - return all text even if it is in span or display hidden
  - innerhtml - return html of selected element

#### Common Selection Methods:

- `document.getElementsByClassName('class')`: Selects all elements with the specified class name.
- `document.getElementById('id')`: Selects the element with the specified ID.
- **querySelector**: Allows for CSS-style selectors:
- `document.querySelector('h1')`: Returns the first `<h1>` element.
- `document.querySelector('#id')`: Returns the element with the specified ID.
- `document.querySelector('.className')`: Returns the first element with the specified class name.
- `document.querySelectorAll('selector')`: Returns a NodeList(all elements) of all matching elements.

#### Working with NodeLists and HTMLCollections:

- A **NodeList** is similar to an array but not exactly an array. You can use `forEach` to iterate over it.
- **HTMLCollection**: Cannot be directly looped over, so convert it to an array using `Array.from(htmlCollection)` before iteration.
  - Nodelist is similar to array but not array
  - For Nodelist use forEach loop
  - document.querySelectorAll('')[index  of that enement] 
  - HTMLCollection py koi bhi loop nahi lagega so we have to convert it to array by Array.from(htmlcollection name)

### 2. Creating New Elements (00:59:58)

- To create a new HTML element:
  ```javascript
  const newElement = document.createElement('div');
  newElement.innerText = 'Hello, World!';
  document.body.appendChild(newElement);
  ```


### 3. Using Git Bash

- Use Git Bash to create multiple files for your projects, streamlining your workflow.


### 4. Project Links

- [Project 4](https://javascript-e6p.pages.dev/)
- [Project 3](https://digital-analog-clock.tiiny.site/)


### 5. Promises in JavaScript (05:30:41)

- The `fetch()` function returns a Promise that resolves to a Response object, which represents the server's response.
- If a 404 error occurs, it will be handled in the `.then()` block, as this error means the browser could not successfully make the request.
  - The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response.

  - network sy agar 404 error atta hai to vo .then me jayega , kyuki error sirf tabh aata hai jab browser request he nahi kar pata 


#### Example of Fetching Data:

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