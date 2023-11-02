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
const ryanCursorURL = chrome.runtime.getURL('ryan.png')
const willCursorURL = chrome.runtime.getURL('will.png')
const agesCursorURL = chrome.runtime.getURL('members.png')
const alanaCursorURL = chrome.runtime.getURL('members.png')
const alexanderCursorURL = chrome.runtime.getURL('members.png')
const amandaCursorURL = chrome.runtime.getURL('members.png')
const chactaCursorURL = chrome.runtime.getURL('members.png')
const claudiaCursorURL = chrome.runtime.getURL('members.png')
const erikaCursorURL = chrome.runtime.getURL('members.png')
const hannahCursorURL = chrome.runtime.getURL('members.png')
const hectorCursorURL = chrome.runtime.getURL('members.png')
const heidiCursorURL = chrome.runtime.getURL('members.png')
const jamesCursorURL = chrome.runtime.getURL('members.png')
const jaredCursorURL = chrome.runtime.getURL('members.png')
const jonathanCursorURL = chrome.runtime.getURL('members.png')
const kelvinCursorURL = chrome.runtime.getURL('members.png')
const kristinCursorURL = chrome.runtime.getURL('members.png')
const kyleCursorURL = chrome.runtime.getURL('members.png')
const larissaCursorURL = chrome.runtime.getURL('members.png')
const lauraCursorURL = chrome.runtime.getURL('members.png')
const laurelCursorURL = chrome.runtime.getURL('members.png')
const mattCursorURL = chrome.runtime.getURL('members.png')
const mikeCursorURL = chrome.runtime.getURL('members.png')
const mirceaCursorURL = chrome.runtime.getURL('members.png')
const phillipCursorURL = chrome.runtime.getURL('members.png')
const rachelCursorURL = chrome.runtime.getURL('members.png')
const shandaCursorURL = chrome.runtime.getURL('members.png')

// console.log(carlyCursorURL)
// const cursorImageUrl = chrome.runtime.getURL('carly.png')
// clinks.style.cursor = `url("${cursorImageUrl}") 32 32, auto`

// while we are in div class name member image
// if its members we want, blow out the custom images
// otherwise, they can be united withs something else

const clinks = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Michael%20Clinkscales%2c%20Engineering%20Instructor.jpg"]'
)
const carly = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Headshots/Carly%20Jackson%2c%20Engineering%20Fellow.jpg"]'
)
const brianna = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Screen%20Shot%202022-05-10%20at%209.32.45%20AM.png"]'
)
const ryan = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Ryan%20McDaniel.jpg"]'
)
const will = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Blog%20Images/Author%20Headshots/will-sentance.jpg"]'
)

const agnes = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Agnes.jpg"]'
)
const alana = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/codesmith-2022/images/About/Alana%20Aragon.jpg"]'
)

const alexander = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Alex%20Zhang.jpg"]'
)

const amanda = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Amanda%20Pagan.jpg"]'
)

const chacta = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Chacta%20Brice%20%281%29.jpg"]'
)

const claudia = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Claudia%20Franke-1.jpg"]'
)

const erika = document.querySelector(
  'div[style*= "https://www.codesmith.io/hubfs/Headshots/Erika%20Collins%2c%20Engineering%20Fellow.jpeg"]'
)

// const erin = document.querySelector(
//   'div[style*="https://www.codesmith.io/hubfs/Headshots/Erin%20Sweeney%2c%20Program%20Specialist%20%28Student%20Support%29.jpeg"]'
// )

const hannah = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Screen%20Shot%202022-04-05%20at%201.44.39%20PM.png"]'
)

const hecctor = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Screen%20Shot%202022-09-27%20at%2010.01.49%20AM.png"]'
)

const heidi = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Heidi%20Kim%20-%20Headshot%202023.jpg"]'
)

const james = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/2022%20Codesmith%20Website%20Images/images/Immersive%20Program/JamesLaff2%20%281%29.png"]'
)

const jared = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/codesmith-2022/images/Immersive%20Program/Screen%20Shot%202022-04-08%20at%2011.14.55%20AM.png"]'
)

const jonathan = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Jonathan%20Bechtel.jpg"]'
)

const kelvin = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Codesmith_June2021/Images/Kelvin%20Wang.jpg"]'
)

const kristin = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Headshots/Kristin%20Tillotson.jpg"]'
)

const kyle = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Kyle-Headshot.png"]'
)

const larissa = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Larissa%20Ciancarelli.png"]'
)

const laura = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/codesmith-2022/images/Immersive%20Program/for-slack.jpeg"]'
)

const laurel = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Screen%20Shot%202022-04-08%20at%2010.52.49%20AM.png"]'
)

const matt = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/codesmith-2022/images/Immersive%20Program/Matt%20Severyn.jpg"]'
)

const mike = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/codesmith-2022/images/Immersive%20Program/headshot.jpg"]'
)

const mircea = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Codesmith_June2021/Images/Mircea%20Ilie.jpg"]'
)

const phillip = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Codesmith_June2021/Images/Phillip%20Troutman.jpg"]'
)

const rachel = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Rachel%20Kucharski.jpg"]'
)

