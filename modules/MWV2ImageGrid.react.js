__d("MWV2ImageGrid.react", [
	"fbt",
	"CometPhotoGrid.react",
	"MWLSThreadDisplayContext",
	"MWXMessageBubbleCornerStyles.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
		large: {
			width: "x7cdydq",
			$$css: !0
		},
		root: {
			maxWidth: "x193iq5w",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		small: {
			width: "x1so1ns2",
			$$css: !0
		}
	}, m = { pressable: {
		borderStartStartRadius: "xjwep3j",
		borderStartEndRadius: "x1t39747",
		borderEndEndRadius: "x1wcsgtt",
		borderEndStartRadius: "x1pczhz8",
		display: "x1lliihq",
		height: "x5yr21d",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		width: "xh8yej3",
		$$css: !0
	} };
	function p(e) {
		return e.accessibilitySummaryText != null ? s._(
			/*BTDS*/
			"",
			[s._param("description", e.accessibilitySummaryText)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("photo number", Number(e.attachmentIndex) + 1)]
		);
	}
	function _(t) {
		var n = o("react-compiler-runtime").c(11), a = t.children, i = t.connectBottom, l = t.connectTop, s = t.outgoing, u = t.testid, m = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), p;
		if (n[0] !== i || n[1] !== l || n[2] !== m || n[3] !== s) {
			var _ = o("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
				align: s ? "right" : "left",
				connectBottom: i,
				connectTop: l
			});
			p = (e || (e = r("stylex"))).props(d.root, m === "Inbox" ? d.large : d.small, _), n[0] = i, n[1] = l, n[2] = m, n[3] = s, n[4] = p;
		} else p = n[4];
		var f;
		n[5] !== a ? (f = c.jsx(r("CometPhotoGrid.react"), { children: a }), n[5] = a, n[6] = f) : f = n[6];
		var g;
		return n[7] !== p || n[8] !== f || n[9] !== u ? (g = c.jsx("div", babelHelpers.extends({}, p, {
			"data-testid": void 0,
			children: f
		})), n[7] = p, n[8] = f, n[9] = u, n[10] = g) : g = n[10], g;
	}
	l.MWV2ImageGridItemStyles = m, l.getMWV2ImageGridItemLabel = p, l.MWV2ImageGridContainer = _;
}), 226);
