const normalize = (profile, repositories) => ({
  name: profile?.name,
  avatar_url: profile?.avatar_url,
  total_repository: repositories?.length,
  repositories: repositories?.map((repository) => ({
    name: repository?.name,
    description: repository?.description,
  })),
});

const functions = {
  normalize,
};

export default functions;
