const restaurant = 'pizza-plus'

const renderItems = (data) => {
    data.forEach((elem) => {
        console.log(elem)
    })
}

fetch(`https://fooddeliveryproject-8b416-default-rtdb.firebaseio.com/db/${restaurant}.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })