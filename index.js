function findMatching(drivers, string) {
    const newList = drivers.filter(function (turtle) {
        return turtle.toLowerCase() === string.toLowerCase()
    })
    return newList
}

function fuzzyMatch(drivers, string) {
    const driversThatMatch = drivers.filter(function (driver) {
        return driver.startsWith(string)
    });
    return driversThatMatch
}

function matchName(drivers, string) {
    const exactMatch = drivers.filter((drivers) => drivers.name === string)
    return exactMatch
}