import Video from "./Video";

const videoList = [1, 2, 3];

const App = () => {
  return (
    <>
      <div
        style={{ fontSize: `20px`, fontWeight: `bold`, marginBottom: `20px` }}
      >
        {videoList.length} Videos
      </div>
      <div
        style={{
          width: `600px`,
          display: `flex`,
          flexDirection: `column`,
          gap: `10px`,
        }}
      >
        <Video
          bg={`radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)`}
          title={`먼작귀`}
          desc={`인어섬의 비밀`}
        />{" "}
        <Video
          bg={`linear-gradient(90deg, rgb(98, 111, 230) 0%, rgb(136, 235, 213) 100%)`}
          title={`짱구 극장판`}
          desc={`어른 제국의 역습`}
        />{" "}
        <Video
          bg={`radial-gradient(rgb(139, 236, 135) 0%, rgb(238, 215, 138) 100%)`}
          title={`도라에몽 극장판`}
          desc={`스탠 바이 미`}
        />
      </div>
    </>
  );
};

export default App;
