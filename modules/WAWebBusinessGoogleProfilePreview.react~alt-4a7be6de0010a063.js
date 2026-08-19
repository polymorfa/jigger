__d("WAWebBusinessGoogleProfilePreview.react", [
	"WAWebBusinessGoogleProfilePreviewAddressRow.react",
	"WAWebBusinessGoogleProfilePreviewBusinessHoursRow.react",
	"WAWebBusinessGoogleProfilePreviewManagedInfoNotice.react",
	"WAWebBusinessGoogleProfilePreviewMapRow.react",
	"WAWebBusinessGoogleProfilePreviewRatingRow.react",
	"WAWebBusinessGoogleProfilePreviewWebsiteRow.react",
	"WAWebFlex.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 409, c = { content: {
		boxSizing: "x9f619",
		width: "xh8yej3",
		$$css: !0
	} };
	function d(e) {
		var t = e.googlePlace;
		return s.jsx("div", {
			className: "x1280gxy xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1380le5 x59e9xb x6ikm8r x10wlt62 xh8yej3",
			"data-testid": "biz-profile-google-profile-preview",
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.content,
				children: [
					s.jsx(r("WAWebBusinessGoogleProfilePreviewManagedInfoNotice.react"), {}),
					s.jsx(r("WAWebBusinessGoogleProfilePreviewRatingRow.react"), { googlePlace: t }),
					s.jsx(r("WAWebBusinessGoogleProfilePreviewBusinessHoursRow.react"), { weekdayHours: t.weekdayHours }),
					s.jsx(r("WAWebBusinessGoogleProfilePreviewAddressRow.react"), { address: t.formattedAddress }),
					s.jsx(r("WAWebBusinessGoogleProfilePreviewMapRow.react"), {
						address: t.formattedAddress,
						latitude: t.latitude,
						longitude: t.longitude
					}),
					s.jsx(r("WAWebBusinessGoogleProfilePreviewWebsiteRow.react"), { website: t.websiteUri })
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
