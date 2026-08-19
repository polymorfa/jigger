__d("WAWebBusinessGoogleProfilePreview.react", [
	"WAWebBusinessGoogleProfilePreviewAddressRow.react",
	"WAWebBusinessGoogleProfilePreviewBusinessHoursRow.react",
	"WAWebBusinessGoogleProfilePreviewManagedInfoNotice.react",
	"WAWebBusinessGoogleProfilePreviewMapRow.react",
	"WAWebBusinessGoogleProfilePreviewRatingRow.react",
	"WAWebBusinessGoogleProfilePreviewWebsiteRow.react",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 409, c = { content: {
		boxSizing: "x9f619",
		width: "xh8yej3",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(20), n = e.googlePlace, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x1280gxy xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1380le5 x59e9xb x6ikm8r x10wlt62 xh8yej3" }, t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx(r("WAWebBusinessGoogleProfilePreviewManagedInfoNotice.react"), {}), t[1] = i) : i = t[1];
		var l;
		t[2] !== n ? (l = s.jsx(r("WAWebBusinessGoogleProfilePreviewRatingRow.react"), { googlePlace: n }), t[2] = n, t[3] = l) : l = t[3];
		var u;
		t[4] !== n.weekdayHours ? (u = s.jsx(r("WAWebBusinessGoogleProfilePreviewBusinessHoursRow.react"), { weekdayHours: n.weekdayHours }), t[4] = n.weekdayHours, t[5] = u) : u = t[5];
		var d;
		t[6] !== n.formattedAddress ? (d = s.jsx(r("WAWebBusinessGoogleProfilePreviewAddressRow.react"), { address: n.formattedAddress }), t[6] = n.formattedAddress, t[7] = d) : d = t[7];
		var m;
		t[8] !== n.formattedAddress || t[9] !== n.latitude || t[10] !== n.longitude ? (m = s.jsx(r("WAWebBusinessGoogleProfilePreviewMapRow.react"), {
			address: n.formattedAddress,
			latitude: n.latitude,
			longitude: n.longitude
		}), t[8] = n.formattedAddress, t[9] = n.latitude, t[10] = n.longitude, t[11] = m) : m = t[11];
		var p;
		t[12] !== n.websiteUri ? (p = s.jsx(r("WAWebBusinessGoogleProfilePreviewWebsiteRow.react"), { website: n.websiteUri }), t[12] = n.websiteUri, t[13] = p) : p = t[13];
		var _;
		return t[14] !== l || t[15] !== u || t[16] !== d || t[17] !== m || t[18] !== p ? (_ = s.jsx("div", babelHelpers.extends({}, a, {
			"data-testid": "biz-profile-google-profile-preview",
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.content,
				children: [
					i,
					l,
					u,
					d,
					m,
					p
				]
			})
		})), t[14] = l, t[15] = u, t[16] = d, t[17] = m, t[18] = p, t[19] = _) : _ = t[19], _;
	}
	l.default = d;
}), 98);
