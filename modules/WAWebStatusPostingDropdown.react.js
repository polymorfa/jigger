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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(23), n = e.entryPoint, a = e.isNewsletterStatus, i = e.newsletterWid, l = e.sessionId, c = a === void 0 ? !1 : a, d;
		t[0] !== n || t[1] !== i || t[2] !== l ? (d = function() {
			if (l != null) return l;
			var e = o("WAWebLogStatusPosterActions").createStatusPostingSessionId();
			return o("WAWebStatusPosterActionsLogger").logStatusEntrypointTap(n, e, i), e;
		}, t[0] = n, t[1] = i, t[2] = l, t[3] = d) : d = t[3];
		var m = d, p;
		t[4] !== n || t[5] !== c || t[6] !== i || t[7] !== m ? (p = function() {
			var e = m();
			o("WAWebModalManager").ModalManager.openMedia(u.jsx(r("WAWebStatusAttachMediaFlow.react"), {
				entryPoint: n,
				newsletterWid: i,
				isNewsletterStatus: c,
				statusPostingSessionId: e
			}), { transition: "status-modal" });
		}, t[4] = n, t[5] = c, t[6] = i, t[7] = m, t[8] = p) : p = t[8];
		var _ = p, f;
		t[9] !== n || t[10] !== c || t[11] !== i || t[12] !== m ? (f = function() {
			var e = m();
			o("WAWebModalManager").ModalManager.openMedia(u.jsx(r("WAWebCreateTextStatusFlow.react"), {
				entryPoint: n,
				isNewsletterStatus: c,
				newsletterWid: i,
				statusPostingSessionId: e
			}), { transition: "status-modal" });
		}, t[9] = n, t[10] = c, t[11] = i, t[12] = m, t[13] = f) : f = t[13];
		var g = f, h;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[14] = h) : h = t[14];
		var y;
		t[15] !== _ ? (y = u.jsx(r("WDSMenuItem.react"), {
			testid: "option-media-status",
			Icon: r("WDSIconIcFilter.react"),
			title: h,
			onPress: _
		}), t[15] = _, t[16] = y) : y = t[16];
		var C;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[17] = C) : C = t[17];
		var b;
		t[18] !== g ? (b = u.jsx(r("WDSMenuItem.react"), {
			testid: "option-text-status",
			Icon: r("WDSIconIcEdit.react"),
			title: C,
			onPress: g
		}), t[18] = g, t[19] = b) : b = t[19];
		var v;
		return t[20] !== y || t[21] !== b ? (v = u.jsxs(r("WDSMenu.react"), { children: [y, b] }), t[20] = y, t[21] = b, t[22] = v) : v = t[22], v;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(5), n = e.onOpenStatusPrivacySettingDrawer, a;
		t[0] !== n ? (a = function() {
			n == null || n();
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[2] = l) : l = t[2];
		var c;
		return t[3] !== i ? (c = u.jsx(r("WDSMenu.react"), { children: u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcLock.react"),
			title: l,
			onPress: i
		}) }), t[3] = i, t[4] = c) : c = t[4], c;
	}
	l.AddStatusMenu = c, l.StatusPrivacyMenu = d;
}), 226);
