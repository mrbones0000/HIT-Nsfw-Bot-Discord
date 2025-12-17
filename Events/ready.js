module.exports = {
  name: 'ready',
  async execute(bot) {
    await bot.user.setPresence({ activities: [{ name: 'Viendo-pollas', type: 5 }], status: 'idle' });
  },
};
