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
		var t, n, a, i, l, c, g = e.approval, y = e.onBack, b = m(!1), v = r("useWAWebIntersection")(), S = v[0], R = v[1].isIntersecting;
		d(function() {
			R && !b.current && (b.current = !0, o("WAWebHatchLogging").logHatchHitlDetailImpression());
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
					u.jsx(C, {
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
					u.jsx(C, {
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
					u.jsx(C, {
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
		var t = e.artifactName, n = e.declaredHosts;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: f.section,
			testid: "hatch_approval_details_space_scope",
			children: [
				u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: y(t)
				}),
				n.length > 0 && u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				}), n.map(function(e) {
					return u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: e
					}, e);
				})] })
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
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
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.children, n = e.header, a = e.testid, i = e.value;
		return i === "" ? null : u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: f.section,
			testid: a,
			children: [u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDeemphasized",
				children: n
			}), t]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = g;
}), 226);
