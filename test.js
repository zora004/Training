// function createPerson(firstN, lastN){
//     let first = firstN
//     let last = lastN
//     return {
//         getFirst: function() {
//             return first
//         },
        
//         getLast: function() {
//             return last
//         },

//         fullName: function() {
//             return first + " " + last
//         },

//         setName: function(firstN, lastN) {
//             first = firstN
//             last = lastN
//         }
//     }
// }

// const me = createPerson("Zora", "Abaquita")
// console.log(me.getFirst())
// console.log(me.getLast())
// console.log(me.fullName())

// me.setName("Razor", "TheGreat")
// console.log(me.fullName())

const tax = (function (basicTax){
    let vat = basicTax;
    return{
        setVat: function(newVat){
            vat = newVat
        },
        getVat: function(){
            return vat
        },
        addVat: function(value){
            return value * (1 + vat / 100)
        }
    }
})(6)

console.log(tax.getVat())
tax.setVat(8)
console.log(tax.getVat())
console.log(tax.addVat(200))