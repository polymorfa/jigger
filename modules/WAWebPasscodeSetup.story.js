__d("WAWebPasscodeSetup.story", [
	"WAWebButton.react",
	"WAWebModalManager",
	"WAWebPasscodeSetup.react",
	"WAWebShowroomUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebPasscodeSetup",
		component: r("WAWebPasscodeSetup.react"),
		description: "Passcode setup component for the web app lock that has validations.",
		examples: [{
			example: function() {
				return s.jsx(o("WAWebButton.react").Button, {
					type: "primary",
					onClick: function() {
						return o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebPasscodeSetup.react"), { onSubmit: function() {
							return o("WAWebShowroomUtils").showroomAlert("Valid passcode!");
						} }));
					},
					children: "Open Passcode Setup"
				});
			},
			title: "Basic PasscodeSetup Example",
			description: "Example of a passcode setup component with validation messages."
		}]
	};
	l.default = u;
}), 98);
