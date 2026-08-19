__d("WAWebPasswordInput.story", ["WAWebPasswordInput.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebPasswordInput",
		component: r("WAWebPasswordInput.react"),
		description: "Password input component.",
		examples: [
			{
				example: function() {
					return s.jsx(r("WAWebPasswordInput.react"), {});
				},
				title: "Simple Example",
				description: "Simple usage of PasswordInput."
			},
			{
				example: function() {
					return s.jsx(r("WAWebPasswordInput.react"), { placeholder: "Placeholder text" });
				},
				title: "Placeholder text example."
			},
			{
				example: function() {
					return s.jsx(r("WAWebPasswordInput.react"), {
						placeholder: "Placeholder text",
						focusOnMount: !0
					});
				},
				title: "Focus on mount password input example."
			},
			{
				example: function() {
					return s.jsx(r("WAWebPasswordInput.react"), {
						placeholder: "Placeholder text",
						enableShowPassword: !0
					});
				},
				title: "With password input with show password example."
			}
		]
	};
	l.default = u;
}), 98);
