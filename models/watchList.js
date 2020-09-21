
class Watch{

    constructor(symbol, description, lastTraded, volume, changeP, change,
        open, high, low, pClosed){

        this.symbol = symbol;
        this.description = description;
        this.lastTraded = lastTraded;
        this.volume = volume;
        this.changeP = changeP;
        this.change = change;
        this.open = open;
        this.high = high;
        this.low = low,
        this.pClosed = pClosed;            
    }
}

export default Watch;