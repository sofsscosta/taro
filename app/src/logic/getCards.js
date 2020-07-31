const getCards = async () => {
    console.log('got here')
    const cards = await fetch('http://localhost:8085/graphql?query=%7Bcards%7Bname%20suite%20image%20description%20interpretation%7D%7D', {
        headers: { 'Content-Type': 'application/json' },
    });

    if (cards.errors) throw new Error(cards.data.error[0].message);

    if (cards.data) return cards;
}

export default getCards;