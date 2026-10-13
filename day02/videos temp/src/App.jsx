const videos = [
  { name: `First video`, color: `blue`, isFav: false },
  { name: `Second video`, color: `violet`, isFav: false },
  { name: `Third video`, color: `skyblue`, isFav: false },
];

const App = () => {
  return (
    <>
      <p>{videos.length} Videos</p>
    </>
  );
};
