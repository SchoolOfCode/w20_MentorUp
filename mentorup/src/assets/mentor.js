const generateRandomString = () => Math.random().toString(20).substring(2, 8);

const mentorProfiles = [
  {
    avatar: `x`,
    businessStage: "active",
    email: "catclaclou@hotmail.fr",
    expertise: ["marketing"],
    industry: "flowers",
    username: "testMentor1",
    yearsInBusiness: 3,
  },
  {
    avatar: `https://avatars.dicebear.com/api/gridy/${generateRandomString()}.svg`,
    businessStage: "active",
    email: "catclaclou@hotmail.fr",
    expertise: ["finance", "consulting"],
    industry: "consulting",
    username: "testMentor2",
    yearsInBusiness: 7,
  },
  {
    avatar: `https://avatars.dicebear.com/api/gridy/${generateRandomString()}.svg`,
    businessStage: "inactive",
    email: "catclaclou@hotmail.fr",
    expertise: ["finance", "marketing"],
    industry: "flowers",
    username: "testMentor3",
    yearsInBusiness: 1,
  },
  {
    avatar: `https://avatars.dicebear.com/api/gridy/${generateRandomString()}.svg`,
    businessStage: "inactive",
    email: "catclaclou@hotmail.fr",
    expertise: ["finance", "marketing"],
    industry: "flowers",
    username: "testMentor4",
    yearsInBusiness: 3,
  },
  {
    avatar: `https://avatars.dicebear.com/api/gridy/${generateRandomString()}.svg`,
    businessStage: "active",
    email: "catclaclou@hotmail.fr",
    expertise: ["websites", "software"],
    industry: "software",
    username: "testMentor5",
    yearsInBusiness: 12,
  },
  {
    avatar: `https://avatars.dicebear.com/api/gridy/${generateRandomString()}.svg`,
    businessStage: "inactive",
    email: "catclaclou@hotmail.fr",
    expertise: ["business plan", "marketing"],
    industry: "cheese making",
    username: "testMentor6",
    yearsInBusiness: 2,
  },
];

export default mentorProfiles;
