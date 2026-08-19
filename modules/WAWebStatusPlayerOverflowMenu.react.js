__d("WAWebStatusPlayerOverflowMenu.react", [
	"fbt",
	"WAWebAccountLinkingConstants",
	"WAWebContactGetters",
	"WAWebCrossposting.flow",
	"WAWebCrosspostingConfig",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebMsgGetters",
	"WAWebMuteNotificationsRefreshedIcon.react",
	"WAWebSettingsGetters",
	"WAWebStatusGatingUtils",
	"WAWebTabOrder",
	"WAWebUnmuteNotificationsRefreshedIcon.react",
	"WDSIconIcDownload.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcThumbDown.react",
	"WDSIconIcVisibility.react",
	"WDSIconIcVisibilityOff.react",
	"WDSIconWdsIcLogoFacebook.react",
	"WDSIconWdsIcLogoInstagram.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(24), n = e.contact, a = e.crosspostingInfo, i = e.msg, l = e.onCrosspost, c = e.onDelete, d = e.onDownload, m = e.onMuteOrUnmute, p = e.onOverflowMenuDismissed, _ = e.onOverflowMenuShown, f = e.onReport, g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = [
			o("WAWebSettingsGetters").getIsFBLinked,
			o("WAWebSettingsGetters").getIsIGLinked,
			o("WAWebSettingsGetters").getLinkState
		], t[0] = g) : g = t[0];
		var h = o("useWAWebSettingsValues").useSettingsValues(g), y = h[0], C = h[1], b = h[2], v = function(t) {
			return o("WAWebContactGetters").getIsMe(t) && b === o("WAWebAccountLinkingConstants").AccountLinkState.Active;
		}, S = [], R;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), t[1] = R) : R = t[1];
		var L;
		t[2] !== f ? (L = u.jsx(r("WDSMenuItem.react"), {
			onPress: f,
			testid: "status-player-header-overflow-menu-report",
			Icon: r("WDSIconIcThumbDown.react"),
			title: R
		}, "status-player-header-overflow-menu-report"), t[2] = f, t[3] = L) : L = t[3];
		var E = L;
		if (!o("WAWebMsgGetters").getIsSentByMe(i) && !o("WAWebContactGetters").getIsPSA(n) && S.push(E), d != null) {
			var k;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
				/*BTDS*/
				""
			), t[4] = k) : k = t[4];
			var I;
			t[5] !== d ? (I = u.jsx(r("WDSMenuItem.react"), {
				onPress: d,
				testid: "status-player-header-overflow-menu-save",
				Icon: r("WDSIconIcDownload.react"),
				title: k
			}, "status-player-header-overflow-menu-save"), t[5] = d, t[6] = I) : I = t[6], S.push(I);
		}
		if (o("WAWebContactGetters").getIsMe(n)) {
			var T;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
				/*BTDS*/
				""
			), t[7] = T) : T = t[7];
			var D;
			t[8] !== c ? (D = u.jsx(r("WDSMenuItem.react"), {
				onPress: c,
				testid: "status-player-header-overflow-menu-revoke",
				Icon: o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
				title: T
			}, "status-player-header-overflow-menu-revoke"), t[8] = c, t[9] = D) : D = t[9], S.push(D);
		}
		if (v(n)) {
			var x = function(t) {
				var e = t.destination === o("WAWebCrossposting.flow").CrosspostingDestination.FACEBOOK && y || t.destination === o("WAWebCrossposting.flow").CrosspostingDestination.INSTAGRAM && C;
				if (!e) return 1;
				var n = o("WAWebCrosspostingConfig").isCrosspostedToDestination(a, t.destination), i = o("WAWebCrosspostingConfig").isPendingCrosspostingToDestination(a, t.destination);
				if (!n && !i) {
					var s = t.destination === o("WAWebCrossposting.flow").CrosspostingDestination.FACEBOOK ? r("WDSIconWdsIcLogoFacebook.react") : r("WDSIconWdsIcLogoInstagram.react");
					S.push(u.jsx(r("WDSMenuItem.react"), {
						onPress: function() {
							return l(t.gqlValue);
						},
						testid: "status-player-header-overflow-menu-crosspost-" + t.keySuffix,
						Icon: s,
						title: t.getLabel()
					}, "status-player-header-overflow-menu-crosspost-" + t.keySuffix));
				}
			};
			for (var $ of o("WAWebCrosspostingConfig").CROSSPOSTING_DESTINATION_CONFIG) x($);
		}
		var P;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (P = [o("WAWebContactGetters").getCalculatedStatusMute], t[10] = P) : P = t[10];
		var N = o("useWAWebContactValues").useContactValues(n.id, P), M = N[0];
		if (!o("WAWebMsgGetters").getIsSentByMe(i) && !o("WAWebContactGetters").getIsPSA(n)) {
			var w, A, F, O, B, W;
			t[11] !== M || t[12] !== m ? (W = function() {
				m(!M);
			}, t[11] = M, t[12] = m, t[13] = W) : W = t[13];
			var q = W;
			if (M) {
				O = o("WAWebUnmuteNotificationsRefreshedIcon.react").UnmuteNotificationsRefreshedIcon, B = r("WDSIconIcVisibility.react");
				var U;
				t[14] === Symbol.for("react.memo_cache_sentinel") ? (U = s._(
					/*BTDS*/
					""
				), t[14] = U) : U = t[14], A = U;
				var V;
				t[15] === Symbol.for("react.memo_cache_sentinel") ? (V = s._(
					/*BTDS*/
					""
				), t[15] = V) : V = t[15], w = V, F = "status-player-header-overflow-menu-unmute";
			} else {
				O = o("WAWebMuteNotificationsRefreshedIcon.react").MuteNotificationsRefreshedIcon, B = r("WDSIconIcVisibilityOff.react");
				var H;
				t[16] === Symbol.for("react.memo_cache_sentinel") ? (H = s._(
					/*BTDS*/
					""
				), t[16] = H) : H = t[16], A = H;
				var G;
				t[17] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
					/*BTDS*/
					""
				), t[17] = G) : G = t[17], w = G, F = "status-player-header-overflow-menu-mute";
			}
			var z = o("WAWebStatusGatingUtils").isStatusHideStringEnabled(), j = z ? A : w, K = z ? B : O, Q;
			t[18] !== K || t[19] !== q || t[20] !== F || t[21] !== j ? (Q = u.jsx(r("WDSMenuItem.react"), {
				onPress: q,
				testid: F,
				Icon: K,
				title: j
			}, F), t[18] = K, t[19] = q, t[20] = F, t[21] = j, t[22] = Q) : Q = t[22];
			var X = Q;
			S.push(X);
		}
		if (S.length === 0) return null;
		var Y;
		return t[23] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
			/*BTDS*/
			""
		), t[23] = Y) : Y = t[23], u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcMoreVert.react"),
			onClick: _,
			onMenuClose: p,
			testid: "status-player-header-overflow-menu-icon",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
			buttonType: "media",
			title: Y,
			wdsMenuToRender: u.jsx(r("WDSMenu.react"), {
				testid: "status-player-header-overflow-menu",
				children: S
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
