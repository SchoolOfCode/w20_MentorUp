import { findMentor } from "./MatchWithMentor";

let help = {
  requirements: "finance",
  industry: "flowers",
};
let mentorProfiles = [];
test(`When a mentor matches with both industry and expertise, they are returned above others every time`, () => {
  help = {
    requirements: "finance",
    industry: "flowers",
  };
  mentorProfiles = [
    {
      industry: help.industry,
      expertise: [help.requirements, "business plan"],
    },
    {
      industry: "Random Industry",
      expertise: [help.requirements, "business plan"],
    },
    {
      industry: help.industry,
      expertise: ["Test1"],
    },
  ];
  const actual = [];
  for (let i = 0; i < 100; i++) {
    actual.push(findMentor(mentorProfiles));
  }
  expect(actual).toContain(mentorProfiles[0]);
  expect(actual).toEqual(expect.not.arrayContaining([mentorProfiles[1]]));
  expect(actual).toEqual(expect.not.arrayContaining([mentorProfiles[2]]));
});
test(`When there are no mentors, undefined is returned`, () => {
  mentorProfiles = [];
  const actual = findMentor(mentorProfiles);
  expect(actual).toBeUndefined();
});
test(`When there are no mentors which match the expertise, undefined is returned`, () => {
  let help = {
    requirements: "finance",
    industry: "flowers",
  };
  mentorProfiles = [
    {
      industry: help.industry,
      expertise: ["Test 1"],
    },
    {
      industry: "Random Industry",
      expertise: ["Test 2"],
    },
  ];
  const actual = findMentor(mentorProfiles);
  expect(actual).toBeUndefined();
});
test(`When there are multiple mentors which match the expertise but not industry, a random one is selected`, () => {
  help = {
    requirements: "finance",
    industry: "flowers",
  };
  mentorProfiles = [
    {
      industry: "Random Industry",
      expertise: [help.requirements, "business plan"],
    },
    {
      industry: "Random Industry",
      expertise: [help.requirements, "business plan"],
    },
  ];
  let actual = [];
  for (let i = 0; i < 100; i++) {
    actual.push(findMentor(mentorProfiles));
  }
  expect(actual).toContain(mentorProfiles[0]);
  expect(actual).toContain(mentorProfiles[1]);
});
