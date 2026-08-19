__d("MAWLearnMoreCutoverDialog.react", [
	"fbt",
	"ix",
	"CometColumn.react",
	"CometColumnItem.react",
	"CometImage.react",
	"ConstUriUtils",
	"CurrentEnvironment",
	"FDSDialog.react",
	"FDSDialogHeader.react",
	"MWXButton.react",
	"MWXIconForListCell.react",
	"MWXIconInfoCircle",
	"MWXIconMenuItemSparkles",
	"MWXLink.react",
	"MWXListCell.react",
	"MWXText.react",
	"MWXTextPairing.react",
	"XInstagramHelpDotComContentControllerRouteBuilder",
	"XMessengerDotComHelpContentControllerRouteBuilder",
	"fbs",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s, u) {
	"use strict";
	var e, c = e || (e = o("react")), d = {
		image: {
			height: "x16d3s56",
			width: "x2i0jwv",
			$$css: !0
		},
		imageContainer: {
			marginTop: "x1cm6mvd",
			$$css: !0
		},
		text: {
			marginInlineEnd: "x11t971q",
			marginInlineStart: "xvc5jky",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(16), n = e.onClose, a;
		t[0] !== n ? (a = c.jsx(r("FDSDialogHeader.react"), {
			onClose: n,
			withoutDivider: !0
		}), t[0] = n, t[1] = a) : a = t[1];
		var i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(r("CometColumnItem.react"), {
			xstyle: d.imageContainer,
			children: c.jsx(r("CometImage.react"), {
				src: u("913296"),
				xstyle: d.image
			})
		}), t[2] = i) : i = t[2];
		var l;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = c.jsx(r("CometColumnItem.react"), {
			xstyle: d.text,
			children: c.jsx(r("MWXText.react"), {
				align: "center",
				isSemanticHeading: !1,
				type: "headlineEmphasized2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[3] = l) : l = t[3];
		var m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = c.jsx(r("MWXIconForListCell.react"), {
			hasBackground: !1,
			icon: r("MWXIconMenuItemSparkles"),
			size: "large"
		}), t[4] = m) : m = t[4];
		var _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[5] = _) : _ = t[5];
		var f;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = c.jsx(r("MWXListCell.react"), {
			addOnStart: m,
			addOnStartVerticalAlign: "top",
			content: c.jsx(r("MWXTextPairing.react"), {
				body: _,
				bodyColor: "secondary",
				headline: s._(
					/*BTDS*/
					""
				),
				level: 4
			})
		}, "1"), t[6] = f) : f = t[6];
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = c.jsx(r("MWXIconForListCell.react"), {
			hasBackground: !1,
			icon: r("MWXIconInfoCircle"),
			size: "large"
		}), t[7] = g) : g = t[7];
		var h;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsx(r("MWXText.react"), {
			align: "center",
			color: "secondary",
			type: "body4",
			children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", c.jsx(r("MWXText.react"), {
					color: "blueLink",
					type: "bodyLink4",
					children: s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m1", c.jsx(r("MWXLink.react"), {
							"aria-label": s._(
								/*BTDS*/
								""
							),
							href: p(),
							target: "_blank",
							children: s._(
								/*BTDS*/
								""
							)
						}))]
					)
				}))]
			)
		}), t[8] = h) : h = t[8];
		var y;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (y = c.jsxs(r("CometColumnItem.react"), {
			align: "start",
			paddingTop: 20,
			xstyle: d.text,
			children: [f, c.jsx(r("MWXListCell.react"), {
				addOnStart: g,
				addOnStartVerticalAlign: "top",
				content: c.jsx(r("MWXTextPairing.react"), {
					body: h,
					bodyColor: "secondary",
					headline: s._(
						/*BTDS*/
						""
					),
					level: 4
				})
			}, "2")]
		}), t[9] = y) : y = t[9];
		var C;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (C = r("fbs")._(
			/*BTDS*/
			""
		), t[10] = C) : C = t[10];
		var b;
		t[11] !== n ? (b = c.jsxs(r("CometColumn.react"), {
			align: "center",
			paddingHorizontal: 20,
			paddingVertical: 20,
			spacing: 8,
			children: [
				i,
				l,
				y,
				c.jsx(r("CometColumnItem.react"), {
					paddingTop: 20,
					children: c.jsx(r("MWXButton.react"), {
						label: C,
						onPress: n,
						type: "primary"
					})
				})
			]
		}), t[11] = n, t[12] = b) : b = t[12];
		var v;
		return t[13] !== a || t[14] !== b ? (v = c.jsx(r("FDSDialog.react"), {
			footer: null,
			header: a,
			children: b
		}), t[13] = a, t[14] = b, t[15] = v) : v = t[15], v;
	}
	function p() {
		var e;
		return o("CurrentEnvironment").instagramdotcom ? (e = r("XInstagramHelpDotComContentControllerRouteBuilder").buildUri({ cms_id: "491565145294150" }).qualifyDomain(o("ConstUriUtils").getUri("https://help.instagram.com/"))) == null ? void 0 : e.toString() : r("XMessengerDotComHelpContentControllerRouteBuilder").buildUri({ cms_id: "786613221989782" }).toString();
	}
	l.default = m;
}), 226);
