// function createCalcFunction (n)
// {
//     return function ()
//     {
//         console.log(1000 * n)
//     }
// }
//
// const calc = createCalcFunction(42)
//
// calc()


// function increment(n)
// {
//     return function (num)
//     {
//         return n + num
//     }
// }
//
// const add = increment(10)
//
// console.log(add(5))


function urlGenerator(domain)
{
    return function(url)
    {
        return `https://${url}.${domain}`
    }
}


const website = urlGenerator("com")

console.log(website("YouTube"))
