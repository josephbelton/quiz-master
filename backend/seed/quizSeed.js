const axios = require('axios')

const headers = {
    'Content-Type': 'application/json',
}

axios.delete('http://localhost:4000/quiz')

axios.post('http://localhost:4000/quiz', {
    name: 'Animals',
    questions: [
        {
            title: 'What type of animal is a Zebra?',
            correct_answer: 1,
            answers: [
                {
                    title: 'Mammal',
                },
                {

                    title: 'Fish'
                },
                {
                    title: 'Insect'
                }
            ],

        },
        {
            title: 'How long can tortoise live?',
            correct_answer: 3,
            answers: [
                {
                    title: 'Less than 10 years'
                },
                {
                    title: 'More than 10 years but less than 40 years'
                },
                {
                    title: 'More than 80 years'
                }
            ]
        },
        {
            title: 'Are Zedonks real?',
            correct_answer: 1,
            answers: [
                {
                    title: 'yes'
                },
                {
                    title: 'no'
                }
            ]
        }
    ]
}, { headers: headers }, () => console.log('success'))


