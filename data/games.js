const games = [
  {
    "Id": 1,
    "Code": "1v2",
    "Date": "2024-02-05",
    "HomeTeam": "VA Ballerz",
    "AwayTeam": "JQ Suited",
    "HomeScore": 545,
    "AwayScore": 164,
    "Winner": "VA Ballerz"
  },
  {
    "Id": 2,
    "Code": "3v4",
    "Date": "2024-02-05",
    "HomeTeam": "Star Studded",
    "AwayTeam": "That Couple",
    "HomeScore": 308,
    "AwayScore": 535,
    "Winner": "That Couple"
  },
  {
    "Id": 3,
    "Code": "5v6",
    "Date": "2024-02-05",
    "HomeTeam": "Gerow Animals",
    "AwayTeam": "Team Bui",
    "HomeScore": 255,
    "AwayScore": 531,
    "Winner": "Team Bui"
  },
  {
    "Id": 4,
    "Code": "7v8",
    "Date": "2024-02-05",
    "HomeTeam": "Jerzeys Finest",
    "AwayTeam": "Knuck If You Stuck",
    "HomeScore": 86,
    "AwayScore": 505,
    "Winner": "Knuck If You Stuck"
  },
  {
    "Id": 5,
    "Code": "1v3",
    "Date": "2024-02-06",
    "HomeTeam": "VA Ballerz",
    "AwayTeam": "Star Studded",
    "HomeScore": 598,
    "AwayScore": -38,
    "Winner": "VA Ballerz"
  },
  {
    "Id": 6,
    "Code": "2v4",
    "Date": "2024-02-06",
    "HomeTeam": "JQ Suited",
    "AwayTeam": "That Couple",
    "HomeScore": 278,
    "AwayScore": 529,
    "Winner": "That Couple"
  },
  {
    "Id": 7,
    "Code": "5v7",
    "Date": "2024-02-06",
    "HomeTeam": "Gerow Animals",
    "AwayTeam": "Jerzeys Finest",
    "HomeScore": 436,
    "AwayScore": 527,
    "Winner": "Jerzeys Finest"
  },
  {
    "Id": 8,
    "Code": "6v8",
    "Date": "2024-02-06",
    "HomeTeam": "Team Bui",
    "AwayTeam": "Knuck If You Stuck",
    "HomeScore": 549,
    "AwayScore": 347,
    "Winner": "Team Bui"
  },
  {
    "Id": 9,
    "Code": "1v4",
    "Date": "2024-02-07",
    "HomeTeam": "VA Ballerz",
    "AwayTeam": "That Couple",
    "HomeScore": 507,
    "AwayScore": 404,
    "Winner": "VA Ballerz"
  },
  {
    "Id": 10,
    "Code": "2v3",
    "Date": "2024-02-07",
    "HomeTeam": "JQ Suited",
    "AwayTeam": "Star Studded",
    "HomeScore": 508,
    "AwayScore": 115,
    "Winner": "JQ Suited"
  },
  {
    "Id": 11,
    "Code": "5v8",
    "Date": "2024-02-07",
    "HomeTeam": "Gerow Animals",
    "AwayTeam": "Knuck If You Stuck",
    "HomeScore": 299,
    "AwayScore": 529,
    "Winner": "Knuck If You Stuck"
  },
  {
    "Id": 12,
    "Code": "6v7",
    "Date": "2024-02-07",
    "HomeTeam": "Team Bui",
    "AwayTeam": "Jerzeys Finest",
    "HomeScore": 286,
    "AwayScore": 546,
    "Winner": "Jerzeys Finest"
  },
  {
    "Id": 13,
    "Code": "2v1",
    "Date": "2024-02-12",
    "HomeTeam": "JQ Suited",
    "AwayTeam": "VA Ballerz",
    "HomeScore": 334,
    "AwayScore": 523,
    "Winner": "VA Ballerz"
  },
  {
    "Id": 14,
    "Code": "4v3",
    "Date": "2024-02-12",
    "HomeTeam": "That Couple",
    "AwayTeam": "Star Studded",
    "HomeScore": 504,
    "AwayScore": 167,
    "Winner": "That Couple"
  },
  {
    "Id": 15,
    "Code": "6v5",
    "Date": "2024-02-12",
    "HomeTeam": "Team Bui",
    "AwayTeam": "Gerow Animals",
    "HomeScore": 535,
    "AwayScore": 82,
    "Winner": "Team Bui"
  },
  {
    "Id": 16,
    "Code": "8v7",
    "Date": "2024-02-12",
    "HomeTeam": "Knuck If You Stuck",
    "AwayTeam": "Jerzeys Finest",
    "HomeScore": 502,
    "AwayScore": 399,
    "Winner": "Knuck If You Stuck"
  },
  {
    "Id": 17,
    "Code": "3v1",
    "Date": "2024-02-13",
    "HomeTeam": "Star Studded",
    "AwayTeam": "VA Ballerz",
    "HomeScore": 436,
    "AwayScore": 553,
    "Winner": "VA Ballerz"
  },
  {
    "Id": 18,
    "Code": "4v2",
    "Date": "2024-02-13",
    "HomeTeam": "That Couple",
    "AwayTeam": "JQ Suited",
    "HomeScore": -151,
    "AwayScore": 508,
    "Winner": "JQ Suited"
  },
  {
    "Id": 19,
    "Code": "7v5",
    "Date": "2024-02-13",
    "HomeTeam": "Jerzeys Finest",
    "AwayTeam": "Gerow Animals",
    "HomeScore": 522,
    "AwayScore": 479,
    "Winner": "Jerzeys Finest"
  },
  {
    "Id": 20,
    "Code": "8v6",
    "Date": "2024-02-13",
    "HomeTeam": "Knuck If You Stuck",
    "AwayTeam": "Team Bui",
    "HomeScore": 202,
    "AwayScore": 519,
    "Winner": "Team Bui"
  },
  {
    "Id": 21,
    "Code": "3v2",
    "Date": "2024-02-14",
    "HomeTeam": "Star Studded",
    "AwayTeam": "JQ Suited",
    "HomeScore": 547,
    "AwayScore": 298,
    "Winner": "Star Studded"
  },
  {
    "Id": 22,
    "Code": "4v1",
    "Date": "2024-02-14",
    "HomeTeam": "That Couple",
    "AwayTeam": "VA Ballerz",
    "HomeScore": 320,
    "AwayScore": 504,
    "Winner": "VA Ballerz"
  },
  {
    "Id": 23,
    "Code": "7v6",
    "Date": "2024-02-14",
    "HomeTeam": "Jerzeys Finest",
    "AwayTeam": "Team Bui",
    "HomeScore": 435,
    "AwayScore": 508,
    "Winner": "Team Bui"
  },
  {
    "Id": 24,
    "Code": "8v5",
    "Date": "2024-02-14",
    "HomeTeam": "Knuck If You Stuck",
    "AwayTeam": "Gerow Animals",
    "HomeScore": 557,
    "AwayScore": 304,
    "Winner": "Knuck If You Stuck"
  }
]

module.exports = games;