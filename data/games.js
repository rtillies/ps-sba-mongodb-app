const games = [
  {
    "Id": 1,
    "Code": "1v2",
    "Date": "2024-02-05",
    "Home Team": "VA Ballerz",
    "Away Team": "JQ Suited",
    "Home Score": 545,
    "Away Score": 164,
    "Winner": "VA Ballerz"
  },
  {
    "Id": 2,
    "Code": "3v4",
    "Date": "2024-02-05",
    "Home Team": "Star Studded",
    "Away Team": "That Couple",
    "Home Score": 308,
    "Away Score": 535,
    "Winner": "That Couple"
  },
  {
    "Id": 3,
    "Code": "5v6",
    "Date": "2024-02-05",
    "Home Team": "Gerow Animals",
    "Away Team": "Team Bui",
    "Home Score": 255,
    "Away Score": 531,
    "Winner": "Team Bui"
  },
  {
    "Id": 4,
    "Code": "7v8",
    "Date": "2024-02-05",
    "Home Team": "Jerzeys Finest",
    "Away Team": "Knuck If You Stuck",
    "Home Score": 86,
    "Away Score": 505,
    "Winner": "Knuck If You Stuck"
  },
  {
    "Id": 5,
    "Code": "1v3",
    "Date": "2024-02-06",
    "Home Team": "VA Ballerz",
    "Away Team": "Star Studded",
    "Home Score": 598,
    "Away Score": -38,
    "Winner": "VA Ballerz"
  },
  {
    "Id": 6,
    "Code": "2v4",
    "Date": "2024-02-06",
    "Home Team": "JQ Suited",
    "Away Team": "That Couple",
    "Home Score": 278,
    "Away Score": 529,
    "Winner": "That Couple"
  },
  {
    "Id": 7,
    "Code": "5v7",
    "Date": "2024-02-06",
    "Home Team": "Gerow Animals",
    "Away Team": "Jerzeys Finest",
    "Home Score": 436,
    "Away Score": 527,
    "Winner": "Jerzeys Finest"
  },
  {
    "Id": 8,
    "Code": "6v8",
    "Date": "2024-02-06",
    "Home Team": "Team Bui",
    "Away Team": "Knuck If You Stuck",
    "Home Score": 549,
    "Away Score": 347,
    "Winner": "Team Bui"
  },
  {
    "Id": 9,
    "Code": "1v4",
    "Date": "2024-02-07",
    "Home Team": "VA Ballerz",
    "Away Team": "That Couple",
    "Home Score": 507,
    "Away Score": 404,
    "Winner": "VA Ballerz"
  },
  {
    "Id": 10,
    "Code": "2v3",
    "Date": "2024-02-07",
    "Home Team": "JQ Suited",
    "Away Team": "Star Studded",
    "Home Score": 508,
    "Away Score": 115,
    "Winner": "JQ Suited"
  },
  {
    "Id": 11,
    "Code": "5v8",
    "Date": "2024-02-07",
    "Home Team": "Gerow Animals",
    "Away Team": "Knuck If You Stuck",
    "Home Score": 299,
    "Away Score": 529,
    "Winner": "Knuck If You Stuck"
  },
  {
    "Id": 12,
    "Code": "6v7",
    "Date": "2024-02-07",
    "Home Team": "Team Bui",
    "Away Team": "Jerzeys Finest",
    "Home Score": 286,
    "Away Score": 546,
    "Winner": "Jerzeys Finest"
  },
  {
    "Id": 13,
    "Code": "2v1",
    "Date": "2024-02-12",
    "Home Team": "JQ Suited",
    "Away Team": "VA Ballerz",
    "Home Score": 334,
    "Away Score": 523,
    "Winner": "VA Ballerz"
  },
  {
    "Id": 14,
    "Code": "4v3",
    "Date": "2024-02-12",
    "Home Team": "That Couple",
    "Away Team": "Star Studded",
    "Home Score": 504,
    "Away Score": 167,
    "Winner": "That Couple"
  },
  {
    "Id": 15,
    "Code": "6v5",
    "Date": "2024-02-12",
    "Home Team": "Team Bui",
    "Away Team": "Gerow Animals",
    "Home Score": 535,
    "Away Score": 82,
    "Winner": "Team Bui"
  },
  {
    "Id": 16,
    "Code": "8v7",
    "Date": "2024-02-12",
    "Home Team": "Knuck If You Stuck",
    "Away Team": "Jerzeys Finest",
    "Home Score": 502,
    "Away Score": 399,
    "Winner": "Knuck If You Stuck"
  },
  {
    "Id": 17,
    "Code": "3v1",
    "Date": "2024-02-13",
    "Home Team": "Star Studded",
    "Away Team": "VA Ballerz",
    "Home Score": 436,
    "Away Score": 553,
    "Winner": "VA Ballerz"
  },
  {
    "Id": 18,
    "Code": "4v2",
    "Date": "2024-02-13",
    "Home Team": "That Couple",
    "Away Team": "JQ Suited",
    "Home Score": -151,
    "Away Score": 508,
    "Winner": "JQ Suited"
  },
  {
    "Id": 19,
    "Code": "7v5",
    "Date": "2024-02-13",
    "Home Team": "Jerzeys Finest",
    "Away Team": "Gerow Animals",
    "Home Score": 522,
    "Away Score": 479,
    "Winner": "Jerzeys Finest"
  },
  {
    "Id": 20,
    "Code": "8v6",
    "Date": "2024-02-13",
    "Home Team": "Knuck If You Stuck",
    "Away Team": "Team Bui",
    "Home Score": 202,
    "Away Score": 519,
    "Winner": "Team Bui"
  },
  {
    "Id": 21,
    "Code": "3v2",
    "Date": "2024-02-14",
    "Home Team": "Star Studded",
    "Away Team": "JQ Suited",
    "Home Score": 547,
    "Away Score": 298,
    "Winner": "Star Studded"
  },
  {
    "Id": 22,
    "Code": "4v1",
    "Date": "2024-02-14",
    "Home Team": "That Couple",
    "Away Team": "VA Ballerz",
    "Home Score": 320,
    "Away Score": 504,
    "Winner": "VA Ballerz"
  },
  {
    "Id": 23,
    "Code": "7v6",
    "Date": "2024-02-14",
    "Home Team": "Jerzeys Finest",
    "Away Team": "Team Bui",
    "Home Score": 435,
    "Away Score": 508,
    "Winner": "Team Bui"
  },
  {
    "Id": 24,
    "Code": "8v5",
    "Date": "2024-02-14",
    "Home Team": "Knuck If You Stuck",
    "Away Team": "Gerow Animals",
    "Home Score": 557,
    "Away Score": 304,
    "Winner": "Knuck If You Stuck"
  }
]

module.exports = games;