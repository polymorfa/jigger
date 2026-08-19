__d("WAFlowsScreenAnimation.react", [
	"ReactRouterDOM",
	"WAFlowsContainerElementIDs",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsScreenAnimationContext",
	"WAFlowsScreenUtils",
	"addClasses",
	"animateScreenFromCurrentXPosition",
	"getStyleValue",
	"react",
	"react-transition-group",
	"removeClasses",
	"resetScreenAnimation"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useMemo, d = u.useState;
	function m(e) {
		var t, n = e.children, a = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), i = a.flowInitData, l = i[0], u = (t = l == null ? void 0 : l.environment.is_flow_interactive) != null ? t : !0, m = d(null), _ = m[0], f = m[1], g = d(!1), h = g[0], y = g[1], C = o("ReactRouterDOM").useLocation(), b = c(function() {
			return {
				animatingScreen: h,
				setAnimatingScreen: y
			};
		}, [h, y]), v = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), S = v.flowInstanceId;
		return s.jsx("div", {
			id: S(r("WAFlowsContainerElementIDs").ANIMATION_CONTENT_CONTAINER_ID),
			ref: function(t) {
				f(u ? o("WAFlowsScreenUtils").getMilliseconds(o("getStyleValue").getStyleValue("--waf-wds-animation-duration", t)) : 0);
			},
			className: "x1n2onr6 x1iyjqo2 x6ikm8r x10wlt62 x8du1vd x10e4vud",
			children: _ != null ? s.jsx(o("WAFlowsScreenAnimationContext").WAFlowsScreenAnimationContext.Provider, {
				value: b,
				children: s.jsx(o("react-transition-group").TransitionGroup, {
					component: null,
					children: s.jsx(p, {
						classNames: "screen-animation",
						timeout: _,
						children: s.jsx(o("ReactRouterDOM").Switch, {
							location: C,
							children: n
						})
					}, C.pathname)
				})
			}) : s.jsx(s.Fragment, {})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = function() {
			return {
				base: "",
				active: "",
				done: ""
			};
		}, n = d({
			enter: t(),
			exit: t()
		}), r = n[0], a = n[1], i = o("WAFlowsScreenAnimationContext").useWAFlowsScreenAnimation(), l = i.setAnimatingScreen, u = o("ReactRouterDOM").useHistory(), c = function(t) {
			o("animateScreenFromCurrentXPosition").animateScreenFromCurrentXPosition(t, "enter"), y(t, "exit"), h(t, "enter", "base"), l(!0);
		}, m = function(t) {
			h(t, "enter", "active");
		}, p = function(t) {
			y(t, "enter"), h(t, "enter", "done"), o("resetScreenAnimation").resetScreenAnimation(t), l(!1);
		}, _ = function(t) {
			o("animateScreenFromCurrentXPosition").animateScreenFromCurrentXPosition(t, "exit"), y(t, "enter"), h(t, "exit", "base");
		}, f = function(t) {
			h(t, "exit", "active");
		}, g = function(n) {
			y(n, "exit"), h(n, "exit", "done"), e.onExited == null || e.onExited(n);
		}, h = function(t, n, r) {
			var e = C(n), i = e[r + "ClassName"];
			i && (a(function(e) {
				var t, o;
				return babelHelpers.extends({}, e, (o = {}, o[String(n)] = babelHelpers.extends({}, e[n], (t = {}, t[String(r)] = i, t)), o));
			}), o("addClasses").addClasses(t, i + " " + u.action.toLowerCase()));
		}, y = function(n, i) {
			var e, l = r[i], s = l.active, u = l.base, c = l.done;
			a(function(e) {
				var n;
				return babelHelpers.extends({}, e, (n = {}, n[String(i)] = t(), n));
			}), (e = o("removeClasses")).removeClasses(n, u), e.removeClasses(n, s), e.removeClasses(n, c), e.removeClasses(n, "push pop");
		}, C = function(n) {
			var t = e.classNames + "-", r = "" + t + n, o = r + "-active", a = r + "-done";
			return {
				baseClassName: r,
				activeClassName: o,
				doneClassName: a
			};
		};
		return s.jsx(o("react-transition-group").Transition, babelHelpers.extends({}, e, {
			onEnter: c,
			onEntering: m,
			onEntered: p,
			onExit: _,
			onExiting: f,
			onExited: g,
			children: e.children
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 98);
