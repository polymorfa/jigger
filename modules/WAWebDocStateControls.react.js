__d("WAWebDocStateControls.react", [
	"WAWebAttachmentLoaderButton.react",
	"WAWebSpinner.react",
	"WDSIconIcClose.react",
	"WDSIconIcDownload.react",
	"WDSIconIcUpload.react",
	"react",
	"react-compiler-runtime",
	"useWAWebABPropConfigValue"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(6), n = e.children, r = e.onClick, a;
		t[0] !== r ? (a = r ? { onClick: r } : {}, t[0] = r, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = "x6s0dn4 x1sj5et5 x78zum5 x1okw0bk x90ne7k xl56j7k x1n2onr6 x1691je0", t[2] = l) : l = t[2];
		var u;
		return t[3] !== n || t[4] !== i ? (u = s.jsx("div", babelHelpers.extends({ className: l }, i, { children: n })), t[3] = n, t[4] = i, t[5] = u) : u = t[5], u;
	}
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.onClick, a = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_loader_button_uix_improvement");
		if (a) {
			var i;
			return t[0] !== n ? (i = s.jsx(o("WAWebAttachmentLoaderButton.react").DownloadButton, { onPress: n }), t[0] = n, t[1] = i) : i = t[1], i;
		}
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx(r("WDSIconIcDownload.react"), {
			height: 34,
			width: 34,
			testid: "audio-download"
		}), t[2] = l) : l = t[2];
		var c;
		return t[3] !== n ? (c = s.jsx(u, {
			onClick: n,
			children: l
		}), t[3] = n, t[4] = c) : c = t[4], c;
	}
	var d = { color: "progress" };
	function m(e) {
		var t = o("react-compiler-runtime").c(15), n = e.canCancel, a = e.onClick, i = e.outgoingMsg, l = e.value, c = n === void 0 ? !1 : n, m = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_loader_button_uix_improvement");
		if (m) {
			var p = l != null ? l / 100 : 0, _ = c ? a : void 0, f;
			return t[0] !== p || t[1] !== _ ? (f = s.jsx(o("WAWebAttachmentLoaderButton.react").LoaderButton, {
				onPress: _,
				progress: p
			}), t[0] = p, t[1] = _, t[2] = f) : f = t[2], f;
		}
		var g;
		t[3] !== i || t[4] !== l ? (g = l == null ? { outgoingMsg: i } : d, t[3] = i, t[4] = l, t[5] = g) : g = t[5];
		var h = g, y;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x14q0ukc x10l6tqk xnfr1j" }, t[6] = y) : y = t[6];
		var C;
		t[7] !== h || t[8] !== l ? (C = s.jsx("div", babelHelpers.extends({}, y, { children: s.jsx(o("WAWebSpinner.react").Spinner, babelHelpers.extends({
			stroke: 3,
			size: 32,
			value: l
		}, h)) })), t[7] = h, t[8] = l, t[9] = C) : C = t[9];
		var b;
		t[10] !== c ? (b = c ? s.jsx(r("WDSIconIcClose.react"), {
			height: 20,
			width: 20,
			testid: "audio-cancel-noborder"
		}) : null, t[10] = c, t[11] = b) : b = t[11];
		var v;
		return t[12] !== C || t[13] !== b ? (v = s.jsxs(u, { children: [C, b] }), t[12] = C, t[13] = b, t[14] = v) : v = t[14], v;
	}
	function p() {
		var e = o("react-compiler-runtime").c(2), t = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_loader_button_uix_improvement");
		if (t) {
			var n;
			return e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsx(o("WAWebAttachmentLoaderButton.react").UploadButton, {}), e[0] = n) : n = e[0], n;
		}
		var a;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(u, { children: s.jsx(r("WDSIconIcUpload.react"), {
			height: 34,
			width: 34,
			testid: "audio-upload"
		}) }), e[1] = a) : a = e[1], a;
	}
	l.Download = c, l.Pending = m, l.Upload = p;
}), 98);
