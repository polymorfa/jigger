/** <iq type="get" xmlns="key_transparency">. Replies with one of: Success, Error. */
export function buildKeyTransparencyMultiSerializedLookup(version?: string): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'key_transparency', to: 's.whatsapp.net', type: 'get' }, content: [
      { tag: 'multi_serialized_lookup', attrs: { version: version } },
      { tag: 'single_serialized_lookup', attrs: {  } }, /* repeated */
    ] }
}