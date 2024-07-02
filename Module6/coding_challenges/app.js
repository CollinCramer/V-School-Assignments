// extract initials

function extractInitials(names) {
    
    return names.map(name => {
        
        //split names so we can get the first letter of each
        const splitName = name.split(' ')

        //get the first letter of each word after they have been split
        const initials = splitName.map(word => word[0]).join("")

        return initials
    })

};

const fullNames = ['Collin Cramer', 'John Doe', 'Alice Johnson', 'Bob Smith'];

const initialsArray = extractInitials(fullNames);

console.log(initialsArray); // Output: ['JD', 'AJ', 'BS', 'CC']


// -------------------------------------------------------------------------------------------------------------------

function filterByProperty(objects, propertyName, propertyValue) {

    // using filter to filter the array. Will need to specify a property name on the const
    return objects.filter(person => person[propertyName] === propertyValue)

}

const people = [

    { name: 'Alice', age: 30, country: 'USA' },
    { name: 'Bob', age: 25, country: 'Canada' },
    { name: 'Charlie', age: 35, country: 'USA' },
    { name: 'David', age: 28, country: 'Australia' },
    { name: 'Collin', age: 28, country: 'USA'}

];

const filteredByCountry = filterByProperty(people, 'name', 'Bob');

console.log(filteredByCountry);

// -------------------------------------------------------------------------------------------------------------------

