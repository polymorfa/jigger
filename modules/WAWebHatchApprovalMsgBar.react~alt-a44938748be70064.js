__d("WAWebHatchApprovalMsgBar.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebHatchApprovalReviewDialog.react",
	"WDSButton.react",
	"WDSDialogBridge",
	"WDSText.react",
	"react",
	"useWAWebPendingHatchApprovals"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		var e = r("useWAWebPendingHatchApprovals")();
		if (e.length === 0) return null;
		var t = function() {
			o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebHatchApprovalReviewDialog.react"), { onClose: o("WDSDialogBridge").closeWDSDialog }));
		};
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			grow: 1,
			children: [u.jsx(o("WAWebFlex.react").FlexRow, {
				grow: 1,
				paddingEnd: 4,
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					testid: "hatch_approval_compose_bar",
					children: d(e.length)
				})
			}), u.jsx(o("WAWebFlex.react").FlexRow, {
				shrink: 0,
				children: u.jsx(r("WDSButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: t,
					testid: "hatch_approval_review_btn",
					variant: "filled"
				})
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		return s._(
			/*BTDS*/
			"",
			[s._plural(e, "number")]
		);
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 226);
