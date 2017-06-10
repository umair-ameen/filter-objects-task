let employees: {name: string, age: number, cast: string}[] = [
    {
        name: "Umair",
        age: 12,
        cast: "Arain",
    },
    {
        name: "Noman",
        age: 13,
        cast: "Rajput",
    },
    {
        name: "Adeel",
        age: 15,
        cast: "Solangi",
    },
    {
        name: "Saleem",
        age: 18,
        cast: "Sahito",
    },{
        name: "Asad",
        age: 20,
        cast: "Sahito",
    },
    {
        name: "Shokat",
        age: 22,
        cast: "Shah",
    },
    {
        name: "Aziz",
        age: 24,
        cast: "Shah",
    },
    {
        name: "Shafi",
        age: 26,
        cast: "Shah",
    },
    {
        name: "Mujtaba",
        age: 32,
        cast: "Shah",
    },
    {
        name: "Javed",
        age: 34,
        cast: "Shah",
    },
    {
        name: "Azhar",
        age: 36,
        cast: "Shah",
    },
    {
        name: "Azhar",
        age: 38,
        cast: "Shah",
    },{
        name: "Jameel",
        age: 39,
        cast: "Arain",
    }
]

function filterEmployees(objects){
    return objects.filter(function(obj){
        return obj.age <= 20 || obj.age > 30;
    })
}

console.log(filterEmployees(employees))


