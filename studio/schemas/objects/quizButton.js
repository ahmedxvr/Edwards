export default {
    name: 'quizButton',
    title: 'Quiz button',
    type: 'object',
    fields: [
        {
            name: 'buttonText',
            title: 'Button text',
            type: 'string',
            validation: Rule => Rule.required(),
        },
    ],
}