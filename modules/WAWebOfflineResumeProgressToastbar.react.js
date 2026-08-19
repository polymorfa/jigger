__d("WAWebOfflineResumeProgressToastbar.react", [
	"fbt",
	"WAWebBox.react",
	"WAWebCmd",
	"WAWebFlex.react",
	"WAWebOfflineHandler",
	"WAWebProgressBar.react",
	"WAWebText.react",
	"WAWebToastbar.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		wrapper: {
			minHeight: "x122xwht",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		progressWrapper: {
			position: "x10l6tqk",
			width: "xh8yej3",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			display: "x78zum5",
			$$css: !0
		},
		textWrapper: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		textTitle: {
			fontSize: "x1pg5gke",
			$$css: !0
		},
		textProgress: {
			fontSize: "x1ncwhqj",
			$$css: !0
		},
		progressBar: {
			backgroundColor: "x1280gxy",
			height: "x36qwtl",
			$$css: !0
		}
	};
	function d() {
		var e = o("react-compiler-runtime").c(11), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], e[0] = t) : t = e[0];
		var n = r("useWAWebEventTargetValue")(o("WAWebCmd").Cmd, "offline_progress_update_from_bridge", m, t), a = n[0], i = n[1], l;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (l = [o("WDSPaddings.stylex").wdsPaddings.padding0, c.wrapper], e[1] = l) : l = e[1];
		var d;
		e[2] !== a ? (d = u.jsx(r("WAWebBox.react"), {
			xstyle: c.progressWrapper,
			children: u.jsx(r("WAWebProgressBar.react"), {
				value: a,
				xstyle: c.progressBar
			})
		}), e[2] = a, e[3] = d) : d = e[3];
		var p;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: c.textTitle,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[4] = p) : p = e[4];
		var _;
		e[5] !== i || e[6] !== a ? (_ = u.jsxs(o("WAWebFlex.react").FlexItem, {
			xstyle: c.textWrapper,
			children: [p, u.jsx(o("WAWebText.react").WAWebTextSmall, {
				xstyle: c.textProgress,
				children: s._(
					/*BTDS*/
					"",
					[
						s._param("processed-messages", Math.floor(a / 100 * i), [0]),
						s._param("total-messages", i, [0]),
						s._plural(i)
					]
				)
			})]
		}), e[5] = i, e[6] = a, e[7] = _) : _ = e[7];
		var f;
		return e[8] !== d || e[9] !== _ ? (f = u.jsxs(r("WAWebToastbar.react"), {
			wrapperXstyle: l,
			children: [d, _]
		}), e[8] = d, e[9] = _, e[10] = f) : f = e[10], f;
	}
	function m() {
		return [o("WAWebOfflineHandler").OfflineMessageHandler.getOfflineDeliveryProgress(), o("WAWebOfflineHandler").OfflineMessageHandler.getOfflineMessageCount()];
	}
	l.default = d;
}), 226);
