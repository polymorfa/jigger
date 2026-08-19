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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = 2;
	function m(t) {
		var a, i = o("react-compiler-runtime").c(49), l = t.contact, u;
		if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
			var m;
			u = [
				(m = o("WAWebContactGetters")).getId,
				o("WAWebFrontendContactGetters").getFormattedUser,
				m.getIsBusiness,
				o("WAWebFrontendContactGetters").getIsContactBlocked,
				m.getIsIAS,
				o("WAWebFrontendContactGetters").getIsMyContact,
				m.getIsCAPISupportAccount
			], i[0] = u;
		} else u = i[0];
		var p = o("useWAWebContactValues").useContactValues(l.id, u), _ = p[0], f = p[1], g = p[2], h = p[3], y = p[4], C = p[6], b;
		i[1] !== f ? (b = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: f,
			direction: "auto"
		}), i[1] = f, i[2] = b) : b = i[2];
		var v = b, S = (a = o("WAWebUseBusinessProfile.react").useBusinessProfile(_, ["isBizBot3p"])) != null ? a : {}, R = S.isBizBot3p, L = R === void 0 ? !1 : R, E = null;
		if (!_.isBot() && !_.isAiHub()) if (h) {
			var k;
			i[3] !== v || i[4] !== L ? (k = L ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", v)]
			), i[3] = v, i[4] = L, i[5] = k) : k = i[5];
			var I = k, T;
			i[6] !== l ? (T = function() {
				return o("WAWebBlockContactUtils").handleUnblock(l, o("WAWebBlockContants").BlockEntryPoint.Profile);
			}, i[6] = l, i[7] = T) : T = i[7];
			var D = T, x;
			i[8] !== f || i[9] !== L ? (x = L ? void 0 : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", f)]
			), i[8] = f, i[9] = L, i[10] = x) : x = i[10];
			var $ = x, P;
			i[11] === Symbol.for("react.memo_cache_sentinel") ? (P = c.jsx(r("WDSIconIcBlock.react"), {}), i[11] = P) : P = i[11];
			var N;
			i[12] !== D || i[13] !== $ || i[14] !== I ? (N = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: "li-unblock",
				icon: P,
				maxLines: d,
				ariaLabel: $,
				onClick: D,
				children: I
			}), i[12] = D, i[13] = $, i[14] = I, i[15] = N) : N = i[15], E = N;
		} else {
			var M;
			i[16] !== l.id || i[17] !== _ ? (M = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = o("WAWebChatCollection").ChatCollection.get(_);
					if (e == null) {
						var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(l.id, "blockFromIntegritySection");
						e = t.chat;
					}
					o("WAWebBlockContactUtils").handleBlock(e, o("WAWebBlockContants").BlockEntryPoint.Profile);
				});
				return function() {
					return e.apply(this, arguments);
				};
			})(), i[16] = l.id, i[17] = _, i[18] = M) : M = i[18];
			var w = M, A;
			i[19] !== v || i[20] !== L ? (A = L ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", v)]
			), i[19] = v, i[20] = L, i[21] = A) : A = i[21];
			var F = A, O;
			i[22] !== f || i[23] !== L ? (O = L ? void 0 : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", f)]
			), i[22] = f, i[23] = L, i[24] = O) : O = i[24];
			var B = O, W;
			i[25] === Symbol.for("react.memo_cache_sentinel") ? (W = c.jsx(r("WDSIconIcBlock.react"), {}), i[25] = W) : W = i[25];
			var q;
			i[26] !== B || i[27] !== F || i[28] !== w ? (q = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: "li-block",
				danger: !0,
				icon: W,
				maxLines: d,
				ariaLabel: B,
				onClick: w,
				children: F
			}), i[26] = B, i[27] = F, i[28] = w, i[29] = q) : q = i[29], E = q;
		}
		var U;
		i[30] !== l ? (U = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(l.id, "reportFromIntegritySection"), n = t.chat;
				if (n == null) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unexpected null chat during reporting from contact info"]))), o("WAWebModalManager").ModalManager.close();
					return;
				}
				o("WAWebReportContactDialogUtils").openReportContactPopup(n, o("WAWebSpamConstants").SpamFlow.AccountInfoReport);
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), i[30] = l, i[31] = U) : U = i[31];
		var V = U, H;
		i[32] !== C || i[33] !== y ? (H = y || C ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), i[32] = C, i[33] = y, i[34] = H) : H = i[34];
		var G = H;
		if (!g) {
			var z;
			i[35] !== v ? (z = s._(
				/*BTDS*/
				"",
				[s._param("contact_name", v)]
			), i[35] = v, i[36] = z) : z = i[36], G = z;
		}
		if (L) {
			var j;
			i[37] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
				/*BTDS*/
				""
			), i[37] = j) : j = i[37], G = j;
		}
		var K;
		i[38] !== f || i[39] !== g ? (K = g ? void 0 : s._(
			/*BTDS*/
			"",
			[s._param("contact_name", f)]
		), i[38] = f, i[39] = g, i[40] = K) : K = i[40];
		var Q = K, X;
		if (!r("WAWebWid").isPSA(_) && !_.isBot() && !_.isAiHub()) {
			var Y = V, J;
			i[41] === Symbol.for("react.memo_cache_sentinel") ? (J = c.jsx(r("WDSIconIcThumbDown.react"), {}), i[41] = J) : J = i[41];
			var Z;
			i[42] !== Y || i[43] !== Q || i[44] !== G ? (Z = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: "li-report-spam",
				danger: !0,
				icon: J,
				maxLines: d,
				ariaLabel: Q,
				onClick: Y,
				children: G
			}), i[42] = Y, i[43] = Q, i[44] = G, i[45] = Z) : Z = i[45], X = Z;
		}
		var ee;
		return i[46] !== E || i[47] !== X ? (ee = c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: [E, X] }), i[46] = E, i[47] = X, i[48] = ee) : ee = i[48], ee;
	}
	l.default = m;
}), 226);
