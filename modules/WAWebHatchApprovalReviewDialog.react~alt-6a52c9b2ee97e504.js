__d("WAWebHatchApprovalReviewDialog.react", [
	"fbt",
	"WAWebDecideHatchApproval",
	"WAWebFlex.react",
	"WAWebHatchApprovalDetailsDialog.react",
	"WAWebHatchApprovalDialog.react",
	"WAWebHatchApprovalIcon.react",
	"WAWebHatchApprovalManager",
	"WAWebHatchApprovalOption",
	"WAWebHatchApprovalTitle.react",
	"WAWebHatchLogging",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSIconIcArrowRight.react",
	"WDSSectionDivider.react",
	"WDSText.react",
	"react",
	"useWAWebPendingHatchApprovals"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		list: {
			rowGap: "x129bwdz",
			maxHeight: "x1sslpiy",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		rowText: {
			rowGap: "x129bwdz",
			$$css: !0
		}
	}, f = {
		None: 0,
		Single: 1,
		Multi: 2
	};
	function g(e) {
		var t = e.onClose, n = r("useWAWebPendingHatchApprovals")(), a = p(function() {
			return n.length === 1 ? n[0].approvalId : null;
		}), i = a[0], l = a[1], c = p(!1), g = c[0], C = c[1];
		d(function() {
			n.length === 0 && t();
		}, [n.length, t]);
		var v = function(t) {
			l(t), C(!1);
		}, S = function() {
			l(null), C(!1);
		}, R = i != null ? n.find(function(e) {
			return e.approvalId === i;
		}) : null, L = m(!1);
		if (d(function() {
			L.current || n.length === f.None || (L.current = !0, o("WAWebHatchLogging").logHatchHitlBottomSheetImpression(n.length >= f.Multi));
		}, [n.length]), R != null && g) return u.jsx(r("WAWebHatchApprovalDetailsDialog.react"), {
			approval: R,
			onBack: function() {
				return C(!1);
			}
		});
		if (R != null) {
			var E;
			return u.jsx(r("WAWebHatchApprovalDialog.react"), {
				iconUrl: R.iconUrl,
				onConfirm: function(t) {
					r("WAWebHatchApprovalManager").getApproval(R.approvalId) != null && (o("WAWebHatchLogging").logHatchHitlDecisionTap(t, { hitlIsMulti: !1 }), o("WAWebDecideHatchApproval").decideHatchApproval(R.approvalId, t)), S();
				},
				onDismiss: function() {
					n.length <= 1 ? t() : S();
				},
				onSeeDetails: function() {
					return C(!0);
				},
				richDescription: (E = R.shortExplanation) != null ? E : "",
				spaceReaderGrantEligible: R.spaceReaderGrantEligible === !0,
				title: u.jsx(r("WAWebHatchApprovalTitle.react"), { approval: R }),
				turnGrantEligible: R.turnGrantEligible === !0
			});
		}
		return u.jsxs(r("WDSDialog.react"), {
			footer: u.jsx(r("WDSButtonGroup.react"), {
				orientation: "stacked",
				width: "fill",
				primaryButtonProps: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: function() {
						return y(r("WAWebHatchApprovalOption").AllowOnce);
					},
					testid: "hatch_approval_allow_once_btn",
					variant: "filled"
				},
				secondaryButtonProps: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: function() {
						return y(r("WAWebHatchApprovalOption").AllowAlways);
					},
					testid: "hatch_approval_allow_all_always_btn",
					variant: "outline"
				},
				tertiaryButtonProps: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: function() {
						return y(r("WAWebHatchApprovalOption").Deny);
					},
					testid: "hatch_approval_deny_all_btn",
					type: "destructive",
					variant: "borderless"
				}
			}),
			headerType: "functional",
			layoutType: "functional",
			onDismiss: t,
			open: !0,
			size: "md",
			testid: "hatch_approval_review_dialog",
			title: b(n.length),
			children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: _.list,
				testid: "hatch_approval_list",
				children: n.map(function(e, t) {
					return u.jsx(h, {
						approval: e,
						index: t,
						onPress: function() {
							return v(e.approvalId);
						}
					}, e.approvalId);
				})
			}), u.jsx(r("WDSSectionDivider.react"), { divider: !0 })]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.approval, n = e.index, a = e.onPress, i = C(t);
		return u.jsxs("button", {
			type: "button",
			onClick: a,
			"data-testid": "hatch_approval_list_item_" + n,
			className: "x6s0dn4 xjbqb8w xs723ss xyi3aci xwf5gio x1p453bz x1suzm8a x972fbf x10w94by x1qhh985 x14e42zd x1s70e7g x1ypdohk x78zum5 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1yc453h xh8yej3",
			children: [
				u.jsx(r("WAWebHatchApprovalIcon.react"), { iconUrl: t.iconUrl }),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					grow: 1,
					xstyle: _.rowText,
					children: [u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: u.jsx(r("WAWebHatchApprovalTitle.react"), {
							approval: t,
							compact: !0
						})
					}), i != null && u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						children: i
					})]
				}),
				u.jsx(r("WDSIconIcArrowRight.react"), {
					"aria-hidden": !0,
					directional: !0,
					height: 20,
					width: 20
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		o("WAWebHatchLogging").logHatchHitlDecisionTap(e, { hitlIsMulti: !0 });
		for (var t of [].concat(r("WAWebHatchApprovalManager").getPendingApprovals())) o("WAWebDecideHatchApproval").decideHatchApproval(t.approvalId, e);
	}
	function C(e) {
		var t = e.shortExplanation;
		return t != null && t !== "" ? t : null;
	}
	function b(e) {
		return s._(
			/*BTDS*/
			"",
			[s._plural(e, "number")]
		);
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = g;
}), 226);
