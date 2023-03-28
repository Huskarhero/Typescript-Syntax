interface Forld {
    id: number
}
interface ForName {
    name: string
}

function create(id: number): Forld
function create(name: string): ForName
function create(nameOrld: string | number): Forld | ForName
function create(nameOrld: string | number): Forld | ForName {
    throw "unimplemented";
}