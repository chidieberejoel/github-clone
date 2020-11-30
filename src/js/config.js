module.exports = {
  token: "a05ac6ed6b7ee395ed6f0ed083f3566d3a48aa86",
  url: "https://api.github.com/graphql",
  query: `{
  viewer {
    login
    repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}) {
      edges {
        node {
          description
          name
          updatedAt
          languages(first: 1) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          forkCount
          isFork
        }
      }
    }
    bio
    organizations(first: 10) {
      edges {
        node {
          avatarUrl
          name
        }
      }
    }
    location
    followers {
      totalCount
    }
    following {
      totalCount
    }
    starredRepositories {
      totalCount
    }
    avatarUrl
    name
  }
}
`,
};
