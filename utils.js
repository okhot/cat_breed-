function organiseData(data) {
    const cats = [];
    data.forEach(({child_friendly, dog_friendly, stranger_friendly, ...others }, index) => {
        const friendlevel = child_friendly + dog_friendly + stranger_friendly;
         cats.push({friendlevel, others})
    })
    return cats.sort((a, b) => b.friendlevel - a.friendlevel).splice(0, 5);
} 
module.exports = organiseData;