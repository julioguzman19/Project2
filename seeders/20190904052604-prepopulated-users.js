//"use strict";

module.exports = {
  up: (
    queryInterface,
    Sequelize // eslint-disable-line no-unused-vars
  ) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Daenerys",
          age: "23",
          photo: "/Project2/public/assets/images/daenerys.webp",
          city: "Essos",
          email: "dragonqueen@gmail.com",
          medium: "Developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Jon Snow",
          age: "23",
          photo: "/Project2/public/assets/images/jon.jpg",
          city: "The Wall",
          email: "kingofthenorth@gmail.com",
          medium: "Developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Robb Stark",
          age: "26",
          photo: "/Project2/public/assets/images/robstark.jpg",
          city: "Winterfell",
          email: "redweddinglover@yahoo.com",
          medium: "Visual Artist",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Bran Stark",
          age: "12",
          photo: "/Project2/public/assets/images/bran.jpg",
          city: "Winterfell",
          email: "crowseye@gmail.com",
          medium: "Visual Artist",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Margaery Tyrell",
          age: "19",
          photo: "/Project2/public/assets/images/margaery.jpg",
          city: "Highgarden",
          email: "flutist@yahoo.com",
          medium: "Musician",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Ygritte",
          age: "21",
          photo: "/Project2/public/assets/images/ygritte.jpg",
          city: "Beyond the Wall",
          email: "freefolk@gmail.com",
          medium: "Musician",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Cersei Lannister",
          age: "35",
          photo: "/Project2/public/assets/images/cersei.webp",
          city: "Westeros",
          email: "brotherluver@yahoo.com",
          medium: "Photographer",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Sansa Stark",
          age: "17",
          photo: "/Project2/public/assets/images/sansa.webp",
          city: "Winterfell",
          email: "starkrebel@gmail.com",
          medium: "Photographer",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Arya Stark",
          age: "15",
          photo: "/Project2/public/assets/images/arya.webp",
          city: "Winterfell",
          email: "needle@gmail.com",
          medium: "Piña Colada Enthusiast",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Yara Greyjoy",
          age: "17",
          photo: "/Project2/public/assets/images/yara.jpg",
          city: "Iron Islands",
          email: "blackwind@gmail.com",
          medium: "Piña Colada Enthusiast",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Stringer Bell",
          age: "33",
          photo: "/Project2/public/assets/images/stringer.jpg",
          city: "Baltimore",
          email: "collegestudent@gmail.com",
          medium: "Piña Colada Enthusiast",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Omar Little",
          age: "35",
          photo: "/Project2/public/assets/images/omar.jpg",
          city: "Baltimore",
          email: "omar_coming@gmail.com",
          medium: "Full Stack Dev",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Jimmy McNulty",
          age: "32",
          photo: "/Project2/public/assets/images/mcnulty.jpg",
          city: "Baltimore",
          email: "copguy@gmail.com",
          medium: "Piña Colada Enthusiast",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Bunk",
          age: "36",
          photo: "/Project2/public/assets/images/bunk.jpg",
          city: "Baltimore",
          email: "dissapointed@gmail.com",
          medium: "Visual Artist",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Cedric Daniels",
          age: "41",
          photo: "/Project2/public/assets/images/daniels.jpg",
          city: "Baltimore",
          email: "commish@gmail.com",
          medium: "Developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Avon Barksdale",
          age: "27",
          photo: "/Project2/public/assets/images/avon.jpg",
          city: "Baltimore",
          email: "king@gmail.com",
          medium: "Developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Elaine Benes",
          age: "32",
          photo: "/Project2/public/assets/images/elaine.jpg",
          city: "New York",
          email: "get_out@gmail.com",
          medium: "Visual Artist",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Jerry Seinfeld",
          age: "35",
          photo: "/Project2/public/assets/images/jerry.jpg",
          city: "New York",
          email: "whats_the_deal@gmail.com",
          medium: "Musician",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Cosmo Kramer",
          age: "37",
          photo: "/Project2/public/assets/images/kramer.jpg",
          city: "New York",
          email: "giddy_up@gmail.com",
          medium: "Musician",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "George Costanza",
          age: "35",
          photo: "/Project2/public/assets/images/george.jpg",
          city: "New York",
          email: "gettin_upset@gmail.com",
          medium: "Musician",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Walter White",
          age: "41",
          photo: "/Project2/public/assets/images/walter.jpg",
          city: "Albuquerque",
          email: "who_knocks@gmail.com",
          medium: "Photographer",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Jesse Pinkman",
          age: "21",
          photo: "/Project2/public/assets/images/jesse.jpg",
          city: "Albuquerque",
          email: "science@gmail.com",
          medium: "Photographer",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (
    queryInterface,
    Sequelize // eslint-disable-line no-unused-vars
  ) => {
    return queryInterface.bulkDelete("People", null, {});
  }
};
