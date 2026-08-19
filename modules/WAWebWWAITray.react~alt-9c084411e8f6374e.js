__d("WAWebWWAITray.react", [
	"fbt",
	"WAWebUseWWAIToneConfig",
	"WAWebWWAIEmptyState.react",
	"WAWebWWAIErrorState.react",
	"WAWebWWAIPrivateProcessingBadge.react",
	"WAWebWWAISuggestionList.react",
	"WAWebWWAIToneSelector.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = "x1uknk9t-B";
	function m(e) {
		var t = e.api, n = e.getComposeText, a = e.onAcceptSuggestion, i = e.onClose, l = o("WAWebUseWWAIToneConfig").useWWAIToneConfig(), d = t.state, m = c(function(e) {
			t.changeTone(n(), e);
		}, [t, n]), _ = c(function(e) {
			t.selectSuggestion(e), a == null || a(e.text);
		}, [t, a]), f = c(function() {
			t.changeTone(n(), d.activeTone);
		}, [
			t,
			n,
			d.activeTone
		]);
		return u.jsxs(u.Fragment, { children: [u.jsx("div", {
			className: "xixxii4 x13vifvy x1o0tod xtijo5x x1ey2m1c xhtitgo",
			onMouseDown: i,
			role: "none"
		}), u.jsxs("section", {
			className: "x1n2onr6 xzkaem6 x78zum5 xdt5ytf x8a3fw1 x1p57kb1 xvpt6g3 xdx6fka xvtqlqk x1vd4hg5 x6ikm8r x10wlt62 x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 xkfubxc x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 xhpbw76 x5hsz1j xa3vuyk x1u6ievf",
			"data-testid": "wwai_tray",
			"aria-label": s._(
				/*BTDS*/
				""
			).toString(),
			children: [
				u.jsxs("div", {
					className: "x78zum5 x1q0g3np x1qughib x6s0dn4",
					"data-testid": "wwai_tray_header",
					children: [u.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsx(r("WAWebWWAIPrivateProcessingBadge.react"), {})]
				}),
				u.jsx(r("WAWebWWAIToneSelector.react"), {
					activeTone: d.activeTone,
					onToneChange: m,
					tones: l
				}),
				u.jsx("div", {
					className: "x1iyjqo2 x1odjw0f x2lwn1j",
					children: u.jsx(p, {
						onRetry: f,
						onSelectSuggestion: _,
						state: d
					})
				})
			]
		})] });
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.onRetry, n = e.onSelectSuggestion, o = e.state;
		if (o.state === "error") {
			var a;
			return u.jsx(r("WAWebWWAIErrorState.react"), {
				errorType: (a = o.error) != null ? a : "unknown",
				onRetry: t
			});
		}
		return o.state === "empty" ? u.jsx(r("WAWebWWAIEmptyState.react"), {}) : u.jsx(r("WAWebWWAISuggestionList.react"), {
			isLoading: o.state === "loading",
			onSelectSuggestion: n,
			suggestions: o.suggestions
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);
