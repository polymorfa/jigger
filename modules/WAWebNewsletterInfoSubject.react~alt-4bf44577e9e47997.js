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
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState;
	function f(e) {
		var t = o("react-compiler-runtime").c(18), n = e.adminFunnelLogger, a = e.chat, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [
			"name",
			"membershipType",
			"isSuspendedOrTerminated",
			"verified"
		], t[0] = i) : i = t[0];
		var l = o("useWAWebModelValues").useOptionalModelValues(a.newsletterMetadata, i), u = _(a.formattedTitle), d = u[0], m = u[1], f = p(a.formattedTitle), h;
		t[1] !== n || t[2] !== d ? (h = function() {
			d !== f.current && (f.current = d, n.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_NAME_SET));
		}, t[1] = n, t[2] = d, t[3] = h) : h = t[3];
		var y = h, C;
		t[4] !== n || t[5] !== a || t[6] !== y ? (C = async function(t) {
			y(), t !== a.formattedTitle && (n.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), await g(a, t, n));
		}, t[4] = n, t[5] = a, t[6] = y, t[7] = C) : C = t[7];
		var b = C;
		if (l == null) return null;
		if (l.isSuspendedOrTerminated || !l.iAmAdminOrOwner()) {
			var v;
			return t[8] !== a ? (v = c.jsx(r("WDSText.react"), {
				type: "Headline1",
				colorName: "contentDefault",
				textAlign: "center",
				children: c.jsx(o("WAWebName.react").Name, {
					chat: a,
					breakWord: !0,
					checkmarkLarge: !0,
					selectable: !0
				})
			}), t[8] = a, t[9] = v) : v = t[9], v;
		}
		var S;
		t[10] !== l ? (S = l.iAmAdminOrOwner() && !l.isSuspendedOrTerminated, t[10] = l, t[11] = S) : S = t[11];
		var R;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), t[12] = R) : R = t[12];
		var L;
		return t[13] !== a.formattedTitle || t[14] !== y || t[15] !== b || t[16] !== S ? (L = c.jsx(r("WAWebGroupInfoSubjectInput.react"), {
			subject: a.formattedTitle,
			onSave: b,
			editRestrictionInfo: void 0,
			editable: S,
			emptyErrorMessage: R,
			onChange: m,
			onBlur: y,
			direction: "ltr"
		}), t[13] = a.formattedTitle, t[14] = y, t[15] = b, t[16] = S, t[17] = L) : L = t[17], L;
	}
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
