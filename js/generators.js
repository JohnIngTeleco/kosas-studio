export function idGenerator(label) {
    let id = Math.random().toString().substring(2, 7)
    return label + id
}