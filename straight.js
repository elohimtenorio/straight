const card = {
    A:    14,
    N2:   2,
    N3:   3,
    N4:   4,
    N5:   5,
    N6:   6,
    N7:   7,
    N8:   8,
    N9:   9,
    N10:  10,
    J:    11,
    Q:    12,
    K:    13
}

const straightSize = 5;

isConsecutive = ((a,b)=>{
    return consecutive = (b-a==1) || (a==card.A && b==card.N2);
});

getStraight = ((sortedCards,size)=>{
    let straight = [], lastElement = 0;
    sortedCards.forEach((element) => {
        if (isConsecutive(lastElement,element)){
            if(straight.length  === 0)
                straight.push(lastElement);
            straight.push(element);
        }else if (straight.length===size){
            return straight;
        }else{
            straight = [];
        }
        lastElement = element;
    });
    if (straight.length === size)
        return straight;
    return false;

});

validate = function(cards){
    if (!cards || !Array.isArray(cards) || cards.length==0 || cards.length>7){
        return false;
    }
    let valid = true;
    cards.forEach(element => {
        valid = (element>0 && element < 15 );
    });
    return valid;
};

isStraight = ((cards)=>{
    if (!validate(cards)){
        return false;
    }
    let sortedCards = cards.sort((a,b)=>a-b).filter((value,index,self)=>self.indexOf(value) === index);
    if (sortedCards[sortedCards.length-1]==card.A) sortedCards.unshift(card.A);
    return getStraight(sortedCards,straightSize)!==false;
});

module.exports={
    isStraight,
    isConsecutive,
    validate
}