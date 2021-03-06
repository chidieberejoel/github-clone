import { elements } from "./base";

export const signedInAs = (el) => {
  const markup = `<strong class="css-truncate-target">${el.login}</strong>`;

  const miniImage = `<img class="avatar avatar-user" src="${el.avatarUrl}" width="20" height="20" alt="@${el.login}"> ${el.login} 
                 `;

  const miniImage2 = `<img class="avatar avatar-user" src="${el.avatarUrl}" width="20" height="20" alt="@${el.login}">
    <span class="caret-down"></span>`;

  const reposCount = `<span title="${el.repositories.totalCount}" class="Counter">${el.repositories.totalCount}</span>`;

  elements.navDropDown.insertAdjacentHTML("afterbegin", markup);
  elements.miniAvi.insertAdjacentHTML("afterbegin", miniImage);
  elements.miniAvi2.insertAdjacentHTML("afterbegin", miniImage2);
  elements.reposNumber.insertAdjacentHTML("beforeend", reposCount);
  elements.reposNumberMini.insertAdjacentHTML("beforeend", reposCount);
};
