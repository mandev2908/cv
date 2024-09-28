const Map = () => {
  return (
    <div className="map_wrap w-full float-left clear-both h-auto mb-[50px]">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height={355}
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d245.00665214934463!2d106.6549571!3d10.7262736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e3f8713987f%3A0xa9c000f4d59256df!2zQTEwLCBCw6xuaCBIxrBuZywgQsOsbmggQ2jDoW5oLCBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1727506936887!5m2!1svi!2s"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
          <a href="https://fmovies-online.net">fmovies</a>
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".mapouter{position:relative;text-align:right;height:355px;width:100%;}",
            }}
          />
          <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}",
            }}
          />
        </div>
      </div>
      {/* Get your API here https://www.embedgooglemap.net */}
    </div>
  );
};
export default Map;
