__d("WAWebChatCell.react", [
	"fbt",
	"WAWebABProps",
	"WAWebAccessibility.react",
	"WAWebCellFrame.react",
	"WAWebEmojiText.react",
	"WAWebFocusTracer",
	"WAWebFormatConfiguration",
	"WAWebKeyboardIsKeyActivation",
	"WAWebPrivacyBlurWrapper.react",
	"WAWebSpinner.react",
	"WAWebStopEvent",
	"WAWebVelocityTransitionGroup",
	"WDSFocusStateStyles",
	"WDSIconIcExpandMore.react",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebIntersection",
	"useWAWebIsKeyboardUser",
	"useWAWebPrevious"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.Fragment, _ = m.useImperativeHandle, f = m.useRef, g = m.useState, h = { marginInlineStart6: {
		marginInlineStart: "xdzw4kq",
		$$css: !0
	} }, y = { rootMargin: "300px" }, C = {
		btnContext: {
			display: "x1rg5ohu",
			width: "xn6xy2s",
			height: "x1qx5ct2",
			marginInlineStart: "x1wbi8v6",
			color: "xhslqc4",
			verticalAlign: "x16dsc37",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		btnContextAdjust: {
			width: "xw4jnvo",
			height: "x1qx5ct2",
			marginInlineEnd: "x18faa90",
			$$css: !0
		},
		btnContextVerticallyCenter: {
			position: "x1n2onr6",
			top: "x1fur4o1",
			$$css: !0
		},
		btnContextHidden: {
			visibility: "xlshs6z",
			pointerEvents: "x47corl",
			$$css: !0
		},
		chevron: {
			float: "xtrg13t",
			$$css: !0
		}
	};
	function b(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.contextEnabled, l = a.onContext, c = a.onMouseEnter, m = a.onMouseLeave, b = g(!1), v = b[0], S = b[1], R = g(!1), L = R[0], E = R[1], k = g(!1), I = k[0], T = k[1], D = r("useWAWebPrevious")(L), x = r("useWAWebIsKeyboardUser")(), $ = x.isKeyboardUser, P = f(null), N = f(null), M = r("useWAWebIntersection")(y), w = M[0], A = M[1].isIntersecting, F = r("useMergeRefs")(N, w), O = function() {
			return N.current;
		};
		D && !a.contextMenu && E(!1);
		var B = function(t) {
			t.stopPropagation(), !(!i() && !L) && (t.preventDefault(), l == null || l({ anchor: P.current }));
		}, W = function(t) {
			if (r("WAWebKeyboardIsKeyActivation")(t)) {
				if (t.stopPropagation(), t.preventDefault(), !i() && !L) return;
				l == null || l({ anchor: P.current });
			}
		}, q = function() {
			return P.current;
		}, U = function(t) {
			i() && (t.stopPropagation(), t.preventDefault(), l && l({ event: t }));
		}, V = function() {
			!P && !a.contextEnabled() || r("WAWebFocusTracer").focus(P.current);
		}, H = function() {
			!v && !L && a.contextEnabled() && S(!0);
		}, G = function() {
			!v && !L && a.contextEnabled() && (S(!0), c == null || c());
		}, z = function() {
			v && (S(!1), m == null || m());
		}, j = $ && a.active === !0 && a.contextEnabled(), K = function() {
			var e;
			(e = P.current) == null || e.removeAttribute("aria-hidden"), T(!0);
		}, Q = function() {
			var e;
			(e = P.current) == null || e.setAttribute("aria-hidden", "true"), T(!1);
		};
		_(n, function() {
			return {
				focusOnContextMenuButton: V,
				mouseOver: H,
				mouseLeave: z,
				getContextMenuRef: q,
				getCellFrameDivRef: O
			};
		});
		var X = a.primary, Y = typeof X == "string" ? d.jsx(o("WAWebEmojiText.react").EmojiText, {
			direction: "auto",
			ellipsify: !0,
			formatters: o("WAWebFormatConfiguration").Search({ terms: a.searchText ? [a.searchText] : [] }),
			text: X,
			titlify: !0
		}) : X, J = s._(
			/*BTDS*/
			""
		), Z = null, ee = null;
		if (a.pendingAction != null && a.pendingAction > 0) ee = d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(C.btnContext, $ && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), { children: d.jsx(o("WAWebSpinner.react").Spinner, {
			color: "highlight",
			size: 18,
			stroke: 6
		}) }));
		else if (a.contextEnabled()) {
			var te, ne = v || a.active === !0 || j || a.contextMenu === !0, re = (u || (u = r("stylex")))(C.btnContext, (a.theme === "hidden-status-row-cell" || a.theme === "product" || a.theme === "label-list" || a.theme === "label-list-no-border" || a.theme === "quick-replies-drawer-item") && C.btnContextVerticallyCenter, $ && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, [C.btnContextAdjust, h.marginInlineStart6], !ne && C.btnContextHidden), oe = a.theme === "chat-info", ae = d.jsx(r("WDSIconIcExpandMore.react"), {
				width: 20,
				height: 20,
				iconXstyle: oe ? C.secondaryColor : null
			});
			Z = d.jsxs("button", {
				className: re,
				"data-testid": "context-btn",
				onBlur: Q,
				onClick: B,
				onFocus: K,
				onKeyDown: W,
				onMouseDown: o("WAWebStopEvent").stopPropagation,
				ref: P,
				tabIndex: a.contextMenuControlled ? -1 : 0,
				children: [ae, I && d.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
					assertive: !0,
					startWithText: !0,
					text: (te = a.contextMenuAriaLabel) != null ? te : J
				})]
			}, "icon-context");
		}
		var ie = d.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "fade",
			children: ee
		}), le = d.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "pop-fast-chat",
			xstyle: C.chevron,
			children: v || j || a.contextMenu === !0 ? Z : null
		}), se, ue, ce = null;
		a.secondary != null ? a.primaryDetail != null ? (se = a.primaryDetail, ue = [
			d.jsx(p, { children: a.secondaryDetail }, "prop"),
			d.jsx(p, { children: ie }, "spinner"),
			d.jsx(p, { children: le }, "button")
		]) : (se = null, ue = a.secondaryDetail != null ? d.jsx(d.Fragment, { children: a.secondaryDetail }) : null, ce = d.jsxs(d.Fragment, { children: [ie, le] })) : se = [
			d.jsx(p, { children: a.primaryDetail }, "prop"),
			d.jsx(p, { children: ie }, "spinner"),
			d.jsx(p, { children: le }, "button")
		];
		var de = {
			0: "x1yjtglu xiitwr3 x206yn3",
			1: "xb5mbof xiitwr3 x206yn3"
		}[!!(o("WAWebABProps").getABPropConfigValue("web_chats_content_visibility") && !A) << 0], me = [a.className, de].filter(Boolean).join(" ");
		return d.jsx(r("WAWebPrivacyBlurWrapper.react"), {
			containerRef: N,
			forceReveal: j,
			children: d.jsx(r("WAWebCellFrame.react"), {
				active: a.active,
				activeStyleType: a.activeStyleType,
				checkbox: a.checkbox,
				className: me,
				containerRole: a.containerRole,
				customImage: a.customImage,
				detail: ce != null ? d.jsxs(d.Fragment, { children: [a.detail, ce] }) : a.detail,
				dragging: a.dragging,
				extendSecondaryEllipsis: a.extendSecondaryEllipsis,
				focusid: a.focusid,
				handleKeyboardClick: a.handleKeyboardClick,
				hideMeta: a.hideMeta,
				idle: a.idle,
				image: a.image,
				isMuted: a.isMuted,
				label: a.label,
				onClick: a.onClick,
				onContextMenu: a.contextEnabled() ? U : null,
				onMouseDown: a.onMouseDown,
				onMouseEnter: v ? null : G,
				onMouseLeave: v ? z : null,
				onMouseOver: v ? null : H,
				primary: Y,
				primaryDetail: se,
				ref: F,
				role: a.role,
				secondary: a.secondary,
				secondaryDetail: ue,
				tabIndex: a.tabIndex,
				tallerCellWithMemberLabel: a.tallerCellWithMemberLabel,
				tertiary: a.tertiary,
				testid: a.testid,
				theme: a.theme,
				unreadStyle: a.unreadStyle
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
