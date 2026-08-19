__d("WAWebBugnub.react", [
	"WAWebCmd",
	"WAWebVoipPopoutModalManager",
	"WAWebVoipUiPopoutWindowContext",
	"WDSButton.react",
	"WDSIconIcBugReport.react",
	"WDSTooltip.react",
	"react",
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
		var e = r("useWAWebVoipModalManager")(), t = e.closeModal, n = e.openModal, a = d(r("WAWebVoipUiPopoutWindowContext")), i = c(function() {
			o("WAWebCmd").Cmd.trigger("trigger_bugreport_v2", { options: {
				customOpenModal: n,
				customCloseModal: t,
				popoverPortalEl: a.popoverPortalEl,
				customOpenSupportModal: a.isContextInPopoutWindow || a.isDocPip ? function(e) {
					o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.openSupportModal(e, { skipDarkTheme: !0 });
				} : void 0,
				customOpenMediaModal: a.isContextInPopoutWindow || a.isDocPip ? function(e, t) {
					o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.openMedia(e, {
						transition: t == null ? void 0 : t.transition,
						blockClose: t == null ? void 0 : t.blockClose,
						focusType: t == null ? void 0 : t.focusType,
						uim: t == null ? void 0 : t.uim,
						skipDarkTheme: !0
					});
				} : void 0,
				customCloseMediaModal: a.isContextInPopoutWindow || a.isDocPip ? function() {
					o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.closeMedia();
				} : void 0
			} });
		}, [
			n,
			t,
			a.popoverPortalEl,
			a.isContextInPopoutWindow,
			a.isDocPip
		]);
		return s.jsx("div", {
			className: "xixxii4 xwa60dl x1cb1t30 xtijo5x x16uhe5s",
			children: s.jsx(r("WDSTooltip.react"), {
				label: "Report a bug (internal)",
				position: "start",
				children: s.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcBugReport.react"),
					variant: "filled",
					type: "default",
					size: "small",
					onPress: i,
					testid: "bugnub-button",
					"aria-label": "Report a bug (internal)",
					xstyle: m.bugnubButton
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = {
		Bugnub: _,
		openBugnubPopup: p
	};
	l.default = f;
}), 98);
