__d("WAWebHatchApprovalDetailsDialog.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebHatchApprovalArtifact",
	"WAWebHatchBotName.react",
	"WAWebHatchLogging",
	"WDSButton.react",
	"WDSDialog.react",
	"WDSIconIcArrowBack.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebIntersection"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = "connector", _ = [], f = {
		list: {
			rowGap: "x8a3fw1",
			paddingBottom: "xvg22vi",
			$$css: !0
		},
		section: {
			rowGap: "x129bwdz",
			$$css: !0
		}
	};
	function g(e) {
		var t, n, a, i, l, c, g = e.approval, y = e.onBack, C = m(!1), v = r("useWAWebIntersection")(), S = v[0], R = v[1].isIntersecting;
		d(function() {
			R && !C.current && (C.current = !0, o("WAWebHatchLogging").logHatchHitlDetailImpression());
		}, [R]);
		var L = (t = g.scheme) != null ? t : "", E = (n = g.path) != null ? n : "", k = (a = g.payloadPreview) != null ? a : "", I = (i = g.declaredHosts) != null ? i : _, T = g.spaceReaderGrantEligible === !0, D = r("WAWebHatchApprovalArtifact")(g), x = (l = (c = g.richExplanation) != null ? c : g.shortExplanation) != null ? l : "", $ = L !== p ? E : "";
		return u.jsx(r("WDSDialog.react"), {
			closeButton: !1,
			headerType: "functional",
			layoutType: "functional",
			onDismiss: y,
			open: !0,
			size: "md",
			testid: "hatch_approval_details_dialog",
			title: s._(
				/*BTDS*/
				""
			),
			topBarStartContent: u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcArrowBack.react"),
				variant: "borderless",
				onPress: y,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				testid: "hatch_approval_details_back_btn"
			}),
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				ref: S,
				xstyle: f.list,
				testid: "hatch_approval_details_list",
				children: [
					u.jsx(b, {
						header: s._(
							/*BTDS*/
							""
						),
						testid: "hatch_approval_details_summary",
						value: x,
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							children: x
						})
					}),
					u.jsx(b, {
						header: s._(
							/*BTDS*/
							""
						),
						testid: "hatch_approval_details_url",
						value: $,
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							children: $
						})
					}),
					u.jsx(b, {
						header: s._(
							/*BTDS*/
							""
						),
						testid: "hatch_approval_details_payload",
						value: k,
						children: u.jsx("pre", {
							className: "x1280gxy xyi3aci xwf5gio x1p453bz x1suzm8a x14ug900 x1ey7xld xdj266r x14z9mp xat24cr x1lziwak x1xiyphd x1odjw0f x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1hx0egp x126k92a x13faqbe",
							children: k
						})
					}),
					T && u.jsx(h, {
						artifactName: D,
						declaredHosts: I
					})
				]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = o("react-compiler-runtime").c(10), n = e.artifactName, a = e.declaredHosts, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[0] = i) : i = t[0];
		var l;
		t[1] !== n ? (l = C(n), t[1] = n, t[2] = l) : l = t[2];
		var c;
		t[3] !== l ? (c = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: l
		}), t[3] = l, t[4] = c) : c = t[4];
		var d;
		t[5] !== a ? (d = a.length > 0 && u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), a.map(y)] }), t[5] = a, t[6] = d) : d = t[6];
		var m;
		return t[7] !== c || t[8] !== d ? (m = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: f.section,
			testid: "hatch_approval_details_space_scope",
			children: [
				i,
				c,
				d
			]
		}), t[7] = c, t[8] = d, t[9] = m) : m = t[9], m;
	}
	function y(e) {
		return u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: e
		}, e);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = u.jsx(r("WAWebHatchBotName.react"), {});
		return e == null ? s._(
			/*BTDS*/
			"",
			[s._param("name", t)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("name", t), s._param("artifact", e)]
		);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = o("react-compiler-runtime").c(6), n = e.children, a = e.header, i = e.testid, l = e.value;
		if (l === "") return null;
		var s;
		t[0] !== a ? (s = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			children: a
		}), t[0] = a, t[1] = s) : s = t[1];
		var c;
		return t[2] !== n || t[3] !== s || t[4] !== i ? (c = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: f.section,
			testid: i,
			children: [s, n]
		}), t[2] = n, t[3] = s, t[4] = i, t[5] = c) : c = t[5], c;
	}
	l.default = g;
}), 226);
