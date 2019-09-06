let profilesArray = [
  {
    name: "Daenerys",
    age: "23",
    photo:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/e/ee/QueenDaenerysTargaryenIronThrone.PNG/revision/latest?cb=20190520173137",
    city: "Essos",
    email: "dragonqueen@gmail.com",
    medium: "Developer",
    mediumPair: "Developer"
  },

  {
    name: "Jon Snow",
    age: "23",
    photo:
      "https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg",
    city: "The Wall",
    email: "kingofthenorth@gmail.com",
    medium: "Developer",
    mediumPair: "Developer"
  },

  {
    name: "Robb Stark",
    age: "26",
    photo:
      "https://vignette.wikia.nocookie.net/p__/images/9/9e/The_Young_Wolf_in_Winterfell.jpeg/revision/latest?cb=20160702093620&path-prefix=protagonist",
    city: "Winterfell",
    email: "redweddinglover@yahoo.com",
    medium: "Visual Artist",
    mediumPair: "Visual Artist"
  },

  {
    name: "Bran Stark",
    age: "12",
    photo:
      "https://aa1a5178aef33568e9c4-a77ea51e8d8892c1eb8348eb6b3663f6.ssl.cf5.rackcdn.com/p/full/1ddc050e-6f9c-4724-b19e-052471f26d68.jpg",
    city: "Winterfell",
    email: "crowseye@gmail.com",
    medium: "Visual Artist",
    mediumPair: "Visual Artist"
  },

  {
    name: "Margaery Tyrell",
    age: "19",
    photo:
      "https://cdn.shopify.com/s/files/1/2510/6294/articles/queen_margaery_2048x2048.jpg?v=1516329726",
    city: "Highgarden",
    email: "flutist@yahoo.com",
    medium: "Musician",
    mediumPair: "Musician"
  },

  {
    name: "Ygritte",
    age: "21",
    photo:
      "https://vignette.wikia.nocookie.net/lucerne/images/d/d5/Ygritte_Cover.jpg/revision/latest?cb=20130505150909",
    city: "Beyond the Wall",
    email: "freefolk@gmail.com",
    medium: "Musician",
    mediumPair: "Musician"
  },

  {
    name: "Cersei Lannister",
    age: "35",
    photo:
      "https://geekandsundry.com/wp-content/uploads/2016/02/Cersei-Lannister-game-of-thrones-33804391-1024-576.jpg",
    city: "Westeros",
    email: "brotherluver@yahoo.com",
    medium: "Photographer",
    mediumPair: "Photographer"
  },

  {
    name: "Sansa Stark",
    age: "17",
    photo:
      "https://s3.r29static.com//bin/entry/4ca/720x864,85/2160612/youre-probably-going-to-need-2160612.webp",
    city: "Winterfell",
    email: "starkrebel@gmail.com",
    medium: "Photographer",
    mediumPair: "Photographer"
  },

  {
    name: "Arya Stark",
    age: "15",
    photo:
      "https://s3.r29static.com//bin/entry/183/720x1009,85/2171313/stop-saying-arya-stark-isnt-2171313.webp",
    city: "Winterfell",
    email: "needle@gmail.com",
    medium: "Piña Colada Enthusiast",
    mediumPair: "Piña Colada Enthusiast"
  },

  {
    name: "Yara Greyjoy",
    age: "17",
    photo:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a8/Game_of_thrones_6x5_yara_promo.jpg/revision/latest?cb=20160808022737",
    city: "Iron Islands",
    email: "blackwind@gmail.com",
    medium: "Piña Colada Enthusiast",
    mediumPair: "Piña Colada Enthusiast"
  },

  {
    name: "Stringer Bell",
    age: "33",
    photo:
      "https://www.hbo.com/content/dam/hbodata/series/the-wire/character/the-street/russell-stringer-bell-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    city: "Baltimore",
    email: "collegestudent@gmail.com",
    medium: "Piña Colada Enthusiast",
    mediumPair: "Piña Colada Enthusiast"
  },

  {
    name: "Omar Little",
    age: "35",
    photo:
      "https://vignette.wikia.nocookie.net/thewire/images/4/46/Omar.jpg/revision/latest?cb=20080312182119",
    city: "Baltimore",
    email: "omar_coming@gmail.com",
    medium: "Full Stack Dev",
    mediumPair: "Full Stack Dev"
  },

  {
    name: "Jimmy McNulty",
    age: "32",
    photo:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/The_Wire_Jimmy_McNulty.jpg",
    city: "Baltimore",
    email: "copguy@gmail.com",
    medium: "Piña Colada Enthusiast",
    mediumPair: "Full Stack Dev"
  },

  {
    name: "Bunk",
    age: "36",
    photo: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Wire_Bunk.jpg",
    city: "Baltimore",
    email: "dissapointed@gmail.com",
    medium: "Visual Artist",
    mediumPair: "Full Stack Dev"
  },

  {
    name: "Cedric Daniels",
    age: "41",
    photo:
      "https://uproxx.com/wp-content/uploads/2015/11/daniels-thewire.jpg?quality=100&w=650",
    city: "Baltimore",
    email: "commish@gmail.com",
    medium: "Developer",
    mediumPair: "Full Stack Dev"
  },

  {
    name: "Avon Barksdale",
    age: "27",
    photo:
      "https://www.hbo.com/content/dam/hbodata/series/the-wire/character/the-street/avon-barksdale-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    city: "Baltimore",
    email: "king@gmail.com",
    medium: "Developer",
    mediumPair: "Developer"
  },

  {
    name: "Elaine Benes",
    age: "32",
    photo:
      "https://www.leadersayswhat.com/wp-content/uploads/2015/07/julia-louis-dreyfus.jpg",
    city: "New York",
    email: "get_out@gmail.com",
    medium: "Visual Artist",
    mediumPair: "Developer"
  },

  {
    name: "Jerry Seinfeld",
    age: "35",
    photo:
      "https://pmctvline2.files.wordpress.com/2018/08/jerry-seinfeld-season-10-interview.jpg?w=620&h=440&crop=1",
    city: "New York",
    email: "whats_the_deal@gmail.com",
    medium: "Musician",
    mediumPair: "Musician"
  },

  {
    name: "Cosmo Kramer",
    age: "37",
    photo:
      "https://vignette.wikia.nocookie.net/p__/images/e/e8/Kramer_on_the_left_.jpeg/revision/latest?cb=20160418201216&path-prefix=protagonist",
    city: "New York",
    email: "giddy_up@gmail.com",
    medium: "Musician",
    mediumPair: "Musician"
  },

  {
    name: "George Costanza",
    age: "35",
    photo:
      "https://content.linkedin.com/content/dam/business/sales-solutions/global/en_US/blog/2017/09/what-george-costanza-can-teach-you-about-selling.png",
    city: "New York",
    email: "gettin_upset@gmail.com",
    medium: "Musician",
    mediumPair: "Musician"
  },

  {
    name: "Walter White",
    age: "41",
    photo:
      "https://tribzap2it.files.wordpress.com/2013/10/breaking-bad-walter-white-underwear.jpg?quality=70&strip=info",
    city: "Albuquerque",
    email: "who_knocks@gmail.com",
    medium: "Photographer",
    mediumPair: "Photographer"
  },

  {
    name: "Jesse Pinkman",
    age: "21",
    photo:
      "https://storage.googleapis.com/nrpassets/uploads/articles/1566901746-breaking-bad-aaron-paul-jesse-pinkman.jpg",
    city: "Albuquerque",
    email: "science@gmail.com",
    medium: "Photographer",
    mediumPair: "Photographer"
  }
];

module.exports = profilesArray;
