const requestURL = 'https://randomuser.me/api/?results=25&inc=name,email,phone';
const list = document.getElementById('list');
const ul = document.createElement('ul')
function sendRequest(methor, url){
    return new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest()
        
    
    xhr.open(methor,url)    
    xhr.responseType = 'json'

    xhr.onload = () =>{
        // loader.style = 'none';
        if(xhr.status > 400){
            reject(xhr.response)
        }else{
            let data =  resolve(xhr.response)
        }
    }
    xhr.onerror = () =>{
        reject(xhr.response)
    }

    xhr.send()
})
}
sendRequest('GET',requestURL)
.then(function(data){
    for(let i =0;i<data.results.length;i++){
         let li = document.createElement('li');
        let p = document.createElement('p');
        // let li_id = document.createTextNode("Id: "+data.data[i].id)
        let li_name = document.createTextNode("   |Name:  "+data.results[i].name.first + data.results[i].name.last)
        let li_age = document.createTextNode("   |Phone:  "+data.results[i].phone)
        let li_salary = document.createTextNode("   |Email:  "+data.results[i].email)
        // p.appendChild(li_id)/
        p.appendChild(li_name)
        p.appendChild(li_age)
        p.appendChild(li_salary)
        li.appendChild(p)
        ul.appendChild(li)
        // var paragraph = $("<p/>")
        // .append(" |Name: " +data.results[i].email)
        // .append("   |Phone:  "+data.results[i].phone)
        // .append("   |Name:  "+data.results[i].name.first + data.results[i].name.last);
        // var li = $("<li/>")
        // .append(paragraph);
        // $('#list').append(li)
    }
    
    list.appendChild(ul)    
})
.catch(err => console.error(err))
