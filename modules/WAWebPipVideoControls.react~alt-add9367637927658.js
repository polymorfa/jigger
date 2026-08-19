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
	"react"
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
		var t = e.duration, n = e.isFullscreenMode, r = e.mouseOverProgressRatio;
		if (r === void 0) return c.jsx("div", { className: "x10l6tqk x47corl xg01cxk x19991ni x1g2r6go xwji4o3" });
		var a = o("WAWebClock").Clock.durationStr(r * t), i = r * 100 + "%";
		return c.jsx("div", {
			className: "x10l6tqk x47corl x19991ni x1g2r6go xwji4o3 x1hc1fzr",
			style: { left: i },
			children: c.jsx("div", babelHelpers.extends({}, {
				0: { className: "x10l6tqk x1m0knhv x2b8uid x1kkjihi xy4mbju x1jz9odr x1q8xho0 x1guw455 xmix8c7 x1pg5gke xd4r4e8 xjwep3j x1t39747 x1wcsgtt x1pczhz8 x11lhmoz x1j6awrg x1fztlqz xhkezso x1s928wv xyy8hph x48c8kc xhhgppv x1x3wcnv xynf4tj xdjs2zz x1r9ni5o xvsnedh xf2ja8i xhg02go x1u9sq30 x3zr398 xldp6pj" },
				1: { className: "x10l6tqk x1m0knhv x2b8uid x1kkjihi xy4mbju x1q8xho0 x11lhmoz x1j6awrg x1fztlqz xhkezso x1s928wv xyy8hph x48c8kc xhhgppv x1x3wcnv xynf4tj xdjs2zz x1r9ni5o xvsnedh xldp6pj x5lvsfk x1247r65 x1fgtraw x1c3i2sq xgif2c7 x1i5p2am x1whfx0g xr2y4jy x1ihp6rs x1jcnrxp xdypm50 x1x49quv x3ml48c" }
			}[!!n << 0], { children: a }))
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	var R = 5;
	function L(e) {
		var t = e.bufferedTime, n = e.duration, r = e.isFullscreenMode, a = e.isMouseOverProgressBar, i = e.mouseOverProgressRatio, l = e.onChange, u = e.onMouseDown, d = e.onMouseEnter, m = e.onMouseLeave, p = e.onMouseOverProgressRatioChange, f = e.onMouseUp, y = e.onSeekTo, C = e.progress, b = _(!1), v = b[0], L = b[1], E = function(t) {
			var e = t.key === "ArrowRight" || t.key === "ArrowUp" ? Math.min(n, C + R) : t.key === "ArrowLeft" || t.key === "ArrowDown" ? Math.max(0, C - R) : t.key === "Home" ? 0 : t.key === "End" ? n : null;
			e != null && (t.preventDefault(), t.stopPropagation(), y(e));
		}, k = C / n;
		k > 1 && (k = 1);
		var I = k * 100 + "%", T = { width: I }, D = t / n;
		D > 1 && (D = 1);
		var x = D * 100 + "%", $ = { width: x }, P = { left: I };
		return c.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x1n2onr6 x1iyjqo2 x14yy4lh xvijh9v xcknrev xat24cr xdwrcjd" },
			1: { className: "x1n2onr6 x1iyjqo2 x14yy4lh xdj266r x19dbzi3 xjpr12u x1y3qizg" }
		}[!!r << 0], {
			onClick: o("WAWebStopEvent").stopPropagation,
			onMouseDown: o("WAWebStopEvent").stopPropagation,
			onMouseEnter: d,
			onMouseLeave: function(t) {
				m(t), p(void 0);
			},
			onMouseMove: function(t) {
				var e = r ? h : g, o = t.currentTarget.getBoundingClientRect().left, a = t.pageX, i = t.currentTarget.offsetWidth, l = a - o - e, s = i - 2 * e, u = (a - o - e) / s, c = s * (C / n), d = Math.abs(l - c) <= e;
				u < 0 ? u = d ? 0 : void 0 : u > 1 && (u = d ? 1 : void 0), p(u);
			},
			children: [c.jsx("input", {
				tabIndex: 0,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"data-testid": "progress",
				className: "x10l6tqk xhtitgo xh8yej3 x5yr21d x1ypdohk xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1t137rt xjyslct x1uixova x1j9fppj xs7b4ar xpywitp xdx36j xibs45w x18rvqgn x16taylq x1brj8f7 xl7jiex x5cx8bf x13fi9fm",
				dir: "ltr",
				onBlur: function() {
					return L(!1);
				},
				onChange: l,
				onFocus: function() {
					return L(!0);
				},
				onKeyDown: E,
				onMouseDown: u,
				onMouseUp: f,
				type: "range",
				min: "0",
				max: n.toLocaleString("en-US", {
					minimumFractionDigits: 0,
					maximumFractionDigits: 2,
					roundingMode: "trunc",
					useGrouping: !1
				}),
				step: "any",
				value: C
			}), c.jsxs("div", babelHelpers.extends({ "data-testid": "progressbar" }, {
				0: { className: "x1n2onr6 x5yr21d xzvdq3n x8sq2zk x47corl" },
				1: { className: "x1n2onr6 x5yr21d x47corl xf6vk7d xpcyujq" }
			}[!!r << 0], { children: [
				c.jsx("div", babelHelpers.extends({}, {
					0: { className: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y xh8yej3 x1enq1c2 xr9e8f9 xeusxvb x1ui04y5 x1ertn4p x1eaqakq" },
					2: { className: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl xh8yej3 x1enq1c2 xr9e8f9 xeusxvb x1ui04y5 x1ertn4p x1eaqakq x1cb1t30" },
					1: { className: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y xh8yej3 x1enq1c2 xr9e8f9 xeusxvb x1ui04y5 x1ertn4p x1eaqakq xqu0tyb" },
					3: { className: "x10l6tqk xwa60dl x1o0tod x47corl xh8yej3 x1enq1c2 xr9e8f9 xeusxvb x1ui04y5 x1ertn4p x1eaqakq x1cb1t30 xqu0tyb" }
				}[!!r << 1 | !!r << 0])),
				c.jsx("div", {
					"data-testid": "progressbar-buffer",
					className: {
						0: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y x1enq1c2 x10do2q5 xxrw8yf",
						4: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1enq1c2 x10do2q5 xxrw8yf x1cb1t30",
						2: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y x1enq1c2 x10do2q5 xxrw8yf xqu0tyb",
						6: "x10l6tqk xwa60dl x1o0tod x47corl x1enq1c2 x10do2q5 xxrw8yf x1cb1t30 xqu0tyb",
						1: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y x1enq1c2 x10do2q5 xxrw8yf x3hi7kx x159edpp",
						5: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1enq1c2 x10do2q5 xxrw8yf x1cb1t30 x3hi7kx x159edpp",
						3: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y x1enq1c2 x10do2q5 xxrw8yf xqu0tyb x3hi7kx x159edpp",
						7: "x10l6tqk xwa60dl x1o0tod x47corl x1enq1c2 x10do2q5 xxrw8yf x1cb1t30 xqu0tyb x3hi7kx x159edpp"
					}[!!r << 2 | !!r << 1 | (D === 1) << 0],
					style: $
				}),
				c.jsx("div", {
					"data-testid": "progressbar-progress",
					className: {
						0: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y x10dujrv x10do2q5 xxrw8yf",
						4: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf x1cb1t30",
						2: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y x10dujrv x10do2q5 xxrw8yf xqu0tyb",
						6: "x10l6tqk xwa60dl x1o0tod x47corl x10dujrv x10do2q5 xxrw8yf x1cb1t30 xqu0tyb",
						1: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x1exm37y x10dujrv x10do2q5 xxrw8yf x3hi7kx x159edpp",
						5: "x10l6tqk xwa60dl x1o0tod xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf x1cb1t30 x3hi7kx x159edpp",
						3: "x10l6tqk xwa60dl x1o0tod x47corl x1exm37y x10dujrv x10do2q5 xxrw8yf xqu0tyb x3hi7kx x159edpp",
						7: "x10l6tqk xwa60dl x1o0tod x47corl x10dujrv x10do2q5 xxrw8yf x1cb1t30 xqu0tyb x3hi7kx x159edpp"
					}[!!r << 2 | !!r << 1 | (k === 1) << 0],
					style: T
				}),
				c.jsx("div", {
					"data-testid": "progressbar-thumb",
					className: {
						0: "x10l6tqk xwa60dl xk3oba8 x1wc42o8 xegnrdp x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1eaqakq x19991ni x1g2r6go xwji4o3 x1mdwju1",
						4: "x10l6tqk xwa60dl xk3oba8 x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1eaqakq x19991ni x1g2r6go xwji4o3 x1fsd2vl x170jfvy x11lhmoz",
						2: "x10l6tqk xwa60dl xk3oba8 x1wc42o8 xegnrdp x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1eaqakq x19991ni x1g2r6go xwji4o3 x1mdwju1 xg01cxk",
						6: "x10l6tqk xwa60dl xk3oba8 x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1eaqakq x19991ni x1g2r6go xwji4o3 x1fsd2vl x170jfvy x11lhmoz xg01cxk",
						1: "x10l6tqk xwa60dl xk3oba8 x1wc42o8 xegnrdp x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19991ni x1g2r6go xwji4o3 x1mdwju1 xjuyjm8",
						5: "x10l6tqk xwa60dl xk3oba8 x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19991ni x1g2r6go xwji4o3 x1fsd2vl x170jfvy x11lhmoz xjuyjm8",
						3: "x10l6tqk xwa60dl xk3oba8 x1wc42o8 xegnrdp x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19991ni x1g2r6go xwji4o3 x1mdwju1 xg01cxk xjuyjm8",
						7: "x10l6tqk xwa60dl xk3oba8 x47corl x10dujrv x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19991ni x1g2r6go xwji4o3 x1fsd2vl x170jfvy x11lhmoz xg01cxk xjuyjm8"
					}[!!r << 2 | (!a && !v) << 1 | !!v << 0],
					style: P
				}),
				c.jsx(S, {
					mouseOverProgressRatio: i,
					duration: n,
					isFullscreenMode: r
				})
			] }))]
		}));
	}
	L.displayName = L.name + " [from " + i.id + "]";
	var E = .05;
	function k(e) {
		var t = e.defaultValume, n = e.disableAudioControls, a = e.isFullscreenMode, i = e.isVolumeControlActive, l = e.muted, u = e.newPiPStyle, d = e.onBlur, m = e.onFocus, p = e.onMouseEnter, _ = e.onMouseLeave, f = e.onMute, g = e.onUnmute, h = e.onVolumeValueChange, b = e.volume, v;
		u ? v = a ? 32 : 24 : v = a ? 37 : 32;
		var S = function(t) {
			var e = t.key;
			e === "ArrowRight" || e === "ArrowUp" ? (t.preventDefault(), t.stopPropagation(), h(Math.min(1, b + E))) : (e === "ArrowLeft" || e === "ArrowDown") && (t.preventDefault(), t.stopPropagation(), h(Math.max(0, b - E)));
		}, R = n === !0 || l || b === 0, L = (function() {
			return n === !0 ? s._(
				/*BTDS*/
				""
			) : R ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		})(), k = c.jsx(r("WAWebSvgButton.react"), {
			tabIndex: 0,
			"aria-label": L,
			Icon: C(b, R),
			displayInline: !0,
			width: v,
			height: v,
			onClick: function() {
				R ? g() : f(), t === 0 && h(y);
			}
		}), I = { width: b * 100 + "%" }, T = i && !l && n !== !0, D = c.jsxs("div", babelHelpers.extends({
			"data-testid": "volume-bar-container",
			"data-visible": T
		}, {
			0: { className: "x10l6tqk x13vifvy xbudbmw x1wvqwft xni59qk xx3o462 x47corl xg01cxk x19991ni x1g2r6go xwji4o3 xclszuv x1nf803f" },
			2: { className: "x10l6tqk x13vifvy xbudbmw x1wvqwft x47corl xg01cxk x19991ni x1g2r6go xwji4o3 xclszuv x1nf803f xj35x94 xlup9mm" },
			1: { className: "x10l6tqk x13vifvy xbudbmw x1wvqwft xni59qk xx3o462 x19991ni x1g2r6go xwji4o3 xclszuv x1nf803f x71s49j x1hc1fzr" },
			3: { className: "x10l6tqk x13vifvy xbudbmw x1wvqwft x19991ni x1g2r6go xwji4o3 xclszuv x1nf803f xj35x94 xlup9mm x71s49j x1hc1fzr" }
		}[!!a << 1 | !!T << 0], { children: [c.jsx("div", {
			className: {
				0: "x10l6tqk x1atx4j1 x1o0tod xhtitgo xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf",
				4: "x10l6tqk x1atx4j1 x1o0tod xhtitgo x47corl x10dujrv x10do2q5 xxrw8yf xqu0tyb",
				2: "x10l6tqk x1atx4j1 x1o0tod xhtitgo xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf xvijh9v",
				6: "x10l6tqk x1atx4j1 x1o0tod xhtitgo x47corl x10dujrv x10do2q5 xxrw8yf xqu0tyb xvijh9v",
				1: "x10l6tqk x1atx4j1 x1o0tod xhtitgo xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf x3hi7kx x159edpp",
				5: "x10l6tqk x1atx4j1 x1o0tod xhtitgo x47corl x10dujrv x10do2q5 xxrw8yf xqu0tyb x3hi7kx x159edpp",
				3: "x10l6tqk x1atx4j1 x1o0tod xhtitgo xuoj239 x47corl x10dujrv x10do2q5 xxrw8yf xvijh9v x3hi7kx x159edpp",
				7: "x10l6tqk x1atx4j1 x1o0tod xhtitgo x47corl x10dujrv x10do2q5 xxrw8yf xqu0tyb xvijh9v x3hi7kx x159edpp"
			}[!!a << 2 | !!o("WAWebUA").UA.isGecko << 1 | (b === 1) << 0],
			style: I
		}), c.jsx("input", babelHelpers.extends({
			tabIndex: 0,
			"aria-label": s._(
				/*BTDS*/
				""
			)
		}, {
			0: { className: "x10l6tqk xhtitgo xh8yej3 x5yr21d x1ypdohk xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1t137rt xjyslct x1uixova x1xrmsu8 x8jsd5b xddr6xj xtwd773 x15nk6ox xwl8qgt xs7b4ar xo79n2y x1h2s55w x1odtki2 x1e9oud6 x9f6dpf xntm52p xvhtw7c x1th4nss x1rizj1e x1y66t81 xpx3ic3 xft441d xibs45w x18rvqgn x1bvlj5z x1ya0v5x xj5bd2a xpkqczj x3aytur x23m8i7 x1brj8f7 x1i2clhx x1z0ci6j xo7t0z3 xmdoda4 x10mf80e x1w13fbe xx79xfj xwuopey x3xuhg7 x1myhkec xkl7mu5 x18v2h9o x13fi9fm" },
			1: { className: "x10l6tqk xhtitgo xh8yej3 x5yr21d x1ypdohk xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1t137rt xjyslct x1xrmsu8 x8jsd5b xddr6xj xtwd773 x15nk6ox xwl8qgt x1h2s55w x1odtki2 x1e9oud6 x9f6dpf xntm52p xvhtw7c x1th4nss x1rizj1e x1y66t81 xpx3ic3 xft441d xibs45w x1bvlj5z x1ya0v5x xj5bd2a xpkqczj x3aytur x23m8i7 x1z0ci6j xo7t0z3 xmdoda4 x10mf80e x1w13fbe xx79xfj xwuopey x3xuhg7 x1myhkec xkl7mu5 x18v2h9o x13fi9fm x13m05e8 x1eir19f xrewrwu xagyqcp xs156m3 x17j9moy" }
		}[!!a << 0], {
			dir: "ltr",
			onChange: function(t) {
				h(parseFloat(t.target.value));
			},
			type: "range",
			min: "0",
			max: 1,
			step: "any",
			value: b
		}))] }));
		return c.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x1n2onr6 xamitd3 x1h3rv7z" },
			1: { className: "x1n2onr6 xamitd3 x1h3rv7z x3aesyq" }
		}[!!(u && a) << 0], {
			onClick: o("WAWebStopEvent").stopPropagation,
			onMouseEnter: p,
			onMouseLeave: _,
			onMouseDown: o("WAWebStopEvent").stopPropagation,
			onFocus: m,
			onBlur: d,
			onKeyDown: S,
			children: [k, D]
		}));
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e, t) {
		t === void 0 && (t = !1);
		var n = _(e), r = n[0], o = n[1], a = _(e), i = a[0], l = a[1];
		return i !== e && !t && (o(e), l(e)), [r, o];
	}
	function T(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.className, l = a.ctwaSourceUrl, s = a.duration, u = a.isFullscreenMode, d = a.isVideoPlaying, f = a.newPiPStyle, g = f === void 0 ? !1 : f, h = a.onClose, y = a.onFullscreenToggle, C = a.onMutedValueChange, S = a.onPause, R = a.onPlay, E = a.onProgressChange, T = a.onVolumeValueChange, D = a.playbackRate, x = D === void 0 ? o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE : D, $ = a.onPlaybackRateChange, P = p(null), N = p(null), M = _(!1), w = M[0], A = M[1], F = _(!1), O = F[0], B = F[1], W = _(!1), q = W[0], U = W[1], V = _(!1), H = V[0], G = V[1], z = _(void 0), j = z[0], K = z[1], Q = I(a.muted), X = Q[0], Y = Q[1], J = I(a.volume), Z = J[0], ee = J[1], te = I(a.bufferedTime), ne = te[0], re = te[1], oe = I(a.progress, q), ae = oe[0], ie = oe[1];
		m(function() {
			var e;
			(e = N.current) == null || e.focus();
		}, []);
		var le = function(t) {
			t.preventDefault(), t.stopPropagation(), l != null && o("WAWebExternalLink.react").openExternalLink(l);
		}, se = function() {
			C(!1), Y(!1);
		}, ue = function() {
			C(!0), Y(!0);
		}, ce = function(t) {
			G(!0);
		}, de = function(t) {
			G(!1);
		}, me = function(t) {
			A(!0);
		}, pe = function(t) {
			A(!1);
		}, _e = function() {
			B(!0);
		}, fe = function(t) {
			(t.relatedTarget instanceof Node && !t.currentTarget.contains(t.relatedTarget) || t.relatedTarget == null) && B(!1);
		}, ge = function(t) {
			ee(t), T(t);
		}, he = function(t) {
			U(!0), P.current = d, d && S();
		}, ye = function(t) {
			U(!1), P.current === !0 && R(), P.current = null;
		}, Ce = function(t) {
			E(t);
			var e = Math.abs(ne - s) < .1 ? ne : 0;
			ie(t), re(e);
		}, be = function(t) {
			Ce(parseFloat(t.target.value));
		}, ve = w || O, Se = ve && !X, Re = u ? c.jsx("div", babelHelpers.extends({}, {
			0: { className: "x11uqc5h xamitd3 xnfjc3l x1c3i2sq xdod15v x1m0knhv x2b8uid x9ek82g x13k8ehh" },
			1: { className: "x11uqc5h xamitd3 xnfjc3l x1c3i2sq xdod15v x1m0knhv x2b8uid x9ek82g x1lziwak" }
		}[!!g << 0], {
			onClick: o("WAWebStopEvent").stopPropagation,
			children: o("WAWebClock").Clock.durationStr(ae)
		})) : null, Le = u ? c.jsx("div", babelHelpers.extends({}, {
			0: { className: "x11uqc5h xamitd3 xnfjc3l x1c3i2sq xdod15v x1m0knhv x2b8uid xo1ph6p x1sa5p1d" },
			1: { className: "x11uqc5h xamitd3 xnfjc3l x1c3i2sq xdod15v x1m0knhv x2b8uid xo1ph6p x3aesyq" }
		}[!!g << 0], {
			onClick: o("WAWebStopEvent").stopPropagation,
			children: o("WAWebClock").Clock.durationStr(s)
		})) : null, Ee = g && Math.ceil(ae) >= s, ke = v({
			isVideoFinished: Ee,
			isVideoPlaying: d,
			onPause: S,
			onPlay: R
		}), Ie;
		g ? Ie = u ? 27 : 24 : Ie = u ? 37 : 32;
		var Te;
		return g && (Te = u ? 32 : 24), c.jsxs("div", {
			ref: n,
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(i, {
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
			}[(i == null) << 3 | !!(i == null && u) << 2 | !!(i == null && g) << 1 | !!(g && u) << 0]),
			children: [
				c.jsx("div", babelHelpers.extends({}, {
					0: { className: "xamitd3 x1g77sc7 x1f7m26b" },
					2: { className: "xamitd3 x1g77sc7 x1f7m26b x1uulv1t x1pe450p" },
					1: { className: "xamitd3 x1g77sc7 x1f7m26b x3aesyq" },
					3: { className: "xamitd3 x1g77sc7 x1f7m26b x1uulv1t x1pe450p x3aesyq" }
				}[!!u << 1 | !!(g && u) << 0], {
					onClick: o("WAWebStopEvent").stopPropagation,
					onMouseDown: o("WAWebStopEvent").stopPropagation,
					onMouseUp: o("WAWebStopEvent").stopPropagation,
					children: c.jsx(r("WAWebSvgButton.react"), {
						ref: N,
						"aria-label": ke.ariaLabel,
						Icon: ke.Icon,
						displayInline: !0,
						width: Ie,
						height: Ie,
						onClick: ke.onClick
					})
				})),
				c.jsx(L, {
					progress: a.progress,
					duration: s,
					bufferedTime: ne,
					isFullscreenMode: u,
					isMouseOverProgressBar: H,
					mouseOverProgressRatio: j,
					onChange: be,
					onSeekTo: Ce,
					onMouseDown: he,
					onMouseUp: ye,
					onMouseEnter: ce,
					onMouseLeave: de,
					onMouseOverProgressRatioChange: K
				}),
				o("WAWebMediaGatingUtils").isVideoPlaybackSpeedEnabled() && $ != null ? c.jsx("div", {
					className: "xamitd3 x2fvf9 x182iqb8",
					onClick: o("WAWebStopEvent").stopPropagation,
					onMouseDown: o("WAWebStopEvent").stopPropagation,
					children: c.jsx(r("WAWebVideoPlaybackSpeedButton.react"), {
						playbackRate: x,
						onClick: $
					})
				}) : null,
				c.jsx(k, {
					muted: X,
					volume: Z,
					defaultValume: a.volume,
					onUnmute: se,
					onMute: ue,
					onVolumeValueChange: ge,
					isVolumeControlActive: ve,
					isFullscreenMode: u,
					newPiPStyle: g,
					onFocus: _e,
					onBlur: fe,
					onMouseEnter: me,
					onMouseLeave: pe,
					disableAudioControls: a.disableAudioControls
				}),
				Re,
				Le,
				y != null ? c.jsx("div", babelHelpers.extends({}, {
					0: { className: "xamitd3 x1hrcb2b x13fj5qh" },
					1: { className: "xamitd3 x1hrcb2b x13fj5qh x3aesyq" }
				}[!!(g && u) << 0], { children: c.jsx(r("WAWebPipFullscreenToggleButton.react"), {
					isFullscreenMode: u,
					onClick: y,
					isStatic: !0,
					iconSize: g ? 24 : void 0
				}) })) : null,
				h != null ? c.jsx("div", babelHelpers.extends({}, {
					0: { className: "xamitd3 x1esxh7v x13fj5qh" },
					1: { className: "xamitd3 x1esxh7v x13fj5qh x3aesyq" }
				}[!!(g && u) << 0], { children: c.jsx(r("WAWebPipCloseButton.react"), {
					isFullscreenMode: u,
					onClick: h,
					isStatic: !0,
					iconSize: Te
				}) })) : null,
				!Se && l != null ? c.jsx(r("WAWebPipCtwaSourceButton.react"), {
					isFullscreenMode: u,
					onClick: le,
					isInstagram: b(l) === o("WAWebPipConst").HOSTNAME.INSTAGRAM,
					iconSize: g ? 24 : void 0
				}) : null
			]
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = T;
}), 226);
