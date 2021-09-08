import { findMentor } from "./MatchWithMentor";

let help = {
  requirements: "requirementsTest",
  industry: "industryTest",
};
let mentorProfiles = [];
test(`When a mentor matches with both industry and helpTopic, they are returned above others every time`, () => {
  mentorProfiles = [
    {
      industry: help.industry,
      helpTopic: [help.requirements, "Test1"],
    },
    {
      industry: "Test1",
      helpTopic: [help.requirements, "Test1"],
    },
    {
      industry: help.industry,
      helpTopic: ["marketing"],
    },
  ];
  const actual = [];
  for (let i = 0; i < 100; i++) {
    actual.push(findMentor(mentorProfiles, help));
  }
  expect(actual).toContain(mentorProfiles[0]);
  expect(actual).toEqual(expect.not.arrayContaining([mentorProfiles[1]]));
  expect(actual).toEqual(expect.not.arrayContaining([mentorProfiles[2]]));
});

test(`When there are no mentors, undefined is returned`, () => {
  mentorProfiles = [];
  const actual = findMentor(mentorProfiles, help);
  expect(actual).toBeUndefined();
});

test(`When there are no mentors which match the helpTopic, undefined is returned`, () => {
  mentorProfiles = [
    {
      industry: help.industry,
      helpTopic: ["Test 1"],
    },
    {
      industry: "Random Industry",
      helpTopic: ["Test 2"],
    },
  ];
  const actual = findMentor(mentorProfiles, help);
  expect(actual).toBeUndefined();
});

test(`When there are multiple mentors which match the helpTopic but not industry, a random one is selected`, () => {
  mentorProfiles = [
    {
      industry: "Random Industry",
      helpTopic: [help.requirements, "Test1"],
    },
    {
      industry: "Random Industry",
      helpTopic: [help.requirements],
    },
  ];
  let actual = [];
  for (let i = 0; i < 100; i++) {
    actual.push(findMentor(mentorProfiles, help));
  }
  expect(actual).toContain(mentorProfiles[0]);
  expect(actual).toContain(mentorProfiles[1]);
});
