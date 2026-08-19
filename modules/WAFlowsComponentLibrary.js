__d("WAFlowsComponentLibrary", [
	"invariant",
	"Promise",
	"WAFlowsCalendarPicker.react",
	"WAFlowsCheckboxGroup.react",
	"WAFlowsChipsSelector.react",
	"WAFlowsComponentToVersion.react",
	"WAFlowsDocumentPicker.react",
	"WAFlowsDropdown.react",
	"WAFlowsEmbeddedLink.react",
	"WAFlowsFooter.react",
	"WAFlowsForm.react",
	"WAFlowsHorizontalDivider.react",
	"WAFlowsIf.react",
	"WAFlowsImage.react",
	"WAFlowsImageCarousel.react",
	"WAFlowsItemDetailFooter.react",
	"WAFlowsNavigationList.react",
	"WAFlowsOptIn.react",
	"WAFlowsPhotoPicker.react",
	"WAFlowsRadioButtonsGroup.react",
	"WAFlowsResponseView.react",
	"WAFlowsRichText.react",
	"WAFlowsSwitch.react",
	"WAFlowsText.react",
	"WAFlowsTextArea.react",
	"WAFlowsTextInput.react",
	"WAFlowsTypes"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = function(t, n) {
		var e, r, a, i = (e = {}, e[(r = o("WAFlowsTypes")).WA_FLOWS_COMPONENT_NAMES.TEXT_BODY] = {
			Component: (a = o("WAFlowsText.react")).WAFlowsTextBody,
			TYPE: a.TEXT_BODY_TYPE,
			SCHEMA: a.TEXT_BODY_SCHEMA
		}, e[r.WA_FLOWS_COMPONENT_NAMES.TEXT_CAPTION] = {
			Component: a.WAFlowsTextCaption,
			TYPE: a.TEXT_CAPTION_TYPE,
			SCHEMA: a.TEXT_CAPTION_SCHEMA
		}, e[r.WA_FLOWS_COMPONENT_NAMES.TEXT_HEADING] = {
			Component: a.WAFlowsTextHeading,
			TYPE: a.TEXT_HEADING_TYPE,
			SCHEMA: a.TEXT_HEADING_SCHEMA
		}, e[r.WA_FLOWS_COMPONENT_NAMES.TEXT_SUBHEADING] = {
			Component: a.WAFlowsTextSubheading,
			TYPE: a.TEXT_SUBHEADING_TYPE,
			SCHEMA: a.TEXT_SUBHEADING_SCHEMA
		}, e), l = i[t];
		if (l != null) return l;
		switch (t) {
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FORM: return {
				Component: o("WAFlowsForm.react").WAFlowsForm,
				TYPE: o("WAFlowsForm.react").TYPE,
				SCHEMA: o("WAFlowsForm.react").SCHEMA
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_INPUT: return {
				Component: o("WAFlowsTextInput.react").WAFlowsTextInput,
				TYPE: o("WAFlowsTextInput.react").TYPE,
				SCHEMA: o("WAFlowsTextInput.react").SCHEMA
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_AREA: return {
				Component: o("WAFlowsTextArea.react").WAFlowsTextArea,
				TYPE: o("WAFlowsTextArea.react").TYPE,
				SCHEMA: o("WAFlowsTextArea.react").SCHEMA
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.DATE_PICKER: return n != null || s(0, 90267), o("WAFlowsComponentToVersion.react").getDatePicker(n);
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RADIOBUTTONS_GROUP: return {
				Component: o("WAFlowsRadioButtonsGroup.react").WAFlowsRadioButtonsGroup,
				TYPE: o("WAFlowsRadioButtonsGroup.react").TYPE,
				SCHEMA: o("WAFlowsRadioButtonsGroup.react").SCHEMA,
				RESPONSE_VIEW: o("WAFlowsRadioButtonsGroup.react").RESPONSE_VIEW
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.DROPDOWN: return {
				Component: o("WAFlowsDropdown.react").WAFlowsDropdown,
				TYPE: o("WAFlowsDropdown.react").TYPE,
				SCHEMA: o("WAFlowsDropdown.react").SCHEMA,
				RESPONSE_VIEW: o("WAFlowsDropdown.react").RESPONSE_VIEW
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHECKBOX_GROUP: return {
				Component: o("WAFlowsCheckboxGroup.react").WAFlowsCheckboxGroup,
				TYPE: o("WAFlowsCheckboxGroup.react").TYPE,
				SCHEMA: o("WAFlowsCheckboxGroup.react").SCHEMA,
				RESPONSE_VIEW: o("WAFlowsCheckboxGroup.react").RESPONSE_VIEW
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FOOTER: return {
				Component: o("WAFlowsFooter.react").WAFlowsFooter,
				TYPE: o("WAFlowsFooter.react").TYPE,
				SCHEMA: o("WAFlowsFooter.react").SCHEMA
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.OPT_IN: return {
				Component: o("WAFlowsOptIn.react").WAFlowsOptIn,
				TYPE: o("WAFlowsOptIn.react").TYPE,
				SCHEMA: o("WAFlowsOptIn.react").SCHEMA,
				RESPONSE_VIEW: o("WAFlowsOptIn.react").RESPONSE_VIEW
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.EMBEDDED_LINK: return {
				Component: o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink,
				TYPE: o("WAFlowsEmbeddedLink.react").TYPE,
				SCHEMA: o("WAFlowsEmbeddedLink.react").SCHEMA
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.IMAGE: return {
				Component: o("WAFlowsImage.react").WAFlowsImage,
				TYPE: o("WAFlowsImage.react").TYPE,
				SCHEMA: o("WAFlowsImage.react").SCHEMA
			};
			case o("WAFlowsItemDetailFooter.react").TYPE: return {
				Component: o("WAFlowsItemDetailFooter.react").WAFlowsItemDetailFooter,
				TYPE: o("WAFlowsItemDetailFooter.react").TYPE
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.PHOTO_PICKER: return {
				Component: o("WAFlowsPhotoPicker.react").WAFlowsPhotoPicker,
				TYPE: o("WAFlowsPhotoPicker.react").TYPE,
				SCHEMA: o("WAFlowsPhotoPicker.react").SCHEMA,
				RESPONSE_VIEW: o("WAFlowsPhotoPicker.react").RESPONSE_VIEW
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.DOCUMENT_PICKER: return {
				Component: o("WAFlowsDocumentPicker.react").WAFlowsDocumentPicker,
				TYPE: o("WAFlowsDocumentPicker.react").TYPE,
				SCHEMA: o("WAFlowsDocumentPicker.react").SCHEMA,
				RESPONSE_VIEW: o("WAFlowsDocumentPicker.react").RESPONSE_VIEW
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.IF: return {
				Component: o("WAFlowsIf.react").WAFlowsIf,
				TYPE: o("WAFlowsIf.react").TYPE,
				SCHEMA: o("WAFlowsIf.react").SCHEMA
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.SWITCH: return {
				Component: o("WAFlowsSwitch.react").WAFlowsSwitch,
				TYPE: o("WAFlowsSwitch.react").TYPE,
				SCHEMA: o("WAFlowsSwitch.react").SCHEMA
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.HORIZONTAL_DIVIDER: return { Component: o("WAFlowsHorizontalDivider.react").WAFlowsHorizontalDivider };
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RICH_TEXT: return {
				Component: o("WAFlowsRichText.react").WAFlowsRichText,
				TYPE: o("WAFlowsRichText.react").TYPE,
				SCHEMA: o("WAFlowsRichText.react").SCHEMA
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST: return {
				Component: o("WAFlowsNavigationList.react").WAFlowsNavigationList,
				TYPE: o("WAFlowsNavigationList.react").TYPE,
				SCHEMA: o("WAFlowsNavigationList.react").SCHEMA
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CALENDAR_PICKER: return {
				Component: o("WAFlowsCalendarPicker.react").WAFlowsCalendarPicker,
				TYPE: o("WAFlowsCalendarPicker.react").TYPE,
				SCHEMA: o("WAFlowsCalendarPicker.react").SCHEMA,
				RESPONSE_VIEW: o("WAFlowsCalendarPicker.react").RESPONSE_VIEW
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHIPS_SELECTOR: return {
				Component: o("WAFlowsChipsSelector.react").WAFlowsChipsSelector,
				TYPE: o("WAFlowsChipsSelector.react").TYPE,
				SCHEMA: o("WAFlowsChipsSelector.react").SCHEMA,
				RESPONSE_VIEW: o("WAFlowsChipsSelector.react").RESPONSE_VIEW
			};
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RESPONSE_VIEW: return { Component: o("WAFlowsResponseView.react").WAFlowsResponseView };
			case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.IMAGE_CAROUSEL: return {
				Component: o("WAFlowsImageCarousel.react").WAFlowsImageCarousel,
				TYPE: o("WAFlowsImageCarousel.react").TYPE,
				SCHEMA: o("WAFlowsImageCarousel.react").SCHEMA
			};
		}
	}, c = function(r, o) {
		return new (e || (e = (n("Promise"))))(function(e) {
			return e(u(r, o));
		});
	};
	l.getComponentDefinition = u, l.getComponentDefinitionLazyLoad = c;
}), 98);
