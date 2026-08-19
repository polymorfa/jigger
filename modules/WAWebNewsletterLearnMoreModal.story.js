__d("WAWebNewsletterLearnMoreModal.story", [
	"WAWebButton.react",
	"WAWebCommonNewsletterEnums",
	"WAWebModalManager",
	"WAWebNewsletterDSAModals.react",
	"WAWebNewsletterLearnMoreModal.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebNewsletterLearnMoreModal",
		component: r("WAWebNewsletterLearnMoreModal.react"),
		description: "All of Newsletter DSA Learn More Modals",
		examples: [
			{
				example: function() {
					return s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
						onClick: function() {
							o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterDSAModals.react").NewsletterDSAGuidelinesModal, {}));
						},
						children: "Open DSA Guidelines Modal"
					});
				},
				title: "DSA Guidelines Modal"
			},
			{
				example: function() {
					return s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
						onClick: function() {
							o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterDSAModals.react").NewsletterDSADecisionModal, { DSADecisionModalCategory: o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.GENERIC_VIOLATION }));
						},
						children: "Open DSA Decision Modal"
					});
				},
				title: "DSA Decision Modal generic violation"
			},
			{
				example: function() {
					return s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
						onClick: function() {
							o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterDSAModals.react").NewsletterDSADecisionModal, { DSADecisionModalCategory: o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.IP_SRT_VIOLATION }));
						},
						children: "Open DSA Decision Modal"
					});
				},
				title: "DSA Decision Modal IP violation"
			},
			{
				example: function() {
					return s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
						onClick: function() {
							o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterDSAModals.react").NewsletterDSAEUNoticeModal, {}));
						},
						children: "Open DSA EU Notice Modal"
					});
				},
				title: "DSA EU Notice Modal"
			}
		]
	};
	l.default = u;
}), 98);
