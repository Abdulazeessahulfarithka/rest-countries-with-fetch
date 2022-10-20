var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
.then((data)=>data.json())
.then((data1)=>{
for(var i=0;i<data1.length;i++){
    var div=document.createElement("div");
    div.innerHTML=`<div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header">countryname:${data1[i].name}</div>
    <div class="card-body text-success">
      <h5 class="card-title">capital:${data1[i].capital}</h5>
      <h5 class="card-title">region:${data1[i].region}</h5>
      <h5 class="card-title">population:${data1[i].population}</h5>
      <h5 class="card-title">flag${data1[i].flag}</h5>
    </div>
  </div>`
  document.body.append(div)
}
})
.catch((error)=>console.log(error));
