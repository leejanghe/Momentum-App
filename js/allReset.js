const allReset = document.querySelector('#reset')


function handleReset(event){
    console.log('gdgd',event)
    localStorage.clear();
    window.location.reload()
}

allReset.addEventListener('click', handleReset)