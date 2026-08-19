__d("WAWebBusinessGoogleProfilePreviewMapRow.react", [
	"WAWebFlex.react",
	"WAWebMap.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 120, c = 337, d = 56, m = {
		mapFrame: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			height: "x1wkxgih",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		mapRow: {
			boxSizing: "x9f619",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x1onydzz",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(4), n = e.address, a = e.latitude, i = e.longitude;
		if (a == null || i == null) return null;
		var l = n != null ? n : "", d;
		return t[0] !== a || t[1] !== i || t[2] !== l ? (d = s.jsx(o("WAWebFlex.react").FlexRow, {
			testid: "biz-profile-google-map-row",
			xstyle: m.mapRow,
			children: s.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 1,
				xstyle: m.mapFrame,
				children: s.jsx(r("WAWebMap.react"), {
					height: u,
					lat: a,
					lng: i,
					name: l,
					testid: "biz-profile-google-map",
					width: c
				})
			})
		}), t[0] = a, t[1] = i, t[2] = l, t[3] = d) : d = t[3], d;
	}
	l.default = p;
}), 98);