const shanda = document.querySelector(
  'div[style*="https://www.codesmith.io/hubfs/Shanda.png"]'
)

clinks.addEventListener('mouseover', () => showCursor(clinksCursorURL))
carly.addEventListener('mouseover', () => showCursor(carlyCursorURL))
brianna.addEventListener('mouseover', () => showCursor(briannaCursorURL))
ryan.addEventListener('mouseover', () => showCursor(ryanCursorURL))
will.addEventListener('mouseover', () => showCursor(willCursorURL))
agnes.addEventListener('mouseover', () => showCursor(willCursorURL))
alana.addEventListener('mouseover', () => showCursor(alanaCursorURL))
alexander.addEventListener('mouseover', () => showCursor(alexanderCursorURL))
amanda.addEventListener('mouseover', () => showCursor(amandaCursorURL))
chacta.addEventListener('mouseover', () => showCursor(chactaCursorURL))
claudia.addEventListener('mouseover', () => showCursor(claudiaCursorURL))
erika.addEventListener('mouseover', () => showCursor(erikaCursorURL))
// erin.addEventListener('mouseover', () => showCursor(erinCursorURL))
hannah.addEventListener('mouseover', () => showCursor(hannahCursorURL))
//hector.addEventListener('mouseover', () => showCursor(hectorCursorURL))
heidi.addEventListener('mouseover', () => showCursor(heidiCursorURL))
james.addEventListener('mouseover', () => showCursor(jamesCursorURL))
jared.addEventListener('mouseover', () => showCursor(jaredCursorURL))
jonathan.addEventListener('mouseover', () => showCursor(jonathanCursorURL))
kelvin.addEventListener('mouseover', () => showCursor(kelvinCursorURL))
kristin.addEventListener('mouseover', () => showCursor(kristinCursorURL))
kyle.addEventListener('mouseover', () => showCursor(kyleCursorURL))
larissa.addEventListener('mouseover', () => showCursor(larissaCursorURL))
laura.addEventListener('mouseover', () => showCursor(lauraCursorURL))
laurel.addEventListener('mouseover', () => showCursor(laurelCursorURL))
matt.addEventListener('mouseover', () => showCursor(mattCursorURL))
mike.addEventListener('mouseover', () => showCursor(mikeCursorURL))
mircea.addEventListener('mouseover', () => showCursor(mirceaCursorURL))
phillip.addEventListener('mouseover', () => showCursor(phillipCursorURL))
rachel.addEventListener('mouseover', () => showCursor(rachelCursorURL))
shanda.addEventListener('mouseover', () => showCursor(shandaCursorURL))

let cursorSize = 200

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
    cursorSize += 4
    //max size and reset
    if (cursorSize > 1000) cursorSize = 200
    cursor.style.width = cursorSize + 'px'
  }

  //when the mouse leaves any of the elements
  function hideCustomCursor() {
    //restore the default cursor
    document.body.style.cursor = 'auto'
    cursorSize = 200
    //remove custom cursor from the DOM
    customCursor.remove()
    //remove the mousemove event listener when done
    document.removeEventListener('mousemove', moveCursor)
  }

  clinks.addEventListener('mouseout', hideCustomCursor)
  carly.addEventListener('mouseout', hideCustomCursor)
  brianna.addEventListener('mouseout', hideCustomCursor)
  ryan.addEventListener('mouseout', hideCustomCursor)
  will.addEventListener('mouseout', hideCustomCursor)
  agnes.addEventListener('mouseout', hideCustomCursor)
  alana.addEventListener('mouseout', hideCustomCursor)
  alexander.addEventListener('mouseout', hideCustomCursor)
  amanda.addEventListener('mouseout', hideCustomCursor)
  chacta.addEventListener('mouseout', hideCustomCursor)
  claudia.addEventListener('mouseout', hideCustomCursor)
  erika.addEventListener('mouseout', hideCustomCursor)
  // erin.addEventListener('mouseout', hideCustomCursor)
  hannah.addEventListener('mouseout', hideCustomCursor)
  //hector.addEventListener('mouseout', hideCustomCursor)
  heidi.addEventListener('mouseout', hideCustomCursor)
  james.addEventListener('mouseout', hideCustomCursor)
  jared.addEventListener('mouseout', hideCustomCursor)
  jonathan.addEventListener('mouseout', hideCustomCursor)
  kelvin.addEventListener('mouseout', hideCustomCursor)
  kristin.addEventListener('mouseout', hideCustomCursor)
  kyle.addEventListener('mouseout', hideCustomCursor)
  larissa.addEventListener('mouseout', hideCustomCursor)
  laura.addEventListener('mouseout', hideCustomCursor)
  laurel.addEventListener('mouseout', hideCustomCursor)
  matt.addEventListener('mouseout', hideCustomCursor)
  mike.addEventListener('mouseout', hideCustomCursor)
  mircea.addEventListener('mouseout', hideCustomCursor)
  phillip.addEventListener('mouseout', hideCustomCursor)
  rachel.addEventListener('mouseout', hideCustomCursor)
  shanda.addEventListener('mouseout', hideCustomCursor)
}
