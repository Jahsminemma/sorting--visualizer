function randomize(len)
{
    let myArray = new Array()
    let lower_Bound = 10
    let upper_Bound = 100

    for(let i = 0 ; i < len ; i++) {
        let random_Number = Math.floor(Math.random()*(upper_Bound - lower_Bound + 1) + lower_Bound)
        myArray.push(random_Number)
    }
    return myArray
}