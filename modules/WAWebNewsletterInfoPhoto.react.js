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
	"react-compiler-runtime",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useState;
	function f(e) {
		var t = o("react-compiler-runtime").c(23), n = e.HoverIcon, a = e.adminFunnelLogger, i = e.chat, l = e.readOnly, s = e.showAddIconOverlay, c = e.showOutline, m = e.size, p = e.testId, f = e.xstyle, h = s === void 0 ? !0 : s, y = _(!1), C = y[0], b = y[1], v;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (v = ["id", "profilePicThumb"], t[0] = v) : v = t[0];
		var S = o("useWAWebModelValues").useModelValues(i.contact, v), R;
		t[1] !== i.contact ? (R = i.contact.getProfilePicThumb(), t[1] = i.contact, t[2] = R) : R = t[2];
		var L = R, E;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (E = ["imgFull"], t[3] = E) : E = t[3];
		var k = o("useWAWebModelValues").useModelValues(L, E), I;
		t[4] !== a || t[5] !== i ? (I = function(t, n, r) {
			a.logImageSetEvent(r), a.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), b(!0), g({
				adminFunnelLogger: a,
				chat: i,
				fullImg: n
			}).finally(function() {
				b(!1);
			});
		}, t[4] = a, t[5] = i, t[6] = I) : I = t[6];
		var T = I, D;
		t[7] !== f ? (D = (u || (u = r("stylex"))).props(f), t[7] = f, t[8] = D) : D = t[8];
		var x = p != null ? p : "newsletter-photo-picker", $ = k == null ? void 0 : k.imgFull, P;
		t[9] !== n || t[10] !== S.id || t[11] !== T || t[12] !== C || t[13] !== l || t[14] !== h || t[15] !== c || t[16] !== m || t[17] !== x || t[18] !== $ ? (P = d.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
			testid: x,
			type: o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER,
			id: S.id,
			attachToChat: !0,
			startImage: $,
			readOnly: l,
			onImageSet: T,
			pending: C,
			HoverIcon: n,
			showAddIconOverlay: h,
			size: m,
			showOutline: c
		}), t[9] = n, t[10] = S.id, t[11] = T, t[12] = C, t[13] = l, t[14] = h, t[15] = c, t[16] = m, t[17] = x, t[18] = $, t[19] = P) : P = t[19];
		var N;
		return t[20] !== D || t[21] !== P ? (N = d.jsx("div", babelHelpers.extends({}, D, { children: P })), t[20] = D, t[21] = P, t[22] = N) : N = t[22], N;
	}
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
