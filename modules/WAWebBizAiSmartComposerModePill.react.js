__d("WAWebBizAiSmartComposerModePill.react", [
	"fbt",
	"WDSChip.react",
	"WDSIconIcEdit.react",
	"WDSIconWdsIcAiFilled.react",
	"WDSIconWdsIcPencilAi.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useWAWebSmartComposerMode",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useRef, d = [
		"manual",
		"suggestions",
		"ai_agent"
	];
	function m(e) {
		var t = o("react-compiler-runtime").c(12), n = e.chatId, a = o("useWAWebSmartComposerMode").useWAWebSmartComposerMode(n), i = a.changeMode, l = a.mode, s = c(null), m = r("useWDSMenu")({
			targetRef: s,
			menu: u.jsx(r("WDSMenu.react"), { children: d.map(function(e) {
				return u.jsx(r("WDSMenuItem.react"), {
					testid: "biz_ai_smart_composer_mode_" + e,
					Icon: f(e),
					title: p(e),
					subtitle: _(e),
					isToggleable: !0,
					toggled: e === l,
					onPress: function() {
						return b(e);
					}
				}, e);
			}) }),
			position: "above",
			align: "end"
		}), g = m.closeMenu, h = m.isMenuOpen, y = m.menuPortal, C = m.openMenu;
		function b(e) {
			e !== l && i(e), g();
		}
		var v;
		t[0] !== l ? (v = f(l), t[0] = l, t[1] = v) : v = t[1];
		var S;
		t[2] !== l ? (S = p(l), t[2] = l, t[3] = S) : S = t[3];
		var R;
		t[4] !== h || t[5] !== C || t[6] !== v || t[7] !== S ? (R = u.jsx(r("WDSChip.react"), {
			ref: s,
			Icon: v,
			label: S,
			isNeutral: !0,
			onPress: C,
			"aria-expanded": h,
			isSelected: h,
			testid: "biz_ai_smart_composer_mode_pill_chip"
		}), t[4] = h, t[5] = C, t[6] = v, t[7] = S, t[8] = R) : R = t[8];
		var L;
		return t[9] !== y || t[10] !== R ? (L = u.jsxs("div", {
			"data-testid": "biz_ai_smart_composer_mode_pill",
			children: [R, y]
		}), t[9] = y, t[10] = R, t[11] = L) : L = t[11], L;
	}
	function p(e) {
		return e === "manual" ? s._(
			/*BTDS*/
			""
		) : e === "suggestions" ? s._(
			/*BTDS*/
			""
		) : e === "ai_agent" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function _(e) {
		return e === "manual" ? s._(
			/*BTDS*/
			""
		) : e === "suggestions" ? s._(
			/*BTDS*/
			""
		) : e === "ai_agent" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function f(e) {
		return e === "manual" ? r("WDSIconIcEdit.react") : e === "suggestions" ? r("WDSIconWdsIcPencilAi.react") : e === "ai_agent" ? r("WDSIconWdsIcAiFilled.react") : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	l.default = m;
}), 226);
