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
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = 2;
	function m(t) {
		var a, i, l = t.contact, u = o("useWAWebContactValues").useContactValues(l.id, [
			(i = o("WAWebContactGetters")).getId,
			o("WAWebFrontendContactGetters").getFormattedUser,
			i.getIsBusiness,
			o("WAWebFrontendContactGetters").getIsContactBlocked,
			i.getIsIAS,
			o("WAWebFrontendContactGetters").getIsMyContact,
			i.getIsCAPISupportAccount
		]), m = u[0], p = u[1], _ = u[2], f = u[3], g = u[4], h = u[5], y = u[6], C = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: p,
			direction: "auto"
		}), b = (a = o("WAWebUseBusinessProfile.react").useBusinessProfile(m, ["isBizBot3p"])) != null ? a : {}, v = b.isBizBot3p, S = v === void 0 ? !1 : v, R = null;
		if (!m.isBot() && !m.isAiHub()) if (f) {
			var L = S ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", C)]
			), E = "li-unblock", k = function() {
				return o("WAWebBlockContactUtils").handleUnblock(l, o("WAWebBlockContants").BlockEntryPoint.Profile);
			}, I = S ? void 0 : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", p)]
			);
			R = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: E,
				icon: c.jsx(r("WDSIconIcBlock.react"), {}),
				maxLines: d,
				ariaLabel: I,
				onClick: k,
				children: L
			});
		} else {
			var T = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = o("WAWebChatCollection").ChatCollection.get(m);
					if (e == null) {
						var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(l.id, "blockFromIntegritySection");
						e = t.chat;
					}
					o("WAWebBlockContactUtils").handleBlock(e, o("WAWebBlockContants").BlockEntryPoint.Profile);
				});
				return function() {
					return e.apply(this, arguments);
				};
			})(), D = S ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", C)]
			), x = "li-block", $ = S ? void 0 : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", p)]
			);
			R = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: x,
				danger: !0,
				icon: c.jsx(r("WDSIconIcBlock.react"), {}),
				maxLines: d,
				ariaLabel: $,
				onClick: T,
				children: D
			});
		}
		var P = (function() {
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
		})(), N = g || y ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		_ || (N = s._(
			/*BTDS*/
			"",
			[s._param("contact_name", C)]
		)), S && (N = s._(
			/*BTDS*/
			""
		));
		var M = _ ? void 0 : s._(
			/*BTDS*/
			"",
			[s._param("contact_name", p)]
		), w;
		if (!r("WAWebWid").isPSA(m) && !m.isBot() && !m.isAiHub()) {
			var A = "li-report-spam", F = P;
			w = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: A,
				danger: !0,
				icon: c.jsx(r("WDSIconIcThumbDown.react"), {}),
				maxLines: d,
				ariaLabel: M,
				onClick: F,
				children: N
			});
		}
		return c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: [R, w] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
