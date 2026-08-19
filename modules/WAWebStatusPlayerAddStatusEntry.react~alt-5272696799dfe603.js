__d("WAWebStatusPlayerAddStatusEntry.react", [
	"fbt",
	"WAWebStatusAvatarWithPlusBadge.react",
	"WAWebStatusPostingDropdown.react",
	"WAWebUnstyledButton.react",
	"react",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef;
	function p(e) {
		var t = e.contactId, n = e.entryPoint, a = e.isNewsletterStatus, i = e.newsletterWid, l = e.onMenuClosed, c = e.onMenuOpened, p = m(null), _ = r("useWDSMenu")({
			targetRef: p,
			menu: u.jsx(o("WAWebStatusPostingDropdown.react").AddStatusMenu, {
				entryPoint: n,
				isNewsletterStatus: a === !0,
				newsletterWid: i
			}),
			dismissable: !0,
			onClose: l
		}), f = _.closeMenu, g = _.isMenuOpen, h = _.menuPortal, y = _.openMenu, C = d(function() {
			if (g) {
				f();
				return;
			}
			c(), y();
		}, [
			f,
			g,
			c,
			y
		]);
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"aria-pressed": g,
			onClick: C,
			testid: "status-player-add-status",
			children: u.jsx(r("WAWebStatusAvatarWithPlusBadge.react"), {
				anchorRef: p,
				id: t
			})
		}), h] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
