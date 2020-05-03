// Copyright (c) 2020 Gonzalo Müller Bravo.
const { buildEnvironment } = require('../buildEnvironment')

global.ENV = buildEnvironment('test')
