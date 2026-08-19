__d("WAWebNewsletterInfoPhoto.react", [
	"fbt",
	"WALogger",
	"WAWebActionToast.react",
	"WAWebEditNewsletterMetadataAction",
	"WAWebFbtCommon",
	"WAWebPhotoPickerConstants",
	"WAWebPhotoPickerLoadable.react",
	"WAWebToastManager",
	"WAWebWamEnumChannelAdminAction",
	"react",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useState;
	function f(e) {
		var t = e.HoverIcon, n = e.adminFunnelLogger, a = e.chat, i = e.readOnly, l = e.showAddIconOverlay, s = l === void 0 ? !0 : l, c = e.showOutline, m = e.size, f = e.testId, h = e.xstyle, y = _(!1), C = y[0], b = y[1], v = o("useWAWebModelValues").useModelValues(a.contact, ["id", "profilePicThumb"]), S = a.contact.getProfilePicThumb(), R = o("useWAWebModelValues").useModelValues(S, ["imgFull"]), L = p(function(e, t, r) {
			n.logImageSetEvent(r), n.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), b(!0), g({
				adminFunnelLogger: n,
				chat: a,
				fullImg: t
			}).finally(function() {
				b(!1);
			});
		}, [a, n]);
		return d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(h), { children: d.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
			testid: f != null ? f : "newsletter-photo-picker",
			type: o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER,
			id: v.id,
			attachToChat: !0,
			startImage: R == null ? void 0 : R.imgFull,
			readOnly: i,
			onImageSet: L,
			pending: C,
			HoverIcon: t,
			showAddIconOverlay: s,
			size: m,
			showOutline: c
		}) }));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n = t.adminFunnelLogger, a = t.chat, i = t.fullImg, l = t.toastId, u = l === void 0 ? o("WAWebActionToast.react").genId() : l, c = o("WAWebEditNewsletterMetadataAction").editNewsletterMetadataAction(a, { editPicture: !0 }, { picture: i != null ? i : null }), m = new (o("WAWebActionToast.react")).ActionType(i != null ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		)), p = c.then(function() {
			return n.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS), new (o("WAWebActionToast.react")).ActionType(i != null ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			));
		}).catch(function(t) {
			return n.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["newsletter:handleEditPhoto dropped"]))), new (o("WAWebActionToast.react")).ActionType(i != null ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), {
				actionText: r("WAWebFbtCommon")("Try again"),
				actionHandler: function() {
					return g({
						adminFunnelLogger: n,
						chat: a,
						fullImg: i,
						toastId: u
					});
				}
			});
		});
		return o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
			id: u,
			initialAction: m,
			pendingAction: p
		})), c;
	}
	l.default = f;
}), 226);
