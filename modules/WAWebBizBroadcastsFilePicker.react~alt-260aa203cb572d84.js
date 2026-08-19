__d("WAWebBizBroadcastsFilePicker.react", [
	"WALogger",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFilePicker.react",
	"WDSButton.react",
	"WDSIconIcUpload.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useRef;
	function d(t) {
		var n = t.acceptTypes, a = t.buttonText, i = t.entryPoint, l = t.onFileSelected, s = t.testid, d = c(null), m = function() {
			var e;
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.fileUploadClicked(i), (e = d.current) == null || e.open();
		}, p = function(n) {
			var t = n.target.files[0];
			t && (async function() {
				try {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.fileOpenClicked(i), await l(t);
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error in onFileSelected: ", ""])), t);
				}
			})();
		};
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcUpload.react"),
			label: a,
			variant: "filled",
			onPress: m,
			testid: s
		}), u.jsx(r("WAWebFilePicker.react"), {
			ref: d,
			mimes: n,
			onChange: p,
			multiple: !1
		})] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
