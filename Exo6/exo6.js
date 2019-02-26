function button_burger() {
    var ul = document.getElementById('ulMain');
    var elementlist = document.getElementsByClassName('menuElement');
    console.log(elementlist);
    alert('elementlist')
    
    for (index = 0; index < elementlist.length; ++index) {
        
        switchFlexNone(elementlist[index])
    }
}

function switchFlexNone (e) {
    var dis = e.getAttribute('display')
    console.log(e);
    if (dis =='none') {
        e.setAttribute('display','flex')
    }
    else {
        e.setAttribute('display','none')
    }
}
function test() {
    console.log('test');
    alert('test')
}