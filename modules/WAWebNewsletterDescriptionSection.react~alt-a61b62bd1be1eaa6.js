__d("WAWebNewsletterDescriptionSection.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebActionToast.react",
	"WAWebChatGetters",
	"WAWebChatInfoDescriptionSection.react",
	"WAWebClock",
	"WAWebCmd",
	"WAWebEditNewsletterMetadataAction",
	"WAWebFbtCommon",
	"WAWebFrontendChatGetters",
	"WAWebToastManager",
	"WAWebWamEnumChannelAdminAction",
	"asyncToGeneratorRuntime",
	"err",
	"react",
	"useWAWebChatValues",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useRef, f = m.useState;
	function g(e) {
		var t, a = e.adminFunnelLogger, i = e.chat, l = e.focusOnMount, u = f(l != null ? l : !1), c = u[0], m = u[1], g = o("useWAWebChatValues").useChatValues(i.id, [
			o("WAWebChatGetters").getId,
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebChatGetters").getId,
			o("WAWebFrontendChatGetters").getNewsletterMetadata
		]), y = g[0], C = g[1], b = g[2], v = o("useWAWebModelValues").useOptionalModelValues(i.newsletterMetadata, [
			"description",
			"creationTime",
			"membershipType"
		]), S = r("useWAWebEventTargetValue")(v, ["change:description"], function() {
			return (v == null ? void 0 : v.description) || "";
		});
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "edit_newsletter_description", function() {
			m(!0);
		});
		var R = f(S), L = R[0], E = R[1], k = _(S), I = p(function() {
			L !== k.current && (k.current = L, a.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_DESCRIPTION_SET));
		}, [a, L]), T = p((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				t === void 0 && (t = ""), I(), a.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), yield h({
					chat: i,
					desc: t,
					adminFunnelLogger: a,
					setIsEditing: m
				});
			});
			return function(t, n) {
				return e.apply(this, arguments);
			};
		})(), [
			i,
			I,
			a
		]);
		if (v == null) return null;
		var D = s._(
			/*BTDS*/
			""
		), x = v.creationTime, $ = x != null ? o("WAWebClock").Clock.newsletterDescriptionCreatedStr(v.creationTime) : null;
		return d.jsx(r("WAWebChatInfoDescriptionSection.react"), {
			description: S,
			bulletPointsEnabled: !1,
			expandedFormattingEnabled: !1,
			chat: i,
			testid: "newsletter-info-drawer-description-title-input",
			containerTestId: "newsletter-info-drawer-description-container",
			emptyValuePlaceholder: D,
			inputPlaceholder: D,
			creationString: $,
			canSetDescription: (t = v == null ? void 0 : v.iAmAdminOrOwner()) != null ? t : !1,
			setDescriptionAction: T,
			onChange: E,
			onBlur: function() {
				I(), m(!1);
			},
			setIsEditing: c,
			focusOnMount: l,
			preventBlankDescription: !0
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(t) {
		var a, i = t.chat, l = t.desc, c = l === void 0 ? "" : l, m = t.adminFunnelLogger, p = t.setIsEditing, _ = t.toastId, f = _ === void 0 ? o("WAWebActionToast.react").genId() : _;
		if (/\s/.test(c) && c.trim().length === 0) return (u || (u = n("Promise"))).reject(r("err")("Blank space channel description"));
		var g = o("WAWebEditNewsletterMetadataAction").editNewsletterMetadataAction(i, { editDescription: !0 }, { description: c }), y = (a = i.newsletterMetadata) == null ? void 0 : a.description, C = new (o("WAWebActionToast.react")).ActionType(s._(
			/*BTDS*/
			""
		)), b = g.then(function() {
			m.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS);
			var e = y ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			return new (o("WAWebActionToast.react")).ActionType(e, {
				actionText: r("WAWebFbtCommon")("Undo"),
				actionHandler: function() {
					return h({
						chat: i,
						desc: y,
						adminFunnelLogger: m,
						toastId: f
					});
				}
			});
		}).catch(function(t) {
			return m.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["channel:handleEditDescription dropped"]))), new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				""
			), {
				actionText: r("WAWebFbtCommon")("Try again"),
				actionHandler: function() {
					return h({
						chat: i,
						desc: y,
						adminFunnelLogger: m,
						toastId: f
					});
				}
			});
		}).finally(function() {
			p && p(!1);
		});
		return o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
			id: f,
			initialAction: C,
			pendingAction: b
		})), g;
	}
	l.default = g;
}), 226);
