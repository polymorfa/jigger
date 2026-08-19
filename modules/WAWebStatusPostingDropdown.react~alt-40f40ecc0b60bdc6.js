__d("WAWebStatusPostingDropdown.react", [
	"fbt",
	"WAWebCreateTextStatusFlow.react",
	"WAWebLogStatusPosterActions",
	"WAWebModalManager",
	"WAWebStatusAttachMediaFlow.react",
	"WAWebStatusPosterActionsLogger",
	"WDSIconIcEdit.react",
	"WDSIconIcFilter.react",
	"WDSIconIcLock.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.entryPoint, n = e.isNewsletterStatus, a = n === void 0 ? !1 : n, i = e.newsletterWid, l = e.sessionId, c = function() {
			if (l != null) return l;
			var e = o("WAWebLogStatusPosterActions").createStatusPostingSessionId();
			return o("WAWebStatusPosterActionsLogger").logStatusEntrypointTap(t, e, i), e;
		}, d = function() {
			var e = c();
			o("WAWebModalManager").ModalManager.openMedia(u.jsx(r("WAWebStatusAttachMediaFlow.react"), {
				entryPoint: t,
				newsletterWid: i,
				isNewsletterStatus: a,
				statusPostingSessionId: e
			}), { transition: "status-modal" });
		}, m = function() {
			var e = c();
			o("WAWebModalManager").ModalManager.openMedia(u.jsx(r("WAWebCreateTextStatusFlow.react"), {
				entryPoint: t,
				isNewsletterStatus: a,
				newsletterWid: i,
				statusPostingSessionId: e
			}), { transition: "status-modal" });
		};
		return u.jsxs(r("WDSMenu.react"), { children: [u.jsx(r("WDSMenuItem.react"), {
			testid: "option-media-status",
			Icon: r("WDSIconIcFilter.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: d
		}), u.jsx(r("WDSMenuItem.react"), {
			testid: "option-text-status",
			Icon: r("WDSIconIcEdit.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: m
		})] });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.onOpenStatusPrivacySettingDrawer, n = function() {
			t == null || t();
		};
		return u.jsx(r("WDSMenu.react"), { children: u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcLock.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: n
		}) });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AddStatusMenu = c, l.StatusPrivacyMenu = d;
}), 226);
