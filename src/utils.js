
export default function capitalizeFirst(string){
    let capital = string.charAt(0).toUpperCase()
    let cutString = string.slice(1)
    let newString = capital + cutString
    return newString
}


