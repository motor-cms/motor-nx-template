import axios from 'axios'
import baseGrid from '../../../../packages/motor-core/grids/baseGrid'
import modelRepository from '@/api/__package__(kebabCase)/__model__(camelCase)'

export default function __model__(camelCase)Grid() {
    const repository = modelRepository(axios)

    const { rows, meta, refreshRecords, handleCellEvent } = baseGrid(
        repository,
        '__package__(kebabCase).__model-plural__(snakeCase)'
    )

    return { rows, meta, refreshRecords, handleCellEvent }
}
