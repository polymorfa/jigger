__d("WAWebStatusImageRing.react", [
	"$InternalEnum",
	"WAWebFrontendStatusGetters",
	"WAWebStatusGatingUtils",
	"WAWebStatusGetters",
	"WDSVars.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebStatusValues"
], (function(t, n, r, o, a, i, l) {
	var e = ["customStrokeColor"], s, u, c = u || (u = o("react")), d = "xnrop4s-B", m = {
		businessContactInfoRing: {
			marginTop: "x1380le5",
			position: "x10l6tqk",
			$$css: !0
		},
		read: {
			stroke: "x1xwosuo",
			color: "x18cpw0e",
			$$css: !0
		},
		statusPanelRing: {
			marginInlineStart: "x165d6jo",
			marginTop: "x1rdy4ex",
			position: "x10l6tqk",
			$$css: !0
		},
		chatListRing: {
			marginInlineStart: "xe9ewy2",
			marginTop: "x1kgmq87",
			position: "x10l6tqk",
			$$css: !0
		},
		updatesTabRing: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			$$css: !0
		},
		unread: {
			stroke: "xg8543d",
			color: "x5ymo0g",
			$$css: !0
		},
		unreadCloseFriends: {
			stroke: "xc8us4n",
			$$css: !0
		},
		unreadDarkModeOnly: {
			stroke: "xc92gef",
			color: "x1r8hjv8",
			$$css: !0
		},
		loadingRing: {
			backgroundColor: "xtwfq29",
			backgroundImage: "x1c5nfnd",
			filter: "xhe8x8x",
			animationName: "x1e112to",
			animationDuration: "x7t6ubo",
			animationTimingFunction: "x1esw782",
			animationIterationCount: "xa4qsjk",
			$$css: !0
		}
	}, p = n("$InternalEnum").Mirrored([
		"StatusPanel",
		"BusinessContactInfo",
		"ChatList",
		"UpdatesTab"
	]), _ = new Map([
		[p.StatusPanel, m.statusPanelRing],
		[p.BusinessContactInfo, m.businessContactInfoRing],
		[p.ChatList, m.chatListRing],
		[p.UpdatesTab, m.updatesTabRing]
	]), f = 50, g = 10, h = function(t, n) {
		return n != null ? m.unreadCloseFriends : t ? m.unread : m.unreadDarkModeOnly;
	}, y = function(t) {
		var e = t.dashSize, n = t.gapSize, r = t.numDashes, o = t.totalSize;
		return new Array(r).fill(void 0).map(function(t, a) {
			var i = a === r - 1 ? o - r * (n + e) + n : n;
			return e + " " + i;
		}).join(" ");
	}, C = function(t, n, r, o) {
		return t + n * (r + o);
	};
	function b(t) {
		var n = o("react-compiler-runtime").c(9), r = (2 * f + t.strokeWidth) / 2, a, i;
		n[0] !== t ? (i = t.customStrokeColor, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l;
		n[3] !== i ? (l = i != null ? { style: { stroke: i } } : void 0, n[3] = i, n[4] = l) : l = n[4];
		var s;
		return n[5] !== a || n[6] !== r || n[7] !== l ? (s = c.jsx("circle", babelHelpers.extends({
			cx: r,
			cy: r,
			r: f,
			fill: "none",
			strokeLinecap: "round"
		}, a, l)), n[5] = a, n[6] = r, n[7] = l, n[8] = s) : s = n[8], s;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(16), n = e.className, r = e.customStrokeColor, a = e.dashesToDraw, i = e.dashesToOffsetBy, l = e.stroke, s = e.totalDashes, u = g, d = Math.PI * f * 2;
		d - g * s < 1 && (u = d / s / 1.2);
		var m = (d - u * s) / s, p = d / 4 - u / 2, _;
		t[0] !== m || t[1] !== i || t[2] !== u || t[3] !== p ? (_ = C(p, i, u, m), t[0] = m, t[1] = i, t[2] = u, t[3] = p, t[4] = _) : _ = t[4];
		var h = _, v;
		t[5] !== m || t[6] !== a || t[7] !== u || t[8] !== s ? (v = s !== 1 ? y({
			dashSize: m,
			gapSize: u,
			numDashes: a,
			totalSize: d
		}) : void 0, t[5] = m, t[6] = a, t[7] = u, t[8] = s, t[9] = v) : v = t[9];
		var S = v, R;
		return t[10] !== n || t[11] !== r || t[12] !== S || t[13] !== h || t[14] !== l ? (R = c.jsx(b, {
			className: n,
			customStrokeColor: r,
			strokeDashoffset: h,
			strokeDasharray: S,
			strokeWidth: l
		}), t[10] = n, t[11] = r, t[12] = S, t[13] = h, t[14] = l, t[15] = R) : R = t[15], R;
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(13), n = e.customUnreadRingColor, a = e.respectAppTheme, i = e.stroke, l = e.totalCount, u = e.unreadCount, d = l - u, m;
		t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== u ? (m = u > 0 ? c.jsx(v, {
			className: (s || (s = r("stylex")))(h(a)),
			customStrokeColor: n,
			totalDashes: l,
			dashesToDraw: u,
			dashesToOffsetBy: l,
			stroke: i
		}) : null, t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = u, t[5] = m) : m = t[5];
		var p = m, _;
		t[6] !== d || t[7] !== i || t[8] !== l ? (_ = d > 0 ? c.jsx(v, {
			className: "x1xwosuo x18cpw0e",
			totalDashes: l,
			dashesToDraw: d,
			dashesToOffsetBy: d,
			stroke: i
		}) : null, t[6] = d, t[7] = i, t[8] = l, t[9] = _) : _ = t[9];
		var f = _, g;
		return t[10] !== f || t[11] !== p ? (g = c.jsxs("g", {
			"data-testid": "status-ring-broken",
			children: [p, f]
		}), t[10] = f, t[11] = p, t[12] = g) : g = t[12], g;
	}
	var R = function(t, n) {
		var e = t / (2 * f + n), r = t / 2, o = r - n * e, a = "radial-gradient(circle, transparent " + (o - .5) + "px, black " + (o + .5) + "px, black " + (r - .5) + "px, transparent " + (r + .5) + "px)";
		return {
			width: t,
			height: t,
			mask: a,
			WebkitMask: a
		};
	};
	function L(e) {
		var t = o("react-compiler-runtime").c(17), n = e.customUnreadRingColor, a = e.positioning, i = e.respectAppTheme, l = e.size, u = e.stroke, d = e.testid, p = e.unreadCount, _ = n === void 0 ? null : n, f = a === void 0 ? null : a, g = i === void 0 ? !1 : i, y = d === void 0 ? null : d, C;
		t[0] !== _ || t[1] !== f || t[2] !== g || t[3] !== p ? (C = (s || (s = r("stylex")))(f, m.loadingRing, p > 0 ? h(g, _) : m.read), t[0] = _, t[1] = f, t[2] = g, t[3] = p, t[4] = C) : C = t[4];
		var b;
		t[5] !== l || t[6] !== u ? (b = R(l, u), t[5] = l, t[6] = u, t[7] = b) : b = t[7];
		var v;
		t[8] !== _ ? (v = _ != null ? { color: _ } : void 0, t[8] = _, t[9] = v) : v = t[9];
		var S;
		t[10] !== b || t[11] !== v ? (S = babelHelpers.extends({}, b, v), t[10] = b, t[11] = v, t[12] = S) : S = t[12];
		var L;
		return t[13] !== C || t[14] !== S || t[15] !== y ? (L = c.jsx("div", {
			className: C,
			"data-testid": y,
			style: S
		}), t[13] = C, t[14] = S, t[15] = y, t[16] = L) : L = t[16], L;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(9), n = e.customUnreadRingColor, r = e.respectAppTheme, a = e.size, i = e.stroke, l = e.theme, s = e.unreadCount, u;
		t[0] !== l ? (u = _.get(l), t[0] = l, t[1] = u) : u = t[1];
		var d;
		return t[2] !== n || t[3] !== r || t[4] !== a || t[5] !== i || t[6] !== u || t[7] !== s ? (d = c.jsx(L, {
			customUnreadRingColor: n,
			positioning: u,
			respectAppTheme: r,
			size: a,
			stroke: i,
			unreadCount: s
		}), t[2] = n, t[3] = r, t[4] = a, t[5] = i, t[6] = u, t[7] = s, t[8] = d) : d = t[8], d;
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(24), n = e.id, a = e.stroke, i = e.size, l = e.breakRing, u = e.hideWhenNoUnreadStatuses, d = e.respectAppTheme, g = e.theme, y = e.customUnreadRingColor, C = a === void 0 ? 4 : a, v = i === void 0 ? 48 : i, R = l === void 0 ? !0 : l, L = u === void 0 ? !1 : u, k = d === void 0 ? !1 : d, I = g === void 0 ? p.StatusPanel : g, T = y === void 0 ? null : y, D;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (D = [
			o("WAWebStatusGetters").getUnreadCount,
			o("WAWebStatusGetters").getTotalCount,
			o("WAWebStatusGetters").getIsLoading,
			o("WAWebFrontendStatusGetters").getHasUnreadCloseFriendStatus
		], t[0] = D) : D = t[0];
		var x = o("useWAWebStatusValues").useStatusValues(n, D), $ = x[0], P = x[1], N = x[2], M = x[3], w = T != null ? T : o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled() && M ? o("WDSVars.stylex").WDSBaseColor.plum400 : null;
		if ($ <= 0 && L || P === 0) return null;
		if (N) {
			var A;
			return t[1] !== w || t[2] !== k || t[3] !== v || t[4] !== C || t[5] !== I || t[6] !== $ ? (A = c.jsx(E, {
				customUnreadRingColor: w,
				respectAppTheme: k,
				size: v,
				stroke: C,
				theme: I,
				unreadCount: $
			}), t[1] = w, t[2] = k, t[3] = v, t[4] = C, t[5] = I, t[6] = $, t[7] = A) : A = t[7], A;
		}
		var F = 2 * f + C, O = "0 0 " + F + " " + F, B = w != null && $ > 0, W;
		t[8] !== R || t[9] !== B || t[10] !== w || t[11] !== k || t[12] !== C || t[13] !== P || t[14] !== $ ? (W = !R || P === 1 || B ? c.jsx(b, {
			className: (s || (s = r("stylex")))($ > 0 ? h(k, w) : m.read),
			customStrokeColor: $ > 0 ? w : null,
			strokeWidth: C
		}) : c.jsx(S, {
			customUnreadRingColor: w,
			totalCount: P,
			unreadCount: $,
			stroke: C,
			respectAppTheme: k
		}), t[8] = R, t[9] = B, t[10] = w, t[11] = k, t[12] = C, t[13] = P, t[14] = $, t[15] = W) : W = t[15];
		var q = W, U;
		t[16] !== I ? (U = (s || (s = r("stylex"))).props(_.get(I)), t[16] = I, t[17] = U) : U = t[17];
		var V = $ > 0 ? "status-new-indication" : void 0, H;
		return t[18] !== q || t[19] !== v || t[20] !== V || t[21] !== U || t[22] !== O ? (H = c.jsx("svg", babelHelpers.extends({}, U, {
			"data-testid": V,
			width: v,
			height: v,
			viewBox: O,
			children: q
		})), t[18] = q, t[19] = v, t[20] = V, t[21] = U, t[22] = O, t[23] = H) : H = t[23], H;
	}
	l.RingTheme = p, l.StatusLoadingRingSpinner = L, l.StatusImageRing = k;
}), 98);
