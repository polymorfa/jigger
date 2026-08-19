__d("WAWebBusinessGoogleProfilePreviewMapRow.react", [
	"WAWebFlex.react",
	"WAWebMap.react",
	"react"
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
		var t = e.address, n = e.latitude, a = e.longitude;
		return n == null || a == null ? null : s.jsx(o("WAWebFlex.react").FlexRow, {
			testid: "biz-profile-google-map-row",
			xstyle: m.mapRow,
			children: s.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 1,
				xstyle: m.mapFrame,
				children: s.jsx(r("WAWebMap.react"), {
					height: u,
					lat: n,
					lng: a,
					name: t != null ? t : "",
					testid: "biz-profile-google-map",
					width: c
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
