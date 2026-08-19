__d("WAWebStatusListHeader.react", [
	"fbt",
	"WAWebContactCollection",
	"WAWebCrosspostingIcons.react",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebStatusAvatarWithPlusBadge.react",
	"WAWebStatusCollection",
	"WAWebStatusLastPostPreview.react",
	"WAWebStatusPlusBadge.react",
	"WAWebStatusPostingDropdown.react",
	"WAWebStatusThumbnail.react",
	"WAWebStatusViewer.react",
	"WAWebUnstyledButton.react",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumStatusCreationEntryPoint",
	"WAWebWamEnumStatusRowSection",
	"WDSFocusStateStyles",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebEventTargetValue",
	"useWAWebFocusState",
	"useWAWebListener",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState, f = {
		panelHeader: {
			display: "x78zum5",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			flexDirection: "x1q0g3np",
			alignItems: "x6s0dn4",
			justifyContent: "x1qughib",
			width: "xh8yej3",
			height: "xwnsf4a",
			textAlign: "x1yc453h",
			$$css: !0
		},
		clickable: {
			cursor: "x1ypdohk",
			backgroundColor: "x1ubxc9n",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			marginInlineStart: "x1hm9lzh",
			marginInlineEnd: "x1sa5p1d",
			width: "xnlsq7q",
			$$css: !0
		},
		headerText: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "x1qughib",
			minWidth: "x9hgts1",
			height: "xc9qbxq",
			marginInlineEnd: "x11t971q",
			$$css: !0
		},
		thumbnailBadgePosition: {
			bottom: "xqo3gd",
			insetInlineEnd: "x1bv8kjd",
			left: null,
			right: null,
			$$css: !0
		}
	};
	function g(t) {
		var n, a = t.sessionIdRef, i = r("useWAWebFocusState")(), l = i[0], u = i[1], d = p(null), g = _(function() {
			return o("WAWebStatusCollection").StatusCollection.getMyStatus();
		}), h = g[0], y = g[1], C = _(function() {
			return h == null ? void 0 : h.msgs.last();
		}), b = C[0], v = C[1], S = r("useWAWebEventTargetValue")(b, "change:crosspostingInfo", function() {
			return b == null ? void 0 : b.crosspostingInfo;
		}), R = function() {
			var e;
			y(o("WAWebStatusCollection").StatusCollection.getMyStatus()), v((e = o("WAWebStatusCollection").StatusCollection.getMyStatus()) == null ? void 0 : e.msgs.last());
		};
		o("useWAWebListener").useListener(o("WAWebStatusCollection").StatusCollection, "add remove bulk_add sort change:msgsChanged change:unreadCount", R), o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "change:statusMute", R);
		var L, E, k;
		h && (k = h.msgs);
		var I = function() {
			var e = h == null ? void 0 : h.msgs;
			h && e != null && e.length && o("WAWebModalManager").ModalManager.openMedia(c.jsx(r("WAWebStatusViewer.react"), {
				initialStatus: h,
				initialStatusMsg: void 0,
				closeStatusViewer: function() {
					o("WAWebModalManager").ModalManager.closeMedia();
				},
				sessionId: a == null ? void 0 : a.current,
				rowIdx: 0,
				rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MY_STATUS,
				continuousPlay: !0
			}), {
				transition: "status-modal",
				focusType: { type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM }
			});
		}, T = null, D = s._(
			/*BTDS*/
			""
		), x = r("useWDSMenu")({
			targetRef: d,
			menu: c.jsx(o("WAWebStatusPostingDropdown.react").AddStatusMenu, { entryPoint: o("WAWebWamEnumStatusCreationEntryPoint").STATUS_CREATION_ENTRY_POINT.STATUS_TAB_SELF_POG }),
			dismissable: !0
		}), $ = x.closeMenu, P = x.isMenuOpen, N = x.menuPortal, M = x.openMenu, w = m(function() {
			P ? $() : M();
		}, [
			P,
			$,
			M
		]), A = function(t) {
			t == null || t.stopPropagation(), w();
		};
		if (h && (n = k) != null && n.length) L = c.jsxs("div", {
			className: "x1n2onr6 x3nfvp2",
			children: [c.jsx(r("WAWebStatusThumbnail.react"), {
				tabIndex: -1,
				ariaLabel: D,
				id: h.id,
				contact: h.contact,
				onClick: A
			}), c.jsx(r("WAWebStatusPlusBadge.react"), {
				anchorRef: d,
				positionXstyle: f.thumbnailBadgePosition,
				onClick: A
			})]
		}), E = c.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4",
			children: [c.jsx(r("WAWebStatusLastPostPreview.react"), { msg: r("nullthrows")(b) }), S != null ? c.jsx(r("WAWebCrosspostingIcons.react"), {
				crosspostingInfo: S,
				testidPrefix: "status-header"
			}) : null]
		}), T = I;
		else {
			L = c.jsx(r("WAWebStatusAvatarWithPlusBadge.react"), {
				anchorRef: d,
				id: o("WAWebUserPrefsMeUser").getMeUserOrThrow()
			});
			var F = s._(
				/*BTDS*/
				""
			);
			E = c.jsx("span", {
				"data-testid": "status-no-updates",
				className: "x1nxh6w3 xhslqc4",
				children: F
			}), T = w;
		}
		var O = c.jsx("span", {
			"data-testid": "my-status",
			className: "x1jchvi3",
			children: s._(
				/*BTDS*/
				""
			)
		}), B = c.jsxs(c.Fragment, { children: [c.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: [f.panelHeader, f.clickable],
			onClick: T,
			ref: l,
			testid: "status-header",
			children: [c.jsx("div", {
				className: "x1n2onr6",
				children: c.jsx("div", {
					className: "x78zum5 x1q0g3np x6s0dn4 xl56j7k x13zx6y x1peatla x17t9dm2",
					children: L
				})
			}), c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.headerText, u && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent), { children: [O, E] }))]
		}), N] });
		return B;
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
