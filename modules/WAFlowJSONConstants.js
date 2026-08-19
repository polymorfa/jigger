__d("WAFlowJSONConstants", ["$InternalEnum"], (function(t, n, r, o, a, i) {
	"use strict";
	var e, l = Object.freeze({
		CHECKBOX_GROUP: "CheckboxGroup",
		DATE_PICKER: "DatePicker",
		DROPDOWN: "Dropdown",
		EMBEDDED_LINK: "EmbeddedLink",
		FOOTER: "Footer",
		FORM: "Form",
		IMAGE: "Image",
		OPT_IN: "OptIn",
		RADIO_BUTTONS_GROUP: "RadioButtonsGroup",
		TEXT_AREA: "TextArea",
		TEXT_BODY: "TextBody",
		TEXT_CAPTION: "TextCaption",
		TEXT_HEADING: "TextHeading",
		TEXT_INPUT: "TextInput",
		TEXT_SUBHEADING: "TextSubheading",
		IF: "If",
		SWITCH: "Switch",
		DOCUMENT_PICKER: "DocumentPicker",
		PHOTO_PICKER: "PhotoPicker",
		RICH_TEXT: "RichText",
		CALENDAR_PICKER: "CalendarPicker",
		NAVIGATION_LIST: "NavigationList",
		CHIPS_SELECTOR: "ChipsSelector",
		IMAGE_CAROUSEL: "ImageCarousel"
	}), s = (e = n("$InternalEnum")).Mirrored([
		"PUBLISHED",
		"PUBLISHED_WITH_DISABLED_FUNCTIONALITY",
		"NOT_AVAILABLE",
		"UNDER_DEV"
	]), u = Object.freeze({
		DATA_EXCHANGE: "data_exchange",
		NAVIGATE: "navigate",
		COMPLETE: "complete",
		UPDATE_DATA: "update_data",
		OPEN_URL: "open_url"
	}), c = e({
		ARRAY: "array",
		BOOLEAN: "boolean",
		DATA: "data",
		FORM: "form",
		INTEGER: "integer",
		INVALID_TYPE: "invalid_type",
		NUMBER: "number",
		OBJECT: "object",
		STRING: "string",
		NULL: "null",
		UNKNOWN: "unknown"
	}), d = "http://json-schema.org/draft-07/schema", m = "WhatsApp Flows Template Schema", p = "The JSON schema describing WhatsApp Flows templates.", _ = "^[a-zA-Z,_]+$", f = "^(?!_+$)[a-zA-Z_]+$", g = "^(?!required).*$", h = "^required$", y = "${", C = y + "screen.", b = y + "data.", v = y + "form.", S = "}", R = /^\d+$/, L = "type", E = "array", k = "object", I = "string", T = "integer", D = "number", x = "boolean", $ = "base64", P = "externalDataSource", N = "^\\$\\{(screen\\.([a-zA-Z,_]*)\\.)?data\\..+\\}$", M = {
		EmbeddedLink: 2,
		Footer: 1,
		Image: 3,
		OptIn: 5,
		PhotoPicker: 1,
		DocumentPicker: 1,
		NavigationList: 2,
		ImageCarousel: 2
	}, w = babelHelpers.extends({}, M, { Form: 1 }), A = new Map([
		[l.CHECKBOX_GROUP, ["min-selected-items", "max-selected-items"]],
		[l.TEXT_INPUT, ["min-chars", "max-chars"]],
		[l.PHOTO_PICKER, ["min-uploaded-photos", "max-uploaded-photos"]],
		[l.DOCUMENT_PICKER, ["min-uploaded-documents", "max-uploaded-documents"]]
	]), F = "layout", O = "screens", B = "terminal", W = "version", q = "id", U = "title", V = "layout", H = "data_api_version", G = "data_channel_uri", z = "routing_model", j = "uri", K = "data", Q = "$root", X = "refresh_on_back", Y = "#/$defs/$components/", J = "$ref", Z = "success", ee = "on-click-action", te = "on-cta-click-action", ne = "on-select-action", re = "on-unselect-action", oe = "payload", ae = "next", ie = "text", le = "label", se = ["large"], ue = "name", ce = "screen", de = "data-source", me = "list-items", pe = "children", _e = "then", fe = "else", ge = "condition", he = "items", ye = "url", Ce = "visible", be = "font-weight", ve = "strikethrough", Se = "markdown", Re = "required", Le = "max-length", Ee = "helper-text", ke = "enabled", Ie = "init-value", Te = "error-message", De = "input-type", xe = "min-chars", $e = "max-chars", Pe = "min-selected-items", Ne = "max-selected-items", Me = "media-size", we = "description", Ae = "metadata", Fe = "color", Oe = "alt-text", Be = "image", We = "src", qe = "width", Ue = "height", Ve = "aspect-ratio", He = "scale-type", Ge = "left-caption", ze = "right-caption", je = "center-caption", Ke = "min-date", Qe = "max-date", Xe = "unavailable-dates", Ye = "photo-source", Je = "max-file-size-kb", Ze = "max-uploaded-photos", et = "min-uploaded-photos", tt = "max-uploaded-documents", nt = "min-uploaded-documents", rt = "allowed-mime-types", ot = "value", at = "cases", it = "init-values", lt = "error-messages", st = "pattern", ut = "__example__", ct = "properties", dt = "mode", mt = "include-days", pt = "min-days", _t = "max-days", ft = "regex", gt = e({
		CBG: "$checkbox_group",
		CBG_NO_FORM: "$checkbox_group_no_form",
		EMBEDDED_LINK: "$embedded_link",
		TEXT_INPUT: "$text_input",
		TEXT_INPUT_NO_FORM: "$text_input_no_form",
		TEXT_AREA: "$text_area",
		TEXT_AREA_NO_FORM: "$text_area_no_form",
		TEXT_BODY: "$text_body",
		TEXT_CAPTION: "$text_caption",
		TEXT_HEADING: "$text_heading",
		TEXT_SUBHEADING: "$text_subheading",
		OPTIN: "$optin",
		OPTIN_NO_FORM: "$optin_no_form",
		RBG: "$radio_buttons_group",
		RBG_NO_FORM: "$radio_buttons_group_no_form",
		DROPDOWN: "$dropdown",
		DROPDOWN_NO_FORM: "$dropdown_no_form",
		DATE_PICKER: "$date_picker",
		DATE_PICKER_NO_FORM: "$date_picker_no_form",
		SWITCH: "$switch",
		SWITCH_NO_FORM: "$switch_no_form",
		IF: "$if",
		IF_NO_FORM: "$if_no_form",
		PHOTO_PICKER: "$photo_picker",
		PHOTO_PICKER_NO_FORM: "$photo_picker_no_form",
		DOCUMENT_PICKER: "$document_picker",
		DOCUMENT_PICKER_NO_FORM: "$document_picker_no_form",
		IMAGE: "$image",
		FOOTER: "$footer",
		FORM: "$form",
		RICH_TEXT: "$rich_text",
		CALENDAR_PICKER: "$calendar_picker",
		CALENDAR_PICKER_NO_FORM: "$calendar_picker_no_form",
		NAVIGATION_LIST: "$navigation_list",
		CHIPS_SELECTOR: "$chips_selector",
		CHIPS_SELECTOR_NO_FORM: "$chips_selector_no_form",
		IMAGE_CAROUSEL: "$image_carousel"
	}), ht = e({
		DATA: "data",
		FORM: "form"
	}), yt = {
		type: "array",
		items: {
			type: "object",
			properties: {
				media_id: { type: "string" },
				cdn_url: { type: "string" },
				encryption_metadata: {
					type: "object",
					properties: {
						hmac: { type: "string" },
						iv: { type: "string" },
						encryption_key: { type: "string" },
						hmac_key: { type: "string" },
						plaintext_hash: { type: "string" }
					}
				}
			}
		}
	}, Ct = e({
		ID: "id",
		TITLE: "title"
	}), bt = 1024 * 1024;
	i.WA_FLOW_JSON_COMPONENT_TYPE = l, i.WAFlowVersionStates = s, i.WAFlowsActionType = u, i.WAFlowsDataType = c, i.WA_FLOW_JSON_SCHEMA_SPECIFICATION = d, i.WA_FLOW_JSON_SCHEMA_TITLE = m, i.WA_FLOW_JSON_SCHEMA_DESCRIPTION = p, i.WA_FLOW_JSON_SCREEN_ID_PATTERN = _, i.WA_FLOW_JSON_SCREEN_ID_PATTERN_V700 = f, i.WA_FLOW_JSON_DATA_BINDING_PATTERN = g, i.WA_FLOW_JSON_REQUIRED_PATTERN = h, i.DYNAMIC_DATA_PREFIX = y, i.GLOBAL_DYNAMIC_DATA_PREFIX = C, i.DYNAMIC_BINDING_PREFIX = b, i.FORM_BINDING_PREFIX = v, i.DYNAMIC_DATA_SUFFIX = S, i.ALL_DIGITS_PATTERN = R, i.WA_FLOW_JSON_SCHEMA_TYPE = L, i.WA_FLOW_JSON_SCHEMA_ARRAY = E, i.WA_FLOW_JSON_SCHEMA_OBJECT = k, i.WA_FLOW_JSON_SCHEMA_STRING = I, i.WA_FLOW_JSON_SCHEMA_INTEGER = T, i.WA_FLOW_JSON_SCHEMA_NUMBER = D, i.WA_FLOW_JSON_SCHEMA_BOOLEAN = x, i.WA_FLOW_JSON_SCHEMA_BASE64 = $, i.WA_SHOPPING_FLOW_JSON_KEYWORD_EXTERNAL_DATA_SOURCE = P, i.WA_FLOWS_PRODUCT_ID_PATTERN = N, i.SCREEN_COMPONENT_MAX_COUNT = M, i.SCREEN_COMPONENT_MAX_COUNT_V700 = w, i.componentsToMinMaxPropertiesV400 = A, i.WA_FLOW_JSON_PROPERTY_LAYOUT = F, i.WA_FLOW_JSON_SCREENS = O, i.WA_FLOW_JSON_TERMINAL = B, i.WA_FLOW_JSON_VERSION = W, i.WA_FLOW_JSON_ID = q, i.WA_FLOW_JSON_TITLE = U, i.WA_FLOW_JSON_LAYOUT = V, i.WA_FLOW_JSON_DATA_API_VERSION = H, i.WA_FLOW_JSON_DATA_CHANNEL_URI = G, i.WA_FLOW_JSON_ROUTING_MODEL = z, i.WA_FLOW_JSON_SCHEMA_URI = j, i.WA_FLOW_JSON_DATA = K, i.WA_FLOW_JSON_DATA_POINTER_ROOT = Q, i.WA_FLOW_JSON_REFRESH_ON_BACK = X, i.JSON_SCHEMA_REF_PREFIX = Y, i.JSON_SCHEMA_REF = J, i.WA_FLOW_JSON_PROPERTY_SUCCESS = Z, i.WA_FLOW_JSON_ON_CLICK_ACTION = ee, i.WA_FLOW_JSON_ON_CTA_CLICK_ACTION = te, i.WA_FLOW_JSON_ON_SELECT_ACTION = ne, i.WA_FLOW_JSON_ON_UNSELECT_ACTION = re, i.WA_FLOW_JSON_SCHEMA_PAYLOAD = oe, i.WA_FLOW_JSON_SCHEMA_NEXT = ae, i.WA_FLOW_JSON_SCHEMA_TEXT = ie, i.WA_FLOW_JSON_SCHEMA_LABEL = le, i.WA_FLOW_JSON_SCHEMA_LABEL_VARIANT_VALUES = se, i.WA_FLOW_JSON_SCHEMA_NAME = ue, i.WA_FLOW_JSON_SCHEMA_SCREEN = ce, i.WA_FLOW_JSON_SCHEMA_DATA_SOURCE = de, i.WA_FLOW_JSON_SCHEMA_LIST_ITEMS = me, i.WA_FLOW_JSON_SCHEMA_CHILDREN = pe, i.WA_FLOW_JSON_SCHEMA_THEN = _e, i.WA_FLOW_JSON_SCHEMA_ELSE = fe, i.WA_FLOW_JSON_SCHEMA_CONDITION = ge, i.WA_FLOW_JSON_ITEMS_PROPERTY = he, i.WA_FLOW_JSON_SCHEMA_URL = ye, i.WA_FLOW_JSON_SCHEMA_VISIBLE = Ce, i.WA_FLOW_JSON_SCHEMA_FONT_WEIGHT = be, i.WA_FLOW_JSON_SCHEMA_STRIKETHROUGH = ve, i.WA_FLOW_JSON_SCHEMA_MARKDOWN = Se, i.WA_FLOW_JSON_SCHEMA_REQUIRED = Re, i.WA_FLOW_JSON_SCHEMA_MAX_LENGTH = Le, i.WA_FLOW_JSON_SCHEMA_HELPER_TEXT = Ee, i.WA_FLOW_JSON_SCHEMA_ENABLED = ke, i.WA_FLOW_JSON_SCHEMA_INIT_VALUE = Ie, i.WA_FLOW_JSON_SCHEMA_ERROR_MESSAGE = Te, i.WA_FLOW_JSON_SCHEMA_INPUT_TYPE = De, i.WA_FLOW_JSON_SCHEMA_MIN_CHARS = xe, i.WA_FLOW_JSON_SCHEMA_MAX_CHARS = $e, i.WA_FLOW_JSON_SCHEMA_MIN_SELECTED_ITEMS = Pe, i.WA_FLOW_JSON_SCHEMA_MAX_SELECTED_ITEMS = Ne, i.WA_FLOW_JSON_SCHEMA_MEDIA_SIZE = Me, i.WA_FLOW_JSON_SCHEMA_DESCRIPTION_PROP = we, i.WA_FLOW_JSON_SCHEMA_METADATA = Ae, i.WA_FLOW_JSON_SCHEMA_COLOR = Fe, i.WA_FLOW_JSON_SCHEMA_ALT_TEXT = Oe, i.WA_FLOW_JSON_SCHEMA_IMAGE = Be, i.WA_FLOW_JSON_SCHEMA_SRC = We, i.WA_FLOW_JSON_SCHEMA_WIDTH = qe, i.WA_FLOW_JSON_SCHEMA_HEIGHT = Ue, i.WA_FLOW_JSON_SCHEMA_ASPECT_RATIO = Ve, i.WA_FLOW_JSON_SCHEMA_SCALE_TYPE = He, i.WA_FLOW_JSON_SCHEMA_LEFT_CAPTION = Ge, i.WA_FLOW_JSON_SCHEMA_RIGHT_CAPTION = ze, i.WA_FLOW_JSON_SCHEMA_CENTER_CAPTION = je, i.WA_FLOW_JSON_SCHEMA_MIN_DATE = Ke, i.WA_FLOW_JSON_SCHEMA_MAX_DATE = Qe, i.WA_FLOW_JSON_SCHEMA_UNAVAILABLE_DATES = Xe, i.WA_FLOW_JSON_SCHEMA_PHOTO_SOURCE = Ye, i.WA_FLOW_JSON_SCHEMA_MAX_FILE_SIZE_KB = Je, i.WA_FLOW_JSON_SCHEMA_MAX_UPLOADED_PHOTOS = Ze, i.WA_FLOW_JSON_SCHEMA_MIN_UPLOADED_PHOTOS = et, i.WA_FLOW_JSON_SCHEMA_MAX_UPLOADED_DOCUMENTS = tt, i.WA_FLOW_JSON_SCHEMA_MIN_UPLOADED_DOCUMENTS = nt, i.WA_FLOW_JSON_SCHEMA_ALLOWED_MIME_TYPES = rt, i.WA_FLOW_JSON_SCHEMA_VALUE = ot, i.WA_FLOW_JSON_SCHEMA_CASES = at, i.WA_FLOW_JSON_SCHEMA_INIT_VALUES = it, i.WA_FLOW_JSON_SCHEMA_ERROR_MESSAGES = lt, i.WA_FLOW_JSON_SCHEMA_PATTERN = st, i.WA_FLOW_JSON_SCHEMA_EXAMPLE = ut, i.WA_FLOW_JSON_SCHEMA_PROPERTIES = ct, i.WA_FLOW_JSON_SCHEMA_MODE = dt, i.WA_FLOW_JSON_SCHEMA_INCLUDE_DAYS = mt, i.WA_FLOW_JSON_SCHEMA_MIN_DAYS = pt, i.WA_FLOW_JSON_SCHEMA_MAX_DAYS = _t, i.WA_FLOW_JSON_SCHEMA_REGEX = ft, i.ComponentRefKey = gt, i.WAFlowsDataStoreType = ht, i.NATIVE_COMPONENTS_SCHEMA = yt, i.WAFlowJSONRequiredDataSourceAttributes = Ct, i.BYTES_IN_A_MEGABYTE = bt;
}), 66);
