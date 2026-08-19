__d("WAWebBrigadingButterBar.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebDrawerManager",
	"WAWebSettingsConst",
	"WAWebSettingsFlowLoadable",
	"WAWebTabOrder",
	"WAWebUserPrefsGeneral",
	"WDSBanner.react",
	"WDSIconIcCheckCircle.react",
	"react",
	"react-compiler-runtime",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(19), n = e.onDismiss, a = e.state, i = r("useWAWebFocusOnMount")(), l = o("WAWebUserPrefsGeneral").getUserPrivacySettings(), c = l == null ? void 0 : l.messages, m = a === "ENFORCED" && c === "contacts", p = a === "DETECTED" && c === "all", _ = a === "NOT_ENFORCED";
		if (!(m || p || _)) return null;
		var f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[0] = f) : f = t[0];
		var g = f, h = d, y, C, b, v, S = "warning";
		e: switch (a) {
			case "DETECTED": {
				y = g;
				var R;
				t[1] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
					/*BTDS*/
					""
				), t[1] = R) : R = t[1], C = R;
				var L;
				t[2] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
					/*BTDS*/
					""
				), t[2] = L) : L = t[2], b = L, v = h;
				break e;
			}
			case "ENFORCED": {
				y = g;
				var E;
				t[3] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
					/*BTDS*/
					""
				), t[3] = E) : E = t[3], C = E;
				var k;
				t[4] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
					/*BTDS*/
					""
				), t[4] = k) : k = t[4], b = k, v = h;
				break e;
			}
			case "NOT_ENFORCED": {
				var I;
				t[5] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
					/*BTDS*/
					""
				), t[5] = I) : I = t[5], y = I;
				var T;
				t[6] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
					/*BTDS*/
					""
				), t[6] = T) : T = t[6], C = T, S = "default";
				break e;
			}
			default:
		}
		if (C == null) return null;
		var D;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x1380le5 xefnzgg x1uvdrpn x14mko6t" }, t[7] = D) : D = t[7];
		var x = S === "default" ? r("WDSIconIcCheckCircle.react") : void 0, $;
		t[8] !== S || t[9] !== v || t[10] !== b || t[11] !== n || t[12] !== C || t[13] !== x || t[14] !== y ? ($ = u.jsx(r("WDSBanner.react"), {
			type: S,
			title: y,
			body: C,
			actionText: b,
			onAction: v,
			onDismiss: n,
			icon: x,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR
		}), t[8] = S, t[9] = v, t[10] = b, t[11] = n, t[12] = C, t[13] = x, t[14] = y, t[15] = $) : $ = t[15];
		var P;
		return t[16] !== i || t[17] !== $ ? (P = u.jsx("div", babelHelpers.extends({
			ref: i,
			role: "alert",
			tabIndex: -1
		}, D, { children: $ })), t[16] = i, t[17] = $, t[18] = P) : P = t[18], P;
	}
	function d() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
			descriptorType: "settings",
			initialStep: o("WAWebSettingsConst").SettingsSteps.PrivacySettings
		} : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
			onEnd: o("WAWebDrawerManager").closeDrawerLeft,
			initialStep: o("WAWebSettingsConst").SettingsSteps.PrivacySettings
		}));
	}
	l.default = c;
}), 226);
