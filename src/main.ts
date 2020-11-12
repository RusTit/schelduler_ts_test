const main = async () => {
  console.info('App is started');
};

main()
  .catch(e => console.error(e))
  .finally(() => {
    console.info('App is finished.');
  });
