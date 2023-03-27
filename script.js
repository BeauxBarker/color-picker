const mySelect = document.getElementById("mySelect");
let num = document.getElementById("numHex").textContent;
const hexInput = document.getElementById("hexInput");
let hexValue = ""


hexInput.addEventListener("input", function() {
  hexValue = this.value;
  this.style.backgroundColor = "#" + hexValue;
});    


document.getElementById('btn').addEventListener('click', function(){
    let num = document.getElementById("numHex").value;
    let selectedOption = mySelect.options[mySelect.selectedIndex].value;
    console.log(num)
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${selectedOption}&count=${num}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(selectedOption)
        let colorsArray = [];
        for (let color of data.colors){
          colorsArray.push(color.hex.value);
        }
        let container = document.getElementById('colors');
        container.innerHTML = '';
        for (let i = 0; i < colorsArray.length; i++) {
          container.innerHTML += `
            <div class="one" style="background-color:${colorsArray[i]}">${colorsArray[i]}</div>
          `;
        }
      })
    });







/*
document.addEventListener('click', event => {

    const clickedId = event.target.id;
  
    console.log(clickedId);
  });

*/


/*
Object
colors
: 
Array(5)
0
: 
{hex: {…}, rgb: {…}, hsl: {…}, hsv: {…}, name: {…}, …}
1
: 
{hex: {…}, rgb: {…}, hsl: {…}, hsv: {…}, name: {…}, …}
2
: 
{hex: {…}, rgb: {…}, hsl: {…}, hsv: {…}, name: {…}, …}
3
: 
{hex: {…}, rgb: {…}, hsl: {…}, hsv: {…}, name: {…}, …}
4
: 
{hex: {…}, rgb: {…}, hsl: {…}, hsv: {…}, name: {…}, …}
length
: 
5
[[Prototype]]
: 
Array(0)
count
: 
"5"
image
: 
{bare: 'https://www.thecolorapi.com/scheme?format=svg&named=false&hex=0047AB&mode=analogic&count=5', named: 'https://www.thecolorapi.com/scheme?format=svg&hex=0047AB&mode=analogic&count=5'}
mode
: 
"analogic"
seed
: 
{hex: {…}, rgb: {…}, hsl: {…}, hsv: {…}, name: {…}, …}
_embedded
: 
{}
_links
: 
{self: '/scheme?hex=0047AB&mode=analogic&count=5', schemes: {…}}

------------------------------------------------------------------------

XYZ
: 
{fraction: {…}, value: 'XYZ(21, 23, 61)', X: 21, Y: 23, Z: 61}
cmyk
: 
{fraction: {…}, value: 'cmyk(97, 57, 0, 40)', c: 97, m: 57, y: 0, …}
contrast
: 
{value: '#ffffff'}
hex
: 
{value: '#04429A', clean: '04429A'}
hsl
: 
{fraction: {…}, h: 215, s: 95, l: 31, value: 'hsl(215, 95%, 31%)'}
hsv
: 
{fraction: {…}, value: 'hsv(215, 97%, 60%)', h: 215, s: 97, v: 60}
image
: 
{bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=04429A', named: 'https://www.thecolorapi.com/id?format=svg&hex=04429A'}
name
: 
{value: 'Congress Blue', closest_named_hex: '#02478E', exact_match_name: false, distance: 339}
rgb
: 
{fraction: {…}, r: 4, g: 66, b: 154, value: 'rgb(4, 66, 154)'}
_embedded
: 
{}
_links
: 
{self: {…}}





*/


