const profileUrl = (name) => `https://api.github.com/users/${name}`;

const reposUrl = (name) => `https://api.github.com/users/${name}/repos`;

const urls = {
  profileUrl,
  reposUrl,
};

export default urls;
