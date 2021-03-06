import User from "../models/user";
import AccSummary from "../models/accountSummary";
import Watch from "../models/watchList";

export const USERS = [
  new User("u1", "860651122-VN/0"),
  new User("u2", "786342324-VN/0"),
  new User("u3", "903949903-VN/0"),
];

// export const ACCSUMMARY = new AccSummary(
//   "29,540,084.38", "145,232.50", "(29,398,495.41)", "(647,964.07)",
//   "2,499,352.035.93", "0.00", "4.00%", "8,817.33", "262.28", "0.00", "0.00"

// );

export const ACCSUMMARY = [
  new AccSummary(
    "u1",
    "29,540,084.38",
    "145,232.50",
    "(29,398,495.41)",
    "(647,964.07)",
    "2,499,352.035.93",
    "0.00",
    "4.00%",
    "8,817.33",
    "262.28",
    "1.00",
    "0.00"
  ),
  new AccSummary(
    "u2",
    "540,084.38",
    "23,231.00",
    "(27,298,425.50)",
    "(1007,782.00)",
    "1,352.053.93",
    "10000.00",
    "10.00%",
    "9,000.00",
    "300.00",
    "0.25",
    "1.00"
  ),
  new AccSummary(
    "u3",
    "38,540,084.38",
    "1,300.50",
    "(398,495.41)",
    "(200,902.08)",
    "1,458.024.93",
    "1500.00",
    "5.00%",
    "1,211.43",
    "400.00",
    "0.23",
    "2.00"
  ),
];

export const WATCHLIST = [
  new Watch(
    "SAMP.N0000",
    "SAMPATH BANK PLC",
    "119.00",
    "764,442",
    "-11.72",
    "-15.80",
    "130.00",
    "130.00",
    "117.70",
    "134.80"
  ),
  new Watch(
    "COMB.N0000",
    "COMMERCIAL BANK",
    "61.50",
    "1,408,702",
    "-14.70",
    "-10.60",
    "67.00",
    "67.00",
    "59.60",
    "72.10"
  ),
  new Watch(
    "ACL.N0000",
    "ACL CABLES PLC",
    "38.00",
    "46",
    "4.08",
    "0.60",
    "38.00",
    "38.00",
    "37.70",
    "37.90"
  ),
  new Watch(
    "JKH.N0000",
    "JOHN KEELS HOLDINGS",
    "114.00",
    "618,327",
    "-9.31",
    "-11.70",
    "123.00",
    "123.00",
    "113.90",
    "125.70"
  ),
  new Watch(
    "APLA.N0000",
    "ACL PLASTICS PLC",
    "130.10",
    "4",
    "0.00",
    "0.00",
    "133.00",
    "133.00",
    "130.20",
    "130.10"
  ),
  new Watch(
    "LLUB.N0000",
    "CHEVRON LUBRICANTS LTD",
    "53.00",
    "237,185",
    "-11.96",
    "-7.20",
    "59.00",
    "59.50",
    "52.70",
    "60.20"
  ),
  new Watch(
    "DIAL.N0000",
    "DIALO AXIATA PLC",
    "8.50",
    "1,842,222",
    "-10.53",
    "-1.00",
    "9.00",
    "9.00",
    "8.70",
    "9.50"
  ),
  new Watch(
    "AEL.N0000",
    "ACESS ENGINEERING PLC",
    "13.30",
    "1,764,442",
    "-10.74",
    "-1.80",
    "13.00",
    "10.00",
    "112.70",
    "134.80"
  ),
  new Watch(
    "ABAN.N0000",
    "ABANS ELECTRICALS PLC",
    "71.00",
    "14",
    "-0.70",
    "-0.50",
    "71.20",
    "71.20",
    "71.00",
    "71.50"
  ),
  new Watch(
    "SPEN.N0000",
    "AITKEN SPENCE PLC",
    "30.90",
    "140",
    "2.66",
    "0.80",
    "30.00",
    "31.00",
    "29.90",
    "30.10"
  ),
  new Watch(
    "ALLI.N0000",
    "ALLIANCE FINANCE PLC",
    "36.80",
    "170",
    "2.22",
    "0.80",
    "36.80",
    "36.00",
    "37.00",
    "36.00"
  ),
];
