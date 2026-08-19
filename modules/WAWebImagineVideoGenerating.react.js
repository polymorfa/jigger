__d("WAWebImagineVideoGenerating.react", [
	"WATimeUtils",
	"WAWebMediaGenerationFailedContent.react",
	"WAWebMediaHubLoadingSkeletons.react",
	"WAWebMessageCropping",
	"WAWebMsgGetters",
	"WAWebProgressRing.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebInterval",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useState, p = o("WAWebMessageCropping").IMAGINE_UR_WIDTH - 6, _ = 9 / 16, f = o("WATimeUtils").MINUTE_SECONDS * 2, g = 60, h = 99, y = 1e3, C = 40, b = 3, v = {
		container: {
			borderStartStartRadius: "x1i282gy",
			borderStartEndRadius: "xx9ypkp",
			borderEndEndRadius: "xd15eu0",
			borderEndStartRadius: "x11ecxm0",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x1n2onr6",
			width: "xh8yej3",
			$$css: !0
		},
		containerHeight: function(t) {
			return [{
				height: t != null ? "x16ye13r" : t,
				$$css: !0
			}, { "--x-height": (function(e) {
				return typeof e == "number" ? e + "px" : e != null ? e : void 0;
			})(t) }];
		}
	};
	function S(t) {
		var n = o("react-compiler-runtime").c(11), a = t.msgId, i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [o("WAWebMsgGetters").getT], n[0] = i) : i = n[0];
		var l = o("useWAWebMsgValues").useMsgValues(a, i), s = l[0], c = m(R), S = c[0], L = c[1], E = Math.max(0, S - s), k = E >= f, I = Math.min(h, E / g * 100), T;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (T = function() {
			return L(o("WATimeUtils").unixTime());
		}, n[1] = T) : T = n[1];
		var D;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (D = { immediate: !0 }, n[2] = D) : D = n[2];
		var x = r("useWAWebInterval")(T, y, D), $ = x[1], P, N;
		n[3] !== $ || n[4] !== k ? (P = function() {
			k && $();
		}, N = [k, $], n[3] = $, n[4] = k, n[5] = P, n[6] = N) : (P = n[5], N = n[6]), d(P, N);
		var M = p / _, w;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (w = (e || (e = r("stylex"))).props(v.container, v.containerHeight(M)), n[7] = w) : w = n[7];
		var A;
		return n[8] !== k || n[9] !== I ? (A = u.jsx("div", babelHelpers.extends({ "data-testid": "bot_imagine_video_generating" }, w, { children: k ? u.jsx(r("WAWebMediaGenerationFailedContent.react"), { isVideo: !0 }) : u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebMediaHubLoadingSkeletons.react").WAWebMediaHubLoadingText, {
			width: p,
			height: M
		}), u.jsx("div", {
			className: "x6s0dn4 x1ey2m1c x78zum5 x1o0tod xtijo5x xl56j7k x10l6tqk x13vifvy",
			children: u.jsx(r("WAWebProgressRing.react"), {
				percentage: I,
				size: C,
				stroke: b,
				textType: "Body3Emphasized",
				labelTestid: "bot_imagine_video_progress_label"
			})
		})] }) })), n[8] = k, n[9] = I, n[10] = A) : A = n[10], A;
	}
	function R() {
		return o("WATimeUtils").unixTime();
	}
	l.default = S;
}), 98);
