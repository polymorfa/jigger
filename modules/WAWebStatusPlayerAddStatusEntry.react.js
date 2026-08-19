__d("WAWebStatusPlayerAddStatusEntry.react", [
	"fbt",
	"WAWebStatusAvatarWithPlusBadge.react",
	"WAWebStatusPostingDropdown.react",
	"WAWebUnstyledButton.react",
	"react",
	"react-compiler-runtime",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef;
	function p(e) {
		var t = o("react-compiler-runtime").c(22), n = e.contactId, a = e.entryPoint, i = e.isNewsletterStatus, l = e.newsletterWid, c = e.onMenuClosed, d = e.onMenuOpened, p = m(null), _ = i === !0, f;
		t[0] !== a || t[1] !== l || t[2] !== _ ? (f = u.jsx(o("WAWebStatusPostingDropdown.react").AddStatusMenu, {
			entryPoint: a,
			isNewsletterStatus: _,
			newsletterWid: l
		}), t[0] = a, t[1] = l, t[2] = _, t[3] = f) : f = t[3];
		var g;
		t[4] !== c || t[5] !== f ? (g = {
			targetRef: p,
			menu: f,
			dismissable: !0,
			onClose: c
		}, t[4] = c, t[5] = f, t[6] = g) : g = t[6];
		var h = r("useWDSMenu")(g), y = h.closeMenu, C = h.isMenuOpen, b = h.menuPortal, v = h.openMenu, S;
		t[7] !== y || t[8] !== C || t[9] !== d || t[10] !== v ? (S = function() {
			if (C) {
				y();
				return;
			}
			d(), v();
		}, t[7] = y, t[8] = C, t[9] = d, t[10] = v, t[11] = S) : S = t[11];
		var R = S, L;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[12] = L) : L = t[12];
		var E;
		t[13] !== n ? (E = u.jsx(r("WAWebStatusAvatarWithPlusBadge.react"), {
			anchorRef: p,
			id: n
		}), t[13] = n, t[14] = E) : E = t[14];
		var k;
		t[15] !== R || t[16] !== C || t[17] !== E ? (k = u.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": L,
			"aria-pressed": C,
			onClick: R,
			testid: "status-player-add-status",
			children: E
		}), t[15] = R, t[16] = C, t[17] = E, t[18] = k) : k = t[18];
		var I;
		return t[19] !== b || t[20] !== k ? (I = u.jsxs(u.Fragment, { children: [k, b] }), t[19] = b, t[20] = k, t[21] = I) : I = t[21], I;
	}
	l.default = p;
}), 226);
