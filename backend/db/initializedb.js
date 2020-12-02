import '../models/index.js'

import sequelize from './index.js'

await sequelize.drop()

await sequelize.sync({ force: true })
