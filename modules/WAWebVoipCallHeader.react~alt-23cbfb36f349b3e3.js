__d("WAWebVoipCallHeader.react", [
	"WAWebCallTimer.react",
	"WAWebVoipCallStateUtils",
	"WDSText.react",
	"react",
	"useWAWebIsKeyboardUser",
	"useWAWebStableCallback",
	"useWAWebThrottledCallback",
	"useWAWebVoipCallHeaderVisibility"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState, m = 100, p = {
		timer: {
			color: "x17t9dm2",
			fontVariantNumeric: "xss6m8b",
			lineHeight: "xd4r4e8",
			maxWidth: "x193iq5w",
			opacity: "x1iy03kw",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			textShadow: "x15y3ue",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		timerCompact: {
			fontSize: "x1pg5gke",
			lineHeight: "x1d3mw78",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.callState, n = e.getActivityContainer, a = e.isCompactLayout, i = e.isMenuOpen, l = i === void 0 ? !1 : i, u = e.name, _ = d(!1), f = _[0], g = _[1], h = r("useWAWebIsKeyboardUser")(), y = h.isKeyboardUser, C = o("useWAWebVoipCallHeaderVisibility").useWAWebVoipCallHeaderVisibility(l || y && f), b = C[0], v = C[1], S = r("useWAWebStableCallback")(v), R = r("useWAWebThrottledCallback")(S, m);
		return c(function() {
			var e = n == null ? void 0 : n();
			if (e != null) {
				var t = function() {
					S();
				}, r = function(n) {
					g(n.target !== e), S();
				}, o = function(n) {
					var t = n.relatedTarget;
					(!(t instanceof Node) || !e.contains(t)) && (g(!1), S());
				};
				return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointerdown", t), e.addEventListener("pointermove", R), function() {
					e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointerdown", t), e.removeEventListener("pointermove", R);
				};
			}
		}, [
			n,
			R,
			S
		]), o("WAWebVoipCallStateUtils").isCallActive(t) ? s.jsx("div", babelHelpers.extends({
			"aria-hidden": !b,
			"data-testid": "voip-call-header"
		}, {
			0: { className: "x6s0dn4 x1u3vkv0 x9f619 x78zum5 xdt5ytf xjp8j0k xtijo5x x1o0tod x1hc1fzr x1j1r7yx x16025s9 xw8kemb x1y869pa x47corl x10l6tqk x13vifvy xx6bhzk x12w9bfk x19991ni x9lcvmn x1jeq31z" },
			1: { className: "x6s0dn4 x1u3vkv0 x9f619 x78zum5 xdt5ytf xjp8j0k xtijo5x x1o0tod x1j1r7yx x16025s9 xw8kemb x1y869pa x47corl x10l6tqk x13vifvy xx6bhzk x12w9bfk x19991ni x9lcvmn x1jeq31z xg01cxk" }
		}[!b << 0], { children: s.jsxs("div", {
			className: "x6s0dn4 x78zum5 xdt5ytf x1b73lln x46w9ns x98l61r xxc7z9f xeuugli xh8yej3",
			children: [u != null && s.jsx("div", {
				"data-testid": "voip-call-header-name",
				className: "x193iq5w xeuugli x6ikm8r x10wlt62 x2b8uid xlyipyv x15y3ue xuxw1ft",
				children: s.jsx(r("WDSText.react"), {
					colorName: "persistentAlwaysWhite",
					maxLines: 1,
					selectable: !1,
					type: a ? "Body2Emphasized" : "Body1Emphasized",
					children: u
				})
			}), s.jsx(r("WAWebCallTimer.react"), {
				callState: t,
				xstyle: [p.timer, a && p.timerCompact]
			})]
		}) })) : null;
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
