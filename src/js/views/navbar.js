import { elements } from "./base";

// export const signedInAs = (item) => {
//     const item = `<strong class="css-truncate-target">${item.name}</strong>`;
//     elements.recipe.insertAdjacentHTML('afterbegin', markup);
// }

export const signedInAs = (el) => {
  const markup = `<strong class="css-truncate-target">${el.login}</strong>`;

  const miniImage = `<img class="avatar avatar-user" src="${el.avatarUrl}" width="20" height="20" alt="@${el.login}"> ${el.login} 
                 `;

  const miniImage2 = `<img class="avatar avatar-user" src="${el.avatarUrl}" width="20" height="20" alt="@${el.login}">
    <span class="caret-down"></span>`;

  elements.navDropDown.insertAdjacentHTML("afterbegin", markup);
  elements.miniAvi.insertAdjacentHTML("afterbegin", miniImage);
  elements.miniAvi2.insertAdjacentHTML("afterbegin", miniImage2);
};
