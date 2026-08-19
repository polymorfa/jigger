__d("WAWebBugnub.react", [
	"WAWebCmd",
	"WAWebVoipPopoutModalManager",
	"WAWebVoipUiPopoutWindowContext",
	"WDSButton.react",
	"WDSIconIcBugReport.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"useWAWebVoipModalManager"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = { bugnubButton: {
		borderStartEndRadius: "x1ga7v0g",
		borderEndEndRadius: "x16uus16",
		borderTopWidth: "x178xt8z",
		borderBottomWidth: "xso031l",
		borderInlineStartWidth: "xpilrb4",
		borderTopStyle: "x13fuv20",
		borderInlineEndStyle: "x18b5jzi",
		borderBottomStyle: "x1q0q8m5",
		borderInlineStartStyle: "x1t7ytsu",
		borderTopColor: "xx42vgk",
		borderInlineEndColor: "xbogo7e",
		borderBottomColor: "x120ee7l",
		borderInlineStartColor: "x1vb5itz",
		borderInlineEndWidth: "x10w94by",
		backgroundColor: "x1od0jb8",
		color: "x14ug900",
		boxShadow: "xpl7guj",
		$$css: !0
	} };
	function p() {
		o("WAWebCmd").Cmd.triggerBugReportV2();
	}
	function _() {
		var e = o("react-compiler-runtime").c(9), t = r("useWAWebVoipModalManager")(), n = t.closeModal, a = t.openModal, i = d(r("WAWebVoipUiPopoutWindowContext")), l;
		e[0] !== n || e[1] !== a || e[2] !== i.isContextInPopoutWindow || e[3] !== i.isDocPip || e[4] !== i.popoverPortalEl ? (l = function() {
			o("WAWebCmd").Cmd.trigger("trigger_bugreport_v2", { options: {
				customOpenModal: a,
				customCloseModal: n,
				popoverPortalEl: i.popoverPortalEl,
				customOpenSupportModal: i.isContextInPopoutWindow || i.isDocPip ? h : void 0,
				customOpenMediaModal: i.isContextInPopoutWindow || i.isDocPip ? g : void 0,
				customCloseMediaModal: i.isContextInPopoutWindow || i.isDocPip ? f : void 0
			} });
		}, e[0] = n, e[1] = a, e[2] = i.isContextInPopoutWindow, e[3] = i.isDocPip, e[4] = i.popoverPortalEl, e[5] = l) : l = e[5];
		var u = l, c;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "xixxii4 xwa60dl x1cb1t30 xtijo5x x16uhe5s" }, e[6] = c) : c = e[6];
		var p;
		return e[7] !== u ? (p = s.jsx("div", babelHelpers.extends({}, c, { children: s.jsx(r("WDSTooltip.react"), {
			label: "Report a bug (internal)",
			position: "start",
			children: s.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcBugReport.react"),
				variant: "filled",
				type: "default",
				size: "small",
				onPress: u,
				testid: "bugnub-button",
				"aria-label": "Report a bug (internal)",
				xstyle: m.bugnubButton
			})
		}) })), e[7] = u, e[8] = p) : p = e[8], p;
	}
	function f() {
		o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.closeMedia();
	}
	function g(e, t) {
		o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.openMedia(e, {
			transition: t == null ? void 0 : t.transition,
			blockClose: t == null ? void 0 : t.blockClose,
			focusType: t == null ? void 0 : t.focusType,
			uim: t == null ? void 0 : t.uim,
			skipDarkTheme: !0
		});
	}
	function h(e) {
		o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.openSupportModal(e, { skipDarkTheme: !0 });
	}
	var y = {
		Bugnub: _,
		openBugnubPopup: p
	};
	l.default = y;
}), 98);
