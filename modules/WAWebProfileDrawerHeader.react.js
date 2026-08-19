__d("WAWebProfileDrawerHeader.react", [
	"fbt",
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessProfileLabels",
	"WAWebCloseRefreshedIcon.react",
	"WAWebDrawerManager",
	"WDSButton.react",
	"WDSIconIcVisibility.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		title: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		buttonPreview: {
			width: "x2pejg6",
			$$css: !0
		},
		buttonSave: {
			width: "x2pejg6",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(23), n = e.hasChanges, a = e.isSaving, i = e.onClose, l = e.onSave, d = e.saveDisabled, m = e.title, p = n === void 0 ? !1 : n, _ = a === void 0 ? !1 : a, f = d === void 0 ? !1 : d, g;
		t[0] !== i ? (g = function() {
			i ? i() : o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
		}, t[0] = i, t[1] = g) : g = t[1];
		var h = g, y;
		t[2] !== l ? (y = function() {
			l && l();
		}, t[2] = l, t[3] = y) : y = t[3];
		var C = y, b;
		t[4] !== m ? (b = m != null ? m : o("WAWebBusinessProfileLabels").getProfileTitleLabel(), t[4] = m, t[5] = b) : b = t[5];
		var v = b, S;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (S = o("WAWebBusinessProfileLabels").getPreviewButtonLabel(), t[6] = S) : S = t[6];
		var R = S, L;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (L = o("WAWebBusinessProfileLabels").getSaveButtonLabel(), t[7] = L) : L = t[7];
		var E = L, k;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (k = o("WAWebBizProfileGatingUtils").businessProfilePreviewEnabled(), t[8] = k) : k = t[8];
		var I = k, T;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "x6s0dn4 xw6alqk x1o4lnc x1t7ytsu xpilrb4 x9f619 x78zum5 x1okw0bk x8a3fw1 x1aj3ljl x1peatla x1iw51ew xde1mab xh8yej3" }, t[9] = T) : T = t[9];
		var D;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), t[10] = D) : D = t[10];
		var x;
		t[11] !== h ? (x = u.jsx(r("WDSButton.react"), {
			size: "medium",
			variant: "borderless",
			Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
			onPress: h,
			"aria-label": D
		}), t[11] = h, t[12] = x) : x = t[12];
		var $;
		t[13] !== v ? ($ = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			xstyle: c.title,
			children: v
		}), t[13] = v, t[14] = $) : $ = t[14];
		var P;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (P = I && u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcVisibility.react"),
			label: R,
			variant: "outline",
			xstyle: c.buttonPreview
		}), t[15] = P) : P = t[15];
		var N = !p || _ || f, M;
		t[16] !== C || t[17] !== N ? (M = u.jsx(r("WDSButton.react"), {
			label: E,
			xstyle: c.buttonSave,
			onPress: C,
			disabled: N
		}), t[16] = C, t[17] = N, t[18] = M) : M = t[18];
		var w;
		return t[19] !== x || t[20] !== $ || t[21] !== M ? (w = u.jsxs("header", babelHelpers.extends({}, T, {
			"data-testid": "profile-drawer-header",
			children: [
				x,
				$,
				P,
				M
			]
		})), t[19] = x, t[20] = $, t[21] = M, t[22] = w) : w = t[22], w;
	}
	l.default = d;
}), 226);
