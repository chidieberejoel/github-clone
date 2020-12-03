module.exports = {
  token: `${atob("MzU5NDNlOGVjZjk0ODNhNTI5NWQ3NjE0YTJjNzJhOGNlM2IwZDMxMw==")}`,
  url: "https://api.github.com/graphql",
  query: `{
  viewer {
    login
    repositories(first: 20, orderBy: {field: UPDATED_AT, direction: ASC}) {
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
      totalCount
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
