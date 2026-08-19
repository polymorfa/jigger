__d("WAWebPipVideoControls.react", [
	"fbt",
	"WAWebClassnames",
	"WAWebClock",
	"WAWebExternalLink.react",
	"WAWebMediaGatingUtils",
	"WAWebPipCloseButton.react",
	"WAWebPipConst",
	"WAWebPipCtwaSourceButton.react",
	"WAWebPipFullscreenToggleButton.react",
	"WAWebRefreshIcon.react",
	"WAWebStopEvent",
	"WAWebSvgButton.react",
	"WAWebUA",
	"WAWebURLUtils",
	"WAWebVideoPauseIcon.react",
	"WAWebVideoPlayIcon.react",
	"WAWebVideoPlaybackSpeed",
	"WAWebVideoPlaybackSpeedButton.react",
	"WAWebVideoVolume1Icon.react",
	"WAWebVideoVolume2Icon.react",
	"WAWebVideoVolumeIcon.react",
	"WAWebVideoVolumeMutedIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = "0 0 1px 1px rgba(var(--shadow-rgb), 0.15), 0 1px 2px 0 rgba(var(--shadow-rgb), 0.2)", g = 4.5, h = 5, y = .25;
	function C(e, t) {
		switch (!0) {
			case t: return o("WAWebVideoVolumeMutedIcon.react").VideoVolumeMutedIcon;
			case e < .5: return o("WAWebVideoVolume1Icon.react").VideoVolume1Icon;
			case e >= 1: return o("WAWebVideoVolumeIcon.react").VideoVolumeIcon;
		}
		return o("WAWebVideoVolume2Icon.react").VideoVolume2Icon;
	}
	function b(e) {
		return r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(e));
	}
	function v(e) {
		var t = e.isVideoFinished, n = e.isVideoPlaying, r = e.onPause, a = e.onPlay;
		return n ? {
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebVideoPauseIcon.react").VideoPauseIcon,
			onClick: r
		} : t ? {
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebRefreshIcon.react").RefreshIcon,
			onClick: a
		} : {
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebVideoPlayIcon.react").VideoPlayIcon,
			onClick: a
		};
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(15), n = e.duration, r = e.isFullscreenMode, a = e.mouseOverProgressRatio;
		if (a === void 0) {
			var i;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx("div", { className: "x10l6tqk x47corl xg01cxk x19991ni x1g2r6go xwji4o3" }), t[0] = i) : i = t[0], i;
		}
		var l;
		t[1] !== n || t[2] !== a ? (l = o("WAWebClock").Clock.durationStr(a * n), t[1] = n, t[2] = a, t[3] = l) : l = t[3];
		var s = l, u = a * 100 + "%", d;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = "x10l6tqk x47corl x19991ni x1g2r6go xwji4o3 x1hc1fzr", t[4] = d) : d = t[4];
		var m;
		t[5] !== u ? (m = { left: u }, t[5] = u, t[6] = m) : m = t[6];
		var p;
		t[7] !== r ? (p = {
			0: { className: "x10l6tqk x1m0knhv x2b8uid x1kkjihi xy4mbju x1jz9odr x1q8xho0 x1guw455 xmix8c7 x1pg5gke xd4r4e8 xjwep3j x1t39747 x1wcsgtt x1pczhz8 x11lhmoz x1j6awrg x1fztlqz xhkezso x1s928wv xyy8hph x48c8kc xhhgppv x1x3wcnv xynf4tj xdjs2zz x1r9ni5o xvsnedh xf2ja8i xhg02go x1u9sq30 x3zr398 xldp6pj" },
			1: { className: "x10l6tqk x1m0knhv x2b8uid x1kkjihi xy4mbju x1q8xho0 x11lhmoz x1j6awrg x1fztlqz xhkezso x1s928wv xyy8hph x48c8kc xhhgppv x1x3wcnv xynf4tj xdjs2zz x1r9ni5o xvsnedh xldp6pj x5lvsfk x1247r65 x1fgtraw x1c3i2sq xgif2c7 x1i5p2am x1whfx0g xr2y4jy x1ihp6rs x1jcnrxp xdypm50 x1x49quv x3ml48c" }
		}[!!r << 0], t[7] = r, t[8] = p) : p = t[8];
		var _;
		t[9] !== p || t[10] !== s ? (_ = c.jsx("div", babelHelpers.extends({}, p, { children: s })), t[9] = p, t[10] = s, t[11] = _) : _ = t[11];
		var f;
		return t[12] !== m || t[13] !== _ ? (f = c.jsx("div", {
			className: d,
			style: m,
			children: _
		}), t[12] = m, t[13] = _, t[14] = f) : f = t[14], f;
	}
	var R = 5;
	function L(e) {
		var t = o("react-compiler-runtime").c(76), n = e.bufferedTime, r = e.duration, a = e.isFullscreenMode, i = e.isMouseOverProgressBar, l = e.mouseOverProgressRatio, u = e.onChange, d = e.onMouseDown, m = e.onMouseEnter, p = e.onMouseLeave, f = e.onMouseOverProgressRatioChange, y = e.onMouseUp, C = e.onSeekTo, b = e.progress, v = _(!1), L = v[0], E = v[1], k;
		t[0] !== r || t[1] !== C || t[2] !== b ? (k = function(t) {
			var e = t.key === "ArrowRight" || t.key === "ArrowUp" ? Math.min(r, b + R) : t.key === "ArrowLeft" || t.key === "ArrowDown" ? Math.max(0, b - R) : t.key === "Home" ? 0 : t.key === "End" ? r : null;
			e != null && (t.preventDefault(), t.stopPropagation(), C(e));
		}, t[0] = r, t[1] = C, t[2] = b, t[3] = k) : k = t[3];
		var I = k, T = b / r;
		T > 1 && (T = 1);
		var D = T * 100 + "%", x;
		t[4] !== D ? (x = { width: D }, t[4] = D, t[5] = x) : x = t[5];
		var $ = x, P = n / r;
		P > 1 && (P = 1);
		var N = P * 100 + "%", M;
		t[6] !== N ? (M = { width: N }, t[6] = N, t[7] = M) : M = t[7];
		var w = M, A;
		t[8] !== D ? (A = { left: D }, t[8] = D, t[9] = A) : A = t[9];
		var F = A, O;
		t[10] !== a ? (O = {
			0: { className: "x1n2onr6 x1iyjqo2 x14yy4lh xvijh9v xcknrev xat24cr xdwrcjd" },
			1: { className: "x1n2onr6 x1iyjqo2 x14yy4lh xdj266r x19dbzi3 xjpr12u x1y3qizg" }
		}[!!a << 0], t[10] = a, t[11] = O) : O = t[11];
		var B;
		t[12] !== p || t[13] !== f ? (B = function(t) {
			p(t), f(void 0);
		}, t[12] = p, t[13] = f, t[14] = B) : B = t[14];
		var W;
		t[15] !== r || t[16] !== a || t[17] !== f || t[18] !== b ? (W = function(t) {
			var e = a ? h : g, n = t.currentTarget.getBoundingClientRect().left, o = t.pageX, i = t.currentTarget.offsetWidth, l = o - n - e, s = i - 2 * e, u = (o - n - e) / s, c = s * (b / r), d = Math.abs(l - c) <= e;
			u < 0 ? u = d ? 0 : void 0 : u > 1 && (u = d ? 1 : void 0), f(u);
		}, t[15] = r, t[16] = a, t[17] = f, t[18] = b, t[19] = W) : W = t[19];
		var q;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (q = s._(
			/*BTDS*/
			""
		), t[20] = q) : q = t[20];
		var U;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (U = { className: "x10l6tqk xhtitgo xh8yej3 x5yr21d x1ypdohk xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1t137rt xjyslct x1uixova x1j9fppj xs7b4ar xpywitp xdx36j xibs45w x18rvqgn x16taylq x1brj8f7 xl7jiex x5cx8bf x13fi9fm" }, t[21] = U) : U = t[21];
		var V;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (V = function() {
			return E(!1);
		}, t[22] = V) : V = t[22];
		var H;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (H = function() {
			return E(!0);
		}, t[23] = H) : H = t[23];
		var G;
		t[24] !== r ? (G = r.toLocaleString("en-US", {
			minimumFractionDigits: 0,
			maximumFractionDigits: 2,
			roundingMode: "trunc",
			useGrouping: !1
		}), t[24] = r, t[25] = G) : G = t[25];
		var z;
		t[26] !== I || t[27] !== u || t[28] !== d || t[29] !== y || t[30] !== b || t[31] !== G ? (z = c.jsx("input", babelHelpers.extends({
			tabIndex: 0,
			"aria-label": q,
			"data-testid": "progress"
		}, U, {
			dir: "ltr",
			onBlur: V,
			onChange: u,
			onFocus: H,
			onKeyDown: I,
			onMouseDown: d,
			onMouseUp: y,
			type: "range",
			min: "0",
			max: G,
			step: "any",
			value: b
		})), t[26] = I, t[27] = u, t[28] = d, t[29] = y, t[30] = b, t[31] = G, t[32] = z) : z = t[32];
		var j;
		t[33] !== a ? (j = {
			0: { className: "x1n2onr6 x5yr21d xzvdq3n x8sq2zk x47corl" },
			1: { className: "x1n2onr6 x5yr21d x47corl xf6vk7d xpcyujq" }
		}[!!a << 0], t[33] = a, t[34] = j) : j = t[34];
		var K;
		t[35] !== a ? (K = {
			0: { className: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y xh8yej3 x1enq1c2 xr9e8f9 xeusxvb x1ui04y5 x1ertn4p x1eaqakq" },
			2: { className: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl xh8yej3 x1enq1c2 xr9e8f9 xeusxvb x1ui04y5 x1ertn4p x1eaqakq x1cb1t30" },
			1: { className: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y xh8yej3 x1enq1c2 xr9e8f9 xeusxvb x1ui04y5 x1ertn4p x1eaqakq xqu0tyb" },
			3: { className: "x10l6tqk xwa60dl x1o0tod x47corl xh8yej3 x1enq1c2 xr9e8f9 xeusxvb x1ui04y5 x1ertn4p x1eaqakq x1cb1t30 xqu0tyb" }
		}[!!a << 1 | !!a << 0], t[35] = a, t[36] = K) : K = t[36];
		var Q;
		t[37] !== K ? (Q = c.jsx("div", babelHelpers.extends({}, K)), t[37] = K, t[38] = Q) : Q = t[38];
		var X;
		t[39] !== P || t[40] !== a ? (X = {
			0: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y x1enq1c2 x10do2q5 xxrw8yf",
			4: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1enq1c2 x10do2q5 xxrw8yf x1cb1t30",
			2: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y x1enq1c2 x10do2q5 xxrw8yf xqu0tyb",
			6: "x10l6tqk xwa60dl x1o0tod x47corl x1enq1c2 x10do2q5 xxrw8yf x1cb1t30 xqu0tyb",
			1: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y x1enq1c2 x10do2q5 xxrw8yf x3hi7kx x159edpp",
			5: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1enq1c2 x10do2q5 xxrw8yf x1cb1t30 x3hi7kx x159edpp",
			3: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y x1enq1c2 x10do2q5 xxrw8yf xqu0tyb x3hi7kx x159edpp",
			7: "x10l6tqk xwa60dl x1o0tod x47corl x1enq1c2 x10do2q5 xxrw8yf x1cb1t30 xqu0tyb x3hi7kx x159edpp"
		}[!!a << 2 | !!a << 1 | (P === 1) << 0], t[39] = P, t[40] = a, t[41] = X) : X = t[41];
		var Y;
		t[42] !== w || t[43] !== X ? (Y = c.jsx("div", {
			"data-testid": "progressbar-buffer",
			className: X,
			style: w
		}), t[42] = w, t[43] = X, t[44] = Y) : Y = t[44];
		var J;
		t[45] !== a || t[46] !== T ? (J = {
			0: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y x10dujrv x10do2q5 xxrw8yf",
			4: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf x1cb1t30",
			2: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y x10dujrv x10do2q5 xxrw8yf xqu0tyb",
			6: "x10l6tqk xwa60dl x1o0tod x47corl x10dujrv x10do2q5 xxrw8yf x1cb1t30 xqu0tyb",
			1: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y x10dujrv x10do2q5 xxrw8yf x3hi7kx x159edpp",
			5: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf x1cb1t30 x3hi7kx x159edpp",
			3: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y x10dujrv x10do2q5 xxrw8yf xqu0tyb x3hi7kx x159edpp",
			7: "x10l6tqk xwa60dl x1o0tod x47corl x10dujrv x10do2q5 xxrw8yf x1cb1t30 xqu0tyb x3hi7kx x159edpp"
		}[!!a << 2 | !!a << 1 | (T === 1) << 0], t[45] = a, t[46] = T, t[47] = J) : J = t[47];
		var Z;
		t[48] !== $ || t[49] !== J ? (Z = c.jsx("div", {
			"data-testid": "progressbar-progress",
			className: J,
			style: $
		}), t[48] = $, t[49] = J, t[50] = Z) : Z = t[50];
		var ee;
		t[51] !== L || t[52] !== a || t[53] !== i ? (ee = {
			0: "x10l6tqk xwa60dl xk3oba8 x1wc42o8 xegnrdp x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1eaqakq x19991ni x1g2r6go xwji4o3 x1mdwju1",
			4: "x10l6tqk xwa60dl xk3oba8 x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1eaqakq x19991ni x1g2r6go xwji4o3 x1fsd2vl x170jfvy x11lhmoz",
			2: "x10l6tqk xwa60dl xk3oba8 x1wc42o8 xegnrdp x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1eaqakq x19991ni x1g2r6go xwji4o3 x1mdwju1 xg01cxk",
			6: "x10l6tqk xwa60dl xk3oba8 x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1eaqakq x19991ni x1g2r6go xwji4o3 x1fsd2vl x170jfvy x11lhmoz xg01cxk",
			1: "x10l6tqk xwa60dl xk3oba8 x1wc42o8 xegnrdp x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19991ni x1g2r6go xwji4o3 x1mdwju1 xjuyjm8",
			5: "x10l6tqk xwa60dl xk3oba8 x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19991ni x1g2r6go xwji4o3 x1fsd2vl x170jfvy x11lhmoz xjuyjm8",
			3: "x10l6tqk xwa60dl xk3oba8 x1wc42o8 xegnrdp x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19991ni x1g2r6go xwji4o3 x1mdwju1 xg01cxk xjuyjm8",
			7: "x10l6tqk xwa60dl xk3oba8 x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19991ni x1g2r6go xwji4o3 x1fsd2vl x170jfvy x11lhmoz xg01cxk xjuyjm8"
		}[!!a << 2 | (!i && !L) << 1 | !!L << 0], t[51] = L, t[52] = a, t[53] = i, t[54] = ee) : ee = t[54];
		var te;
		t[55] !== ee || t[56] !== F ? (te = c.jsx("div", {
			"data-testid": "progressbar-thumb",
			className: ee,
			style: F
		}), t[55] = ee, t[56] = F, t[57] = te) : te = t[57];
		var ne;
		t[58] !== r || t[59] !== a || t[60] !== l ? (ne = c.jsx(S, {
			mouseOverProgressRatio: l,
			duration: r,
			isFullscreenMode: a
		}), t[58] = r, t[59] = a, t[60] = l, t[61] = ne) : ne = t[61];
		var re;
		t[62] !== j || t[63] !== Q || t[64] !== Y || t[65] !== Z || t[66] !== te || t[67] !== ne ? (re = c.jsxs("div", babelHelpers.extends({ "data-testid": "progressbar" }, j, { children: [
			Q,
			Y,
			Z,
			te,
			ne
		] })), t[62] = j, t[63] = Q, t[64] = Y, t[65] = Z, t[66] = te, t[67] = ne, t[68] = re) : re = t[68];
		var oe;
		return t[69] !== m || t[70] !== z || t[71] !== re || t[72] !== O || t[73] !== B || t[74] !== W ? (oe = c.jsxs("div", babelHelpers.extends({}, O, {
			onClick: o("WAWebStopEvent").stopPropagation,
			onMouseDown: o("WAWebStopEvent").stopPropagation,
			onMouseEnter: m,
			onMouseLeave: B,
			onMouseMove: W,
			children: [z, re]
		})), t[69] = m, t[70] = z, t[71] = re, t[72] = O, t[73] = B, t[74] = W, t[75] = oe) : oe = t[75], oe;
	}
	var E = .05;
	function k(e) {
		var t = o("react-compiler-runtime").c(57), n = e.defaultValume, a = e.disableAudioControls, i = e.isFullscreenMode, l = e.isVolumeControlActive, u = e.muted, d = e.newPiPStyle, m = e.onBlur, p = e.onFocus, _ = e.onMouseEnter, f = e.onMouseLeave, g = e.onMute, h = e.onUnmute, b = e.onVolumeValueChange, v = e.volume, S;
		d ? S = i ? 32 : 24 : S = i ? 37 : 32;
		var R;
		t[0] !== b || t[1] !== v ? (R = function(t) {
			var e = t.key;
			e === "ArrowRight" || e === "ArrowUp" ? (t.preventDefault(), t.stopPropagation(), b(Math.min(1, v + E))) : (e === "ArrowLeft" || e === "ArrowDown") && (t.preventDefault(), t.stopPropagation(), b(Math.max(0, v - E)));
		}, t[0] = b, t[1] = v, t[2] = R) : R = t[2];
		var L = R, k = a === !0 || u || v === 0, I;
		e: {
			if (a === !0) {
				var T;
				t[3] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
					/*BTDS*/
					""
				), t[3] = T) : T = t[3], I = T;
				break e;
			}
			if (k) {
				var D;
				t[4] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
					/*BTDS*/
					""
				), t[4] = D) : D = t[4], I = D;
				break e;
			}
			var x;
			t[5] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
				/*BTDS*/
				""
			), t[5] = x) : x = t[5], I = x;
		}
		var $ = I, P;
		t[6] !== k || t[7] !== v ? (P = C(v, k), t[6] = k, t[7] = v, t[8] = P) : P = t[8];
		var N;
		t[9] !== n || t[10] !== k || t[11] !== g || t[12] !== h || t[13] !== b ? (N = function() {
			k ? h() : g(), n === 0 && b(y);
		}, t[9] = n, t[10] = k, t[11] = g, t[12] = h, t[13] = b, t[14] = N) : N = t[14];
		var M;
		t[15] !== P || t[16] !== N || t[17] !== $ || t[18] !== S ? (M = c.jsx(r("WAWebSvgButton.react"), {
			tabIndex: 0,
			"aria-label": $,
			Icon: P,
			displayInline: !0,
			width: S,
			height: S,
			onClick: N
		}), t[15] = P, t[16] = N, t[17] = $, t[18] = S, t[19] = M) : M = t[19];
		var w = M, A = v * 100 + "%", F;
		t[20] !== A ? (F = { width: A }, t[20] = A, t[21] = F) : F = t[21];
		var O = F, B = l && !u && a !== !0, W;
		t[22] !== i || t[23] !== B ? (W = {
			0: { className: "x10l6tqk x13vifvy xbudbmw x1wvqwft xni59qk xx3o462 x47corl xg01cxk x19991ni x1g2r6go xwji4o3 xclszuv x1nf803f" },
			2: { className: "x10l6tqk x13vifvy xbudbmw x1wvqwft x47corl xg01cxk x19991ni x1g2r6go xwji4o3 xclszuv x1nf803f xj35x94 xlup9mm" },
			1: { className: "x10l6tqk x13vifvy xbudbmw x1wvqwft xni59qk xx3o462 x19991ni x1g2r6go xwji4o3 xclszuv x1nf803f x71s49j x1hc1fzr" },
			3: { className: "x10l6tqk x13vifvy xbudbmw x1wvqwft x19991ni x1g2r6go xwji4o3 xclszuv x1nf803f xj35x94 xlup9mm x71s49j x1hc1fzr" }
		}[!!i << 1 | !!B << 0], t[22] = i, t[23] = B, t[24] = W) : W = t[24];
		var q;
		t[25] !== i || t[26] !== v ? (q = {
			0: "x10l6tqk x1atx4j1 x1o0tod xhtitgo xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf",
			4: "x10l6tqk x1atx4j1 x1o0tod xhtitgo x47corl x10dujrv x10do2q5 xxrw8yf xqu0tyb",
			2: "x10l6tqk x1atx4j1 x1o0tod xhtitgo xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf xvijh9v",
			6: "x10l6tqk x1atx4j1 x1o0tod xhtitgo x47corl x10dujrv x10do2q5 xxrw8yf xqu0tyb xvijh9v",
			1: "x10l6tqk x1atx4j1 x1o0tod xhtitgo xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf x3hi7kx x159edpp",
			5: "x10l6tqk x1atx4j1 x1o0tod xhtitgo x47corl x10dujrv x10do2q5 xxrw8yf xqu0tyb x3hi7kx x159edpp",
			3: "x10l6tqk x1atx4j1 x1o0tod xhtitgo xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf xvijh9v x3hi7kx x159edpp",
			7: "x10l6tqk x1atx4j1 x1o0tod xhtitgo x47corl x10dujrv x10do2q5 xxrw8yf xqu0tyb xvijh9v x3hi7kx x159edpp"
		}[!!i << 2 | !!o("WAWebUA").UA.isGecko << 1 | (v === 1) << 0], t[25] = i, t[26] = v, t[27] = q) : q = t[27];
		var U;
		t[28] !== q || t[29] !== O ? (U = c.jsx("div", {
			className: q,
			style: O
		}), t[28] = q, t[29] = O, t[30] = U) : U = t[30];
		var V;
		t[31] === Symbol.for("react.memo_cache_sentinel") ? (V = s._(
			/*BTDS*/
			""
		), t[31] = V) : V = t[31];
		var H;
		t[32] !== i ? (H = {
			0: { className: "x10l6tqk xhtitgo xh8yej3 x5yr21d x1ypdohk xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1t137rt xjyslct x1uixova x1xrmsu8 x8jsd5b xddr6xj xtwd773 x15nk6ox xwl8qgt xs7b4ar xo79n2y x1h2s55w x1odtki2 x1e9oud6 x9f6dpf xntm52p xvhtw7c x1th4nss x1rizj1e x1y66t81 xpx3ic3 xft441d xibs45w x18rvqgn x1bvlj5z x1ya0v5x xj5bd2a xpkqczj x3aytur x23m8i7 x1brj8f7 x1i2clhx x1z0ci6j xo7t0z3 xmdoda4 x10mf80e x1w13fbe xx79xfj xwuopey x3xuhg7 x1myhkec xkl7mu5 x18v2h9o x13fi9fm" },
			1: { className: "x10l6tqk xhtitgo xh8yej3 x5yr21d x1ypdohk xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1t137rt xjyslct x1xrmsu8 x8jsd5b xddr6xj xtwd773 x15nk6ox xwl8qgt x1h2s55w x1odtki2 x1e9oud6 x9f6dpf xntm52p xvhtw7c x1th4nss x1rizj1e x1y66t81 xpx3ic3 xft441d xibs45w x1bvlj5z x1ya0v5x xj5bd2a xpkqczj x3aytur x23m8i7 x1z0ci6j xo7t0z3 xmdoda4 x10mf80e x1w13fbe xx79xfj xwuopey x3xuhg7 x1myhkec xkl7mu5 x18v2h9o x13fi9fm x13m05e8 x1eir19f xrewrwu xagyqcp xs156m3 x17j9moy" }
		}[!!i << 0], t[32] = i, t[33] = H) : H = t[33];
		var G;
		t[34] !== b ? (G = function(t) {
			b(parseFloat(t.target.value));
		}, t[34] = b, t[35] = G) : G = t[35];
		var z;
		t[36] !== H || t[37] !== G || t[38] !== v ? (z = c.jsx("input", babelHelpers.extends({
			tabIndex: 0,
			"aria-label": V
		}, H, {
			dir: "ltr",
			onChange: G,
			type: "range",
			min: "0",
			max: 1,
			step: "any",
			value: v
		})), t[36] = H, t[37] = G, t[38] = v, t[39] = z) : z = t[39];
		var j;
		t[40] !== B || t[41] !== U || t[42] !== z || t[43] !== W ? (j = c.jsxs("div", babelHelpers.extends({
			"data-testid": "volume-bar-container",
			"data-visible": B
		}, W, { children: [U, z] })), t[40] = B, t[41] = U, t[42] = z, t[43] = W, t[44] = j) : j = t[44];
		var K = j, Q;
		t[45] !== i || t[46] !== d ? (Q = {
			0: { className: "x1n2onr6 xamitd3 x1h3rv7z" },
			1: { className: "x1n2onr6 xamitd3 x1h3rv7z x3aesyq" }
		}[!!(d && i) << 0], t[45] = i, t[46] = d, t[47] = Q) : Q = t[47];
		var X;
		return t[48] !== L || t[49] !== m || t[50] !== p || t[51] !== _ || t[52] !== f || t[53] !== Q || t[54] !== K || t[55] !== w ? (X = c.jsxs("div", babelHelpers.extends({}, Q, {
			onClick: o("WAWebStopEvent").stopPropagation,
			onMouseEnter: _,
			onMouseLeave: f,
			onMouseDown: o("WAWebStopEvent").stopPropagation,
			onFocus: p,
			onBlur: m,
			onKeyDown: L,
			children: [w, K]
		})), t[48] = L, t[49] = m, t[50] = p, t[51] = _, t[52] = f, t[53] = Q, t[54] = K, t[55] = w, t[56] = X) : X = t[56], X;
	}
	function I(e, t) {
		var n = o("react-compiler-runtime").c(2), r = t === void 0 ? !1 : t, a = _(e), i = a[0], l = a[1], s = _(e), u = s[0], c = s[1];
		u !== e && !r && (l(e), c(e));
		var d;
		return n[0] !== i ? (d = [i, l], n[0] = i, n[1] = d) : d = n[1], d;
	}
	function T(t) {
		var n = o("react-compiler-runtime").c(115), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.className, u = l.ctwaSourceUrl, d = l.duration, f = l.isFullscreenMode, g = l.isVideoPlaying, h = l.newPiPStyle, y = l.onClose, C = l.onFullscreenToggle, S = l.onMutedValueChange, R = l.onPause, E = l.onPlay, T = l.onProgressChange, D = l.onVolumeValueChange, x = l.playbackRate, $ = l.onPlaybackRateChange, P = h === void 0 ? !1 : h, N = x === void 0 ? o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE : x, M = p(null), w = p(null), A = _(!1), F = A[0], O = A[1], B = _(!1), W = B[0], q = B[1], U = _(!1), V = U[0], H = U[1], G = _(!1), z = G[0], j = G[1], K = _(void 0), Q = K[0], X = K[1], Y = I(a.muted), J = Y[0], Z = Y[1], ee = I(a.volume), te = ee[0], ne = ee[1], re = I(a.bufferedTime), oe = re[0], ae = re[1], ie = I(a.progress, V), le = ie[0], se = ie[1], ue, ce;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (ue = function() {
			var e;
			(e = w.current) == null || e.focus();
		}, ce = [], n[3] = ue, n[4] = ce) : (ue = n[3], ce = n[4]), m(ue, ce);
		var de;
		n[5] !== u ? (de = function(t) {
			t.preventDefault(), t.stopPropagation(), u != null && o("WAWebExternalLink.react").openExternalLink(u);
		}, n[5] = u, n[6] = de) : de = n[6];
		var me = de, pe;
		n[7] !== S || n[8] !== Z ? (pe = function() {
			S(!1), Z(!1);
		}, n[7] = S, n[8] = Z, n[9] = pe) : pe = n[9];
		var _e = pe, fe;
		n[10] !== S || n[11] !== Z ? (fe = function() {
			S(!0), Z(!0);
		}, n[10] = S, n[11] = Z, n[12] = fe) : fe = n[12];
		var ge = fe, he;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (he = function(t) {
			j(!0);
		}, n[13] = he) : he = n[13];
		var ye = he, Ce;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (Ce = function(t) {
			j(!1);
		}, n[14] = Ce) : Ce = n[14];
		var be = Ce, ve;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (ve = function(t) {
			O(!0);
		}, n[15] = ve) : ve = n[15];
		var Se = ve, Re;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (Re = function(t) {
			O(!1);
		}, n[16] = Re) : Re = n[16];
		var Le = Re, Ee;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (Ee = function() {
			q(!0);
		}, n[17] = Ee) : Ee = n[17];
		var ke = Ee, Ie;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (Ie = function(t) {
			(t.relatedTarget instanceof Node && !t.currentTarget.contains(t.relatedTarget) || t.relatedTarget == null) && q(!1);
		}, n[18] = Ie) : Ie = n[18];
		var Te = Ie, De;
		n[19] !== D || n[20] !== ne ? (De = function(t) {
			ne(t), D(t);
		}, n[19] = D, n[20] = ne, n[21] = De) : De = n[21];
		var xe = De, $e;
		n[22] !== g || n[23] !== R ? ($e = function(t) {
			H(!0), M.current = g, g && R();
		}, n[22] = g, n[23] = R, n[24] = $e) : $e = n[24];
		var Pe = $e, Ne;
		n[25] !== E ? (Ne = function(t) {
			H(!1), M.current === !0 && E(), M.current = null;
		}, n[25] = E, n[26] = Ne) : Ne = n[26];
		var Me = Ne, we;
		n[27] !== oe || n[28] !== d || n[29] !== T || n[30] !== ae || n[31] !== se ? (we = function(t) {
			T(t);
			var e = Math.abs(oe - d) < .1 ? oe : 0;
			se(t), ae(e);
		}, n[27] = oe, n[28] = d, n[29] = T, n[30] = ae, n[31] = se, n[32] = we) : we = n[32];
		var Ae = we, Fe;
		n[33] !== Ae ? (Fe = function(t) {
			Ae(parseFloat(t.target.value));
		}, n[33] = Ae, n[34] = Fe) : Fe = n[34];
		var Oe = Fe, Be = F || W, We = Be && !J, qe;
		n[35] !== f || n[36] !== P || n[37] !== le ? (qe = f ? c.jsx("div", babelHelpers.extends({}, {
			0: { className: "x11uqc5h xamitd3 xnfjc3l x1c3i2sq xdod15v x1m0knhv x2b8uid x9ek82g x13k8ehh" },
			1: { className: "x11uqc5h xamitd3 xnfjc3l x1c3i2sq xdod15v x1m0knhv x2b8uid x9ek82g x1lziwak" }
		}[!!P << 0], {
			onClick: o("WAWebStopEvent").stopPropagation,
			children: o("WAWebClock").Clock.durationStr(le)
		})) : null, n[35] = f, n[36] = P, n[37] = le, n[38] = qe) : qe = n[38];
		var Ue = qe, Ve;
		n[39] !== d || n[40] !== f || n[41] !== P ? (Ve = f ? c.jsx("div", babelHelpers.extends({}, {
			0: { className: "x11uqc5h xamitd3 xnfjc3l x1c3i2sq xdod15v x1m0knhv x2b8uid xo1ph6p x1sa5p1d" },
			1: { className: "x11uqc5h xamitd3 xnfjc3l x1c3i2sq xdod15v x1m0knhv x2b8uid xo1ph6p x3aesyq" }
		}[!!P << 0], {
			onClick: o("WAWebStopEvent").stopPropagation,
			children: o("WAWebClock").Clock.durationStr(d)
		})) : null, n[39] = d, n[40] = f, n[41] = P, n[42] = Ve) : Ve = n[42];
		var He = Ve, Ge = P && Math.ceil(le) >= d, ze;
		n[43] !== Ge || n[44] !== g || n[45] !== R || n[46] !== E ? (ze = v({
			isVideoFinished: Ge,
			isVideoPlaying: g,
			onPause: R,
			onPlay: E
		}), n[43] = Ge, n[44] = g, n[45] = R, n[46] = E, n[47] = ze) : ze = n[47];
		var je = ze, Ke;
		P ? Ke = f ? 27 : 24 : Ke = f ? 37 : 32;
		var Qe;
		P && (Qe = f ? 32 : 24);
		var Xe;
		n[48] !== s || n[49] !== f || n[50] !== P ? (Xe = o("WAWebClassnames").classnamesConvertMeToStylexPlease(s, {
			0: "",
			8: "x10l6tqk xtijo5x x1ey2m1c x1o0tod x78zum5 x1q0g3np x96k8nx x2vl965 xdvlbce x7coems x1f7m26b",
			4: "x134lwj9 xgws4yx x1i2zvha xzm8p2n",
			12: "x10l6tqk xtijo5x x1ey2m1c x1o0tod x78zum5 x1q0g3np x1f7m26b x134lwj9 xgws4yx x1i2zvha xzm8p2n",
			2: "x1n2onr6 xexx8yu xyri2b x18d9i69 x1c1uobl",
			10: "xtijo5x x1ey2m1c x1o0tod x78zum5 x1q0g3np x1f7m26b x1n2onr6 xexx8yu xyri2b x18d9i69 x1c1uobl",
			6: "x1n2onr6 xexx8yu xyri2b x18d9i69 x1c1uobl",
			14: "xtijo5x x1ey2m1c x1o0tod x78zum5 x1q0g3np x1f7m26b x1n2onr6 xexx8yu xyri2b x18d9i69 x1c1uobl",
			1: "x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
			9: "xtijo5x x78zum5 x1q0g3np x1f7m26b x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
			5: "x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
			13: "xtijo5x x78zum5 x1q0g3np x1f7m26b x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
			3: "x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
			11: "xtijo5x x78zum5 x1q0g3np x1f7m26b x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
			7: "x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg",
			15: "xtijo5x x78zum5 x1q0g3np x1f7m26b x10l6tqk x1iacjwo xbudbmw x12fk1ku xdd8jsf xexx8yu x5zjp28 x18d9i69 x162tt16 x1wtyksp x1obq294 x5a5i1n xde0f50 x15x8krk xuuh30 xwhdwdg"
		}[(s == null) << 3 | !!(s == null && f) << 2 | !!(s == null && P) << 1 | !!(P && f) << 0]), n[48] = s, n[49] = f, n[50] = P, n[51] = Xe) : Xe = n[51];
		var Ye;
		n[52] !== f || n[53] !== P ? (Ye = {
			0: { className: "xamitd3 x1g77sc7 x1f7m26b" },
			2: { className: "xamitd3 x1g77sc7 x1f7m26b x1uulv1t x1pe450p" },
			1: { className: "xamitd3 x1g77sc7 x1f7m26b x3aesyq" },
			3: { className: "xamitd3 x1g77sc7 x1f7m26b x1uulv1t x1pe450p x3aesyq" }
		}[!!f << 1 | !!(P && f) << 0], n[52] = f, n[53] = P, n[54] = Ye) : Ye = n[54];
		var Je;
		n[55] !== je.Icon || n[56] !== je.ariaLabel || n[57] !== je.onClick || n[58] !== Ke ? (Je = c.jsx(r("WAWebSvgButton.react"), {
			ref: w,
			"aria-label": je.ariaLabel,
			Icon: je.Icon,
			displayInline: !0,
			width: Ke,
			height: Ke,
			onClick: je.onClick
		}), n[55] = je.Icon, n[56] = je.ariaLabel, n[57] = je.onClick, n[58] = Ke, n[59] = Je) : Je = n[59];
		var Ze;
		n[60] !== Ye || n[61] !== Je ? (Ze = c.jsx("div", babelHelpers.extends({}, Ye, {
			onClick: o("WAWebStopEvent").stopPropagation,
			onMouseDown: o("WAWebStopEvent").stopPropagation,
			onMouseUp: o("WAWebStopEvent").stopPropagation,
			children: Je
		})), n[60] = Ye, n[61] = Je, n[62] = Ze) : Ze = n[62];
		var et;
		n[63] !== oe || n[64] !== d || n[65] !== Oe || n[66] !== Pe || n[67] !== Me || n[68] !== f || n[69] !== z || n[70] !== Q || n[71] !== a.progress || n[72] !== Ae ? (et = c.jsx(L, {
			progress: a.progress,
			duration: d,
			bufferedTime: oe,
			isFullscreenMode: f,
			isMouseOverProgressBar: z,
			mouseOverProgressRatio: Q,
			onChange: Oe,
			onSeekTo: Ae,
			onMouseDown: Pe,
			onMouseUp: Me,
			onMouseEnter: ye,
			onMouseLeave: be,
			onMouseOverProgressRatioChange: X
		}), n[63] = oe, n[64] = d, n[65] = Oe, n[66] = Pe, n[67] = Me, n[68] = f, n[69] = z, n[70] = Q, n[71] = a.progress, n[72] = Ae, n[73] = et) : et = n[73];
		var tt;
		n[74] !== $ || n[75] !== N ? (tt = o("WAWebMediaGatingUtils").isVideoPlaybackSpeedEnabled() && $ != null ? c.jsx("div", {
			className: "xamitd3 x2fvf9 x182iqb8",
			onClick: o("WAWebStopEvent").stopPropagation,
			onMouseDown: o("WAWebStopEvent").stopPropagation,
			children: c.jsx(r("WAWebVideoPlaybackSpeedButton.react"), {
				playbackRate: N,
				onClick: $
			})
		}) : null, n[74] = $, n[75] = N, n[76] = tt) : tt = n[76];
		var nt;
		n[77] !== ge || n[78] !== _e || n[79] !== xe || n[80] !== f || n[81] !== Be || n[82] !== J || n[83] !== P || n[84] !== a.disableAudioControls || n[85] !== a.volume || n[86] !== te ? (nt = c.jsx(k, {
			muted: J,
			volume: te,
			defaultValume: a.volume,
			onUnmute: _e,
			onMute: ge,
			onVolumeValueChange: xe,
			isVolumeControlActive: Be,
			isFullscreenMode: f,
			newPiPStyle: P,
			onFocus: ke,
			onBlur: Te,
			onMouseEnter: Se,
			onMouseLeave: Le,
			disableAudioControls: a.disableAudioControls
		}), n[77] = ge, n[78] = _e, n[79] = xe, n[80] = f, n[81] = Be, n[82] = J, n[83] = P, n[84] = a.disableAudioControls, n[85] = a.volume, n[86] = te, n[87] = nt) : nt = n[87];
		var rt;
		n[88] !== f || n[89] !== P || n[90] !== C ? (rt = C != null ? c.jsx("div", babelHelpers.extends({}, {
			0: { className: "xamitd3 x1hrcb2b x13fj5qh" },
			1: { className: "xamitd3 x1hrcb2b x13fj5qh x3aesyq" }
		}[!!(P && f) << 0], { children: c.jsx(r("WAWebPipFullscreenToggleButton.react"), {
			isFullscreenMode: f,
			onClick: C,
			isStatic: !0,
			iconSize: P ? 24 : void 0
		}) })) : null, n[88] = f, n[89] = P, n[90] = C, n[91] = rt) : rt = n[91];
		var ot;
		n[92] !== Qe || n[93] !== f || n[94] !== P || n[95] !== y ? (ot = y != null ? c.jsx("div", babelHelpers.extends({}, {
			0: { className: "xamitd3 x1esxh7v x13fj5qh" },
			1: { className: "xamitd3 x1esxh7v x13fj5qh x3aesyq" }
		}[!!(P && f) << 0], { children: c.jsx(r("WAWebPipCloseButton.react"), {
			isFullscreenMode: f,
			onClick: y,
			isStatic: !0,
			iconSize: Qe
		}) })) : null, n[92] = Qe, n[93] = f, n[94] = P, n[95] = y, n[96] = ot) : ot = n[96];
		var at;
		n[97] !== u || n[98] !== me || n[99] !== f || n[100] !== We || n[101] !== P ? (at = !We && u != null ? c.jsx(r("WAWebPipCtwaSourceButton.react"), {
			isFullscreenMode: f,
			onClick: me,
			isInstagram: b(u) === o("WAWebPipConst").HOSTNAME.INSTAGRAM,
			iconSize: P ? 24 : void 0
		}) : null, n[97] = u, n[98] = me, n[99] = f, n[100] = We, n[101] = P, n[102] = at) : at = n[102];
		var it;
		return n[103] !== Ue || n[104] !== He || n[105] !== i || n[106] !== Xe || n[107] !== Ze || n[108] !== et || n[109] !== tt || n[110] !== nt || n[111] !== rt || n[112] !== ot || n[113] !== at ? (it = c.jsxs("div", {
			ref: i,
			className: Xe,
			children: [
				Ze,
				et,
				tt,
				nt,
				Ue,
				He,
				rt,
				ot,
				at
			]
		}), n[103] = Ue, n[104] = He, n[105] = i, n[106] = Xe, n[107] = Ze, n[108] = et, n[109] = tt, n[110] = nt, n[111] = rt, n[112] = ot, n[113] = at, n[114] = it) : it = n[114], it;
	}
	l.default = T;
}), 226);
