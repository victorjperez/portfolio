import { create } from "zustand";
import { client } from "../../sanity";
import REQ from "../../util/REQ";


const localized = (fieldName) => `"${fieldName}": ${fieldName}.en`;

function apiCall() {
  return client.fetch(`*[_type == 'person'] | [0] {
      name,
      image,
      ${localized("title")},
      ${localized("introduction")},
      keyInfo{
        ${localized("location")},
        birthYear,
        emailAddress,
        phoneNumber,
        websiteUrl,
        githubHandle,
        linkedInHandle,
        twitterHandle,
        instagramHandle,
      },
      expertise[]{
        name,
        technologies,
      },
      jobs[]->{
        _id,
        company->{
          name,
        },
        ${localized("title")},
        start,
        end,
        ${localized("title2")},
        start2,
        end2,
        ${localized("description")},
      },
      professionalProjects[]->{
        _id,
        ${localized("title")},
        company->{
          name
        },
        readableUrl,
        url,
        githubUrl,
        logo,
        start,
        end,
        ${localized("description")},
        role {
          ${localized("title")},
          ${localized("description")},
        },
        technologies,
      },
      personalProjects[]->{
        _id,
        ${localized("title")},
        readableUrl,
        url,
        githubUrl,
        logo,
        start,
        end,
        ${localized("description")},
        role {
          ${localized("title")},
          ${localized("description")},
        },
        technologies,
      },
      education[]->{
        _id,
        ${localized("institutionName")},
        ${localized("degree")},
        ${localized("description")},
        start,
        end,
      },
      volunteerWorkPositions[]->{
        _id,
        ${localized("title")},
        organizationName,
        ${localized("position")},
        ${localized("description")},
        start,
        end,
      },
    }`);
}

// export function fetchPerson() {
//   const update = (obj) => store.set({ personAsync: obj });

//   update({ req: REQ.PENDING });

//   apiCall().then(
//     (person) => {
//       person ? update({ req: REQ.SUCCESS, person }) : update({ req: REQ.ERROR });
//     },
//     (error) => {
//       update({ req: REQ.ERROR });
//     }
//   );
// }
export const useStore = create((set) => ({
  req: REQ.INIT,
  person: void 0, 
  fetchPerson: async () => {
    apiCall().then(
      (data) => {
        data ? set({ req: REQ.SUCCESS, person: data }) : set({ req: REQ.ERROR });
      },
      (error) => {
        set({ req: REQ.ERROR });
      }
    );
  },
}));
