const fs = require("fs")

const create = (name, content) => fs.writeFileSync(name, content)

module.exports = create

