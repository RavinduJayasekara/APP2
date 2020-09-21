

class AccountSummary{

    constructor(userId,cost, marketVal, gainLoss, cash, buyingPower, pending,
        exposureP, exposureME, exposureMD, cashBlock, marginBlock){
        this.userId = userId;
        this.cost = cost;
        this.marketVal = marketVal;
        this.gainLoss = gainLoss;
        this.cash = cash;
        this.buyingPower = buyingPower;
        this.pending = pending;
        this.exposureP = exposureP;
        this.exposureME = exposureME;
        this.exposureMD = exposureMD,
        this.cashBlock = cashBlock;
        this.marginBlock = marginBlock;        
    }
}

export default AccountSummary;