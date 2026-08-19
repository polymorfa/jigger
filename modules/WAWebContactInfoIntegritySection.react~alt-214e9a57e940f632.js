__d("WAWebContactInfoIntegritySection.react", [
	"fbt",
	"WALogger",
	"WAWebBlockContactUtils",
	"WAWebBlockContants",
	"WAWebChatCollection",
	"WAWebChatInfoDrawerSection.react",
	"WAWebContactGetters",
	"WAWebDrawerButtonRefreshed.react",
	"WAWebEmojiText.react",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebReportContactDialogUtils",
	"WAWebSpamConstants",
	"WAWebUseBusinessProfile.react",
	"WAWebWid",
	"WDSIconIcBlock.react",
	"WDSIconIcThumbDown.react",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = 2;
	function m(t) {
		var n, a = o("react-compiler-runtime").c(49), i = t.contact, l;
		if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
			var u;
			l = [
				(u = o("WAWebContactGetters")).getId,
				o("WAWebFrontendContactGetters").getFormattedUser,
				u.getIsBusiness,
				o("WAWebFrontendContactGetters").getIsContactBlocked,
				u.getIsIAS,
				o("WAWebFrontendContactGetters").getIsMyContact,
				u.getIsCAPISupportAccount
			], a[0] = l;
		} else l = a[0];
		var m = o("useWAWebContactValues").useContactValues(i.id, l), p = m[0], _ = m[1], f = m[2], g = m[3], h = m[4], y = m[6], C;
		a[1] !== _ ? (C = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: _,
			direction: "auto"
		}), a[1] = _, a[2] = C) : C = a[2];
		var b = C, v = (n = o("WAWebUseBusinessProfile.react").useBusinessProfile(p, ["isBizBot3p"])) != null ? n : {}, S = v.isBizBot3p, R = S === void 0 ? !1 : S, L = null;
		if (!p.isBot() && !p.isAiHub()) if (g) {
			var E;
			a[3] !== b || a[4] !== R ? (E = R ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", b)]
			), a[3] = b, a[4] = R, a[5] = E) : E = a[5];
			var k = E, I;
			a[6] !== i ? (I = function() {
				return o("WAWebBlockContactUtils").handleUnblock(i, o("WAWebBlockContants").BlockEntryPoint.Profile);
			}, a[6] = i, a[7] = I) : I = a[7];
			var T = I, D;
			a[8] !== _ || a[9] !== R ? (D = R ? void 0 : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", _)]
			), a[8] = _, a[9] = R, a[10] = D) : D = a[10];
			var x = D, $;
			a[11] === Symbol.for("react.memo_cache_sentinel") ? ($ = c.jsx(r("WDSIconIcBlock.react"), {}), a[11] = $) : $ = a[11];
			var P;
			a[12] !== T || a[13] !== x || a[14] !== k ? (P = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: "li-unblock",
				icon: $,
				maxLines: d,
				ariaLabel: x,
				onClick: T,
				children: k
			}), a[12] = T, a[13] = x, a[14] = k, a[15] = P) : P = a[15], L = P;
		} else {
			var N;
			a[16] !== i.id || a[17] !== p ? (N = async function() {
				var e = o("WAWebChatCollection").ChatCollection.get(p);
				if (e == null) {
					var t = await o("WAWebFindChatAction").findOrCreateLatestChat(i.id, "blockFromIntegritySection");
					e = t.chat;
				}
				o("WAWebBlockContactUtils").handleBlock(e, o("WAWebBlockContants").BlockEntryPoint.Profile);
			}, a[16] = i.id, a[17] = p, a[18] = N) : N = a[18];
			var M = N, w;
			a[19] !== b || a[20] !== R ? (w = R ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", b)]
			), a[19] = b, a[20] = R, a[21] = w) : w = a[21];
			var A = w, F;
			a[22] !== _ || a[23] !== R ? (F = R ? void 0 : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", _)]
			), a[22] = _, a[23] = R, a[24] = F) : F = a[24];
			var O = F, B;
			a[25] === Symbol.for("react.memo_cache_sentinel") ? (B = c.jsx(r("WDSIconIcBlock.react"), {}), a[25] = B) : B = a[25];
			var W;
			a[26] !== O || a[27] !== A || a[28] !== M ? (W = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: "li-block",
				danger: !0,
				icon: B,
				maxLines: d,
				ariaLabel: O,
				onClick: M,
				children: A
			}), a[26] = O, a[27] = A, a[28] = M, a[29] = W) : W = a[29], L = W;
		}
		var q;
		a[30] !== i ? (q = async function() {
			var t = await o("WAWebFindChatAction").findOrCreateLatestChat(i.id, "reportFromIntegritySection"), n = t.chat;
			if (n == null) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unexpected null chat during reporting from contact info"]))), o("WAWebModalManager").ModalManager.close();
				return;
			}
			o("WAWebReportContactDialogUtils").openReportContactPopup(n, o("WAWebSpamConstants").SpamFlow.AccountInfoReport);
		}, a[30] = i, a[31] = q) : q = a[31];
		var U = q, V;
		a[32] !== y || a[33] !== h ? (V = h || y ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), a[32] = y, a[33] = h, a[34] = V) : V = a[34];
		var H = V;
		if (!f) {
			var G;
			a[35] !== b ? (G = s._(
				/*BTDS*/
				"",
				[s._param("contact_name", b)]
			), a[35] = b, a[36] = G) : G = a[36], H = G;
		}
		if (R) {
			var z;
			a[37] === Symbol.for("react.memo_cache_sentinel") ? (z = s._(
				/*BTDS*/
				""
			), a[37] = z) : z = a[37], H = z;
		}
		var j;
		a[38] !== _ || a[39] !== f ? (j = f ? void 0 : s._(
			/*BTDS*/
			"",
			[s._param("contact_name", _)]
		), a[38] = _, a[39] = f, a[40] = j) : j = a[40];
		var K = j, Q;
		if (!r("WAWebWid").isPSA(p) && !p.isBot() && !p.isAiHub()) {
			var X = U, Y;
			a[41] === Symbol.for("react.memo_cache_sentinel") ? (Y = c.jsx(r("WDSIconIcThumbDown.react"), {}), a[41] = Y) : Y = a[41];
			var J;
			a[42] !== X || a[43] !== K || a[44] !== H ? (J = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: "li-report-spam",
				danger: !0,
				icon: Y,
				maxLines: d,
				ariaLabel: K,
				onClick: X,
				children: H
			}), a[42] = X, a[43] = K, a[44] = H, a[45] = J) : J = a[45], Q = J;
		}
		var Z;
		return a[46] !== L || a[47] !== Q ? (Z = c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: [L, Q] }), a[46] = L, a[47] = Q, a[48] = Z) : Z = a[48], Z;
	}
	l.default = m;
}), 226);
