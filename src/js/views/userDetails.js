import { elements } from "./base";
export const userNames = (el) => {
  const avatar = `<div
                  class="user-tag__image q-width-100 q-float-l q-width-100 q-margin-r-0 p-relative f-shrink-0 float-l mq-d-inline-b mq-p-relative mq-f-shrink-0"
                  style="z-index: 4">
                  <a itemprop="image" href="#">
                    <img style="height: auto" alt="Avatar" width="260" height="260"
                      class="avatar avatar-user width-100  border bg-white" src="${el.avatarUrl}" />
                  </a>
                </div>`;

  const names = `<h1 class="padding-l-0 l-height-1">
                    <span class="user-details__fullname d-block overflow-h" itemprop="name">
                      ${el.name}
                    </span>
                    <span class="user-details__username d-block" itemprop="additionalName">
                      ${el.login}
                    </span>
                  </h1>`;
  const bio = ` <div>${el.bio}</div> `;

  const followers = `<div class="margin-b-16">
                      <a class="no-wrap no-underline link-gray" href="#">
                        <svg class="octicon octicon-people text-gray-light" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>
                        <span class="text-bold text-gray-dark">${el.followers.totalCount}</span> followers

                      </a>         ·  
                      <a class="no-wrap no-underline link-gray" href="#">
                      <span class="text-bold text-gray-dark">${el.following.totalCount}</span> following

                      </a>  ·  
                      <a class="no-wrap no-underline link-gray" href="#">
                        <svg class="octicon octicon-star text-gray-light" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                        <span class="text-bold text-gray-dark">${el.starredRepositories.totalCount}</span> 

                      </a>
                    </div>`;
  const locAndOrg = `<li class="user-card-detail css-truncate pt-1 ">
                      <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>  
                      <span> &nbsp; ${el.location}</span>
                    </li>`;

  const renderResult = `
        <div class="border-top padding-t-16 margin-t-16  hide-lg">
                <h2 class="mb-2 h4">Organizations</h2>
                <a href="#" class="avatar-group-item">
                  <img alt="@${el.organizations.edges[0].node.name}" width="32" height="32" src="${el.organizations.edges[0].node.avatarUrl}" class="avatar">
                </a>
              </div>
      `;

  elements.userAvatar.insertAdjacentHTML("afterbegin", avatar);
  elements.userNames.insertAdjacentHTML("afterbegin", names);
  elements.userBio.insertAdjacentHTML("afterbegin", bio);
  elements.follows.insertAdjacentHTML("afterbegin", followers);
  elements.locations.insertAdjacentHTML("afterbegin", locAndOrg);
  elements.organizations.insertAdjacentHTML("afterbegin", renderResult);
};
