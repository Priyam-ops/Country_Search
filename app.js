let url = 'http://universities.hipolabs.com/search?name=';
let btn = document.querySelector('button');
btn.addEventListener('click', async () => {
    let country = document.querySelector('input').value
    let colleges =  await getColleges(country);
    show(colleges);
})


function show(colleges){
    let list = document.querySelector('#list');
    list.innerText = '';
    for (college of colleges){
        li = document.createElement('li');
        li.innerText = college.name
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try{
        res = await axios.get(url+country);
        return res.data;
    }
    catch(e){
        console.log('Some error occured');
    }
}