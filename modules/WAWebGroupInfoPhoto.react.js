__d("WAWebGroupInfoPhoto.react", [
	"fbt",
	"WAAbortError",
	"WAFilteredCatch",
	"WALogger",
	"WAPromiseRaceAbort",
	"WAWebABProps",
	"WAWebChatGroupUtils",
	"WAWebGroupProfilePictureWamEvent",
	"WAWebGroupType",
	"WAWebMiscErrors",
	"WAWebNoop",
	"WAWebPhotoPickerConstants",
	"WAWebPhotoPickerLoadable.react",
	"WAWebProfilePicThumbAction",
	"WAWebStatusCollection",
	"WAWebWamNumberToPreciseSizeBucket",
	"justknobx",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c.useState, p = { photoWrapper: {
		display: "x78zum5",
		justifyContent: "xl56j7k",
		width: "xh8yej3",
		$$css: !0
	} };
	function _(t) {
		"use no forget";
		var n, a, i, l, c, _, f = t.HoverIcon, g = t.chat, h = t.forceClickable, y = h === void 0 ? !1 : h, C = t.readOnly, b = C === void 0 ? !1 : C, v = t.showAddIconOverlay, S = v === void 0 ? !1 : v, R = t.showHiddenSubgroupIcon, L = R === void 0 ? !1 : R, E = t.size, k = t.testid, I = t.xstyle, T = o("useWAWebModelValues").useModelValues(g, ["isReadOnly", "formattedTitle"]), D = o("useWAWebModelValues").useModelValues(g.contact, ["id", "profilePicThumb"]), x = g.contact.getProfilePicThumb(), $ = o("useWAWebModelValues").useModelValues(x, ["imgFull"]), P = o("useWAWebModelValues").useModelValues(r("nullthrows")(g.groupMetadata), ["groupType", "size"]), N = (n = g.groupMetadata) == null ? void 0 : n.participants, M = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(N, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", M);
		var w = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo"), A = w && r("justknobx")._("550"), F = (a = A ? o("WAWebStatusCollection").StatusCollection.get(g.id) : null) != null ? a : null;
		o("useWAWebListener").useListener(A ? o("WAWebStatusCollection").StatusCollection : null, [
			"add",
			"remove",
			"change:msgsChanged"
		], M);
		var O = o("useWAWebModelValues").useOptionalModelValues(F, ["unreadCount", "totalCount"]), B = (i = O == null ? void 0 : O.totalCount) != null ? i : 0, W = (l = O == null ? void 0 : O.unreadCount) != null ? l : 0, q = F != null && B > 0 ? {
			totalCount: B,
			viewedCount: B - W
		} : void 0, U = (c = N == null ? void 0 : N.length) != null ? c : 0, V = (_ = P == null ? void 0 : P.size) != null ? _ : 0, H = N != null && N.iAmAdmin() ? U : V, G = m(!1), z = G[0], j = G[1], K = m(!1), Q = K[0], X = K[1], Y = r("useWAWebUnmountSignal")(), J = function(n, a) {
			X(!0);
			var t;
			n && a ? t = o("WAWebProfilePicThumbAction").setProfilePic($, n, a) : t = o("WAWebProfilePicThumbAction").deleteProfilePic($), r("WAPromiseRaceAbort")(t, Y).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").ActionError, function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["GroupInfoDrawer: failed to set/delete group image"]))), j(!z);
			})).finally(function() {
				X(!1);
			});
		}, Z = function(t) {
			var e, n, r = t.groupProfileAction, a = t.hasProfilePicture, i = t.profilePictureType, l = g == null || (e = g.groupMetadata) == null ? void 0 : e.creation, s = new Date((l != null ? l : 0) * 1e3), u = new Intl.DateTimeFormat("en", { year: "numeric" }).format(s), c = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(s), d = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(s), m = l != null ? u + "-" + c + "-" + d : "", p = o("WAWebWamNumberToPreciseSizeBucket").numberToPreciseSizeBucket(H), _ = (n = N == null ? void 0 : N.iAmAdmin()) != null ? n : !1;
			new (o("WAWebGroupProfilePictureWamEvent")).GroupProfilePictureWamEvent({
				groupCreationDs: m,
				groupProfileAction: r,
				preciseGroupSizeBucket: p,
				isAdmin: _,
				hasProfilePicture: a,
				profilePictureType: i
			}).commit();
		}, ee = P.groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP, te = o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP;
		ee ? te = o("WAWebPhotoPickerConstants").PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP : P.groupType === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP && (te = o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP);
		var ne = b || T.isReadOnly || $ && !$.canDelete() && !$.canSet() || o("WAWebChatGroupUtils").isSupportGroup(T) || ee || P.isSuspendedOrTerminated(), re = s._(
			/*BTDS*/
			"",
			[s._param("group-name", T.title())]
		);
		return d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(w && p.photoWrapper, I), {
			"aria-label": re,
			children: d.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
				type: te,
				id: D.id,
				attachToChat: !0,
				forceClickable: y,
				pending: Q,
				statusModelId: g.id,
				statusRing: q,
				startImage: $ == null ? void 0 : $.imgFull,
				readOnly: ne,
				onImageSet: J,
				sendGroupProfilePictureLoggingEvent: Z,
				HoverIcon: f,
				showAddIconOverlay: S,
				showHiddenSubgroupIcon: L,
				size: E,
				testid: k != null ? k : "group-info-photo"
			}, String(z))
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
