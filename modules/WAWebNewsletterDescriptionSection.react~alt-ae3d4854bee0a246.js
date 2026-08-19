__d("WAWebNewsletterDescriptionSection.react", [
	"fbt",
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
	"err",
	"react",
	"useWAWebChatValues",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState;
	function f(e) {
		var t, n = e.adminFunnelLogger, a = e.chat, i = e.focusOnMount, l = _(i != null ? i : !1), u = l[0], d = l[1], f = o("useWAWebChatValues").useChatValues(a.id, [
			o("WAWebChatGetters").getId,
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebChatGetters").getId,
			o("WAWebFrontendChatGetters").getNewsletterMetadata
		]), h = f[0], y = f[1], C = f[2], b = o("useWAWebModelValues").useOptionalModelValues(a.newsletterMetadata, [
			"description",
			"creationTime",
			"membershipType"
		]), v = r("useWAWebEventTargetValue")(b, ["change:description"], function() {
			return (b == null ? void 0 : b.description) || "";
		});
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "edit_newsletter_description", function() {
			d(!0);
		});
		var S = _(v), R = S[0], L = S[1], E = p(v), k = m(function() {
			R !== E.current && (E.current = R, n.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_DESCRIPTION_SET));
		}, [n, R]), I = m(async function(e, t) {
			t === void 0 && (t = ""), k(), n.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), await g({
				chat: a,
				desc: t,
				adminFunnelLogger: n,
				setIsEditing: d
			});
		}, [
			a,
			k,
			n
		]);
		if (b == null) return null;
		var T = s._(
			/*BTDS*/
			""
		), D = b.creationTime, x = D != null ? o("WAWebClock").Clock.newsletterDescriptionCreatedStr(b.creationTime) : null;
		return c.jsx(r("WAWebChatInfoDescriptionSection.react"), {
			description: v,
			bulletPointsEnabled: !1,
			expandedFormattingEnabled: !1,
			chat: a,
			testid: "newsletter-info-drawer-description-title-input",
			containerTestId: "newsletter-info-drawer-description-container",
			emptyValuePlaceholder: T,
			inputPlaceholder: T,
			creationString: x,
			canSetDescription: (t = b == null ? void 0 : b.iAmAdminOrOwner()) != null ? t : !1,
			setDescriptionAction: I,
			onChange: L,
			onBlur: function() {
				k(), d(!1);
			},
			setIsEditing: u,
			focusOnMount: i,
			preventBlankDescription: !0
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n, a = t.chat, i = t.desc, l = i === void 0 ? "" : i, u = t.adminFunnelLogger, d = t.setIsEditing, m = t.toastId, p = m === void 0 ? o("WAWebActionToast.react").genId() : m;
		if (/\s/.test(l) && l.trim().length === 0) return Promise.reject(r("err")("Blank space channel description"));
		var _ = o("WAWebEditNewsletterMetadataAction").editNewsletterMetadataAction(a, { editDescription: !0 }, { description: l }), f = (n = a.newsletterMetadata) == null ? void 0 : n.description, h = new (o("WAWebActionToast.react")).ActionType(s._(
			/*BTDS*/
			""
		)), y = _.then(function() {
			u.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS);
			var e = f ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			return new (o("WAWebActionToast.react")).ActionType(e, {
				actionText: r("WAWebFbtCommon")("Undo"),
				actionHandler: function() {
					return g({
						chat: a,
						desc: f,
						adminFunnelLogger: u,
						toastId: p
					});
				}
			});
		}).catch(function(t) {
			return u.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["channel:handleEditDescription dropped"]))), new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				""
			), {
				actionText: r("WAWebFbtCommon")("Try again"),
				actionHandler: function() {
					return g({
						chat: a,
						desc: f,
						adminFunnelLogger: u,
						toastId: p
					});
				}
			});
		}).finally(function() {
			d && d(!1);
		});
		return o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
			id: p,
			initialAction: h,
			pendingAction: y
		})), _;
	}
	l.default = f;
}), 226);
