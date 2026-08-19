__d("WAWebNewsletterInfoSubject.react", [
	"fbt",
	"WALogger",
	"WAWebActionToast.react",
	"WAWebEditNewsletterMetadataAction",
	"WAWebFbtCommon",
	"WAWebGroupInfoSubjectInput.react",
	"WAWebName.react",
	"WAWebToastManager",
	"WAWebWamEnumChannelAdminAction",
	"WDSText.react",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState;
	function f(e) {
		var t = e.adminFunnelLogger, n = e.chat, a = o("useWAWebModelValues").useOptionalModelValues(n.newsletterMetadata, [
			"name",
			"membershipType",
			"isSuspendedOrTerminated",
			"verified"
		]), i = _(n.formattedTitle), l = i[0], u = i[1], d = p(n.formattedTitle), f = m(function() {
			l !== d.current && (d.current = l, t.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_NAME_SET));
		}, [t, l]), h = m(async function(e) {
			f(), e !== n.formattedTitle && (t.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), await g(n, e, t));
		}, [
			n,
			f,
			t
		]);
		return a == null ? null : a.isSuspendedOrTerminated || !a.iAmAdminOrOwner() ? c.jsx(r("WDSText.react"), {
			type: "Headline1",
			colorName: "contentDefault",
			textAlign: "center",
			children: c.jsx(o("WAWebName.react").Name, {
				chat: n,
				breakWord: !0,
				checkmarkLarge: !0,
				selectable: !0
			})
		}) : c.jsx(r("WAWebGroupInfoSubjectInput.react"), {
			subject: n.formattedTitle,
			onSave: h,
			editRestrictionInfo: void 0,
			editable: a.iAmAdminOrOwner() && !a.isSuspendedOrTerminated,
			emptyErrorMessage: s._(
				/*BTDS*/
				""
			),
			onChange: u,
			onBlur: f,
			direction: "ltr"
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t, n, a, i) {
		i === void 0 && (i = o("WAWebActionToast.react").genId());
		var l = o("WAWebEditNewsletterMetadataAction").editNewsletterMetadataAction(t, { editName: !0 }, { name: n }), u = t.name, d = new (o("WAWebActionToast.react")).ActionType(s._(
			/*BTDS*/
			""
		)), m = l.then(function() {
			return a.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS), new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._param("name", n)]
			), {
				actionText: r("WAWebFbtCommon")("Undo"),
				actionHandler: function() {
					return g(t, u, a, i);
				}
			});
		}).catch(function(l) {
			return a.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["newsletter:handleEditSubject dropped"]))), new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				""
			), {
				actionText: r("WAWebFbtCommon")("Try again"),
				actionHandler: function() {
					return g(t, n, a, i);
				}
			});
		});
		return o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
			id: i,
			initialAction: d,
			pendingAction: m
		})), l;
	}
	l.default = f;
}), 226);
