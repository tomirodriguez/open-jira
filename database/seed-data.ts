export const seedData = {
  entries: [
    {
      description:
        'PENDING - Qui non cupidatat laboris eiusmod ullamco eiusmod do sunt enim esse.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description:
        'PROGRESS - Labore eiusmod ea proident cillum veniam reprehenderit ad tempor tempor.',
      status: 'in-progress',
      createdAt: Date.now() - 10000,
    },
    {
      description:
        'FINISHED - Exercitation magna pariatur aliquip cupidatat labore qui eu.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
