class preducte {
  constructor(name, marke,prixs,date,tyep,promos) {
    this.name = name;
    this.marke =marke;
    this.prixs =prixs;
    this.date = date;
    this.tyep = tyep;
    this.promos = promos;
  }
}
  let obj = JSON.parse(localStorage.getItem("products"));
  if(obj != null){
  document.getElementById('tbl').innerHTML+="<tr><th>Nom</th><th>Marque</th><th>prix</th><th>date</th><th>type</th><th>promotion</th><th>action</th></tr>";
  for (let i = 0; i < obj.length; i++) {
    const row = document.createElement("tr");
    row.id = `e${i}`;
    document.getElementById("tbl").appendChild(row)
    const colom1 = document.createElement("td");
    const colom2 = document.createElement("td");
    const colom3 = document.createElement("td");
    const colom4 = document.createElement("td");
    const colom5 = document.createElement("td");
    const colom6 = document.createElement("td");
    const colom7 = document.createElement("td");
    row.appendChild(colom1);
    row.appendChild(colom2);
    row.appendChild(colom3);
    row.appendChild(colom4);
    row.appendChild(colom5);
    row.appendChild(colom6);
    row.appendChild(colom7);
      colom1.innerHTML += obj[i].name  ;
      colom2.innerHTML += obj[i].marke;
      colom3.innerHTML += obj[i].prixs;
      colom4.innerHTML += obj[i].date;
      colom5.innerHTML += obj[i].tyep;
      colom6.innerHTML += obj[i].promos;
      colom7.innerHTML+=  `<button style='margin: 5px;'  onclick='tkl(${i})' >❎</button><button onclick='tkll(${i})'>🖊️</button>`; 
      function tkll(i) {
        document.getElementById('btn').value ="sauvegarder ";
          document.getElementById("Nom").value =obj[i].name ;
          document.getElementById("marke").value =obj[i].marke ;
          document.getElementById("prix").value =obj[i].prixs ;
          document.getElementById("dat").value = obj[i].date;
          document.getElementById("types").value =obj[i].tyep ;
          if (obj[i].promos == "non") {
                document.getElementById("non").checked = true;
              } else if (obj[i].promos == "Oui") {
                document.getElementById("Oui").checked = true;
              } else {
                document.getElementById("Oui").checked = false;
                document.getElementById("non").checked = false;
              }
            obj.splice(i, 1);
           localStorage.setItem("products",JSON.stringify(obj));
      }
    function tkl(i) {
      obj.splice(i, 1);
      localStorage.setItem("products",JSON.stringify(obj) );
        document.location.reload();
        }
    }};
    document.getElementById("btn").addEventListener("click", sauvgarder)
function sauvgarder() {
  document.getElementById('not').style.display = "block";
  let nome = document.getElementById("Nom").value;
  let mark = document.getElementById("marke").value;
  let prix = document.getElementById("prix").value;
  let dat = document.getElementById("dat").value;
  let typ = document.getElementById("types").value;
  let promo = document.querySelector("input[name='color']:checked");
  if (promo == null) {
    promo =''
  } else {
    promo =document.querySelector("input[name='color']:checked").value
  }
let objct = new preducte(nome,mark,prix,dat,typ,promo);

document.getElementById('afficher').innerHTML+=objct.name +"<br>";
document.getElementById('afficher').innerHTML+=objct.mark+"<br>";
document.getElementById('afficher').innerHTML+=objct.prix+"<br>";
document.getElementById('afficher').innerHTML+=objct.dat+"<br>";
document.getElementById('afficher').innerHTML+=objct.tyep+"<br>";
document.getElementById('afficher').innerHTML+=objct.promo+"<br>";


let preduct =localStorage.getItem("products");
      if(preduct == null){
        preduct =[]
      }
      else{
        preduct = JSON.parse(preduct);
      }
      preduct.push(objct);
      preduct.sort((a, b) => a.name.localeCompare(b.name));
      localStorage.setItem("products",JSON.stringify(preduct) );
document.getElementById("form").reset();
  document.location.reload();
};
document.getElementById('sup').onclick =function(){
  localStorage.clear();
  document.location.reload();
}