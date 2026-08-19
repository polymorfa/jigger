__d("WAWebHatchApprovalMsgBar.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebHatchApprovalReviewDialog.react",
	"WDSButton.react",
	"WDSDialogBridge",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebPendingHatchApprovals"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(7), t = r("useWAWebPendingHatchApprovals")();
		if (t.length === 0) return null;
		var n = d, a;
		e[0] !== t.length ? (a = m(t.length), e[0] = t.length, e[1] = a) : a = e[1];
		var i;
		e[2] !== a ? (i = u.jsx(o("WAWebFlex.react").FlexRow, {
			grow: 1,
			paddingEnd: 4,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				testid: "hatch_approval_compose_bar",
				children: a
			})
		}), e[2] = a, e[3] = i) : i = e[3];
		var l;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebFlex.react").FlexRow, {
			shrink: 0,
			children: u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: n,
				testid: "hatch_approval_review_btn",
				variant: "filled"
			})
		}), e[4] = l) : l = e[4];
		var c;
		return e[5] !== i ? (c = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			grow: 1,
			children: [i, l]
		}), e[5] = i, e[6] = c) : c = e[6], c;
	}
	function d() {
		o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebHatchApprovalReviewDialog.react"), { onClose: o("WDSDialogBridge").closeWDSDialog }));
	}
	function m(e) {
		return s._(
			/*BTDS*/
			"",
			[s._plural(e, "number")]
		);
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = c;
}), 226);
