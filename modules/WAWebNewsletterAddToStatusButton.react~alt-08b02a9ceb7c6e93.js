__d("WAWebNewsletterAddToStatusButton.react", [
	"fbt",
	"WAWebMenuBar.react",
	"WAWebModalManager",
	"WAWebNewsletterStatusButtonTooltip.react",
	"WAWebNewsletterStatusIntroPopupLoadable",
	"WAWebNux",
	"WAWebStatusPostingDropdown.react",
	"WAWebTabOrder",
	"WAWebWamEnumStatusCreationEntryPoint",
	"WDSIconWdsIcAddToStatus.react",
	"react",
	"useWAWebNux",
	"useWAWebStableCallback",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = e.newsletterWid, n = p(null), a = p(null), i = _(null), l = i[0], c = i[1], f = d(function(e) {
			n.current = e, a.current = e, c(e);
		}, []), g = r("useWAWebNux")(o("WAWebNux").NUX.NEWSLETTER_STATUS_INTRO), h = g[0], y = g[1], C = r("useWDSMenu")({
			targetRef: n,
			menu: u.jsx(o("WAWebStatusPostingDropdown.react").AddStatusMenu, {
				entryPoint: o("WAWebWamEnumStatusCreationEntryPoint").STATUS_CREATION_ENTRY_POINT.CHANNEL_THREAD_SCREEN,
				isNewsletterStatus: !0,
				newsletterWid: t
			}),
			dismissable: !0
		}), b = C.menuPortal, v = C.openMenu, S = r("useWAWebStableCallback")(function() {
			v();
		});
		m(function() {
			return function() {
				o("WAWebModalManager").ModalManager.off("close_modal", S);
			};
		}, [S]);
		var R = d(function() {
			h ? (y(), o("WAWebModalManager").ModalManager.once("close_modal", S), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterStatusIntroPopupLoadable").WAWebNewsletterStatusIntroPopupLoadable, {}))) : v();
		}, [
			h,
			y,
			v,
			S
		]);
		return u.jsxs(u.Fragment, { children: [
			u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
				ref: f,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "add-to-status-newsletter-button",
				icon: u.jsx(r("WDSIconWdsIcAddToStatus.react"), { testid: "ic-add-to-status" }),
				onClick: R,
				title: s._(
					/*BTDS*/
					""
				)
			}),
			l != null && u.jsx(r("WAWebNewsletterStatusButtonTooltip.react"), { targetRef: a }),
			b
		] });
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
