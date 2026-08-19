__d("MessagingCTWACreativeImageContainer.react", [
	"AdsFluxHooks",
	"AdsUEditorHooks",
	"Image.react",
	"adsUEditorAdgroupConfirmedPostsSelector",
	"adsUEditorPacerAccordionListContainerSelector",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("react-compiler-runtime").c(8), t = o("AdsUEditorHooks").useUEditorAdgroupAdsSelector(r("adsUEditorPacerAccordionListContainerSelector")), n = t.aspectRatioAssetDetailsMap, a = o("AdsUEditorHooks").useUEditorAdgroupAdsSelector(o("adsUEditorAdgroupConfirmedPostsSelector").adsUEditorAdgroupConfirmedPostsSelector), i;
		if (e[0] !== n) {
			i = Symbol.for("react.early_return_sentinel");
			e: {
				var l = n.filter(c);
				if (!l.isEmpty()) {
					var u = l.entries().next().value;
					if (u != null) {
						var d = u[1], m = d.image;
						if (m != null) {
							var p;
							e[2] !== m.url ? (p = s.jsx(r("Image.react"), {
								height: 40,
								src: m.url,
								width: 40
							}), e[2] = m.url, e[3] = p) : p = e[3], i = p;
							break e;
						}
					}
				}
			}
			e[0] = n, e[1] = i;
		} else i = e[1];
		if (i !== Symbol.for("react.early_return_sentinel")) return i;
		var _;
		if (e[4] !== (a == null ? void 0 : a[0])) {
			var f;
			_ = a == null || (f = a[0]) == null ? void 0 : f.getValue(), e[4] = a == null ? void 0 : a[0], e[5] = _;
		} else _ = e[5];
		var g = _, h = g == null ? void 0 : g.picture;
		if (h != null) {
			var y;
			return e[6] !== h ? (y = s.jsx(r("Image.react"), {
				height: 40,
				src: h,
				width: 40
			}), e[6] = h, e[7] = y) : y = e[7], y;
		}
		return null;
	}
	function c(e) {
		return e.supportedAssetGroups.length > 1;
	}
	var d = o("AdsFluxHooks").adsFluxContainer(u, null, { containerName: i.id });
	l.default = d;
}), 98);
