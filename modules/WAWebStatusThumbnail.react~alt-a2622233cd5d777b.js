__d("WAWebStatusThumbnail.react", [
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebFrontendStatusGetters",
	"WAWebMsgGetters",
	"WAWebStateUtils",
	"WAWebStatusGatingUtils",
	"WAWebStatusImageRing.react",
	"WAWebStatusThumbnailComponents.react",
	"WDSFocusStateStyles",
	"WDSVars.stylex",
	"gkx",
	"react",
	"stylex",
	"useWAWebContactValues",
	"useWAWebIsKeyboardUser",
	"useWAWebStaticButtonA11y",
	"useWAWebStatusValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useMemo, d = {
		container: {
			paddingTop: "xz9dl7a",
			paddingInlineEnd: "x1q3ajuy",
			paddingBottom: "xsag5q8",
			paddingInlineStart: "xbmws1g",
			position: "x1n2onr6",
			borderStartStartRadius: "xr9e8f9",
			borderStartEndRadius: "x1e4oeot",
			borderEndEndRadius: "x1ui04y5",
			borderEndStartRadius: "x6en5u8",
			$$css: !0
		},
		thumbSizeSmall: {
			height: "x1vqgdyp",
			width: "x100vrsf",
			$$css: !0
		},
		marginTop2: {
			marginTop: "xfl633f",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.ariaLabel, a = t.id, i = t.msg, l = t.showRing, s = l === void 0 ? !1 : l, m = t.tabIndex, p = o("useWAWebStatusValues").useStatusValues(a, [o("WAWebFrontendStatusGetters").getLastStatus]), _ = p[0], f = o("useWAWebContactValues").useContactValues(t.contact.id, [o("WAWebContactGetters").getStatusMute]), g = f[0], h = r("useWAWebIsKeyboardUser")(), y = h.isKeyboardUser, C = r("useWAWebStaticButtonA11y")(t.onClick), b = C[0], v = C[1], S = i != null ? i : _, R = c(function() {
			return !o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled() || _ == null ? null : _.statusAudienceMetadata != null ? o("WDSVars.stylex").WDSBaseColor.plum400 : null;
		}, [_]), L = function() {
			if (!r("gkx")("26258") && S) {
				var e = o("WAWebStateUtils").unproxy(S);
				window.msg = e;
			}
		}, E = d.thumbSizeSmall, k = S ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: o("WAWebMsgGetters").getSender(S),
			theme: "status",
			size: 40
		}) : null;
		return u.jsxs("div", babelHelpers.extends({ ref: b }, v, {
			tabIndex: m,
			className: (e || (e = r("stylex")))(d.container, E, d.marginTop2, y && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus),
			"aria-label": n,
			role: t.role || "",
			onContextMenu: r("gkx")("26258") ? null : L,
			onClickCapture: function(n) {
				t.onClick == null || t.onClick(), n.stopPropagation(), n.preventDefault();
			},
			"data-testid": "status-thumbnail",
			children: [g && !s ? null : u.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
				id: a,
				breakRing: !0,
				customUnreadRingColor: R
			}), u.jsx(o("WAWebStatusThumbnailComponents.react").StatusMsgThumbnail, {
				msg: S,
				thumbnailPlaceholder: k,
				size: "small"
			})]
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
