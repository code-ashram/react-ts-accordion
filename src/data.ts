type Shloka = {
    id: string,
    title: string,
    text: string,
    isOpen: boolean,
}

const data: Array<Shloka> = [
    {
        id: 'c10t1',
        title: 'Text 1',
        text: 'The Supreme Personality of Godhead said: Listen again, O mighty-armed Arjuna. Because you are ' +
            'My dear friend, for your benefit I shall speak to you further, giving knowledge that is better than ' +
            'what I have already explained.',
        isOpen: false,
    },
    {
        id: 'c10t2',
        title: 'Text 2',
        text: 'Neither the hosts of demigods nor the great sages know My origin or opulences, for, in every respect,' +
            ' I am the source of the demigods and sages.',
        isOpen: false,
    },
    {
        id: 'c10t3',
        title: 'Text 3',
        text: 'He who knows Me as the unborn, as the beginningless, as the Supreme Lord of all the worlds – he only,' +
            ' undeluded among men, is freed from all sins.',
        isOpen: false,
    },
    {
        id: 'c10t4-5',
        title: 'Text 4',
        text: 'Intelligence, knowledge, freedom from doubt and delusion, forgiveness, truthfulness, control of ' +
            'the senses, control of the mind, happiness and distress, birth, death, fear, fearlessness, nonviolence,' +
            ' equanimity, satisfaction, austerity, charity, fame and infamy – all these various qualities of living' +
            ' beings are created by Me alone.',
        isOpen: false,
    },
    {
        id: 'c10t6',
        title: 'Text 5',
        text: 'The seven great sages and before them the four other great sages and the Manus [progenitors of ' +
            'mankind] come from Me, born from My mind, and all the living beings populating the various planets ' +
            'descend from them.',
        isOpen: false,
    },
]

export default data
