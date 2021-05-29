import axios from 'axios'
import baseForm from '../../../../packages/motor-core/forms/baseForm'
import * as yup from 'yup'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import modelRepository from '@/api/__package__(kebabCase)/__model__(camelCase)'

export default function __model__(camelCase)Form() {
    // Load i18n module
    const { t, tm } = useI18n()

    // Validation schema
    const schema = yup.object().shape({
        name: yup.string().required(),
    })

    // Record
    const model = ref({
        id: 0,
        name: '',
    })

    // Sanitize dates
    const sanitizer = () => {
    }


    const { getData, onSubmit } = baseForm(
        '__package__(kebabCase).__model-plural__(snakeCase)',
        'admin.__package__(kebabCase).__model-plural__(kebabCase)',
        modelRepository(axios),
        model,
        schema,
        sanitizer
    )

    return {
        getData,
        onSubmit,
        model,
    }
}
