__d("WAWebImagineVideoGenerating.react", [
	"WATimeUtils",
	"WAWebMediaGenerationFailedContent.react",
	"WAWebMediaHubLoadingSkeletons.react",
	"WAWebMessageCropping",
	"WAWebMsgGetters",
	"WAWebProgressRing.react",
	"react",
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
		var n = t.msgId, a = o("useWAWebMsgValues").useMsgValues(n, [o("WAWebMsgGetters").getT]), i = a[0], l = m(function() {
			return o("WATimeUtils").unixTime();
		}), s = l[0], c = l[1], S = Math.max(0, s - i), R = S >= f, L = Math.min(h, S / g * 100), E = r("useWAWebInterval")(function() {
			return c(o("WATimeUtils").unixTime());
		}, y, { immediate: !0 }), k = E[1];
		d(function() {
			R && k();
		}, [R, k]);
		var I = p / _;
		return u.jsx("div", babelHelpers.extends({ "data-testid": "bot_imagine_video_generating" }, (e || (e = r("stylex"))).props(v.container, v.containerHeight(I)), { children: R ? u.jsx(r("WAWebMediaGenerationFailedContent.react"), { isVideo: !0 }) : u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebMediaHubLoadingSkeletons.react").WAWebMediaHubLoadingText, {
			width: p,
			height: I
		}), u.jsx("div", {
			className: "x6s0dn4 x1ey2m1c x78zum5 x1o0tod xtijo5x xl56j7k x10l6tqk x13vifvy",
			children: u.jsx(r("WAWebProgressRing.react"), {
				percentage: L,
				size: C,
				stroke: b,
				textType: "Body3Emphasized",
				labelTestid: "bot_imagine_video_progress_label"
			})
		})] }) }));
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 98);
