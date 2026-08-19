__d("WAWebVoipWasmArtifactGating", [
	"WALogger",
	"WAWebABProps",
	"WAWebABPropsCache",
	"WAWebABPropsConfigs",
	"WAWebVoipGatingUtils",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s() {
		if (o("WAWebVoipGatingUtils").isGuestViewer()) return !1;
		try {
			return await o("WAWebABPropsCache").waitForABPropConfigsReady(), o("WAWebABPropsConfigs").ABPropConfigs.web_voip_use_content_addressed_wasm == null ? !1 : o("WAWebABProps").getABPropConfigValue("web_voip_use_content_addressed_wasm") === !0;
		} catch (t) {
			return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: Content-addressed WASM gating failed; using unversioned loader"]))).catching(r("getErrorSafe")(t)).sendLogs("voip-wasm-artifact-selection-failed"), !1;
		}
	}
	l.shouldUseContentAddressedVoipWasm = s;
}), 98);
