__d("WAWebBizAiSmartComposerModePill.react", [
	"fbt",
	"WDSChip.react",
	"WDSIconIcEdit.react",
	"WDSIconWdsIcAiFilled.react",
	"WDSIconWdsIcPencilAi.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebSmartComposerMode",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useRef, d = [
		"manual",
		"suggestions",
		"ai_agent"
	];
	function m(e) {
		var t = e.chatId, n = o("useWAWebSmartComposerMode").useWAWebSmartComposerMode(t), a = n.changeMode, i = n.mode, l = c(null), s = r("useWDSMenu")({
			targetRef: l,
			menu: u.jsx(r("WDSMenu.react"), { children: d.map(function(e) {
				return u.jsx(r("WDSMenuItem.react"), {
					testid: "biz_ai_smart_composer_mode_" + e,
					Icon: f(e),
					title: p(e),
					subtitle: _(e),
					isToggleable: !0,
					toggled: e === i,
					onPress: function() {
						return C(e);
					}
				}, e);
			}) }),
			position: "above",
			align: "end"
		}), m = s.closeMenu, g = s.isMenuOpen, h = s.menuPortal, y = s.openMenu;
		function C(e) {
			e !== i && a(e), m();
		}
		return u.jsxs("div", {
			"data-testid": "biz_ai_smart_composer_mode_pill",
			children: [u.jsx(r("WDSChip.react"), {
				ref: l,
				Icon: f(i),
				label: p(i),
				isNeutral: !0,
				onPress: y,
				"aria-expanded": g,
				isSelected: g,
				testid: "biz_ai_smart_composer_mode_pill_chip"
			}), h]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
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
