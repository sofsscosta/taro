const query = `{
    cards {
      name
      image
      suite
      description
      interpretation
    }
  }`;

const onlyImage = `{
    cards {
      image
    }
  }`;

const getCards = () => {

    return (async () => {
        const response = await fetch('http://localhost:8085/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({ query: onlyImage })
        })

        const cards = await response.json()

        if(cards.errors) throw new Error (cards.errors[0].message)

        return cards

    })()
}

export default getCards