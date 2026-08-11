/** <iq type="get" xmlns="md">. Replies with one of: MdGetCountryCodeResponseGetCountryCodeResponse, Error. */
export function buildMdGetCountryCode(): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'md', type: 'get' }, content: [
      { tag: 'link_code_companion_reg', attrs: { stage: 'get_country_code' } },
    ] }
}