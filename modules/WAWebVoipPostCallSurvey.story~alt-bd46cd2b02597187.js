__d("WAWebVoipPostCallSurvey.story", [
	"WAWebFlex.react",
	"WAWebShowroomStory.react",
	"WAWebVoipPostCallSurvey.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = {
		storyName: "WAWebVoipPostCallSurvey",
		section: o("WAWebShowroomStory.react").StorySectionType.OTHER,
		component: r("WAWebVoipPostCallSurvey.react"),
		description: "Post-call survey component that asks users to rate their call quality with a 5-star rating system.",
		examples: [{
			example: d,
			title: "Post Call Survey (star rating, submit, dismiss)"
		}]
	};
	function d() {
		var e = u("None"), t = e[0], n = e[1];
		function a() {
			n("Survey dismissed");
		}
		function i(e) {
			n("Survey submitted with rating: " + e);
		}
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 16,
			testid: "voip-post-call-survey-container",
			children: [s.jsx(o("WAWebFlex.react").FlexItem, { children: s.jsx("div", {
				className: "x1c7u0tx xyi3aci xwf5gio x1p453bz x1suzm8a xyamay9 xv54qhq x1l90r2v xf7dkkf x1htk8sl x1lpwdgh",
				children: s.jsx(r("WAWebVoipPostCallSurvey.react"), {
					onDismiss: a,
					onSubmit: i
				})
			}) }), s.jsxs("div", {
				className: "xhslqc4 x1pg5gke x1xmf6yo",
				"data-testid": "last-action",
				children: ["Last action: ", t]
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 98);
