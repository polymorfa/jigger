__d("WAWebDocStateControls.react", [
	"WAWebAttachmentLoaderButton.react",
	"WAWebSpinner.react",
	"WDSIconIcClose.react",
	"WDSIconIcDownload.react",
	"WDSIconIcUpload.react",
	"react",
	"useWAWebABPropConfigValue"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.children, n = e.onClick, r = n ? { onClick: n } : {};
		return s.jsx("div", babelHelpers.extends({ className: "x6s0dn4 x1sj5et5 x78zum5 x1okw0bk x90ne7k xl56j7k x1n2onr6 x1691je0" }, r, { children: t }));
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c(e) {
		var t = e.onClick, n = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_loader_button_uix_improvement");
		return n ? s.jsx(o("WAWebAttachmentLoaderButton.react").DownloadButton, { onPress: t }) : s.jsx(u, {
			onClick: t,
			children: s.jsx(r("WDSIconIcDownload.react"), {
				height: 34,
				width: 34,
				testid: "audio-download"
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = { color: "progress" };
	function m(e) {
		var t = e.canCancel, n = t === void 0 ? !1 : t, a = e.onClick, i = e.outgoingMsg, l = e.value, c = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_loader_button_uix_improvement");
		if (c) {
			var m = l != null ? l / 100 : 0;
			return s.jsx(o("WAWebAttachmentLoaderButton.react").LoaderButton, {
				onPress: n ? a : void 0,
				progress: m
			});
		}
		var p = l == null ? { outgoingMsg: i } : d;
		return s.jsxs(u, { children: [s.jsx("div", {
			className: "x14q0ukc x10l6tqk xnfr1j",
			children: s.jsx(o("WAWebSpinner.react").Spinner, babelHelpers.extends({
				stroke: 3,
				size: 32,
				value: l
			}, p))
		}), n ? s.jsx(r("WDSIconIcClose.react"), {
			height: 20,
			width: 20,
			testid: "audio-cancel-noborder"
		}) : null] });
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		var e = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_loader_button_uix_improvement");
		return e ? s.jsx(o("WAWebAttachmentLoaderButton.react").UploadButton, {}) : s.jsx(u, { children: s.jsx(r("WDSIconIcUpload.react"), {
			height: 34,
			width: 34,
			testid: "audio-upload"
		}) });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.Download = c, l.Pending = m, l.Upload = p;
}), 98);
