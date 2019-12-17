const devices = {
  "Apple A7 GPU": {
    1136: "iPhone5/5s",
    2048: "iPadAir/iPadMini2/3"
  },
  "Apple A8 GPU": {
    1334: "iPhone6",
    2208: "iPhone6Plus",
    2048: "iPadAir2/4"
  },
  "Apple A9 GPU": {
    1136: "iPhoneSE",
    1334: "iPhone6s",
    2208: "iPhone6sPlus"
  },
  "Apple A10 GPU": {
    1334: "iPhone7",
    2208: "iPhone7Plus"
  },
  "Apple A11 GPU": {
    1334: "iPhone8",
    2208: "iPhone8Plus",
    2436: "iPhoneX"
  },
  "Apple A12 GPU": {
    2436: "iPhoneXS",
    2688: "iPhoneXSMAX",
    1792: "iphoneXR"
  }
};

function getModel() {
  try {
    let gl: any = document
      .createElement("canvas")
      .getContext("experimental-webgl");
    let gpu = gl.getParameter(
      gl.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL
    );
    let sw =
      Math.max(window.screen.width, window.screen.height) *
      (window.devicePixelRatio || 1);
    return devices[gpu][sw] || "ios未知";
  } catch (e) {
    console.log(e);
  }
  return "ios未知";
}

export default getModel();
