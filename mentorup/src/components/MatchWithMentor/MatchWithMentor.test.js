import { findMentor } from "./MatchWithMentor";

let help = {
  requirements: "finance",
  industry: "flowers",
};

let mentorProfiles = [
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
    expertise: ["Random expertise", "business plan"],
  },
];
test(`When a mentor matches with both industry and expertise, they are returned above others every time`, () => {
  const actual = findMentor(mentorProfiles);
  const expected = mentorProfiles[0];
  expect(actual).toEqual(expected);
});
test(`When there are no mentors, undefined is returned`, () => {
  mentorProfiles = [];
  const actual = findMentor(mentorProfiles);
  expect(actual).toBeUndefined();
});
test(`When there are no mentors which match the expertise, undefined is returned`, () => {
  mentorProfiles = [
    {
      industry: help.industry,
      expertise: ["Test 1", "business plan"],
    },
    {
      industry: "Random Industry",
      expertise: ["Test 2", "business plan"],
    },
  ];
  const actual = findMentor(mentorProfiles);
  expect(actual).toBeUndefined();
});
test(`When there are multiple mentors which match the expertise but not industry, a random one is selected`, () => {
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
