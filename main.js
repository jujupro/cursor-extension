// we will need Carly's picture and Sailor Jupitor in our directory
// declare a variable and have it access to the html file for images of team members on that website
// use mouseover/mouseout method
// we will need Carly's picture and Sailor Jupitor in our directory
// declare a variable and have it access to the html file for images of team members on that website
// use mouseover/mouseout method

//get image URLs using Chrome runtime
const carlyCursorURL = chrome.runtime.getURL('carly.png')
const briannaCursorURL = chrome.runtime.getURL('brianna.png')
const clinksCursorURL = chrome.runtime.getURL('clinks.png')
console.log(carlyCursorURL)
// const cursorImageUrl = chrome.runtime.getURL('carly.png')
// clinks.style.cursor = `url("${cursorImageUrl}") 32 32, auto`

const clinks = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Michael%20Clinkscales%2c%20Engineering%20Instructor.jpg"]'
)
const carly = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Headshots/Carly%20Jackson%2c%20Engineering%20Fellow.jpg"]'
)
const brianna = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Screen%20Shot%202022-05-10%20at%209.32.45%20AM.png"]'
)

clinks.addEventListener('mouseover', () => showCursor(clinksCursorURL))
carly.addEventListener('mouseover', () => showCursor(carlyCursorURL))
brianna.addEventListener('mouseover', () => showCursor(briannaCursorURL))

let cursorSize = 300

function showCursor(cursorURL) {
  //hide the default cursor from the document
  document.body.style.cursor = 'none'
  //create an img element on the DOM
  const customCursor = document.createElement('img')
  customCursor.src = cursorURL
  customCursor.id = 'customCursor'
  customCursor.style.position = 'absolute'
  customCursor.style.width = cursorSize + 'px'
  //cursor doesn't interfere with other mouse events
  customCursor.style.pointerEvents = 'none'
  customCursor.style.zIndex = '1000000'
  document.body.appendChild(customCursor)

  //track mouse movements to re-position the custom cursor
  document.addEventListener('mousemove', moveCursor)

  function moveCursor(e) {
    let cursor = document.getElementById('customCursor')
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
    cursorSize += 5
    //max size and reset
    if (cursorSize > 2000) cursorSize = 300
    cursor.style.width = cursorSize + 'px'
  }

  //when the mouse leaves any of the elements
  function hideCustomCursor() {
    //restore the default cursor
    document.body.style.cursor = 'auto'
    cursorSize = 300
    //remove custom cursor from the DOM
    customCursor.remove()
    //remove the mousemove event listener when done
    document.removeEventListener('mousemove', moveCursor)
  }

  clinks.addEventListener('mouseout', hideCustomCursor)
  carly.addEventListener('mouseout', hideCustomCursor)
  brianna.addEventListener('mouseout', hideCustomCursor)
}
