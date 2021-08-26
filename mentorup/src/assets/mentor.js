const generateRandomString = () => Math.random().toString(20).substring(2, 8);

const mentorProfiles = [
  {
    avatar: `https://avatars.dicebear.com/api/gridy/${generateRandomString()}.svg`,
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
    industry: "finance",
    username: "testMentor3",
    yearsInBusiness: 1,
  },
];

export default mentorProfiles;
