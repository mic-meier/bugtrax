import '../models/index.js'

import sequelize from './index.js'

await sequelize.drop({ force: true })

await sequelize.sync({ force: true })
