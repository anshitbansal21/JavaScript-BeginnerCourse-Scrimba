const inputBtn = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")

let myLeads = []

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

//loading previous data if any 
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    showListItems(myLeads)
}

inputBtn.addEventListener("click", function(){
    let link = inputEl.value
    inputEl.value=""
    if(link === "")
        return
    myLeads.push(link)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    if(myLeads.length > 0)
        showListItems(myLeads)

    console.log(localStorage.getItem("myLeads"))
})

tabBtn.addEventListener("click", function(){

    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        let link = tabs[0].url
        myLeads.push(link)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        showListItems(myLeads)
        console.log("tab link added")
    })
})

deleteBtn.addEventListener("dblclick", function(){
    myLeads = []
    localStorage.clear()
    //this is to delete from local storage as well
    console.log(localStorage.getItem("myLeads"))
    showListItems(myLeads)
})



function showListItems(leads){
    myLinks = ""
    for(let i = 0 ; i < leads.length ; i+=1)
    {
        myLinks += `
        <li> 
            <a href='${leads[i]}' target='_blank'>  
                ${leads[i]} 
            </a>
        </li>
        `
    }
    ulEl.innerHTML = myLinks // now we need to use DOM object only once which is much better 
}


for(let i = 0 ; i < myLeads.length ; i+= 1)
    console.log(myLeads[i])


localStorage.clear()