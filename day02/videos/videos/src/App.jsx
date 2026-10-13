import Thumbnail from "./Thumbnail";

const videos = [
  { name: `First video`, color: `blue`, isFav: false },
  { name: `Second video`, color: `violet`, isFav: false },
  { name: `Third video`, color: `skyblue`, isFav: true },
];

const App = () => {
  return (
    <>
      <p>{videos.length} Videos</p>
      <div
        style={{
          width: `600px`,
          display: `flex`,
          flexDirection: `column`,
          gap: `10px`,
        }}
      >
        {Array(videos.length)
          .fill(0)
          .map((x, i) => {
            return (
              <div style={{ display: `flex`, gap: `10px` }}>
                <Thumbnail bg={videos[i].color} />
                <div
                  style={{
                    width: `100%`,
                    display: `flex`,
                    justifyContent: `space-between`,
                    alignItems: `center`,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: `18px`,
                        fontWeight: `bold`,
                        display: `flex`,
                        flexDirection: `column`,
                        gap: `10px`,
                      }}
                    >
                      {videos[i].name}
                    </div>
                    <div
                      style={{
                        fontSize: `16px`,
                        fontWeight: ``,
                        color: `gray`,
                      }}
                    >
                      Video description
                    </div>
                  </div>
                  <div style={{ fontSize: `30px` }}>
                    {videos[i].isFav ? `♥` : `♡`}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default App;
