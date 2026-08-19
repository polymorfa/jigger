__d("MAWVisibilityGapBanner.react", [
	"fbt",
	"MAWEncryptedBackupsRestoreDialog.entrypoint",
	"MWChatEncryptedBackupsQPLSource.enum",
	"MWXLink.react",
	"MWXRow.react",
	"MWXRowItem.react",
	"MWXText.react",
	"react",
	"useMWXEntryPointDialog"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { banner: {
		backgroundColor: "xlhe6ec",
		borderStartStartRadius: "x1obq294",
		borderStartEndRadius: "x5a5i1n",
		borderEndEndRadius: "xde0f50",
		borderEndStartRadius: "x15x8krk",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		paddingTop: "xyamay9",
		paddingBottom: "x1l90r2v",
		paddingInlineStart: "x1mfogq2",
		paddingInlineEnd: "xsfy40s",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function d(e) {
		var t = e.missingMessageCount, n = r("MWChatEncryptedBackupsQPLSource.enum").IN_THREAD_GAP_UI, o = r("useMWXEntryPointDialog")(r("MAWEncryptedBackupsRestoreDialog.entrypoint"), {}), a = o[0];
		return t <= 0 ? null : u.jsx(r("MWXRow.react"), {
			align: "center",
			paddingHorizontal: 16,
			paddingVertical: 4,
			spacing: 0,
			children: u.jsx(r("MWXRowItem.react"), {
				xstyle: c.banner,
				children: u.jsx(r("MWXText.react"), {
					align: "center",
					color: "secondary",
					type: "body4",
					children: u.jsxs(u.Fragment, { children: [
						t === 1 ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							"",
							[s._param("count", t, [0])]
						),
						" ",
						u.jsx(r("MWXText.react"), {
							color: "blueLink",
							type: "bodyLink4",
							children: u.jsx(r("MWXLink.react"), {
								onClick: function() {
									a({ source: n });
								},
								target: "_blank",
								testid: void 0,
								children: s._(
									/*BTDS*/
									""
								)
							})
						})
					] })
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
