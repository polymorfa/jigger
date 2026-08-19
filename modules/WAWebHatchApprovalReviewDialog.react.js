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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(47), n = e.onClose, a = r("useWAWebPendingHatchApprovals")(), i;
		t[0] !== a[0] || t[1] !== a.length ? (i = function() {
			return a.length === 1 ? a[0].approvalId : null;
		}, t[0] = a[0], t[1] = a.length, t[2] = i) : i = t[2];
		var l = p(i), c = l[0], g = l[1], v = p(!1), S = v[0], L = v[1], E, k;
		t[3] !== n || t[4] !== a.length ? (E = function() {
			a.length === 0 && n();
		}, k = [a.length, n], t[3] = n, t[4] = a.length, t[5] = E, t[6] = k) : (E = t[5], k = t[6]), d(E, k);
		var I;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (I = function(t) {
			g(t), L(!1);
		}, t[7] = I) : I = t[7];
		var T = I, D;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (D = function() {
			g(null), L(!1);
		}, t[8] = D) : D = t[8];
		var x = D, $;
		t[9] !== a || t[10] !== c ? ($ = c != null ? a.find(function(e) {
			return e.approvalId === c;
		}) : null, t[9] = a, t[10] = c, t[11] = $) : $ = t[11];
		var P = $, N = m(!1), M, w;
		if (t[12] !== a.length ? (M = function() {
			N.current || a.length === f.None || (N.current = !0, o("WAWebHatchLogging").logHatchHitlBottomSheetImpression(a.length >= f.Multi));
		}, w = [a.length], t[12] = a.length, t[13] = M, t[14] = w) : (M = t[13], w = t[14]), d(M, w), P != null && S) {
			var A;
			t[15] === Symbol.for("react.memo_cache_sentinel") ? (A = function() {
				return L(!1);
			}, t[15] = A) : A = t[15];
			var F;
			return t[16] !== P ? (F = u.jsx(r("WAWebHatchApprovalDetailsDialog.react"), {
				approval: P,
				onBack: A
			}), t[16] = P, t[17] = F) : F = t[17], F;
		}
		if (P != null) {
			var O, B;
			t[18] !== P.approvalId ? (B = function(t) {
				r("WAWebHatchApprovalManager").getApproval(P.approvalId) != null && (o("WAWebHatchLogging").logHatchHitlDecisionTap(t, { hitlIsMulti: !1 }), o("WAWebDecideHatchApproval").decideHatchApproval(P.approvalId, t)), x();
			}, t[18] = P.approvalId, t[19] = B) : B = t[19];
			var W;
			t[20] !== n || t[21] !== a.length ? (W = function() {
				a.length <= 1 ? n() : x();
			}, t[20] = n, t[21] = a.length, t[22] = W) : W = t[22];
			var q;
			t[23] === Symbol.for("react.memo_cache_sentinel") ? (q = function() {
				return L(!0);
			}, t[23] = q) : q = t[23];
			var U = (O = P.shortExplanation) != null ? O : "", V = P.spaceReaderGrantEligible === !0, H;
			t[24] !== P ? (H = u.jsx(r("WAWebHatchApprovalTitle.react"), { approval: P }), t[24] = P, t[25] = H) : H = t[25];
			var G = P.turnGrantEligible === !0, z;
			return t[26] !== P.iconUrl || t[27] !== W || t[28] !== U || t[29] !== V || t[30] !== H || t[31] !== G || t[32] !== B ? (z = u.jsx(r("WAWebHatchApprovalDialog.react"), {
				iconUrl: P.iconUrl,
				onConfirm: B,
				onDismiss: W,
				onSeeDetails: q,
				richDescription: U,
				spaceReaderGrantEligible: V,
				title: H,
				turnGrantEligible: G
			}), t[26] = P.iconUrl, t[27] = W, t[28] = U, t[29] = V, t[30] = H, t[31] = G, t[32] = B, t[33] = z) : z = t[33], z;
		}
		var j;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (j = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: C,
				testid: "hatch_approval_allow_once_btn",
				variant: "filled"
			},
			secondaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: y,
				testid: "hatch_approval_allow_all_always_btn",
				variant: "outline"
			},
			tertiaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: h,
				testid: "hatch_approval_deny_all_btn",
				type: "destructive",
				variant: "borderless"
			}
		}), t[34] = j) : j = t[34];
		var K;
		t[35] !== a.length ? (K = R(a.length), t[35] = a.length, t[36] = K) : K = t[36];
		var Q;
		if (t[37] !== a) {
			var X;
			t[39] === Symbol.for("react.memo_cache_sentinel") ? (X = function(t, n) {
				return u.jsx(b, {
					approval: t,
					index: n,
					onPress: function() {
						return T(t.approvalId);
					}
				}, t.approvalId);
			}, t[39] = X) : X = t[39], Q = a.map(X), t[37] = a, t[38] = Q;
		} else Q = t[38];
		var Y;
		t[40] !== Q ? (Y = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.list,
			testid: "hatch_approval_list",
			children: Q
		}), t[40] = Q, t[41] = Y) : Y = t[41];
		var J;
		t[42] === Symbol.for("react.memo_cache_sentinel") ? (J = u.jsx(r("WDSSectionDivider.react"), { divider: !0 }), t[42] = J) : J = t[42];
		var Z;
		return t[43] !== n || t[44] !== K || t[45] !== Y ? (Z = u.jsxs(r("WDSDialog.react"), {
			footer: j,
			headerType: "functional",
			layoutType: "functional",
			onDismiss: n,
			open: !0,
			size: "md",
			testid: "hatch_approval_review_dialog",
			title: K,
			children: [Y, J]
		}), t[43] = n, t[44] = K, t[45] = Y, t[46] = Z) : Z = t[46], Z;
	}
	function h() {
		return v(r("WAWebHatchApprovalOption").Deny);
	}
	function y() {
		return v(r("WAWebHatchApprovalOption").AllowAlways);
	}
	function C() {
		return v(r("WAWebHatchApprovalOption").AllowOnce);
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(18), n = e.approval, a = e.index, i = e.onPress, l;
		t[0] !== n ? (l = S(n), t[0] = n, t[1] = l) : l = t[1];
		var s = l, c = "hatch_approval_list_item_" + a, d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x6s0dn4 xjbqb8w xs723ss xyi3aci xwf5gio x1p453bz x1suzm8a x972fbf x10w94by x1qhh985 x14e42zd x1s70e7g x1ypdohk x78zum5 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1yc453h xh8yej3" }, t[2] = d) : d = t[2];
		var m;
		t[3] !== n.iconUrl ? (m = u.jsx(r("WAWebHatchApprovalIcon.react"), { iconUrl: n.iconUrl }), t[3] = n.iconUrl, t[4] = m) : m = t[4];
		var p;
		t[5] !== n ? (p = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: u.jsx(r("WAWebHatchApprovalTitle.react"), {
				approval: n,
				compact: !0
			})
		}), t[5] = n, t[6] = p) : p = t[6];
		var f;
		t[7] !== s ? (f = s != null && u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: s
		}), t[7] = s, t[8] = f) : f = t[8];
		var g;
		t[9] !== p || t[10] !== f ? (g = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			grow: 1,
			xstyle: _.rowText,
			children: [p, f]
		}), t[9] = p, t[10] = f, t[11] = g) : g = t[11];
		var h;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(r("WDSIconIcArrowRight.react"), {
			"aria-hidden": !0,
			directional: !0,
			height: 20,
			width: 20
		}), t[12] = h) : h = t[12];
		var y;
		return t[13] !== i || t[14] !== c || t[15] !== m || t[16] !== g ? (y = u.jsxs("button", babelHelpers.extends({
			type: "button",
			onClick: i,
			"data-testid": c
		}, d, { children: [
			m,
			g,
			h
		] })), t[13] = i, t[14] = c, t[15] = m, t[16] = g, t[17] = y) : y = t[17], y;
	}
	function v(e) {
		o("WAWebHatchLogging").logHatchHitlDecisionTap(e, { hitlIsMulti: !0 });
		for (var t of [].concat(r("WAWebHatchApprovalManager").getPendingApprovals())) o("WAWebDecideHatchApproval").decideHatchApproval(t.approvalId, e);
	}
	function S(e) {
		var t = e.shortExplanation;
		return t != null && t !== "" ? t : null;
	}
	function R(e) {
		return s._(
			/*BTDS*/
			"",
			[s._plural(e, "number")]
		);
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = g;
}), 226);
