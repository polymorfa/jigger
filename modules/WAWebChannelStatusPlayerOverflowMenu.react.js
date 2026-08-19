__d("WAWebChannelStatusPlayerOverflowMenu.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebContactGetters",
	"WAWebCopyToClipboard",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebMegaphoneRefreshedIcon.react",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebNewsletterApiParse",
	"WAWebNewsletterExecApiCmd",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterMetadataCollection",
	"WAWebTabOrder",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumTsSurface",
	"WDSIconIcDownload.react",
	"WDSIconIcFastForward.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLink.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcThumbDown.react",
	"WDSIconIcVisibility.react",
	"WDSIconIcVisibilityOff.react",
	"WDSIconWdsIcAiContent.react",
	"WDSIconWdsIcChannels.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(e) {
		var t = o("react-compiler-runtime").c(48), n = e.contact, a = e.msg, i = e.onAddAiContentLabel, l = e.onAddPaidPartnershipLabel, u = e.onDelete, d = e.onDownload, g = e.onForward, h = e.onHideOrUnhide, y = e.onOverflowMenuDismissed, C = e.onOverflowMenuShown, b = e.onReport, v;
		if (t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== u || t[5] !== d || t[6] !== g || t[7] !== h || t[8] !== b) {
			if (v = [], !o("WAWebMsgGetters").getIsSentByMe(a)) {
				var S;
				t[10] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
					/*BTDS*/
					""
				), t[10] = S) : S = t[10];
				var R;
				t[11] !== b ? (R = c.jsx(r("WDSMenuItem.react"), {
					onPress: b,
					testid: "channel-status-overflow-menu-report",
					Icon: r("WDSIconIcThumbDown.react"),
					title: S
				}, "channel-status-overflow-menu-report"), t[11] = b, t[12] = R) : R = t[12], v.push(R);
			}
			var L = r("WAWebNewsletterMetadataCollection").get(a.id.remote);
			if ((L == null ? void 0 : L.iAmAdminOrOwner()) === !0) {
				var E;
				t[13] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
					/*BTDS*/
					""
				), t[13] = E) : E = t[13];
				var k;
				t[14] !== u ? (k = c.jsx(r("WDSMenuItem.react"), {
					onPress: u,
					testid: "channel-status-overflow-menu-delete",
					Icon: o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
					title: E
				}, "channel-status-overflow-menu-delete"), t[14] = u, t[15] = k) : k = t[15], v.push(k);
			}
			if (d != null) {
				var I;
				t[16] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
					/*BTDS*/
					""
				), t[16] = I) : I = t[16];
				var T;
				t[17] !== d ? (T = c.jsx(r("WDSMenuItem.react"), {
					onPress: d,
					testid: "channel-status-overflow-menu-save",
					Icon: r("WDSIconIcDownload.react"),
					title: I
				}, "channel-status-overflow-menu-save"), t[17] = d, t[18] = T) : T = t[18], v.push(T);
			}
			var D;
			t[19] !== n || t[20] !== a || t[21] !== h ? (D = c.jsx(p, {
				contact: n,
				msg: a,
				onHideOrUnhide: h
			}, "channel-status-overflow-menu-hide-unhide"), t[19] = n, t[20] = a, t[21] = h, t[22] = D) : D = t[22], v.push(D);
			var x;
			t[23] !== g ? (x = c.jsx(_, { onForward: g }, "channel-status-overflow-menu-forward"), t[23] = g, t[24] = x) : x = t[24], v.push(x);
			var $;
			t[25] !== a ? ($ = c.jsx(f, { msg: a }, "channel-status-overflow-menu-copy-link"), t[25] = a, t[26] = $) : $ = t[26], v.push($);
			var P;
			t[27] !== a.id.remote ? (P = a.id.remote.toString(), t[27] = a.id.remote, t[28] = P) : P = t[28];
			var N = P, M;
			t[29] !== N ? (M = function() {
				o("WAWebCmd").Cmd.closeStatusViewer(), o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
					identifier: N,
					identifierType: o("WAWebNewsletterApiParse").NewsletterIdentifierType.Id,
					type: "view",
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterCTAOnStatus,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_VIEW
				});
			}, t[29] = N, t[30] = M) : M = t[30];
			var w = M, A;
			t[31] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
				/*BTDS*/
				""
			), t[31] = A) : A = t[31];
			var F;
			if (t[32] !== w ? (F = c.jsx(r("WDSMenuItem.react"), {
				onPress: w,
				testid: "channel-status-overflow-menu-view-channel",
				Icon: r("WDSIconWdsIcChannels.react"),
				title: A
			}, "channel-status-overflow-menu-view-channel"), t[32] = w, t[33] = F) : F = t[33], v.push(F), o("WAWebMsgActionCapability").canAddPaidPartnershipLabelToMsg(a)) {
				var O;
				t[34] === Symbol.for("react.memo_cache_sentinel") ? (O = s._(
					/*BTDS*/
					""
				), t[34] = O) : O = t[34];
				var B;
				t[35] !== l ? (B = c.jsx(r("WDSMenuItem.react"), {
					onPress: l,
					testid: "mi-status-paid-partnership",
					Icon: o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon,
					title: O
				}, "channel-status-overflow-menu-paid-partnership"), t[35] = l, t[36] = B) : B = t[36], v.push(B);
			}
			if (o("WAWebMsgActionCapability").canAddAiContentLabelToMsg(a)) {
				var W;
				t[37] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
					/*BTDS*/
					""
				), t[37] = W) : W = t[37];
				var q;
				t[38] !== i ? (q = c.jsx(r("WDSMenuItem.react"), {
					onPress: i,
					testid: "mi-status-ai-content-label",
					Icon: r("WDSIconWdsIcAiContent.react"),
					title: W
				}, "channel-status-overflow-menu-ai-content-label"), t[38] = i, t[39] = q) : q = t[39], v.push(q);
			}
			if (o("WAWebABProps").getABPropConfigValue("channel_status_help_enabled")) {
				var U;
				t[40] === Symbol.for("react.memo_cache_sentinel") ? (U = c.jsx(r("WDSMenuItem.react"), {
					onPress: m,
					testid: "channel-status-overflow-menu-about-channel-status",
					Icon: r("WDSIconIcInfo.react"),
					title: s._(
						/*BTDS*/
						""
					)
				}, "channel-status-overflow-menu-about-channel-status"), t[40] = U) : U = t[40], v.push(U);
			}
			t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = u, t[5] = d, t[6] = g, t[7] = h, t[8] = b, t[9] = v;
		} else v = t[9];
		if (v.length === 0) return null;
		var V;
		t[41] === Symbol.for("react.memo_cache_sentinel") ? (V = s._(
			/*BTDS*/
			""
		), t[41] = V) : V = t[41];
		var H;
		t[42] !== v ? (H = c.jsx(r("WDSMenu.react"), {
			testid: "channel-status-overflow-menu",
			children: v
		}), t[42] = v, t[43] = H) : H = t[43];
		var G;
		return t[44] !== y || t[45] !== C || t[46] !== H ? (G = c.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcMoreVert.react"),
			onClick: C,
			onMenuClose: y,
			testid: "channel-status-overflow-menu-icon",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
			buttonType: "media",
			title: V,
			menuAlign: "end",
			wdsMenuToRender: H
		}), t[44] = y, t[45] = C, t[46] = H, t[47] = G) : G = t[47], G;
	}
	function m() {
		return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterStatusIntroFaqUrl());
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(12), n = e.contact, a = e.msg, i = e.onHideOrUnhide, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [o("WAWebContactGetters").getCalculatedStatusMute], t[0] = l) : l = t[0];
		var u = o("useWAWebContactValues").useContactValues(n.id, l), d = u[0];
		if (o("WAWebMsgGetters").getIsSentByMe(a)) return null;
		var m = d, p = m ? "channel-status-overflow-menu-unhide" : "channel-status-overflow-menu-hide", _;
		t[1] !== m || t[2] !== i ? (_ = function() {
			return i(!m);
		}, t[1] = m, t[2] = i, t[3] = _) : _ = t[3];
		var f = m ? "channel-status-overflow-menu-unhide" : "channel-status-overflow-menu-hide", g = r(m ? "WDSIconIcVisibility.react" : "WDSIconIcVisibilityOff.react"), h;
		t[4] !== m ? (h = m ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[4] = m, t[5] = h) : h = t[5];
		var y;
		return t[6] !== p || t[7] !== _ || t[8] !== f || t[9] !== g || t[10] !== h ? (y = c.jsx(r("WDSMenuItem.react"), {
			onPress: _,
			testid: f,
			Icon: g,
			title: h
		}, p), t[6] = p, t[7] = _, t[8] = f, t[9] = g, t[10] = h, t[11] = y) : y = t[11], y;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(3), n = e.onForward;
		if (n == null) return null;
		var a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i;
		return t[1] !== n ? (i = c.jsx(r("WDSMenuItem.react"), {
			onPress: n,
			testid: "channel-status-overflow-menu-forward",
			Icon: r("WDSIconIcFastForward.react"),
			title: a
		}, "channel-status-overflow-menu-forward"), t[1] = n, t[2] = i) : i = t[2], i;
	}
	function f(e) {
		var t, n = o("react-compiler-runtime").c(6), a = e.msg, i = a.serverId, l = (t = r("WAWebNewsletterMetadataCollection").get(a.id.remote)) == null ? void 0 : t.inviteCode;
		if (i == null || i <= 0 || l == null || l === "" || a.type === o("WAWebMsgType").MSG_TYPE.REVOKED || !o("WAWebNewsletterGatingUtils").isNewsletterStatusDeeplinkEnabled()) return null;
		var u;
		n[0] !== l || n[1] !== i ? (u = function() {
			var e = "https://whatsapp.com/channel_status/" + l + "/" + i, t = g;
			o("WAWebCopyToClipboard").copyTextToClipboard(e).then(function(e) {
				e ? o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })) : t();
			}, t);
		}, n[0] = l, n[1] = i, n[2] = u) : u = n[2];
		var d = u, m;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), n[3] = m) : m = n[3];
		var p;
		return n[4] !== d ? (p = c.jsx(r("WDSMenuItem.react"), {
			onPress: d,
			testid: "channel-status-overflow-menu-copy-link",
			Icon: r("WDSIconIcLink.react"),
			title: m
		}), n[4] = d, n[5] = p) : p = n[5], p;
	}
	function g(t) {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[channel-status-link] failed to copy link to clipboard"]))).catching(r("getErrorSafe")(t)).tags("newsletter", "status").sendLogs("newsletter-status-copy-link-failed"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	l.default = d;
}), 226);
