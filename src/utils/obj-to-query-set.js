module.exports = body => {
    const keys = Object.keys(body)
    return [
        keys.map((curr, i) => `${curr} = $${i + 1}`).join(', '),
        keys.length
    ]
}