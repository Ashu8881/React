
function customrender(reactElement,container){
    const domelement = document.createElement(reactElement.type)
domelement.innerHTML= reactElement.children
    console.log(domelement);
  domelement.setAttribute('href',reactElement.props.href)
  domelement.setAttribute('target',reactElement.props.target)
  container.appendChild(domelement);
}

const reactElement= {
    type: 'a',
    props: {
        href : "http://www.google.com ", 
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const container = document.querySelector('#root')


customrender(reactElement,container)